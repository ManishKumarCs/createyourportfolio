import { NextResponse } from "next/server"
import { z } from "zod"
import nodemailer from 'nodemailer'

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional().refine((val) => {
    if (!val) return true; // Optional field
    return /^\+?[1-9]\d{1,14}$/.test(val);
  }, "Invalid phone number format"),
  plan: z.string().min(1, "Please select a plan"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log("Received request body:", body)
    
    const data = contactSchema.parse(body)
    console.log("Validated data:", data)

    console.log("New contact submission:", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      plan: data.plan,
      message: data.message,
      timestamp: new Date().toISOString(),
    })

    // Create email content with all form data
    const emailContent = `
      New Contact Form Submission
      
      📋 Contact Information:
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone || 'Not provided'}
      Plan: ${data.plan}
      Message: ${data.message}
      
      📅 Submitted: ${new Date().toLocaleString()}
      
      🎯 Please respond to this inquiry about ${data.plan}
    `

    // Create HTML email template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-bottom: 20px;">📧 New Portfolio Generator Contact</h2>
          
          <div style="margin-bottom: 20px; padding: 15px; background-color: #f0f9ff; border-left: 4px solid #3b82f6; border-radius: 5px;">
            <h3 style="color: #1e40af; margin-bottom: 10px;">👤 Contact Information</h3>
            <div style="margin-bottom: 10px;">
              <strong style="color: #666;">Name:</strong>
              <span style="color: #333; margin-left: 10px;">${data.name}</span>
            </div>
            <div style="margin-bottom: 10px;">
              <strong style="color: #666;">Email:</strong>
              <span style="color: #333; margin-left: 10px;">${data.email}</span>
            </div>
            <div style="margin-bottom: 10px;">
              <strong style="color: #666;">Phone:</strong>
              <span style="color: #333; margin-left: 10px;">${data.phone || 'Not provided'}</span>
            </div>
            <div style="margin-bottom: 10px;">
              <strong style="color: #666;">Plan:</strong>
              <span style="color: #3b82f6; margin-left: 10px; font-weight: bold;">${data.plan}</span>
            </div>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #333; margin-bottom: 10px;">💬 Message</h3>
            <div style="color: #333; padding: 15px; background-color: #f5f5f5; border-radius: 5px; line-height: 1.6;">${data.message.replace(/\n/g, '<br>')}</div>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 12px;">📅 Submitted: ${new Date().toLocaleString()}</p>
            <p style="color: #666; font-size: 12px;">🎯 Please respond to this inquiry about <strong>${data.plan}</strong></p>
          </div>
        </div>
      </div>
    `

    // Configure Nodemailer transporter
    console.log("Configuring email transporter...")
    console.log("EMAIL_PASSWORD exists:", !!process.env.EMAIL_PASSWORD)
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'manishprajapati.cs1@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'your-app-password', // Use app password
      },
      debug: true, // Enable debug logging
      logger: true, // Enable logging
    })

    // Verify transporter configuration
    try {
      await transporter.verify()
      console.log("✅ Nodemailer transporter verified successfully")
    } catch (verifyError) {
      console.error("❌ Nodemailer transporter verification failed:", verifyError)
      return NextResponse.json(
        { error: "Email service configuration error. Please check EMAIL_PASSWORD environment variable." },
        { status: 500 }
      )
    }

    // Email options
    const mailOptions = {
      from: 'Create Your Portfolio <manishprajapati.cs1@gmail.com>',
      to: 'manishprajapati.cs1@gmail.com',
      replyTo: data.email as string,
      subject: `🎯 New Portfolio Inquiry - ${data.plan} - ${data.name}`,
      text: emailContent,
      html: htmlContent,
    }

    // Send email
    try {
      console.log("Attempting to send email...")
      const emailResult = await transporter.sendMail(mailOptions)
      console.log("✅ Email sent successfully:", emailResult.messageId)
      
      return NextResponse.json(
        { 
          success: true, 
          message: "Thank you! We will get back to you soon.",
          emailId: emailResult.messageId
        },
        { status: 200 }
      )
    } catch (emailError: any) {
      console.error("❌ Email sending failed:", emailError)
      console.error("Error details:", {
        code: emailError.code,
        command: emailError.command,
        response: emailError.response
      })
      
      return NextResponse.json(
        { 
          error: "Failed to send email. Please try again later.",
          details: emailError.message 
        },
        { status: 500 }
      )
    }

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      )
    }
    console.error("❌ Server error:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
