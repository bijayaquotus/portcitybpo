import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import VideoSection from "../components/VideoSection";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

export default function Home({ onNavigate }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <SEO
  title="Port City BPO (Pvt) Ltd | Business Process Outsourcing & Offshore Solutions"
  description="Port City BPO is a CPCEC-authorised Business Process Outsourcing (BPO) company delivering customer support, back-office operations, finance, HR, and scalable offshore solutions for businesses worldwide."
  url="https://portcitybpo.lk/"
/>
      <main>
        <Hero />

        <About />
        <Services />
        <VideoSection />

        <div
          className="relative w-full min-h-[380px] md:min-h-[460px] lg:min-h-[500px] bg-cover bg-no-repeat flex items-center overflow-hidden select-none bg-[position:40%_center] md:bg-center"
          style={{
            backgroundImage: `url('/home/1-homepage.webp')`,
          }}
        >
          {/* Dark overlay for better text readability on mobile */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/30 lg:bg-transparent lg:bg-gradient-to-r lg:from-[#114b74]/90 lg:via-[#165c8d]/60 lg:to-transparent pointer-events-none" />

          <div className="relative z-10 w-full max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex flex-col justify-center min-h-[380px] md:min-h-[460px] lg:min-h-[500px] py-8 md:py-10 lg:py-0">
              {/* Left Side: Copywriting Content Stack */}
              <div className="max-w-full md:max-w-[60%] lg:max-w-[50%] xl:max-w-[45%]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight">
                  READY TO CONNECT?
                </h2>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-100/90 font-normal leading-relaxed">
                  Send us an email directly at{" "}
                  <a
                    href="mailto:contactus@portcitybpo.lk"
                    className="text-[#ffcc00] font-medium hover:underline hover:text-[#ffe066] transition-all duration-200 break-words"
                  >
                    contactus@portcitybpo.lk
                  </a>{" "}
                  or fill out the{" "}
                  <a
                    href="/contact"
                    className="text-[#ffcc00] font-medium hover:underline hover:text-[#ffe066] transition-all duration-200"
                  >
                    form
                  </a>{" "}
                  and let's start the conversation.
                </p>

                {/* Precision Offset-Accent CTA Button Group */}
                <div className="mt-6 sm:mt-8 mb-4 md:mb-0 relative inline-block">
                  {/* Geometric orange angle backing box */}
                  <div className="absolute -left-1.5 -top-1.5 w-12 h-8 sm:w-16 sm:h-10 bg-[#ff9933]" />

                  <button
                    onClick={() => {
                      navigate("/contact");
                    }}
                    type="button"
                    className="relative z-10 inline-flex items-center justify-between bg-[#f8f9fa] px-4 sm:px-6 py-2.5 sm:py-3 min-w-[140px] sm:min-w-[160px] text-base sm:text-[18px] font-bold text-black tracking-tight shadow-md hover:bg-white hover:shadow-lg transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ffcc00] focus:ring-offset-2"
                  >
                    <span>Contact Us</span>
                    <svg
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black ml-3 sm:ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
