import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { firstName, lastName, email, message } = await req.json();

        if (!firstName || !email || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL, // Sending to self/admin email
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            text: `
                Name: ${firstName} ${lastName}
                Email: ${email}
                Message: ${message}
            `,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #8b3d8b;">New Inquiry - Braj Hit Sharnam</h2>
                    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #8b3d8b;">
                        <p><strong>Message:</strong></p>
                        <p>${message}</p>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: "Message sent successfully" });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
    }
}
