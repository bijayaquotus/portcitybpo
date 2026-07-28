import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-black text-white pt-12 pb-8 font-sans border-t border-zinc-900 select-none">
      {/* Upper Information Layout Grid */}
      <div className="max-w-10/12 mx-auto grid gap-10 grid-cols-1 md:grid-cols-[1.2fr_2.2fr_2.2fr] items-start text-[14px]">
        
        {/* Column 1: Clean Structured Navigation Links */}
        <div>
          <h3 className="font-bold text-[16px] text-white tracking-wide mb-4">
            Navigation
          </h3>
          <ul className="space-y-2.5 text-zinc-300">
            {[
              { label: "Home", path: "/" },
              { label: "Services", path: "/services" },
              { label: "Value Proposition", path: "/value-proposition" },
              { label: "About Us", path: "/about" },
              { label: "Team Events", path: "/newsroom/team-events" },
              { label: "Corporate Social Responsibility", path: "/newsroom/corporate-social-responsibility" },
              { label: "Careers", path: "/careers" },
              { label: "Contact Us", path: "/contact" }
            ].map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="hover:text-[#ffcc00] transition-colors duration-150 text-left bg-transparent border-none p-0 cursor-pointer decoration-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Editorial Text Block & Targeted Map Metric Card */}
        <div className="flex flex-col">
          <p className="text-zinc-300 leading-[1.6] max-w-[420px]">
            Port City BPO is supported by a professional team. If you have any queries, please feel free to contact us using the following methods:
          </p>

          <h4 className="font-bold text-[15px] text-white tracking-wide mt-6 mb-3">
            Contact Details:
          </h4>

          {/* Interactive Structured Location Wrapper Block */}
          <div className="flex items-start gap-3 text-zinc-300 max-w-[440px]">
            {/* Custom SVG Localizing Pin Matching Image Aspect Ratio */}
            <svg className="w-5 h-5 text-[#ff9933] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <p className="leading-[1.5]">
              2nd Floor, Aitken Spence Tower 2, No. 315, Vauxhall Street, Colombo - 02, 00200 Sri Lanka
            </p>
          </div>
        </div>

        {/* Column 3: Corporate Framework Statement & Highlighted Brand Handles */}
        <div className="flex flex-col md:items-end justify-between h-full md:text-right">
          {/* Regulatory Frame Standard Marker Container */}
          <div className="flex items-start md:items-center gap-2.5 text-zinc-300 md:justify-end">
            <span className="w-4 h-4 rounded-full border-2 border-[#ff9933] flex items-center justify-center shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff9933]" />
            </span>
            <p className="leading-tight">
              Our operations align with the legal framework of Sri Lanka.
            </p>
          </div>

          {/* Social Channels Track Group */}
<div className="flex items-center gap-5 mt-8 md:mt-auto md:justify-end">
  {/* Facebook */}
  <a 
    href="https://www.facebook.com/p/Port-City-BPO-61557281229375/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-zinc-400 hover:text-[#ff9933] transition-colors" 
    aria-label="Facebook"
  >
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z" />
    </svg>
  </a>
  
  {/* Instagram */}
  <a 
    href="https://www.instagram.com/portcitybpo/?hl=en" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-zinc-400 hover:text-[#ff9933] transition-colors" 
    aria-label="Instagram"
  >
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  </a>
  
  {/* LinkedIn */}
  <a 
    href="https://www.linkedin.com/company/port-city-bpo" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-zinc-400 hover:text-[#ff9933] transition-colors" 
    aria-label="LinkedIn"
  >
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  </a>
</div>
        </div>

      </div>

      {/* Horizontal Divider Line */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 mt-10">
        <div className="w-full border-t border-zinc-800" />
      </div>

      {/* Lower Copyright Metrics Bar */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 mt-6 flex flex-col items-center justify-center text-[13px] text-zinc-400 gap-2">
        <p>© 2026 Port City BPO (Pvt) Ltd.</p>

        <div className="flex items-center gap-4 mt-1">
  <a 
    href="/privacy-policy" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-inherit"
  >
    Privacy Policy
  </a>
  <span className="text-zinc-700 select-none">|</span>
  <a 
    href="/terms-of-use" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-inherit"
  >
    Terms of Use
  </a>
</div>
      </div>
    </footer>
  );
}