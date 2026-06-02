import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, company, teamsId, phone, email, source, message } = data;

    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      throw new Error('RESEND_API_KEY environment variable is missing. Did you restart the server after creating .env.local?');
    }

    const resend = new Resend(resendApiKey);
    const toEmail = process.env.CONTACT_EMAIL || 'info@clixnovamedia.com';

    // Now that the domain is verified, we can send from the clixnovamedia.com domain.
    const fromEmail = 'info@clixnovamedia.com';

    const { data: emailData, error } = await resend.emails.send({
      from: `Clixnova Media Contact <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New Inquiry: ${source} - ${name}`,
      html: `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px; border-radius: 8px;">
  <div style="background-color: #0a0a0a; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; border-bottom: 3px solid #eab308;">
    <h2 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Submission</h2>
    <p style="color: #eab308; margin: 5px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Clixnova Media</p>
  </div>
  
  <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; width: 35%;"><strong>Name:</strong></td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><strong>Email:</strong></td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><strong>Phone:</strong></td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${phone || '<i>Not provided</i>'}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><strong>Company:</strong></td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${company || '<i>Not provided</i>'}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><strong>Teams/Skype/TG:</strong></td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${teamsId || '<i>Not provided</i>'}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><strong>Inquiry Source:</strong></td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
          <span style="background-color: #fef08a; color: #854d0e; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">
            ${source}
          </span>
        </td>
      </tr>
    </table>
    
    <div style="margin-top: 25px;">
      <h3 style="color: #0f172a; font-size: 16px; margin-bottom: 10px; border-bottom: 2px solid #eab308; display: inline-block; padding-bottom: 4px;">Message Details</h3>
      <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; color: #334155; line-height: 1.6; border-left: 4px solid #eab308;">
        ${message.replace(/\n/g, '<br>')}
      </div>
    </div>
  </div>
  
  <div style="text-align: center; margin-top: 20px; color: #64748b; font-size: 12px;">
    This email was automatically generated from your website contact form via Resend.
  </div>
</div>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: emailData?.id }, { status: 200 });
  } catch (error: any) {
    console.error('Error in email route:', error);
    return NextResponse.json({ success: false, error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
