import React from "react";
import SEO from "../components/SEO";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-blue-500/20">
      <SEO
  title="Terms of Use | Port City BPO (Pvt) Ltd"
  description="Read the Terms of Use for Port City BPO. Learn about the conditions governing the use of our website, services, intellectual property, user responsibilities, and legal obligations."
  url="https://portcitybpo.lk/terms-of-use"
/>
      {/* Hero Section Banner */}
      <div className="relative w-full h-[260px] md:h-[340px] overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/policy/1-policy.webp')`,
          }}
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <h1 className="relative z-10 text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.08em] text-white uppercase text-center px-4">
          Terms of Use
        </h1>
      </div>

      {/* Main Content Container */}
      <main className="max-w-10/12 mx-auto px-6 sm:px-8 py-12 md:py-16">
        
        {/* Effective Date */}
        <p className="subheading font-bold tracking-wider text-[#0066b2] uppercase mb-3 text-base sm:text-lg">
          Effective Date: 1st January 2024
        </p>

        {/* Section: Introduction */}
        <section className="mb-10">
          <h2 className="heading font-bold text-[#0066b2] tracking-tight mb-4 uppercase text-2xl sm:text-3xl">
            Terms of Use
          </h2>
          <p className="pb-5 space-x-2">
            <span className="font-bold sm:text-lg leading-7 text-slate-900 mb-6">
            Welcome to Port City BPO (Pvt) Ltd. ("Company", "we", "us", or "our"). 
          </span>
          <span className="text-base sm:text-lg leading-7 text-slate-900 mb-6">
             These Terms of Use ("Terms") govern your access to and use of the Port City BPO corporate website at <span className="font-bold">https://portcitybpo.lk/</span> and its affiliated services and platforms, including but not limited to:
          </span>
          </p>
          
          <ul className="space-y-2 pl-5 list-disc text-base sm:text-lg text-slate-900 mb-6">
            <li>
              <strong className="text-slate-800 font-semibold">ASTRA</strong> — Recruitment and Talent Management System (https://astra.portcitybpo.lk/)
            </li>
            <li>
              <strong className="text-slate-800 font-semibold">CALM</strong> — Compliance and Learning Management Platform (https://portcalm.portcitybpo.lk/)
            </li>
            <li>
              Any other affiliated online systems, web services, and applications (collectively, the "Service").
            </li>
          </ul>
          
          <p className="text-base sm:text-lg leading-7 text-slate-900">
            By accessing or using the Service, you agree to these Terms. If you do <span className="font-bold">not</span> agree, <span className="font-bold">you must not use the Service.</span>
          </p>
        </section>

        {/* Section 1: Acceptance of Terms */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-3 uppercase">
            1. Acceptance of Terms
          </h2>
          <p className="text-base sm:text-lg leading-7 text-slate-900 mb-3">
            You agree that your use of the Service is governed by these Terms and all applicable laws and regulations.
          </p>
          <p className="text-base sm:text-lg leading-7 text-slate-900">
            You confirm that you are at least the age of majority in your jurisdiction or have parental/guardian consent to use the Service.
          </p>
        </section>

        {/* Section 2: Changes to Terms */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-3 uppercase">
            2. Changes to Terms
          </h2>
          <p className="text-base sm:text-lg leading-7 text-slate-900 mb-3">
            We may modify, update, or revise these Terms at any time by posting the changes on this page.
          </p>
          <p className="text-base sm:text-lg leading-7 text-slate-900 font-bold">
            Your continued use after changes means you accept the updated Terms.
          </p>
        </section>

        {/* Section 3: Use of the Service */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-3 uppercase">
            3. Use of the Service
          </h2>
          
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 mt-4">
            Eligibility
          </h3>
          <p className="text-base sm:text-lg leading-7 text-slate-900 mb-4">
            You must comply with all registration, user account, and password requirements if applicable. You are responsible for maintaining the confidentiality of your account credentials.
          </p>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
            Permitted Use
          </h3>
          <p className="text-base sm:text-lg leading-7 text-slate-900 mb-4">
            You may use the Service only for lawful purposes and according to these Terms.
          </p>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
            Prohibited Activities
          </h3>
          <p className="text-base sm:text-lg leading-7 text-slate-900 mb-3">
            Without limitation, you must not:
          </p>
          <ul className="space-y-2.5 pl-5 list-disc text-base sm:text-lg text-slate-900">
            <li>Use the Service to violate any law, regulation, or third-party right.</li>
            <li>Interfere with any other user's access or use of the Service.</li>
            <li>Reverse-engineer, copy, or misuse content or software on the Service.</li>
            <li>Attempt unauthorized access to the Service, servers, or networks.</li>
          </ul>
        </section>

        {/* Section 4: Intellectual Property */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-3 uppercase">
            4. Intellectual Property
          </h2>
          <p className="text-base sm:text-lg leading-7 text-slate-900 mb-3">
            All content on the Service — including text, graphics, logos, designs, software, and trademarks — is owned or licensed by Port City BPO.
          </p>
          <p className="text-base sm:text-lg leading-7 text-slate-900 mb-3">
            You are granted <span className="font-bold">a limited, non-exclusive, non-transferable license</span> to access and use the Service for its intended purpose only.
          </p>
          <p className="text-base sm:text-lg leading-7 text-slate-900">
            You may not reproduce, distribute, modify, create derivative works, or publicly display any content from the Service without our express permission.
          </p>
        </section>

        {/* Section 5: User-Generated Content */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-3 uppercase">
            5. User-Generated Content
          </h2>
          <p className="text-base sm:text-lg leading-7 text-slate-900 mb-3">
            Where your use of the Service allows you to submit content (e.g., profiles, applications, learning records), you retain ownership of your content but grant us a <span className="font-bold">worldwide, non-exclusive, royalty-free right</span> to use, host, and display it to deliver the Services.
          </p>
          <p className="text-base sm:text-lg leading-7 text-slate-900">
            You represent that you have all necessary rights to provide and share this content.
          </p>
        </section>

        {/* Section 6: Privacy and Data Use */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-3 uppercase">
            6. Privacy and Data Use
          </h2>
          <p className="text-base sm:text-lg leading-7 text-slate-900 mb-3">
            Your use of the Service is also governed by the Privacy Policy.
          </p>
          <p className="text-base sm:text-lg leading-7 text-slate-900">
            By using the Service, you consent to our collection and use of your information as described in that policy.
          </p>
        </section>

        {/* Section 7: Third-Party Links */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-3 uppercase">
            7. Third-Party Links
          </h2>
          <p className="text-base sm:text-lg leading-7 text-slate-900 mb-3">
            The Service may contain links to third-party websites or resources.
          </p>
          <p className="text-base sm:text-lg leading-7 text-slate-900">
            We are not responsible for the availability, accuracy, or policies of those external sites. You access them at your own risk.
          </p>
        </section>

        {/* Section 8: Termination & Suspension */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-3 uppercase">
            8. Termination & Suspension
          </h2>
          <p className="text-base sm:text-lg leading-7 text-slate-900">
            We may suspend or terminate your access at any time, without notice, for conduct that we determine violates these Terms or harms the operation of the Service.
          </p>
        </section>

        {/* Section 9: Disclaimers & Limitation of Liability */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-3 uppercase">
            9. Disclaimers & Limitation of Liability
          </h2>
          
          <h3 className="text-lg sm:text-xl font-bold font-bold text-slate-900 mb-3 mt-4">
            No Warranties
          </h3>
          <p className="text-base sm:text-lg leading-7 text-slate-900 mb-4">
            The Service is provided "as is" and "as available." We disclaim all warranties to the fullest extent permitted by law.
          </p>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
            Limitation of Liability
          </h3>
          <p className="text-base sm:text-lg leading-7 text-slate-900 mb-3">
            In no event shall Port City BPO, its affiliates, directors, employees, or partners be liable for:
          </p>
          <ul className="space-y-2.5 pl-5 list-disc text-base sm:text-lg text-slate-900 mb-3">
            <li>Any indirect, incidental, special, or consequential damages.</li>
            <li>Any loss of data, profits, or business interruption.</li>
          </ul>
          <p className="text-base sm:text-lg leading-7 text-slate-900">
            This applies whether based on warranty, contract, tort (including negligence), or any other legal theory.
          </p>
        </section>

        {/* Section 10: Indemnification */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-3 uppercase">
            10. Indemnification
          </h2>
          <p className="text-base sm:text-lg leading-7 text-slate-900 mb-3">
            You agree to indemnify, defend, and hold harmless Port City BPO and its affiliates from and against all claims, liabilities, damages, losses, and expenses arising from:
          </p>
          <ul className="space-y-2.5 pl-5 list-disc text-base sm:text-lg text-slate-900">
            <li>Your use of the Service;</li>
            <li>Any violation of these Terms;</li>
            <li>Your violation of any law or rights of a third party.</li>
          </ul>
        </section>

        {/* Section 11: Governing Law & Dispute Resolution */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-3 uppercase">
            11. Governing Law & Dispute Resolution
          </h2>
          <p className="text-base sm:text-lg leading-7 text-slate-900 mb-3">
            These Terms are governed by the laws of <span className="font-bold">Sri Lanka</span> without regard to conflict of laws principles.
          </p>
          <p className="text-base sm:text-lg leading-7 text-slate-900">
            Disputes shall be resolved in the competent courts of Sri Lanka unless otherwise agreed in writing.
          </p>
        </section>

        {/* Section 12: Contact Information */}
        <section className="mb-10">
  <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-3 uppercase">
    12. Contact Information
  </h2>
  <p className="text-base sm:text-lg leading-7 text-slate-900 mb-3">
    For questions regarding these Terms, please contact:
  </p>
  <div className="text-base sm:text-lg leading-7 text-slate-700 space-y-1">
    <p>
      <strong className="font-bold text-slate-900">Email:</strong>{" "}
      <a 
        href="mailto:contactus@portcitybpo.lk" 
        className="text-[#e2a951] font-medium hover:underline transition-all"
      >
        contactus@portcitybpo.lk
      </a>
    </p>
    <p>
      <strong className="font-bold text-slate-900">Address:</strong>{" "}
      2nd Floor, Aitken Spence Tower 2, No. 315, Vauxhall Street, Colombo – 02, 00200 Sri Lanka
    </p>
  </div>
</section>

        {/* Section 13: Acknowledgment & Acceptance */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-4 uppercase">
            13. Acknowledgment & Acceptance
          </h2>
          <p className="text-base sm:text-lg leading-7 text-slate-900">
            By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
          </p>
        </section>

      </main>
    </div>
  );
}