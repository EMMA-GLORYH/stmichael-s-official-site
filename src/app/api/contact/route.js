// src/app/api/contact/route.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    // Email to school (notification)
    const schoolMailOptions = {
      from: process.env.EMAIL_SERVER_USER,
      to: process.env.NEXT_PUBLIC_SCHOOL_EMAIL || 'stmichaelschool23@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">&#128233; New Contact Form Submission</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1f2937; margin-top: 0;">&#128100; Contact Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #4b5563;">
                    <span style="display: inline-block; width: 20px; text-align: center;">&#128100;</span> Name:
                  </td>
                  <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #4b5563;">
                    <span style="display: inline-block; width: 20px; text-align: center;">&#9993;</span> Email:
                  </td>
                  <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                    <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #4b5563;">
                    <span style="display: inline-block; width: 20px; text-align: center;">&#9742;</span> Phone:
                  </td>
                  <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${phone}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 10px; font-weight: bold; color: #4b5563;">
                    <span style="display: inline-block; width: 20px; text-align: center;">&#128220;</span> Subject:
                  </td>
                  <td style="padding: 10px; color: #1f2937;">${subject}</td>
                </tr>
              </table>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <h3 style="color: #1f2937; margin-top: 0;">&#128172; Message</h3>
              <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-left: 4px solid #2563eb; border-radius: 4px;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                <strong>&#128161; Quick Action:</strong> Reply directly to this email to respond to ${name}
              </p>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
            <p>This email was sent from your school website contact form.</p>
            <p>St. Michael's School &copy; ${new Date().getFullYear()}</p>
          </div>
        </div>
      `,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_SERVER_USER,
      to: email,
      subject: 'Thank you for contacting St. Michael\'s School',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">&#10004; Thank You!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">We've received your message</p>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="color: #1f2937; font-size: 16px; line-height: 1.6;">
                Dear <strong>${name}</strong>,
              </p>
              <p style="color: #4b5563; line-height: 1.6;">
                Thank you for reaching out to St. Michael's School. We have received your message and will respond within 24 hours.
              </p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1f2937; margin-top: 0;">&#128203; Your Message Summary</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #4b5563;">
                    <span style="display: inline-block; width: 20px; text-align: center;">&#128220;</span> Subject:
                  </td>
                  <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${subject}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; color: #4b5563;">
                    <span style="display: inline-block; width: 20px; text-align: center;">&#128172;</span> Message:
                  </td>
                  <td style="padding: 10px; color: #1f2937;">${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</td>
                </tr>
              </table>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1f2937; margin-top: 0;">&#128222; Contact Information</h3>
              <p style="color: #4b5563; margin: 5px 0; line-height: 1.8;">
                <span style="display: inline-block; width: 25px; text-align: center;">&#9742;</span>
                <strong>Phone:</strong> +233-552-735-903
              </p>
              <p style="color: #4b5563; margin: 5px 0; line-height: 1.8;">
                <span style="display: inline-block; width: 25px; text-align: center;">&#9993;</span>
                <strong>Email:</strong> stmichaelschool23@gmail.com
              </p>
              <p style="color: #4b5563; margin: 5px 0; line-height: 1.8;">
                <span style="display: inline-block; width: 25px; text-align: center;">&#128205;</span>
                <strong>Location:</strong> Akim Oda, Asawase, Ghana
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 20px;">
              <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}" 
                 style="display: inline-block; background: #2563eb; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;">
                &#127968; Visit Our Website
              </a>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
            <p>&#127891; St. Michael's School - Excellence in Education</p>
            <p>&copy; ${new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(schoolMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error.message 
      },
      { status: 500 }
    );
  }
}