import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import heroImg from "../assets/hero.png";
import ConnectBanner from "../components/ConnectBanner";
import SEO from "../components/SEO";

const sections = [
  {
    id: "who-we-are",
    title: "Who We Are",
    description:
      "Port City BPO (Pvt) Ltd. is authorised by the Colombo Port City Economic Commission and operates as an approved business process outsourcing partner under the Port City framework.",
    buttonText: "Learn More",
  },
  {
    id: "geo-coverage",
    title: "Coverage",
    description:
      "Port City BPO serves clients across Sri Lanka, India, Vietnam, the Philippines, Thailand, Japan, Korea, and other global markets with flexible offshore delivery models.",
    buttonText: "Learn More",
  },
  {
    id: "board-of-directors",
    title: "Board of Directors",
    description:
      "Our Board of Directors is accountable for the Group’s performance, strategic direction, and governance, ensuring we deliver value and sustainable growth for stakeholders.",
    buttonText: "Learn More",
  },
  {
    id: "leadership",
    title: "Leadership Team",
    description:
      "The Leadership Team drives execution, operational excellence, and long-term strategy while maintaining accountability to clients, employees, and shareholders.",
    buttonText: "Learn More",
  },
];

const leadershipTeam = [
  {
    name: "Gary Lee Seaton",
    title: "CEO",
    image:
      "/about/1-aboutgaryleeseaton.webp",
  },
  {
    name: "Edwin Tan Saik Chin",
    title: "Chief Operating Officer",
    image:
      "/about/2-aboutedwintansaikhin.webp",
  },
  {
    name: "Yudesh Gunaratne",
    title: "General Manager - Operations",
    image:
      "/about/3-aboutyudeshgunaratne.webp",
  },
  {
    name: "Sajda Hussain",
    title: "Financial Controller",
    image:
      "/about/4-aboutsajdahussain.webp",
  },
  {
    name: "Teo Kai Jie",
    title: "Manager - Business Development",
    image:
      "/about/5-aboutteokaijie.webp",
  },
];

const boardMembers = [
  {
    name: "Dato' Poh Yang Hong",
    title: "Chairperson of the Board and Director",
    description:
      "Dato' Poh is the Group Managing Director of IRIS Corporation Berhad and IRIS Group Berhad, bringing over 30 years of corporate and investment leadership experience, including senior roles within the Hong Leong Group. He previously served as President and Group Managing Director of IRIS Corporation Berhad from 2018 to 2021.",
    image:
      "/about/6-aboutdatopohyanghong.png",
  },
  {
    name: "Ms. Stasshani Jayawardena",
    title: "Director",
    description:
      "Ms. Stasshani Jayawardena is the youngest and first female Board Member of Aitken Spence PLC. She heads its Tourism sector and holds key leadership roles across the Group. She was an intern under Hillary Clinton and Bill Clinton in 2003 and later served as Sri Lanka's Ambassador for EY NextGen Club. Recognized for her contributions to hospitality and business, she has received multiple awards.",
    image:
      "/about/7-aboutms.stasshanijayawardena.png",
  },
  {
    name: "Ms. Nilanthi Sivapragasam",
    title: "Director",
    description:
      "Ms. Nilanthi Sivapragasam joined Aitken Spence in 1986 and is the Group's Chief Financial Officer. She is also Managing Director of Aitken Spence Corporate Finance, Joint Managing Director of CINEC Campus, and a Director of several subsidiaries and joint ventures.",
    image:
      "/about/8-aboutms.nilanthisivapragasam.png",
  },
  {
    name: "Dr. Rohan Fernando",
    title: "Director",
    description:
      "Dr. Rohan Fernando joined Aitken Spence in 1994 and became Managing Director of its plantation sector in 1997. He joined the Main Board in 2005 and leads the Group's sustainability efforts. He was formerly Chairman of the UN Global Compact Network in Sri Lanka and received the Lifetime Marker's Achievement Award from AIMG in 2022.",
    image:
      "/about/9-aboutdr.rohanfernando.png",
  },
  {
    name: "Mr. H'ng Boon Harng",
    title: "Director",
    description:
      "Mr. H'ng Boon Harng has been the Chief Financial Officer (CFO) of IRIS Corporation Berhad since August 2017. He is responsible for overseeing the company's financial strategy, management, and reporting. His role is crucial in driving financial efficiency and supporting the company's growth initiatives.",
    image:
      "/about/10-aboutMr.hngboonharng.png",
  },
  {
    name: "Mr. Tan Yi Ming",
    title: "Director",
    description:
      "Mr. Tan Yi-Ming is the Assistant General Manager for Domestic Sales at IRIS Corporation Berhad, where he plays a pivotal role in driving revenue growth and expanding the company's market presence. With a strong background in sales strategy and customer relationship management, he is instrumental in streamlining domestic operations and enhancing overall business performance.",
    image:
      "/about/11-aboutmr.tanyiming.png",
  },
  {
    name: "Mr. Tang Tick Huar",
    title: "Director",
    description:
      "Mr. Tang Tick Huar is a seasoned real estate professional with 20+ years of experience in property development and valuation currently serving as the Director of Laurelcap Sdn Bhd. At the peak of his property career, he managed a portfolio valued at USD 200 million.",
    image:
      "/about/12-aboutmr.tangtickhuar.png",
  },
  {
    name: "Mr. Gary Lee Seaton",
    title: "Director & CEO",
    description:
      "Mr. Gary Lee Seaton has built a distinguished career over two decades in construction, property development, and facility management, managing significant asset portfolios. At the peak of his property career, he managed a portfolio valued at USD 200 million.",
    image:
      "/about/13-aboutmr.garyleeseaton.png",
  },
];

