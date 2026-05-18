import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, companyName, email, phone, productInterest, message } = data;

    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      replyTo: email,
      subject: `New Sourcing Inquiry from ${fullName} ${companyName ? `(${companyName})` : ''}`,
      html: `
        <h2 style="color: #0A1628; border-bottom: 2px solid #C81F08; padding-bottom: 10px;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${companyName || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Product Interest:</strong> ${productInterest || 'N/A'}</p>
        <br/>
        <h3 style="color: #0A1628;">Message:</h3>
        <p style="background-color: #F8FAFC; padding: 15px; border-left: 4px solid #F7941D; border-radius: 4px;">
          ${message.replace(/\n/g, '<br>')}
        </p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email.' },
      { status: 500 }
    );
  }
}