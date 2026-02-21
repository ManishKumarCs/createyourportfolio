import { NextResponse } from "next/server"
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    console.log("🧪 Testing email configuration...")
    
    // Test with your actual credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'manishprajapati.cs1@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'your-app-password',
      },
      debug: true,
      logger: true,
    })

    // Test connection
    await transporter.verify()
    console.log("✅ Gmail connection successful")

    // Send test email
    const testEmail = await transporter.sendMail({
      from: 'Portfolio Generator <manishprajapati.cs1@gmail.com>',
      to: 'manishprajapati.cs1@gmail.com',
      subject: '🧪 Test Email - Portfolio Generator',
      text: 'This is a test email to verify Nodemailer configuration.',
      html: '<h2>🧪 Test Email</h2><p>This is a test email to verify Nodemailer configuration.</p>',
    })

    console.log("✅ Test email sent:", testEmail.messageId)
    
    return NextResponse.json({
      success: true,
      message: "Test email sent successfully!",
      emailId: testEmail.messageId
    })

  } catch (error) {
    console.error("❌ Email test failed:", error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      details: "Check Gmail app password and 2FA settings"
    }, { status: 500 })
  }
}