const categories = [
  {
    img: "/about/14-aboutcategories.webp",
    alt: "Hotels and tourism visualization",
    items: ["Hotels", "Destination Management", "Airline GSA"],
  },
  {
    img: "/about/15-aboutcategories.webp",
    alt: "Maritime and logistics container yard",
    items: [
      "Maritime & Port Services",
      "Freight Forwarding, Courier & Airline GSA (Cargo)",
      "Aitken Spence Logistics",
    ],
  },
  {
    img: "/about/16-aboutcategories.webp",
    alt: "Lush green agricultural terraced plantations",
    items: [
      "Plantations",
      "Printing & Packaging",
      "Apparel Manufacture",
      "Power Generation",
    ],
  },
  {
    img: "/about/17-aboutcategories.webp",
    alt: "Real estate and financial services overview",
    items: [
      "Financial Services",
      "Elevator Agency",
      "Insurance",
      "BPO Services",
      "Property Management",
    ],
  },
];

const portfolioData = [
  {
    img: "/about/18-aboutportfolio.jpg",
    alt: "Biometric authentication on smart handheld device interface",
    items: [
      "eID Solution",
      "Digital ID Solution",
      "Driver's License Solution",
      "Voter's Card Solution",
      "Smart Card Solution",
    ],
  },
  {
    img: "/about/19-aboutportfolio.jpg",
    alt: "Global electronic biometric passport document verification spreads",
    items: ["ePassport Solution", "eVisa Solution", "Secure Document Solution"],
  },
  {
    img: "/about/20-aboutportfolio.jpg",
    alt: "Secure multi-terminal biometric reading peripheral smart system desk",
    items: ["Smart Devices", "Smart Kiosk", "Mobile Smart Terminal"],
  },
];

