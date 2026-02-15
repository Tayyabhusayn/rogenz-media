import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// TODO: Move these to environment variables for better security
const EMAIL_USER = "contact@uywnix.com";
const EMAIL_PASS = "TayyabC1.";
const SMTP_SERVER = "smtp.hostinger.com";
const SMTP_PORT = 465;

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: 'Missing fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_SERVER,
      port: SMTP_PORT,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // Send email to admin (you)
    await transporter.sendMail({
      from: `"RoGenZ Contact" <${EMAIL_USER}>`,
      to: EMAIL_USER, // Sending to yourself so you see the message
      replyTo: email,
      subject: `New Message from ${name} via RoGenZ`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}
