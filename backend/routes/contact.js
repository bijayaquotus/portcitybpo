import dotenv from "dotenv";
dotenv.config();

import express from "express";
import axios from "axios";

const router = express.Router();

// Log configuration
console.log("📧 Brevo Email:", process.env.BREVO_EMAIL);
console.log("🔑 API Key Exists:", !!process.env.BREVO_API_KEY);
console.log("🛡️ Turnstile Secret Exists:", !!process.env.TURNSTILE_SECRET_KEY);

router.post("/", async (req, res) => {
  try {
    const { firstName, email, phone, message, turnstileToken } = req.body;

    // Validate required fields
    if (!firstName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and message",
      });
    }

    // Validate Turnstile token
    if (!turnstileToken) {
      return res.status(400).json({
        success: false,
        message: "Security verification required. Please complete the CAPTCHA.",
      });
    }

    // Validate that env variables are loaded
    if (!process.env.BREVO_EMAIL || !process.env.BREVO_API_KEY) {
      console.error("❌ Missing Brevo credentials in environment variables");
      return res.status(500).json({
        success: false,
        message: "Server configuration error",
      });
    }

    if (!process.env.TURNSTILE_SECRET_KEY) {
      console.error("❌ Missing Turnstile secret key");
      return res.status(500).json({
        success: false,
        message: "Security configuration error",
      });
    }

    // Verify Turnstile token with Cloudflare
    let turnstileVerified = false;
    try {
      const turnstileResponse = await axios.post(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
          remoteip: req.ip || req.connection.remoteAddress || req.headers['x-forwarded-for'] || '',
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log("🛡️ Turnstile verification response:", turnstileResponse.data);

      if (turnstileResponse.data.success) {
        turnstileVerified = true;
        console.log("✅ Turnstile verification successful");
      } else {
        console.error("❌ Turnstile verification failed:", turnstileResponse.data);
        
        // Log specific error reasons
        if (turnstileResponse.data['error-codes']) {
          console.error("Error codes:", turnstileResponse.data['error-codes']);
        }
        
        return res.status(400).json({
          success: false,
          message: "Security verification failed. Please try again.",
        });
      }
    } catch (turnstileError) {
      console.error("❌ Turnstile verification error:", turnstileError.message);
      return res.status(500).json({
        success: false,
        message: "Security verification service unavailable. Please try again later.",
      });
    }

    // If Turnstile verification failed, don't proceed
    if (!turnstileVerified) {
      return res.status(400).json({
        success: false,
        message: "Security verification failed. Please refresh and try again.",
      });
    }

    // Send email via Brevo
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Port City BPO",
          email: process.env.BREVO_EMAIL,
        },
        to: [
          {
            email: "contactus@portcitybpo.lk",
          },
        ],
        replyTo: {
          email,
          name: firstName,
        },
        subject: `Contact Form - ${firstName}`,
        htmlContent: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #005ca9; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
              .content { padding: 20px; background: #f9f9f9; }
              .field { margin: 10px 0; padding: 10px; background: white; border-radius: 5px; }
              .label { font-weight: bold; color: #005ca9; }
              .footer { margin-top: 20px; padding: 15px; background: #eee; text-align: center; font-size: 12px; border-radius: 0 0 5px 5px; }
              .badge { display: inline-block; padding: 3px 10px; background: #28a745; color: white; border-radius: 20px; font-size: 12px; }
              .security-badge { display: inline-block; padding: 3px 10px; background: #005ca9; color: white; border-radius: 20px; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">📧 New Contact Message</h2>
              </div>
              <div class="content">
                <div style="margin-bottom: 20px;">
                  <span class="badge">New</span>
                  <span class="security-badge">✅ Verified</span>
                </div>
                
                <div class="field">
                  <span class="label">👤 Name:</span>
                  <p style="margin: 5px 0 0 0;">${firstName}</p>
                </div>
                
                <div class="field">
                  <span class="label">📧 Email:</span>
                  <p style="margin: 5px 0 0 0;"><a href="mailto:${email}">${email}</a></p>
                </div>
                
                <div class="field">
                  <span class="label">📞 Phone:</span>
                  <p style="margin: 5px 0 0 0;">${phone || "Not provided"}</p>
                </div>
                
                <div class="field">
                  <span class="label">💬 Message:</span>
                  <p style="margin: 5px 0 0 0; background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #005ca9;">
                    ${message.replace(/\n/g, "<br>")}
                  </p>
                </div>
                
                <div style="margin-top: 20px; padding: 10px; background: #e8f4fd; border-radius: 5px; font-size: 13px; color: #666;">
                  <p style="margin: 0;">
                    <strong>📋 Submission Details:</strong><br>
                    • IP Address: ${req.ip || req.connection.remoteAddress || 'Not available'}<br>
                    • Verified by: Cloudflare Turnstile<br>
                    • Timestamp: ${new Date().toLocaleString()}
                  </p>
                </div>
              </div>
              <div class="footer">
                <p style="margin: 0;">This is an automated notification from Port City BPO</p>
                <p style="margin: 5px 0 0 0; font-size: 11px; color: #666;">© ${new Date().getFullYear()} Port City BPO. All rights reserved.</p>
              </div>
            </div>
          </body>
          </html>
        `,
      },
      {
        headers: {
          accept: "application/json",
          "api-key": process.env.BREVO_API_KEY,
          "content-type": "application/json",
        },
      }
    );

    console.log("✅ Email sent:", response.data.messageId);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error("❌ Email sending error:", error.response?.data || error.message);

    // Better error response
    let errorMessage = "Failed to send email";
    let statusCode = 500;
    
    if (error.response?.status === 401) {
      errorMessage = "Something went wrong with the email service configuration";
      statusCode = 500;
    } else if (error.response?.status === 400) {
      errorMessage = error.response.data.message || "Invalid request";
      statusCode = 400;
    } else if (error.response?.status === 429) {
      errorMessage = "Too many requests. Please try again later.";
      statusCode = 429;
    } else if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      errorMessage = "Network error. Please try again later.";
      statusCode = 503;
    }

    res.status(statusCode).json({
      success: false,
      message: errorMessage,
    });
  }
});

export default router;