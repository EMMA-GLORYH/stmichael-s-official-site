// src/app/api/admissions/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure email transporter (use your email service)
const transporter = nodemailer.createTransport({
  service: 'gmail', // or 'smtp.gmail.com'
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASSWORD, // your email app password
  },
});

// Validation helper
function validateAdmissionData(data) {
  const errors = [];

  // Student Information validation
  if (!data.studentFirstName?.trim()) errors.push('Student first name is required');
  if (!data.studentLastName?.trim()) errors.push('Student last name is required');
  if (!data.studentDOB) errors.push('Student date of birth is required');
  if (!data.studentGender) errors.push('Student gender is required');
  if (!data.applyingFor) errors.push('Class/level applying for is required');

  // Parent/Guardian validation
  if (!data.parentFirstName?.trim()) errors.push('Parent/Guardian first name is required');
  if (!data.parentLastName?.trim()) errors.push('Parent/Guardian last name is required');
  if (!data.parentEmail?.trim()) errors.push('Parent/Guardian email is required');
  if (!data.parentPhone?.trim()) errors.push('Parent/Guardian phone is required');
  if (!data.parentOccupation?.trim()) errors.push('Parent/Guardian occupation is required');
  if (!data.relationship) errors.push('Relationship to student is required');

  // Contact Details validation
  if (!data.residentialAddress?.trim()) errors.push('Residential address is required');
  if (!data.city?.trim()) errors.push('City is required');
  if (!data.region) errors.push('Region is required');

  // Emergency Contact validation
  if (!data.emergencyName?.trim()) errors.push('Emergency contact name is required');
  if (!data.emergencyPhone?.trim()) errors.push('Emergency contact phone is required');
  if (!data.emergencyRelationship?.trim()) errors.push('Emergency contact relationship is required');

  // Additional Information
  if (!data.howHeard) errors.push('Please tell us how you heard about us');

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (data.parentEmail && !emailRegex.test(data.parentEmail)) {
    errors.push('Invalid email format');
  }

  return errors;
}

// Format date helper
function formatDate(dateString) {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', { 
    day: '2-digit', 
    month: 'long', 
    year: 'numeric' 
  });
}

// Generate application reference number
function generateReferenceNumber() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);
  return `STM-${timestamp}-${random}`;
}

