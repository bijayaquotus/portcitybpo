import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import heroImg from "../assets/hero.png";
import ConnectBanner from "../components/ConnectBanner";

function AboutLanding() {
  const navigate = useNavigate();

  const aboutSections = [
    {
      id: "who-we-are",
      title: "Authorised & Recognised",
      description: "Authorised & Recognised",
      content: `Port City BPO (Pvt) Ltd. is assumed by the JV entity of Aitken Spence PLC and IRIS Corporation Berhad. Our organisation is an Authorised Person approved by the Colombo Port City Economic Commission (CPCEC) specialising in BPO. An Authorised Person is an entity, that the CPCEC has granted a license in terms of the Colombo Port City Economic Commission Act No. 11 of 2021.`,
      ctaText: "Learn More",
      ctaLink: "/about/who-we-are",
      img: "/aboutlanding/1-aboutlanding.webp",
    },
    {
      id: "board-of-directors",
      title: "Board of Directors",
      description: "Strategic Leadership",
      content: `The Board is responsible for the Group's performance and is accountable to the shareholders who appoint them. They set the strategic vision, provide policy direction, and ensure diligent oversight to drive the achievement of strategic goals.`,
      ctaText: "Learn More",
      ctaLink: "/about/board-of-directors",
      img: "/aboutlanding/2-aboutlanding.jpg",
    },
    {
      id: "leadership",
      title: "Leadership Team",
      description: "Operational Excellence",
      content: `The Leadership Team is responsible for executing the Group's strategy, ensuring operational excellence, and driving sustainable growth. Guided by the Board's vision, they translate strategic objectives into actionable plans while maintaining accountability to stakeholders.`,
      ctaText: "Learn More",
      ctaLink: "/about/leadership",
      img: "/aboutlanding/3-aboutlanding.jpg",
    },
    {
      id: "geo-coverage",
      title: "Geographic Coverage",
      description: "Global Reach",
      content: `Port City BPO proudly delivers offshore services from Sri Lanka, serving a diverse range of countries including Indonesia, India, Vietnam, the Philippines, Thailand, Japan, and Korea. Our extensive coverage continues to grow, reinforcing our commitment to providing innovative and cost-effective solutions to a global client base.`,
      ctaText: "Learn More",
      ctaLink: "/about/geo-coverage",
      img: "/aboutlanding/4-aboutlanding.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white ">
      <header className="relative h-120 md:h-120 lg:h-130 flex items-start md:items-center overflow-hidden">
  {/* Picture element for responsive images */}
  <picture className="absolute inset-0 w-full h-full">
    <source
      media="(min-width: 768px)"
      srcSet="/aboutlanding/5-aboutlanding.jpg"
    />
    <img
      src="/aboutlanding/6-aboutlanding.jpg"
      alt="About Us Background"
      className="absolute inset-0 w-full h-full object-cover object-center"
    />
  </picture>
  
 
  <div className="max-w-7xl mx-auto px-6 relative z-10 text-white w-full">
    {/* Small screen: top-left with padding, Medium+ screens: centered */}
    <div className="flex flex-col items-start md:items-center text-left md:text-center md:pr-50 pt-18 md:pt-0">
      <h2 className="text-4xl md:text-7xl font-extrabold">About Us</h2>
      <p className="mt-2 subheading text-white font-light">Who We Are, What We Stand For</p>
    </div>
  </div>
</header>

      <main className="max-w-10/12 mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16 sm:space-y-20">
  {aboutSections.map((s, i) => (
    <div key={s.id} className="flex flex-col md:grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
      {/* Image Section - Shows first on mobile, alternates on desktop */}
      <div className={`${i % 2 === 0 ? "order-1 md:order-1" : "order-1 md:order-2"} w-full`}>
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto flex-shrink-0">
          <img
            src={s.img}
            alt={s.title}
            className="w-full h-full object-cover "
          />
        </div>
      </div>

      {/* Content Section - Shows second on mobile, alternates on desktop */}
      <div className={`${i % 2 === 0 ? "order-2 md:order-2" : "order-2 md:order-1"} text-left w-full`}>
        <h3 className="heading mb-3 sm:mb-4" style={{ color: '#0169ab' }}>
          {s.title}
        </h3>
        
        <p className="text-slate-600 text-sm sm:text-base leading-6 sm:leading-7">
          {s.content}
        </p>

        {/* CTA Button Group - Responsive */}
        <div className="mt-5 sm:mt-6 md:mt-8 mb-4 md:mb-0 relative inline-block">
          {/* Geometric orange angle backing box - Responsive sizing */}
          <div className="absolute -left-1.5 -top-1.5 w-10 h-6 sm:w-12 sm:h-8 md:w-16 md:h-10 bg-[#ff9933]" />

          <button
            onClick={() => navigate(s.ctaLink)}
            type="button"
            className="relative z-10 inline-flex items-center justify-between bg-[#f8f9fa] px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 min-w-[120px] sm:min-w-[140px] md:min-w-[160px] text-sm sm:text-base md:text-base font-bold text-black tracking-tight shadow-md hover:bg-white hover:shadow-lg transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ffcc00] focus:ring-offset-2"
          >
            <span>{s.ctaText}</span>
            <svg
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-black ml-2 sm:ml-3 md:ml-4"
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
  ))}
</main>

      {/* CTA Section */}
      <ConnectBanner
        title="How to get in touch?"
        descriptionPrefix="Feel free to reach out to us via the contact form "
        formLink="/contact"
        formText="here"
        descriptionMiddle=" or drop us an email at "
        email="contactus@portcitybpo.lk"
        emailText="contactus@portcitybpo.lk"
        descriptionSuffix=". We are eager to hear from you."
        buttonText="Contact Us"
        backgroundImage="/aboutlanding/7-aboutlanding.webp"
      />
    </div>
  );
}

export default AboutLanding;