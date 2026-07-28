import dotenv from "dotenv";
dotenv.config();

import axios from "axios";

// Log configuration
console.log("📧 Brevo Email:", process.env.BREVO_EMAIL);
console.log("🔑 API Key Exists:", !!process.env.BREVO_API_KEY);

export const applyForJob = async (req, res) => {
  try {
    const { fullName, email, phone, nationalId, jobTitle, termsAccepted, turnstileToken } = req.body;
    const cvFile = req.file;

    // Validate Turnstile token
    if (!turnstileToken) {
      return res.status(400).json({
        success: false,
        message: "Security verification required. Please complete the CAPTCHA.",
      });
    }

    if (!process.env.TURNSTILE_SECRET_KEY) {
      console.error("❌ Missing Turnstile secret key");
      return res.status(500).json({
        success: false,
        message: "Security configuration error",
      });
    }

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

      if (turnstileResponse.data.success) {
        turnstileVerified = true;
      } else {
        console.error("❌ Turnstile verification failed:", turnstileResponse.data);
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

    if (!turnstileVerified) {
      return res.status(400).json({
        success: false,
        message: "Security verification failed. Please refresh and try again.",
      });
    }

    // Validate required fields
    if (!fullName || !email || !phone || !nationalId || !jobTitle || !cvFile) {
      return res.status(400).json({
        success: false,
        message: "All fields are required including CV",
      });
    }

    if (!termsAccepted) {
      return res.status(400).json({
        success: false,
        message: "You must accept the terms and conditions",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
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

    // Convert CV file to base64 for attachment
    const cvBase64 = cvFile.buffer.toString("base64");
    const currentDate = new Date().toLocaleString();

    // Prepare email to HR
    const hrEmailData = {
      sender: {
        name: "Port City BPO Careers",
        email: process.env.BREVO_EMAIL,
      },
      to: [
        {
          email: process.env.BREVO_HR_EMAIL ,
        },
      ],
      replyTo: {
        email: email,
        name: fullName,
      },
      subject: `New Job Application: ${jobTitle} - ${fullName}`,

htmlContent: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
body{
    margin:0;
    padding:0;
    background:#f5f7fa;
    font-family:Arial,Helvetica,sans-serif;
    color:#333;
}
.wrapper{
    width:100%;
    padding:30px 0;
}
.container{
    max-width:620px;
    margin:0 auto;
    background:#ffffff;
    border-radius:10px;
    overflow:hidden;
    border:1px solid #e5e7eb;
}
.header{
    background:#005ca9;
    color:#fff;
    padding:24px;
    text-align:center;
}
.header h2{
    margin:0;
    font-size:24px;
}
.subtext{
    margin-top:8px;
    font-size:14px;
    opacity:.9;
}
.section{
    padding:28px;
}
.job-box{
    background:#f4f9ff;
    border-left:4px solid #005ca9;
    padding:18px;
    border-radius:6px;
    margin-bottom:24px;
}
.job-title{
    font-size:20px;
    font-weight:bold;
    color:#005ca9;
    margin-bottom:8px;
}
.table{
    width:100%;
    border-collapse:collapse;
}
.table td{
    padding:12px 0;
    border-bottom:1px solid #ececec;
    vertical-align:top;
}
.label{
    width:180px;
    font-weight:600;
    color:#666;
}
.value{
    color:#222;
}
.cv-box{
    margin-top:28px;
    background:#fafafa;
    border:1px solid #e5e7eb;
    border-radius:8px;
    padding:16px;
}
.footer{
    background:#fafafa;
    border-top:1px solid #ececec;
    padding:20px;
    text-align:center;
    font-size:13px;
    color:#777;
}
a{
    color:#005ca9;
    text-decoration:none;
}
</style>
</head>

<body>

<div class="wrapper">

<div class="container">

<div class="header">
    <h2>New Job Application</h2>
    <div class="subtext">A new candidate has submitted an application.</div>
</div>

<div class="section">

<div class="job-box">
    <div class="job-title">${jobTitle}</div>
    <div><strong>Applicant:</strong> ${fullName}</div>
    <div><strong>Submitted:</strong> ${currentDate}</div>
</div>

<table class="table">

<tr>
    <td class="label">Full Name</td>
    <td class="value">${fullName}</td>
</tr>

<tr>
    <td class="label">Email</td>
    <td class="value">
        <a href="mailto:${email}">${email}</a>
    </td>
</tr>

<tr>
    <td class="label">Phone</td>
    <td class="value">${phone}</td>
</tr>

<tr>
    <td class="label">National ID</td>
    <td class="value">${nationalId}</td>
</tr>

<tr>
    <td class="label">Position</td>
    <td class="value">${jobTitle}</td>
</tr>

<tr>
    <td class="label">Terms Accepted</td>
    <td class="value">${termsAccepted ? "Yes" : "No"}</td>
</tr>

</table>

<div class="cv-box">
    <strong>Attached Resume</strong><br><br>
    <div>${cvFile.originalname}</div>
    <div style="font-size:13px;color:#777;margin-top:4px;">
        ${(cvFile.size / 1024).toFixed(2)} KB
    </div>
</div>

</div>

<div class="footer">
    This email was automatically generated by the Port City BPO Careers Portal.<br>
    © ${new Date().getFullYear()} Port City BPO. All rights reserved.
</div>

</div>

</div>

</body>
</html>
`,
      attachment: [
        {
          name: cvFile.originalname,
          content: cvBase64,
        },
      ],
    };

    

    // Send email to HR
    const hrResponse = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      hrEmailData,
      {
        headers: {
          accept: "application/json",
          "api-key": process.env.BREVO_API_KEY,
          "content-type": "application/json",
        },
      }
    );

    console.log("✅ HR email sent:", hrResponse.data.messageId);

   
    res.status(200).json({
      success: true,
      message: "Thanks For Applying.",
      data: {
        applicant: fullName,
        email: email,
        jobTitle: jobTitle,
        applicationDate: currentDate,
        referenceId: `APP-${Date.now().toString().slice(-8)}`,
      },
    });

  } catch (error) {
    console.error("❌ Email sending error:", error.response?.data || error.message);

    // Better error response
    let errorMessage = "Failed to submit application";
    if (error.response?.status === 401) {
      errorMessage = "Something went wrong. Please try again later.";
    } else if (error.response?.status === 400) {
      errorMessage = error.response.data.message || "Invalid request";
    } else if (error.response?.status === 429) {
      errorMessage = "Too many requests. Please try again later.";
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
};