export default function About({ onNavigate }) {
  const { section } = useParams();
  const navigate = useNavigate();
  const sectionRefs = {
    "who-we-are": useRef(null),
    "geo-coverage": useRef(null),
    "board-of-directors": useRef(null),
    leadership: useRef(null),
  };

  const activeSection = section || "who-we-are";

  useEffect(() => {
    if (activeSection && sectionRefs[activeSection]?.current) {
      sectionRefs[activeSection].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeSection]);

  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSectionClick = (id) => {
    if (
      id === "leadership" ||
      id === "board-of-directors" ||
      id === "who-we-are" ||
      id === "geo-coverage"
    ) {
      navigate(`/about/${id}`);
      return;
    }
    scrollToSection(id);
  };

  if (activeSection === "who-we-are") {
    return (
      <div className="min-h-screen bg-white ">
        <SEO
          title="Who We Are | Port City BPO (Pvt) Ltd"
          description="Learn about Port City BPO, a Business Process Outsourcing (BPO) company and an Authorised Person approved by the Colombo Port City Economic Commission (CPCEC)."
          url="https://portcitybpo.lk/about/who-we-are"
        />
        <main>
          {/* Hero Section - Responsive */}
          <section className="relative text-white">
            <img
              src="/about/21-abouthero.jpg"
              alt="Who we are background"
              className="absolute inset-0 w-full object-cover opacity-100"
              style={{ height: "400px" }}
            />
            <div
              className="absolute inset-0 bg-[#0169ab]/30"
              style={{ height: "400px" }}
            ></div>
            <div
              className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center"
              style={{ paddingTop: "160px", paddingBottom: "160px" }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-[0.1em] mt-5">
                WHO WE ARE
              </h1>
            </div>
          </section>

          {/* Main Content - Responsive */}
          <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white ">
            <div className="max-w-full lg:max-w-10/12 mx-auto  space-y-2 sm:space-y-16 md:space-y-20 flex flex-col justify-center items-center px-5">
              <div className="space-y-4 sm:space-y-6 md:space-y-8  xl:px-20">
                <div className="mb-8 sm:mb-10 md:mb-12">
                  <h2 className="heading font-bold text-[#005ca9] tracking-tight leading-tight uppercase">
                    Who We Are
                  </h2>
                </div>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  Port City BPO is a Business Process Outsourcing (BPO) company.
                  Our organisation is an Authorised Person approved by the
                  Colombo Port City Economic Commission (CPCEC).
                </p>
              </div>

              {/* Connecting Diagram - Responsive */}
              <div className="relative max-w-10/12 mx-auto py-6 sm:py-8">
                <svg
                  className="absolute inset-0 w-full h-full hidden lg:block pointer-events-none"
                  viewBox="0 0 1000 500"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 260,100 C 260,300 310,300 352,300"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="2"
                  />
                  <circle
                    cx="352"
                    cy="300"
                    r="6"
                    fill="#38bdf8"
                    stroke="#0284c7"
                    strokeWidth="2"
                  />
                  <path
                    d="M 740,100 C 740,300 690,300 648,300"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="2"
                  />
                  <circle
                    cx="648"
                    cy="300"
                    r="6"
                    fill="#38bdf8"
                    stroke="#0284c7"
                    strokeWidth="2"
                  />
                </svg>

                <div className="grid gap-8 sm:gap-12 md:gap-16 md:grid-cols-2 justify-items-center relative z-10">
                  <div className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] rounded-[20px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden shadow-xl border border-slate-100 bg-white">
                    <img
                      src="/about/22-abouthero.webp"
                      alt="Aitken Spence International"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] rounded-[20px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden shadow-xl border border-slate-100 bg-white">
                    <img
                      src="/about/23-abouthero.webp"
                      alt="Iris Tech Ventures"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] md:col-span-2 rounded-[20px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden shadow-2xl border-2 border-sky-400 p-2 bg-white">
                    <img
                      src="/about/24-abouthero.png"
                      alt="Port City BPO logo"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Aitken Spence Section - Responsive */}
              <section className="bg-white py-12 sm:py-16 md:py-20 px-0 sm:px-6 lg:px-12 xl:px-20 select-none">
                <div className="mx-auto">
                  <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-10 sm:mb-12 md:mb-16">
                    <h3 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] font-bold text-[#005ca9] tracking-tight leading-tight uppercase">
                      AITKEN SPENCE PLC
                    </h3>
                    <p className="text-sm sm:text-[15px] md:text-[16px] text-zinc-600 font-normal leading-relaxed max-w-6xl text-justify">
                      Aitken Spence PLC, listed on the Colombo Stock Exchange
                      since 1983, boasts a diversified portfolio spanning over
                      150 years. Originating in 1868 as a trade in goods from
                      the Southern Port of Sri Lanka, it has since expanded its
                      operations to encompass 10 countries across Africa and
                      Asia, pioneering projects in tourism, maritime, logistics,
                      energy, plantations, services and apparel in the region.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
                    {categories.map((cat, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col space-y-4 sm:space-y-5"
                      >
                        <div className="rounded-[16px] sm:rounded-[20px] overflow-hidden bg-white shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-slate-100 aspect-square max-w-[280px] sm:max-w-[320px] lg:max-w-full mx-auto lg:mx-0">
                          <img
                            src={cat.img}
                            alt={cat.alt}
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <ul className="space-y-2 sm:space-y-3 px-2 text-left">
                          {cat.items.map((item, i) => (
                            <li
                              key={i}
                              className="text-[13px] sm:text-[14px] md:text-[15px] text-zinc-700 font-normal leading-relaxed flex items-start"
                            >
                              <span className="mr-2 text-zinc-400 select-none text-base sm:text-lg">
                                •
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* IRIS Corporation Section - Responsive */}
              <section className="bg-white py-12 sm:py-16 md:py-20 px-0 sm:px-6 lg:px-12 xl:px-20  select-none">
                <div className="">
                  <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-10 sm:mb-12 md:mb-16">
                    <h3 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] font-bold text-[#005ca9] tracking-tight leading-tight uppercase">
                      IRIS CORPORATION BERHAD
                    </h3>
                    <p className="text-sm sm:text-[15px] md:text-[16px] text-zinc-600 font-normal leading-relaxed max-w-6xl text-justify">
                      IRIS Corporation Berhad, listed on the Bursa Malaysia
                      (ACE) market since 2002, was established in 1994 as an
                      MSC-status technology innovator. Specializing in Trust
                      Identity products and solutions, IRIS is a global leader
                      in eID, ePassport, Automated Border Control, and identity
                      management ecosystems, with a presence in over 34
                      countries.
                    </p>
                  </div>

                  <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start">
                    {portfolioData.map((column, colIdx) => (
                      <div
                        key={colIdx}
                        className="flex flex-col space-y-4 sm:space-y-5"
                      >
                        <div className="rounded-[16px] sm:rounded-[20px] overflow-hidden bg-white shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-slate-100 aspect-square">
                          <img
                            src={column.img}
                            alt={column.alt}
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <ul className="space-y-2 sm:space-y-3 px-2 text-left">
                          {column.items.map((listItem, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="text-[13px] sm:text-[14px] md:text-[15px] text-zinc-700 font-normal leading-relaxed flex items-start"
                            >
                              <span className="mr-2 text-zinc-400 select-none text-base sm:text-lg">
                                •
                              </span>
                              <span>{listItem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Port City BPO Section - Responsive */}
              <section className="bg-white py-12 sm:py-16 md:py-20 px-0 sm:px-6 lg:px-12 xl:px-20  select-none">
                <div className=" mx-auto">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10 md:gap-12 lg:gap-20">
                    <div className="w-full md:w-auto flex-shrink-0 max-w-[400px] sm:max-w-[500px] rounded-[16px] overflow-hidden bg-white shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-200/60 aspect-[4/3]">
                      <img
                        src="/about/25-abouthero.jpg"
                        alt="Colombo Port City architectural coastal landscape overview development"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-center pt-2 text-left space-y-4 sm:space-y-5 md:space-y-6">
                      <h3 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[38px] xl:text-[44px] font-bold text-[#005ca9] tracking-tight leading-tight uppercase font-sans">
                        PORT CITY BPO (PVT) LTD
                      </h3>
                      <div className="space-y-4 sm:space-y-5 md:space-y-6 max-w-4xl">
                        <p className="text-sm sm:text-[15px] md:text-[16px] text-zinc-600 font-normal leading-relaxed">
                          Our organisation is an Authorised Person approved by
                          the Colombo Port City Economic Commission (CPCEC)
                          specializing in BPO.
                        </p>
                        <p className="text-sm sm:text-[15px] md:text-[16px] text-zinc-600 font-normal leading-relaxed">
                          An Authorised Person is an entity, that the CPCEC has
                          granted a license in terms of the Colombo Port City
                          Economic Commission Act No. 11 of 2021.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CPCEC Section - Responsive */}
              <div className=" px-0 sm:px-6 lg:px-12 xl:px-20  flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 justify-center items-center  py-6 sm:py-8">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[38px] xl:text-[44px] font-bold text-[#005ca9] tracking-tight leading-tight uppercase font-sans">
                    THE COLOMBO PORT CITY ECONOMIC COMMISSION (CPCEC)
                  </h3>
                  <p className="mt-4 sm:mt-5 md:mt-6 text-slate-600 text-sm sm:text-base leading-relaxed">
                    The Colombo Port City Economic Commission (CPCEC) was
                    established as a Single Window Investment facilitator to
                    assist investors, businesses, and resident conduct their
                    activities seamlessly and efficiently.
                  </p>
                  <p className="mt-4 sm:mt-5 text-slate-600 text-sm sm:text-base leading-relaxed">
                    CPCEC is the sole GoSL entity entrusted and authorised by
                    way of the Colombo Port City Economic Commission Act, No. 11
                    of 2021, and is responsible for the granting of incentives
                    or exemptions to the investor for the promotion of Business
                    Strategic Importance within the Special Economic Zone (SEZ).
                  </p>
                  <p className="mt-4 sm:mt-5 text-slate-600 text-sm sm:text-base leading-relaxed">
                    The Colombo Port City Economic Commission Act, No. 11 of
                    2021 was approved by the Government of Sri Lanka in May
                    2011, with a modern legal framework and attractive
                    regulations focused on ease of doing business.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src="/about/26-abouthero.webp"
                    alt="CPCEC"
                    className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          <ConnectBanner
            title="How to get in touch?"
            descriptionPrefix="Feel free to reach out to us via the contact form "
            formLink="/contact"
            formText="here"
            descriptionMiddle="or drop us an email at"
            email="contactus@portcitybpo.lk"
            emailText="contactus@portcitybpo.lk"
            descriptionSuffix=". We are eager to hear from you."
            buttonText="Contact Us"
            backgroundImage="/about/27-aboutbanner.webp"
          />
        </main>
      </div>
    );
  }

  if (activeSection === "geo-coverage") {
    return (
      <div className="min-h-screen bg-white ">
        <SEO
  title="Geographic Coverage | Port City BPO (Pvt) Ltd"
  description="Explore Port City BPO's global service coverage across Sri Lanka, Malaysia, Hong Kong, Thailand, the Philippines, Cambodia, and other international markets."
  url="https://portcitybpo.lk/about/geo-coverage"
/>
        <main>
          <section className="relative overflow-hidden bg-slate-950 text-white">
            <img
              src="/about/28-abouthero.jpg"
              alt="Geographic coverage background"
              className="absolute inset-0 w-screen object- opacity-100"
              style={{ height: "500px" }}
            />
            <div
              className="absolute inset-0 bg-[#0169ab]/30"
              style={{ height: "500px" }}
            ></div>
            <div
              className="relative z-10 max-w-10/12 mx-auto px-4 sm:px-6 text-center"
              style={{ paddingTop: "160px", paddingBottom: "160px" }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[0.1em]">
                Geographic Coverage
              </h1>
            </div>
          </section>

          <section className="py-12 sm:py-16 md:py-20">
            <div className="max-w-10/12 mx-auto px-4 sm:px-6">
              <div className="mb-8 sm:mb-10 md:mb-12">
                
                <h2 className="heading font-bold text-[#005ca9] tracking-tight leading-tight uppercase">
                  COUNTRIES WE SERVE
                </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-3xl">
  Port City BPO (Pvt) Ltd. provides offshore support from Sri Lanka through language-aligned teams.
</p>
<p className="mt-4 sm:mt-5 md:mt-6 text-slate-600 text-sm sm:text-base max-w-3xl">
  We serve the following markets by housing the relevant nationalities and language capabilities.
</p>
                 
                <ul className="mt-4 sm:mt-5 md:mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 list-disc list-inside gap-x-6 gap-y-1 sm:gap-y-2 text-slate-700 text-sm sm:text-base">
  <li>Malaysia</li>
  <li>Hong Kong</li>
  <li>Thailand</li>
  <li>Philippines</li>
  <li>Cambodia</li>
  <li>Indonesia</li>
  <li>Vietnam</li>
  <li>Singapore</li>
  <li>China</li>
  <li>Bangladesh</li>
  <li>India</li>
  <li>Taiwan</li>
  <li>Myanmar</li>
  <li>Pakistan</li>
  <li>Nepal</li>
  <li>Laos</li>
  <li>South Korea</li>
  <li>Peru</li>
  <li>Vanuatu</li>
  <li>Turkey</li>
  <li>St. Kitts</li>
  <li>Nevis</li>
</ul>
                <p className="mt-4 sm:mt-5 md:mt-6 text-slate-500 text-sm sm:text-base">
                  More territories are being added continuously.
                </p>
              </div>

              <div>
                <img
                  src="/about/29-abouthero-2.png"
                  alt="Coverage map"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </section>

          <ConnectBanner
            title="How to get in touch?"
            descriptionPrefix="Feel free to reach out to us via the contact form "
            formLink="/contact"
            formText="here"
            descriptionMiddle="or drop us an email at"
            email="contactus@portcitybpo.lk"
            emailText="contactus@portcitybpo.lk"
            descriptionSuffix=". We are eager to hear from you."
            buttonText="Contact Us"
            backgroundImage="/about/30-abouthero.webp"
          />
        </main>
      </div>
    );
  }

  if (activeSection === "board-of-directors") {
    return (
      <div className="min-h-screen bg-white ">
        <SEO
  title="Board of Directors | Port City BPO (Pvt) Ltd"
  description="Meet the Board of Directors of Port City BPO, providing strategic leadership, governance, and long-term vision for the company's growth."
  url="https://portcitybpo.lk/about/board-of-directors"
/>
        <main>
          <section className="relative overflow-hidden bg-slate-950 text-white">
            <img
              src="/about/31-abouthero.jpg"
              alt="background"
              className="absolute inset-0 w-full object-cover opacity-100"
              style={{ height: "500px" }}
            />
             <div
              className="absolute inset-0 bg-[#0169ab]/30"
              style={{ height: "500px" }}
            ></div>
            <div
              className="relative z-10 max-w-10/12 mx-auto px-4 sm:px-6 text-center"
              style={{ paddingTop: "160px", paddingBottom: "160px" }}
            >
              
              <h1 className="heading uppercase tracking-[0.1em]">
                Board of Directors
              </h1>
            </div>
          </section>

          <section className="py-12 sm:py-16 md:py-20">
            <div className="max-w-10/12 mx-auto px-4 sm:px-6">
              <div className="mb-8 sm:mb-10 md:mb-12">
                <p className="text-xs uppercase tracking-[0.35em] text-sky-500 mb-3">
                  Board
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                  Our Board of Directors
                </h2>
              </div>

              <div className="grid gap-6 sm:gap-8 bg-[#fcfcfc] p-4 sm:p-6 md:p-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {boardMembers.map((member) => (
                  <div
                    key={member.name}
                    className="overflow-hidden rounded-xl border border-[#ececec] bg-[#f7f7f7] text-center transition-all"
                  >
                    <div className="w-full bg-[#f7f7f7]">
                      <img
                        src={member.image || heroImg}
                        alt={member.name}
                        className="mx-auto h-56 sm:h-64 md:h-72 w-auto object-contain object-bottom pt-4 sm:pt-5 md:pt-6"
                      />
                    </div>

                    <div className="px-4 sm:px-6 md:px-8 pt-6 sm:pt-7 md:pt-8 pb-8 sm:pb-10 md:pb-12 bg-[#f7f7f7]">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[#222222]">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-xs font-normal tracking-wide text-[#999999]">
                        {member.title}
                      </p>
                      <div className="mx-auto my-4 sm:my-5 h-[1px] w-8 bg-[#e5e5e5]" />
                      <p className="text-sm sm:text-base leading-[22px] sm:leading-[23px] text-[#666666] font-normal tracking-normal text-center">
                        {member.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ConnectBanner
            title="How to get in touch?"
            descriptionPrefix="Feel free to reach out to us via the contact form  "
            formLink="/contact"
            formText="here"
            descriptionMiddle=" or drop us an email at "
            email="contactus@portcitybpo.lk"
            emailText="contactus@portcitybpo.lk"
            descriptionSuffix=". We are eager to hear from you."
            buttonText="Contact Us"
            backgroundImage="/about/32-abouthero.webp"
          />
        </main>
      </div>
    );
  }

  if (activeSection === "leadership") {
    return (
      <div className="min-h-screen bg-white ">
        <SEO
          title="Leadership Team | Port City BPO (Pvt) Ltd"
          description="Meet the leadership team at Port City BPO driving innovation, operational excellence, and business growth through experienced management."
          url="https://portcitybpo.lk/about/leadership"
        />
        <main>
          <section className="relative overflow-hidden text-white">
            <img
              src="/about/33-abouthero.jpg"
              alt="Leadership team background"
              className="absolute inset-0 w-full object-cover opacity-100"
              style={{ height: "600px" }}
            />
            <div
              className="absolute inset-0 bg-[#0169ab]/30"
              style={{ height: "500px" }}
            ></div>
            <div
              className="relative z-10 max-w-10/12 mx-auto px-4 sm:px-6 text-center"
              style={{ paddingTop: "160px", paddingBottom: "160px" }}
            >
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-sky-300 mb-3 sm:mb-4">
                Leadership
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[0.1em]">
                Leadership Team
              </h1>
            </div>
          </section>

          <section className="py-12 sm:py-16 md:py-20">
            <div className="max-w-10/12 mx-auto px-4 sm:px-6">
              <div className="mb-8 sm:mb-10 md:mb-12">
                <p className="text-xs uppercase tracking-[0.35em] text-sky-500 mb-3">
                  Leadership
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                  Our Leadership Team
                </h2>
              </div>

              {/* First row - responsive grid */}
              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {leadershipTeam.slice(0, 3).map((member) => (
                  <div
                    key={member.name}
                    className="rounded-xl bg-[#f7f7f7] p-4 sm:p-5 md:p-6"
                  >
                    <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-[#f7f7f7]">
                      <img
                        src={member.image || heroImg}
                        alt={member.name}
                        className="h-full w-full object-cover aspect-auto "
                      />
                    </div>
                    <div className="pt-4 sm:pt-5 md:pt-6 text-center">
                      <h3 className="text-base sm:text-lg md:text-lg font-bold text-slate-900">
                        {member.name}
                      </h3>
                      <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-500">
                        {member.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Second row - responsive centered cards */}
              <div className="mt-6 sm:mt-8 flex justify-center gap-6 sm:gap-8 flex-wrap">
                {leadershipTeam.slice(3).map((member) => (
                  <div
                    key={member.name}
                    className="rounded-xl bg-[#f7f7f7] p-4 sm:p-5 md:p-6 w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] min-w-[250px]"
                  >
                    <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-[#f7f7f7]">
                      <img
                        src={member.image || heroImg}
                        alt={member.name}
                        className="h-full w-full object-cover aspect-square sm:aspect-auto"
                      />
                    </div>
                    <div className="pt-4 sm:pt-5 md:pt-6 text-center">
                      <h3 className="text-base sm:text-lg md:text-lg font-bold text-slate-900">
                        {member.name}
                      </h3>
                      <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-500">
                        {member.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ConnectBanner
            title="How to get in touch?"
            descriptionPrefix="Feel free to reach out to us via the contact form "
            formLink="/contact"
            formText="here"
            descriptionMiddle="or drop us an email at"
            email="contactus@portcitybpo.lk"
            emailText="contactus@portcitybpo.lk"
            descriptionSuffix=". We are eager to hear from you."
            buttonText="Contact Us"
            backgroundImage="/about/34-abouthero.webp"
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
          title="About Port City BPO | Business Process Outsourcing Company"
          description="Learn about Port City BPO, a Colombo Port City Economic Commission (CPCEC) authorized Business Process Outsourcing company delivering reliable, scalable, and innovative outsourcing solutions."
          url="https://portcitybpo.lk/about"
        />
      <main>
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-700 via-slate-900 to-black opacity-95"></div>
          <div className="relative z-10 max-w-10/12 mx-auto px-4 sm:px-6 py-20 sm:py-24 md:py-28">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-yellow-400 mb-3 sm:mb-4">
              About Us
            </p>
            <h2 className="text-base sm:text-lg uppercase tracking-[0.3em] sm:tracking-[0.4em] text-sky-400 mb-2 sm:mb-3">
              About
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              ABOUT US
            </h1>
            <p className="mt-4 sm:mt-5 md:mt-6 max-w-3xl text-base sm:text-lg text-slate-200 leading-7 sm:leading-8">
              Who we are, what we stand for, and how Port City BPO delivers
              trusted offshore business services with global reach.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col gap-3 sm:gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 shadow-lg shadow-yellow-400/20 transition hover:bg-yellow-300"
              >
                Contact Us
              </button>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/20"
              >
                Back to Home
              </button>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-10/12 mx-auto px-4 sm:px-6">
            <div className="grid gap-8 sm:gap-10 lg:grid-cols-[280px_1fr]">
              <aside className="space-y-5 sm:space-y-6 rounded-[24px] sm:rounded-[32px] border border-slate-200/60 bg-white p-5 sm:p-6 text-slate-900 shadow-lg">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  About sections
                </p>
                <div className="space-y-2 sm:space-y-3">
                  {sections.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSectionClick(item.id)}
                      className={`flex w-full items-center justify-between rounded-2xl sm:rounded-3xl px-4 sm:px-5 py-4 sm:py-5 text-left text-xs sm:text-sm transition ${
                        activeSection === item.id
                          ? "bg-sky-50 text-sky-700 shadow-inner"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <span className="font-medium">{item.title}</span>
                      <ChevronDown size={16} className="text-slate-400" />
                    </button>
                  ))}
                </div>
              </aside>

              <div className="space-y-12 sm:space-y-16 md:space-y-20">
                {sections.map((item, index) => (
                  <div
                    key={item.id}
                    ref={sectionRefs[item.id]}
                    className={`grid gap-8 sm:gap-10 items-center md:grid-cols-2 ${
                      index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                    }`}
                  >
                    <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                      <div className="rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl">
                        <img
                          src={heroImg}
                          alt={item.title}
                          className="w-full h-64 sm:h-80 md:h-96 object-cover"
                        />
                      </div>
                    </div>

                    <div className="space-y-4 sm:space-y-5 md:space-y-6">
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#005ca9] uppercase">
                        {item.title}
                      </h2>
                      <p className="text-slate-700 text-sm sm:text-base leading-7 sm:leading-8">
                        {item.description}
                      </p>
                      <button
                        type="button"
                        onClick={() => navigate("/contact")}
                        className="inline-flex w-full justify-center items-center gap-3 rounded-full border border-slate-300 bg-white px-5 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-slate-900 transition hover:bg-slate-100 sm:w-auto"
                      >
                        {item.buttonText}
                        <span aria-hidden="true">›</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ConnectBanner
          title="How to get in touch?"
          descriptionPrefix="Feel free to reach out to us via the contact form "
          formLink="/contact"
          formText="here"
          descriptionMiddle="or drop us an email at"
          email="contactus@portcitybpo.lk"
          emailText="contactus@portcitybpo.lk"
          descriptionSuffix=". We are eager to hear from you."
          buttonText="Contact Us"
          backgroundImage="/about/35-abouthero.webp"
        />
      </main>
    </div>
  );
}