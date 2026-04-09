import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    // 1. Check if the API Key exists in your environment
    if (!process.env.RESEND_API_KEY) {
      console.error("CRITICAL ERROR: RESEND_API_KEY is not defined in your environment variables.")
      return NextResponse.json(
        { error: 'Server configuration error. Please check .env.local' },
        { status: 500 },
      )
    }

    // Initialize Resend inside the handler to ensure the key is captured
    const resend = new Resend(process.env.RESEND_API_KEY)

    const body = await request.json()
    const { name, email, subject, message } = body

    // 2. Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 },
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 },
      )
    }

    // Fallback email (Your verified Resend email)
    const ownerEmail = process.env.CONTACT_EMAIL ?? 'janchrstn.dev@gmail.com'

    // 3. Send notification to YOU
    const { error: resendError } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ownerEmail,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #0ea5e9; margin-bottom: 4px;">New Contact Message</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: 600;">Name:</td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600;">Email:</td><td>${email}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600;">Subject:</td><td>${subject}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-left: 4px solid #0ea5e9;">
            <p style="font-weight: 600;">Message:</p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    })

    if (resendError) {
      console.error('Resend Error:', resendError)
      return NextResponse.json({ error: resendError.message }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact-api-catch]', err)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}