// Send confirmation email to parent
async function sendConfirmationEmail(data, referenceNumber) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: data.parentEmail,
    subject: `Admission Application Received - ${data.studentFirstName} ${data.studentLastName}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .info-box { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #3B82F6; }
          .footer { text-align: center; margin-top: 30px; padding: 20px; color: #666; font-size: 14px; }
          .reference { background: #FEF3C7; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center; }
          .reference strong { color: #92400E; font-size: 18px; }
          table { width: 100%; border-collapse: collapse; margin: 15px 0; }
          td { padding: 10px; border-bottom: 1px solid #e5e7eb; }
          td:first-child { font-weight: bold; color: #4B5563; width: 40%; }
          .button { display: inline-block; padding: 12px 30px; background: #3B82F6; color: white; text-decoration: none; border-radius: 6px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">St. Michael's School</h1>
            <p style="margin: 10px 0 0 0;">Admission Application Received</p>
          </div>
          
          <div class="content">
            <h2 style="color: #1E40AF;">Dear ${data.parentFirstName} ${data.parentLastName},</h2>
            
            <p>Thank you for your interest in St. Michael's School. We have successfully received the admission application for <strong>${data.studentFirstName} ${data.studentLastName}</strong>.</p>
            
            <div class="reference">
              <p style="margin: 0;">Application Reference Number</p>
              <strong>${referenceNumber}</strong>
            </div>
            
            <div class="info-box">
              <h3 style="margin-top: 0; color: #1E40AF;">Application Summary</h3>
              <table>
                <tr>
                  <td>Student Name</td>
                  <td>${data.studentFirstName} ${data.studentLastName}</td>
                </tr>
                <tr>
                  <td>Date of Birth</td>
                  <td>${formatDate(data.studentDOB)}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td style="text-transform: capitalize;">${data.studentGender}</td>
                </tr>
                <tr>
                  <td>Applying For</td>
                  <td style="text-transform: capitalize;">${data.applyingFor?.replace(/-/g, ' ')}</td>
                </tr>
                <tr>
                  <td>Parent/Guardian</td>
                  <td>${data.parentFirstName} ${data.parentLastName}</td>
                </tr>
                <tr>
                  <td>Contact Email</td>
                  <td>${data.parentEmail}</td>
                </tr>
                <tr>
                  <td>Contact Phone</td>
                  <td>${data.parentPhone}</td>
                </tr>
              </table>
            </div>
            
            <div class="info-box">
              <h3 style="margin-top: 0; color: #1E40AF;">Next Steps</h3>
              <ol style="margin: 10px 0; padding-left: 20px;">
                <li><strong>Review Process:</strong> Our admissions team will review your application within 3-5 business days.</li>
                <li><strong>Document Verification:</strong> Please prepare the following documents:
                  <ul style="margin-top: 10px;">
                    <li>Birth certificate (original + photocopy)</li>
                    <li>Previous school report (if applicable)</li>
                    <li>Passport-sized photographs (2 copies)</li>
                    <li>Parent/Guardian ID (photocopy)</li>
                  </ul>
                </li>
                <li><strong>School Visit:</strong> You will be contacted to schedule a school tour and meet with the admissions officer.</li>
                <li><strong>Assessment:</strong> A brief age-appropriate assessment will be conducted for your child.</li>
                <li><strong>Admission Decision:</strong> You will receive our decision via email and phone.</li>
              </ol>
            </div>
            
            <p><strong>Important:</strong> Please keep your reference number <strong>${referenceNumber}</strong> for all future correspondence regarding this application.</p>
            
            <p>If you have any questions or need to provide additional information, please contact our admissions office:</p>
            
            <p style="margin-left: 20px;">
              📞 <strong>Phone:</strong> +233-552-735-903<br>
              📧 <strong>Email:</strong> admissions@stmichaelsschool.edu.gh<br>
              📍 <strong>Location:</strong> Akim Oda, Asawase
            </p>
            
            <a href="https://yourschoolwebsite.com/admissions" class="button">Visit Our Website</a>
          </div>
          
          <div class="footer">
            <p><strong>St. Michael's School</strong></p>
            <p>Excellence in Education | Nurturing Tomorrow's Leaders</p>
            <p style="font-size: 12px; color: #999;">This is an automated message. Please do not reply directly to this email.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
}

// Send notification email to admin
async function sendAdminNotification(data, referenceNumber) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL || 'admissions@stmichaelsschool.edu.gh',
    subject: `New Admission Application - ${data.studentFirstName} ${data.studentLastName}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 800px; margin: 0 auto; padding: 20px; }
          .header { background: #1E40AF; color: white; padding: 20px; text-align: center; }
          .section { margin: 20px 0; padding: 20px; background: #f9fafb; border-radius: 8px; }
          .section h3 { margin-top: 0; color: #1E40AF; border-bottom: 2px solid #3B82F6; padding-bottom: 10px; }
          table { width: 100%; border-collapse: collapse; margin: 10px 0; }
          td { padding: 8px; border-bottom: 1px solid #e5e7eb; }
          td:first-child { font-weight: bold; width: 35%; color: #4B5563; }
          .urgent { background: #FEE2E2; border-left: 4px solid #DC2626; padding: 15px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">New Admission Application Received</h2>
            <p style="margin: 5px 0 0 0;">Reference: ${referenceNumber}</p>
          </div>
          
          <div class="section">
            <h3>Student Information</h3>
            <table>
              <tr><td>Full Name</td><td>${data.studentFirstName} ${data.studentLastName}</td></tr>
              <tr><td>Date of Birth</td><td>${formatDate(data.studentDOB)}</td></tr>
              <tr><td>Gender</td><td style="text-transform: capitalize;">${data.studentGender}</td></tr>
              <tr><td>Applying For</td><td style="text-transform: capitalize;">${data.applyingFor?.replace(/-/g, ' ')}</td></tr>
              <tr><td>Previous School</td><td>${data.previousSchool || 'N/A'}</td></tr>
            </table>
          </div>
          
          <div class="section">
            <h3>Parent/Guardian Information</h3>
            <table>
              <tr><td>Full Name</td><td>${data.parentFirstName} ${data.parentLastName}</td></tr>
              <tr><td>Email</td><td>${data.parentEmail}</td></tr>
              <tr><td>Phone</td><td>${data.parentPhone}</td></tr>
              <tr><td>Occupation</td><td>${data.parentOccupation}</td></tr>
              <tr><td>Relationship</td><td style="text-transform: capitalize;">${data.relationship}</td></tr>
            </table>
          </div>
          
          <div class="section">
            <h3>Contact Details</h3>
            <table>
              <tr><td>Residential Address</td><td>${data.residentialAddress}</td></tr>
              <tr><td>City</td><td>${data.city}</td></tr>
              <tr><td>Region</td><td style="text-transform: capitalize;">${data.region?.replace(/-/g, ' ')}</td></tr>
              <tr><td>Postal Address</td><td>${data.postalAddress || 'N/A'}</td></tr>
            </table>
          </div>
          
          <div class="section">
            <h3>Emergency Contact</h3>
            <table>
              <tr><td>Contact Name</td><td>${data.emergencyName}</td></tr>
              <tr><td>Phone Number</td><td>${data.emergencyPhone}</td></tr>
              <tr><td>Relationship</td><td>${data.emergencyRelationship}</td></tr>
            </table>
          </div>
          
          <div class="section">
            <h3>Additional Information</h3>
            <table>
              <tr><td>Medical Conditions</td><td>${data.medicalConditions || 'None reported'}</td></tr>
              <tr><td>Special Needs</td><td>${data.specialNeeds || 'None reported'}</td></tr>
              <tr><td>How They Heard About Us</td><td style="text-transform: capitalize;">${data.howHeard?.replace(/-/g, ' ')}</td></tr>
              <tr><td>Application Date</td><td>${formatDate(new Date().toISOString())}</td></tr>
            </table>
          </div>
          
          <div class="urgent">
            <strong>⚠️ Action Required:</strong> Please review this application and contact the parent/guardian within 3-5 business days.
          </div>
        </div>
      </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
}

// Main POST handler
export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validate the data
    const validationErrors = validateAdmissionData(data);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed',
          errors: validationErrors 
        },
        { status: 400 }
      );
    }

    // Generate reference number
    const referenceNumber = generateReferenceNumber();

    // Store in database (implement your database logic here)
    // Example: await saveToDatabase({ ...data, referenceNumber });

    // Send confirmation email to parent
    try {
      await sendConfirmationEmail(data, referenceNumber);
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Continue even if email fails
    }

    // Send notification to admin
    try {
      await sendAdminNotification(data, referenceNumber);
    } catch (emailError) {
      console.error('Failed to send admin notification:', emailError);
      // Continue even if email fails
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      referenceNumber,
      data: {
        studentName: `${data.studentFirstName} ${data.studentLastName}`,
        parentEmail: data.parentEmail,
        applyingFor: data.applyingFor,
      }
    }, { status: 201 });

  } catch (error) {
    console.error('Admission submission error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred while processing your application. Please try again.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// GET handler (optional - for retrieving application status)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const referenceNumber = searchParams.get('ref');

    if (!referenceNumber) {
      return NextResponse.json(
        { success: false, message: 'Reference number is required' },
        { status: 400 }
      );
    }

    // Retrieve from database (implement your database logic here)
    // Example: const application = await getFromDatabase(referenceNumber);

    return NextResponse.json({
      success: true,
      message: 'Application found',
      // data: application
    });

  } catch (error) {
    console.error('Error retrieving application:', error);
    return NextResponse.json(
      { success: false, message: 'Application not found' },
      { status: 404 }
    );
  }
}