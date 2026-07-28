import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const subServices = [
  {
    id: "customer-service-outsourcing",
    label: "Customer Service Outsourcing",
  },
  {
    id: "technical-support-outsourcing",
    label: "Technical Support Outsourcing",
  },
  {
    id: "data-entry-and-processing-outsourcing",
    label: "Data Entry and Processing Outsourcing",
  },
  {
    id: "human-resources-outsourcing",
    label: "Human Resources Outsourcing",
  },
  {
    id: "finance-and-accounting-outsourcing",
    label: "Finance and Accounting Outsourcing",
  },
  {
    id: "marketing-outsourcing",
    label: "Marketing Outsourcing",
  },
];

const aboutItems = [
  { id: "who-we-are", label: "Who We Are" },
  { id: "board-of-directors", label: "Board of Directors" },
  { id: "leadership", label: "Leadership" },
  { id: "geo-coverage", label: "Coverage" },
];

const newsroomItems = [
  { id: "team-events", label: "Team Events" },
  { id: "corporate-social-responsibility", label: "Corporate Social Responsibility" },
];

const DropdownArrow = ({ isOpen }) => (
  <svg
    className={`w-5  h-6 ml-1.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </svg>
);

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showServices, setShowServices] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showNewsroom, setShowNewsroom] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);
  const [showMobileAbout, setShowMobileAbout] = useState(false);
  const [showMobileNewsroom, setShowMobileNewsroom] = useState(false);
  
  const servicesTimeoutRef = useRef(null);
  const aboutTimeoutRef = useRef(null);
  const newsroomTimeoutRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const newsroomRef = useRef(null);

  const handleNavigate = (path) => {
    navigate(path);
    setShowServices(false);
    setShowAbout(false);
    setShowNewsroom(false);
    setShowMobileServices(false);
    setShowMobileAbout(false);
    setShowMobileNewsroom(false);
    setMobileOpen(false);
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setShowServices(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setShowServices(false);
    }, 150);
  };

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
    }
    setShowAbout(true);
  };

  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setShowAbout(false);
    }, 150);
  };

  const handleNewsroomMouseEnter = () => {
    if (newsroomTimeoutRef.current) {
      clearTimeout(newsroomTimeoutRef.current);
    }
    setShowNewsroom(true);
  };

  const handleNewsroomMouseLeave = () => {
    newsroomTimeoutRef.current = setTimeout(() => {
      setShowNewsroom(false);
    }, 150);
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
      if (newsroomTimeoutRef.current) clearTimeout(newsroomTimeoutRef.current);
    };
  }, []);

  const getActivePage = () => {
    const path = location.pathname;
    if (path === "/") return "home";
    if (path === "/contact") return "contact";
    if (path === "/careers") return "careers";
    if (path === "/value-proposition") return "value";
    if (path === "/services") return "services";
    if (path.startsWith("/about")) return "about";
    if (path.startsWith("/service")) return "services";
    if (path.startsWith("/newsroom")) return "newsroom";
    return "home";
  };

  const active = getActivePage();

  const linkClass = (page) =>
    page === active
      ? "text-[#FFCC00] font-bold tracking-tight text-[14px] lg:text-[14.5px] border-b-4 border-[#FFCC00] pb-1"
      : "text-[#4dacf9] font-medium hover:text-[#FFCC00] transition-colors duration-150 tracking-tight text-[14px] lg:text-[14.5px]";

  // Handle mobile menu item clicks
  const handleMobileServiceClick = () => {
    navigate("/services");
    setShowMobileServices(false);
    setMobileOpen(false);
  };

  const handleMobileAboutClick = () => {
    navigate("/about");
    setShowMobileAbout(false);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white font-sans border-b border-white/10 select-none">
      {/* Primary Bar Component Header - Increased height on mobile */}
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-20 h-20 sm:h-20 lg:h-24">
        {/* Logo - Right on mobile, Left on desktop */}
        <div className="lg:flex-none order-last lg:order-first">
          <button
            type="button"
            onClick={() => handleNavigate("/")}
            className="flex items-center focus:outline-none bg-transparent border-none p-0 cursor-pointer"
          >
            <div className="h-14 sm:h-16 lg:h-20 flex items-center">
              <img
                src="/home/9-homepage.webp"
                alt="Port City BPO Brand Logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <button
            type="button"
            onClick={() => handleNavigate("/")}
            className={`${linkClass("home")} bg-transparent border-none cursor-pointer p-0`}
          >
             <span className="text-[16px]"> Home</span>
          </button>

          {/* Services Structural Mega Menu Toggle Link */}
          <div 
            className="relative"
            ref={servicesRef}
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button
              type="button"
              onClick={() => handleNavigate("/services")}
              className={`${linkClass("services")} bg-transparent border-none cursor-pointer p-0 flex items-center text-[16px]`}
            >
             <span className="text-[16px]"> Services</span> <DropdownArrow isOpen={showServices} />
            </button>

            {/* Services Mega Menu Container - Column layout */}
            {showServices && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white z-50"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <div className="py-0">
                  {subServices.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavigate(`/service/${item.id}`)}
                      className="w-full px-6 py-3 text-left text-[16px] text-sky-600 hover:text-[#f4a631] hover:bg-gray-50 font-medium transition-colors border-gray-300 border-b bg-transparent cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleNavigate("/value-proposition")}
            className={`${linkClass("value")} bg-transparent border-none cursor-pointer p-0`}
          >
             <span className="text-[16px]"> Value Proposition</span>
          </button>

          {/* About Us Mega Menu Toggle Link */}
          <div 
            className="relative"
            ref={aboutRef}
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <button
              type="button"
              onClick={() => handleNavigate("/about")}
              className={`${linkClass("about")} bg-transparent border-none cursor-pointer p-0 flex items-center`}
            >
              <span className="text-[16px]"> About Us</span> <DropdownArrow isOpen={showAbout} />
            </button>

            {/* About Us Mega Menu Container - Column layout */}
            {showAbout && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white z-50"
                onMouseEnter={handleAboutMouseEnter}
                onMouseLeave={handleAboutMouseLeave}
              >
                <div className="py-0">
                  {aboutItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavigate(`/about/${item.id}`)}
                      className="w-full px-6 py-3 text-left text-[16px] text-sky-600 hover:text-[#f4a631] hover:bg-gray-50 font-medium transition-colors border-gray-300 border-b bg-transparent cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Newsroom Mega Menu Toggle Link - NOT CLICKABLE on desktop */}
          <div 
            className="relative"
            ref={newsroomRef}
            onMouseEnter={handleNewsroomMouseEnter}
            onMouseLeave={handleNewsroomMouseLeave}
          >
            <div
              className={`${linkClass("newsroom")} flex items-center cursor-default`}
            >
              <span className="text-[16px]"> Newsroom</span> <DropdownArrow isOpen={showNewsroom} />
            </div>

            {/* Newsroom Mega Menu Container - Column layout */}
            {showNewsroom && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white z-50"
                onMouseEnter={handleNewsroomMouseEnter}
                onMouseLeave={handleNewsroomMouseLeave}
              >
                <div className="py-0">
                  {newsroomItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavigate(`/newsroom/${item.id}`)}
                      className="w-full px-6 py-3 text-left text-[16px] text-sky-600 hover:text-[#f4a631] hover:bg-gray-50 font-medium transition-colors border-gray-300 border-b bg-transparent cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleNavigate("/careers")}
            className={`${linkClass("careers")} bg-transparent border-none cursor-pointer p-0`}
          >
            <span className="text-[16px]"> Careers</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavigate("/contact")}
            className={`${linkClass("contact")} bg-transparent border-none cursor-pointer p-0`}
          >
            <span className="text-[16px]"> Contact Us</span>
          </button>
        </nav>

        {/* Mobile Sidebar Interactive Launcher - Left side on mobile */}
        <div className="lg:hidden flex justify-start flex-1 order-first lg:order-last">
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 focus:outline-none border-none bg-transparent cursor-pointer transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Slide out Overlay Drawer */}
      {mobileOpen && (
        <>
          {/* Backdrop matching your dark system look */}
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-300"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer configured to match screenshot styling exactly */}
          <div className="fixed top-0 right-0 bottom-0 left-0 bg-[#fbfbfb] text-[#333333] lg:hidden flex flex-col z-50 overflow-y-auto px-6 pt-5">
            
            {/* Top Close Section */}
            <div className="flex justify-end mb-6">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="h-[42px] w-[52px] border border-[#f0d09e] rounded-md bg-transparent flex items-center justify-center text-[#e2a951] font-light text-xl cursor-pointer"
                aria-label="Close menu"
              >
                X
              </button>
            </div>

            {/* Menu List */}
            <nav className="flex flex-col space-y-7 text-[16px] font-normal tracking-wide pl-2">
              <button 
                type="button" 
                onClick={() => handleNavigate("/")} 
                className="w-full text-left text-[#222222] bg-transparent border-none cursor-pointer"
              >
                Home
              </button>

              <div className="w-full">
                <div className="flex justify-between items-center w-full">
                  <span 
                    onClick={handleMobileServiceClick} 
                    className="text-[#222222] cursor-pointer flex-1"
                  >
                    Services
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowMobileServices((s) => !s);
                    }}
                    className="h-7 w-[52px] rounded-full border border-zinc-500 flex items-center justify-center bg-transparent cursor-pointer text-[#333333]"
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${showMobileServices ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                </div>
                {showMobileServices && (
                  <div className="pl-4 mt-3 space-y-3 border-l border-zinc-200">
                    {subServices.map((s) => (
                      <button 
                        key={s.id} 
                        onClick={() => handleNavigate(`/service/${s.id}`)} 
                        className="block w-full text-left py-1 text-[15px] text-zinc-600 hover:text-amber-500 transition-colors bg-transparent border-none cursor-pointer"
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button 
                type="button" 
                onClick={() => handleNavigate("/value-proposition")} 
                className="w-full text-left text-[#222222] bg-transparent border-none cursor-pointer"
              >
                Value Proposition
              </button>

              <div className="w-full">
                <div className="flex justify-between items-center w-full">
                  <span 
                    onClick={handleMobileAboutClick} 
                    className="text-[#222222] cursor-pointer flex-1"
                  >
                    About Us
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowMobileAbout((s) => !s);
                    }}
                    className="h-7 w-[52px] rounded-full border border-zinc-500 flex items-center justify-center bg-transparent cursor-pointer text-[#333333]"
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${showMobileAbout ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                </div>
                {showMobileAbout && (
                  <div className="pl-4 mt-3 space-y-3 border-l border-zinc-200">
                    {aboutItems.map((a) => (
                      <button 
                        key={a.id} 
                        onClick={() => handleNavigate(`/about/${a.id}`)} 
                        className="block w-full text-left py-1 text-[15px] text-zinc-600 hover:text-amber-500 transition-colors bg-transparent border-none cursor-pointer"
                      >
                        {a.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="w-full">
                <div className="flex justify-between items-center w-full">
                  <span className="text-[#222222]">Newsroom</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowMobileNewsroom((s) => !s);
                    }}
                    className="h-7 w-[52px] rounded-full border border-zinc-500 flex items-center justify-center bg-transparent cursor-pointer text-[#333333]"
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${showMobileNewsroom ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                </div>
                {showMobileNewsroom && (
                  <div className="pl-4 mt-3 space-y-3 border-l border-zinc-200 ">
                    {newsroomItems.map((n) => (
                      <button 
                        key={n.id} 
                        onClick={() => handleNavigate(`/newsroom/${n.id}`)} 
                        className="block w-full text-left py-1 text-[15px] text-zinc-600 hover:text-amber-500 transition-colors bg-transparent border-none cursor-pointer"
                      >
                        {n.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button 
                type="button" 
                onClick={() => handleNavigate("/careers")} 
                className="w-full text-left text-[#999999] bg-transparent border-none cursor-pointer"
              >
                Careers
              </button>

              <button 
                type="button" 
                onClick={() => handleNavigate("/contact")} 
                className="w-full text-left text-[#222222] bg-transparent border-none cursor-pointer"
              >
                Contact Us
              </button>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}