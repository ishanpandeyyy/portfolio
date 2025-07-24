import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Create email content
    const emailContent = `
New message from your portfolio website!

From: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
Reply directly to: ${email}
    `.trim()

    // For demonstration, we'll use a simple email service
    // In production, you'd want to use a service like SendGrid, Resend, or Nodemailer

    // Using Resend (you'll need to install it: npm install resend)
    // Uncomment and configure this section when you set up Resend:

    /*
    import { Resend } from 'resend'
    
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'portfolio@yourdomain.com', // Your verified domain
      to: 'ishanpandey2803@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      text: emailContent,
      replyTo: email,
    })
    */

    // For now, we'll simulate success and log the message
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // You can also use other email services like:
    // - SendGrid
    // - Nodemailer with Gmail SMTP
    // - EmailJS (client-side)
    // - Formspree
    // - Netlify Forms (if deploying to Netlify)

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
