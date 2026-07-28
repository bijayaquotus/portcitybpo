import React from "react";
import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-blue-500/20">
      <SEO
  title="Privacy Policy | Port City BPO (Pvt) Ltd"
  description="Read Port City BPO's Privacy Policy to understand how we collect, use, store, and protect your personal information when you use our website and services."
  url="https://portcitybpo.lk/privacy-policy"
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
          Privacy Policy
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
            Introduction
          </h2>
          <p className="text-base sm:text-lg leading-7 text-slate-900 mb-6">
            We at Port City BPO (Private) Ltd. value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.
          </p>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
            Information We Collect
          </h3>
          <ul className="space-y-2.5 pl-5 list-disc text-base sm:text-lg text-slate-900">
            <li>
              <strong className="text-slate-800 font-semibold">Personal Information:</strong> Name, email, phone number, address.
            </li>
            <li>
              <strong className="text-slate-800 font-semibold">Technical Data:</strong> IP address, browser type, operating system.
            </li>
            <li>
              <strong className="text-slate-800 font-semibold">Usage Data:</strong> How you use our website and services.
            </li>
          </ul>
        </section>

        {/* Section: How We Collect Information */}
        <section className="mb-10">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
            How We Collect Information
          </h3>
          <ul className="space-y-2.5 pl-5 list-disc text-base sm:text-lg text-slate-900">
            <li>
              <strong className="text-slate-800 font-semibold">Directly from You:</strong> When you fill out forms or contact us.
            </li>
            <li>
              <strong className="text-slate-800 font-semibold">Automatically:</strong> Through cookies and similar technologies.
            </li>
            <li>
              <strong className="text-slate-800 font-semibold">From Third Parties:</strong> Publicly available sources.
            </li>
          </ul>
        </section>

        {/* Section: How We Use Your Information */}
        <section className="mb-10">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
            How We Use Your Information
          </h3>
          <ul className="space-y-2 pl-5 list-disc text-base sm:text-lg text-slate-900">
            <li>To provide and improve our services.</li>
            <li>To communicate with you.</li>
            <li>To process transactions.</li>
            <li>To prevent fraud.</li>
          </ul>
        </section>

        {/* Section: Sharing Your Information */}
        <section className="mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
            Sharing Your Information
          </h3>
          <p className="text-base sm:text-lg text-slate-900 mb-3">
            We may share your information with:
          </p>
          <ul className="space-y-2.5 pl-5 list-disc text-base sm:text-lg text-slate-900">
            <li>
              <strong className="text-slate-800 font-semibold">Service Providers:</strong> Who help us operate our business.
            </li>
            <li>
              <strong className="text-slate-800 font-semibold">Affiliates:</strong> Within our company group.
            </li>
            <li>
              <strong className="text-slate-800 font-semibold">Legal Reasons:</strong> If required by law.
            </li>
          </ul>
        </section>

        {/* Divider line */}
        <hr className="border-slate-100 my-8" />

        {/* Section: Data Security */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0066b2] tracking-tight mb-3 uppercase">
            Data Security
          </h2>
          <p className="text-base sm:text-lg leading-7 text-slate-900">
            We use security measures to protect your data. Only authorized personnel can access your information.
          </p>
        </section>

        {/* Section: Your Rights */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0066b2] tracking-tight mb-3 uppercase">
            Your Rights
          </h2>
          <p className="text-base sm:text-lg leading-7 text-slate-900">
            Depending on your location, you may have rights such as accessing, correcting, or deleting your data.
          </p>
        </section>

        {/* Section: Changes To This Policy */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0066b2] tracking-tight mb-3 uppercase">
            Changes to this Policy
          </h2>
          <p className="text-base sm:text-lg leading-7 text-slate-900">
            We may update this policy. Check this page for updates.
          </p>
        </section>

        {/* Section: Contact Us */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0066b2] tracking-tight mb-4 uppercase">
            Contact Us
          </h2>
          <div className="text-base sm:text-lg leading-7 text-slate-700 space-y-1">
            <p className="font-semibold text-slate-900 text-base sm:text-lg">For questions, contact us at:</p>
            <p>Port City BPO (Private) Ltd.</p>
            <p>2nd Floor, Aitken Spence Tower 2,</p>
            <p>No. 315, Vauxhall Street, Colombo – 02, 00200 Sri Lanka</p>
            
            <div className="pt-3 flex flex-col space-y-1">
              <a 
                href="mailto:contactus@portcity.angstrohm.tech" 
                className="text-[#e2a951] font-medium hover:underline w-fit transition-all text-base sm:text-lg"
              >
                contactus@portcity.angstrohm.tech
              </a>
              <a 
                href="tel:+940113509950" 
                className="text-[#e2a951] font-medium hover:underline w-fit transition-all text-base sm:text-lg"
              >
                + 94 011 350 9950
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}