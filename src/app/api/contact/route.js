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
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);">
            
            <!-- Header with Logo -->
            <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%); padding: 40px 30px; text-align: center; position: relative;">
              <div style="background-color: white; width: 90px; height: 90px; margin: 0 auto 20px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 8px 20px rgba(0,0,0,0.2);">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14L21 9L12 4L3 9L12 14Z" fill="#2563eb" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 14L12 20" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/>
                  <path d="M21 13V9" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <h1 style="margin: 0; font-size: 28px; color: #ffffff; font-weight: 700; letter-spacing: -0.5px;">New Contact Inquiry</h1>
              <p style="margin: 10px 0 0 0; color: #dbeafe; font-size: 14px; font-weight: 500;">St. Michael's School</p>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
              
              <!-- Alert Banner -->
              <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-left: 4px solid #f59e0b; padding: 16px 20px; border-radius: 10px; margin-bottom: 30px; display: flex; align-items: center;">
                <div style="background: white; width: 36px; height: 36px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px; flex-shrink: 0;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p style="margin: 0; color: #92400e; font-size: 14px; font-weight: 600;">
                  <strong>Action Required:</strong> A new contact form submission needs your attention
                </p>
              </div>

              <!-- Contact Information Card -->
              <div style="background: #f9fafb; border-radius: 12px; padding: 25px; margin-bottom: 25px; border: 1px solid #e5e7eb;">
                <h2 style="color: #111827; margin: 0 0 20px 0; font-size: 18px; font-weight: 700; display: flex; align-items: center;">
                  <span style="background: #dbeafe; width: 36px; height: 36px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  Contact Details
                </h2>
                
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 14px 0; border-bottom: 1px solid #e5e7eb;">
                      <div style="display: flex; align-items: center;">
                        <div style="min-width: 32px; height: 32px; background: white; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px;">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <span style="color: #6b7280; font-size: 12px; font-weight: 600; display: block;">Name</span>
                          <span style="color: #111827; font-size: 15px; font-weight: 600;">${name}</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 14px 0; border-bottom: 1px solid #e5e7eb;">
                      <div style="display: flex; align-items: center;">
                        <div style="min-width: 32px; height: 32px; background: white; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px;">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <span style="color: #6b7280; font-size: 12px; font-weight: 600; display: block;">Email</span>
                          <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-size: 15px; font-weight: 600;">${email}</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  ${phone ? `
                  <tr>
                    <td style="padding: 14px 0; border-bottom: 1px solid #e5e7eb;">
                      <div style="display: flex; align-items: center;">
                        <div style="min-width: 32px; height: 32px; background: white; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px;">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <span style="color: #6b7280; font-size: 12px; font-weight: 600; display: block;">Phone</span>
                          <a href="tel:${phone}" style="color: #111827; text-decoration: none; font-size: 15px; font-weight: 600;">${phone}</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  ` : ''}
                  <tr>
                    <td style="padding: 14px 0;">
                      <div style="display: flex; align-items: center;">
                        <div style="min-width: 32px; height: 32px; background: white; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px;">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <span style="color: #6b7280; font-size: 12px; font-weight: 600; display: block;">Subject</span>
                          <span style="color: #111827; font-size: 15px; font-weight: 600;">${subject}</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Message Card -->
              <div style="background: #f9fafb; border-radius: 12px; padding: 25px; border: 1px solid #e5e7eb; margin-bottom: 25px;">
                <h3 style="color: #111827; margin: 0 0 15px 0; font-size: 16px; font-weight: 700; display: flex; align-items: center;">
                  <span style="background: #dbeafe; width: 36px; height: 36px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.4183 16.9706 20 12 20C10.4607 20 9.01172 19.6565 7.74467 19.0511L3 20L4.39499 16.28C3.51156 15.0423 3 13.5743 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  Message Content
                </h3>
                <div style="background: white; padding: 20px; border-radius: 10px; border-left: 4px solid #2563eb;">
                  <p style="color: #374151; line-height: 1.8; white-space: pre-wrap; margin: 0; font-size: 15px;">${message}</p>
                </div>
              </div>

              <!-- Quick Actions -->
              <div style="text-align: center; margin-bottom: 25px;">
                <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 16px 36px; text-decoration: none; border-radius: 12px; font-weight: 600; font-size: 15px; box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4); transition: transform 0.2s;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; margin-right: 8px;">
                    <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Reply to ${name.split(' ')[0]}
                </a>
              </div>

              <!-- Timestamp -->
              <div style="padding: 20px; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-radius: 10px; border-left: 4px solid #0ea5e9;">
                <div style="display: flex; align-items: center; justify-content: center;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 10px;">
                    <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="#0284c7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p style="color: #0c4a6e; font-size: 13px; margin: 0; font-weight: 600;">
                    Received on ${new Date().toLocaleString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric', 
                      hour: '2-digit', 
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div style="background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%); padding: 30px; text-align: center; border-top: 2px solid #e5e7eb;">
              <div style="margin-bottom: 12px;">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: inline-block;">
                  <path d="M12 14L21 9L12 4L3 9L12 14Z" fill="#2563eb" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 14L12 20" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/>
                  <path d="M21 13V9" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px; font-weight: 500;">
                This email was sent from your school website contact form
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                <strong style="color: #374151;">St. Michael's School</strong> © ${new Date().getFullYear()} | Excellence in Education
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

   // Confirmation email to user
const userMailOptions = {
  from: process.env.EMAIL_SERVER_USER,
  to: email,
  subject: 'Thank you for contacting St. Michael\'s School',
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You - St. Michael's School</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);">
        
        <!-- Header with Logo and Success Icon -->
        <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%); padding: 50px 30px; text-align: center; position: relative;">
          <!-- School Logo Icon -->
          <div style="background-color: white; width: 100px; height: 100px; margin: 0 auto 25px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
            <svg width="55" height="55" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14L21 9L12 4L3 9L12 14Z" fill="#2563eb" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 14L12 20" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/>
              <path d="M21 13V9" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          
          <!-- Success Checkmark -->
          <div style="background: rgba(255, 255, 255, 0.25); backdrop-filter: blur(10px); width: 90px; height: 90px; margin: 0 auto 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 8px 24px rgba(0,0,0,0.15);">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          
          <h1 style="margin: 0; font-size: 34px; color: #ffffff; font-weight: 700; letter-spacing: -1px;">Message Received!</h1>
          <p style="margin: 14px 0 0 0; color: #dbeafe; font-size: 16px; font-weight: 500;">We'll get back to you soon</p>
        </div>

        <!-- Content -->
        <div style="padding: 40px 30px;">
          
          <!-- Greeting -->
          <div style="margin-bottom: 30px;">
            <p style="color: #111827; font-size: 17px; line-height: 1.6; margin: 0;">
              Dear <strong style="color: #2563eb; font-size: 18px;">${name}</strong>,
            </p>
            <p style="color: #4b5563; font-size: 15px; line-height: 1.8; margin: 18px 0 0 0;">
              Thank you for reaching out to <strong style="color: #111827;">St. Michael's School</strong>. We have successfully received your message and our admissions team will review it carefully.
            </p>
          </div>

          <!-- Response Time Banner -->
          <div style="background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); border-left: 5px solid #2563eb; padding: 20px 24px; border-radius: 12px; margin-bottom: 30px;">
            <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
              <tr>
                <td style="width: 60px; vertical-align: middle;">
                  <div style="background: white; width: 44px; height: 44px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </td>
                <td style="vertical-align: middle;">
                  <p style="margin: 0; color: #1e40af; font-size: 15px; font-weight: 700;">Expected Response Time</p>
                  <p style="margin: 4px 0 0 0; color: #1e3a8a; font-size: 14px;">We'll respond within 24 hours</p>
                </td>
              </tr>
            </table>
          </div>

          <!-- Message Summary Card -->
          <div style="background: #f9fafb; border-radius: 14px; padding: 28px; margin-bottom: 28px; border: 2px solid #e5e7eb;">
            <h3 style="color: #111827; margin: 0 0 22px 0; font-size: 17px; font-weight: 700;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="vertical-align: middle; padding-right: 14px;">
                    <div style="background: #dbeafe; width: 38px; height: 38px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center;">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </td>
                  <td style="vertical-align: middle;">
                    Your Message Summary
                  </td>
                </tr>
              </table>
            </h3>
            
            <div style="background: white; border-radius: 10px; padding: 22px; border-left: 4px solid #60a5fa; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
                    <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                      <tr>
                        <td style="width: 50px; vertical-align: top; padding-top: 2px;">
                          <div style="min-width: 36px; height: 36px; background: #f0f9ff; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 8H17M7 12H17M7 16H13" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </div>
                        </td>
                        <td style="vertical-align: top; padding-top: 2px;">
                          <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 13px; font-weight: 600;">Subject</p>
                          <p style="margin: 0; color: #111827; font-size: 15px; font-weight: 600;">${subject}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 0 4px 0;">
                    <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                      <tr>
                        <td style="width: 50px; vertical-align: top; padding-top: 2px;">
                          <div style="min-width: 36px; height: 36px; background: #fef3c7; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.4183 16.9706 20 12 20C10.4607 20 9.01172 19.6565 7.74467 19.0511L3 20L4.39499 16.28C3.51156 15.0423 3 13.5743 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </div>
                        </td>
                        <td style="vertical-align: top; padding-top: 2px;">
                          <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 13px; font-weight: 600;">Your Message</p>
                          <p style="margin: 0; color: #4b5563; font-size: 14px; line-height: 1.6;">${message.substring(0, 150)}${message.length > 150 ? '...' : ''}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <!-- Contact Information Card -->
          <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border-radius: 14px; padding: 28px; margin-bottom: 30px; border: 2px solid #86efac;">
            <h3 style="color: #166534; margin: 0 0 24px 0; font-size: 17px; font-weight: 700;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="vertical-align: middle; padding-right: 12px;">
                    <div style="background: white; width: 38px; height: 38px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center;">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </td>
                  <td style="vertical-align: middle;">
                    Need to reach us directly?
                  </td>
                </tr>
              </table>
            </h3>
            
            <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
              <tr>
                <td style="padding: 8px 0;">
                  <table cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td style="width: 48px; vertical-align: middle;">
                        <div style="background: white; width: 36px; height: 36px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 2px 6px rgba(0,0,0,0.06);">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                      </td>
                      <td style="vertical-align: middle;">
                        <p style="margin: 0; color: #15803d; font-size: 14px; line-height: 1.6;">
                          <strong style="font-weight: 700;">Phone:</strong> +233-552-735-903
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0;">
                  <table cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td style="width: 48px; vertical-align: middle;">
                        <div style="background: white; width: 36px; height: 36px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 2px 6px rgba(0,0,0,0.06);">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 8L10.89 13.26C11.5369 13.6728 12.4631 13.6728 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                      </td>
                      <td style="vertical-align: middle;">
                        <p style="margin: 0; color: #15803d; font-size: 14px; line-height: 1.6;">
                          <strong style="font-weight: 700;">Email:</strong> stmichaelschool23@gmail.com
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0;">
                  <table cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td style="width: 48px; vertical-align: middle;">
                        <div style="background: white; width: 36px; height: 36px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 2px 6px rgba(0,0,0,0.06);">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.657 16.657L13.414 20.9C12.2426 22.0714 10.3995 22.0714 9.22804 20.9L4.98504 16.657C2.01904 13.691 2.01904 8.88002 4.98504 5.91402C7.95104 2.94802 12.762 2.94802 15.728 5.91402C18.694 8.88002 18.694 13.691 15.728 16.657H17.657ZM12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                      </td>
                      <td style="vertical-align: middle;">
                        <p style="margin: 0; color: #15803d; font-size: 14px; line-height: 1.6;">
                          <strong style="font-weight: 700;">Location:</strong> Akim Oda, Asawase, Ghana
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>

          <!-- CTA Button -->
          <div style="text-align: center; margin-top: 30px;">
            <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
              <tr>
                <td style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); border-radius: 12px; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);">
                  <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}" 
                     style="display: inline-block; color: white; padding: 16px 40px; text-decoration: none; font-weight: 600; font-size: 15px;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="vertical-align: middle; padding-right: 10px;">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M3 12C3 7.02944 7.02944 3 12 3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </td>
                        <td style="vertical-align: middle;">
                          Visit Our Website
                        </td>
                      </tr>
                    </table>
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 30px; text-align: center;">
          <div style="margin-bottom: 15px;">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14L21 9L12 4L3 9L12 14Z" fill="white" opacity="0.9"/>
              <path d="M12 14L12 20" stroke="white" stroke-width="2" stroke-linecap="round" opacity="0.9"/>
              <path d="M21 13V9" stroke="white" stroke-width="2" stroke-linecap="round" opacity="0.9"/>
            </svg>
          </div>
          <h4 style="margin: 0 0 8px 0; color: #ffffff; font-size: 18px; font-weight: 700;">St. Michael's School</h4>
          <p style="margin: 0 0 15px 0; color: #94a3b8; font-size: 14px; font-weight: 500;">Excellence in Education</p>
          <div style="border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 15px; margin-top: 15px;">
            <p style="margin: 0; color: #64748b; font-size: 12px;">
              &copy; ${new Date().getFullYear()} St. Michael's School. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
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