import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import heroImg from "../assets/hero.png";
import ConnectBanner from "../components/ConnectBanner";
import SEO from "../components/SEO";

const sections = [
  {
    id: "customer-service-outsourcing",
    title: "Customer Service Outsourcing",
    text: `Elevate your brand's reputation with our efficient Customer Service Outsourcing. We ensure a smooth customer journey by handling enquiries, providing technical support, and managing orders and billing. Our focus includes resolving complaints, offering multilingual support, and maintaining service quality. Explore opportunities for cross-selling, effective customer retention, and feedback analysis. Ongoing training keeps our team updated for friendly and efficient interactions.`,
    img: "/service/1-service.webp",
    points: [
      "Multilingual customer support",
      "Order and billing management",
      "Complaint resolution and quality assurance",
    ],
  },
  {
    id: "technical-support-outsourcing",
    title: "Technical Support Outsourcing",
    text: `Stay ahead in the digital landscape with our Technical Support Outsourcing. We provide expert troubleshooting for hardware and software, responsive help desk services, and efficient network and system administration. From application support, cybersecurity, cloud computing, to strategic IT consulting, our services simplify your technology needs for a seamless and reliable experience.`,
    img: "/service/2-service.webp",
  },
  {
    id: "data-entry-and-processing-outsourcing",
    title: "Data Entry and Processing Outsourcing",
    text: `Simplify data operations with our Data Entry and Processing services. We ensure accurate manual data entry, offer data cleansing for error correction, and facilitate seamless data conversion. Our services include verification for data reliability and expertise in data mining for valuable insights.`,
    img: "/service/3-service.webp",
  },
  {
    id: "human-resources-outsourcing",
    title: "Human Resources Outsourcing",
    text: `Grow your business with our HR services. From end-to-end recruitment and talent acquisition to seamless onboarding, we handle it all. Our services cover payroll, benefits, and precise employee records management. From performance and training to employee relations and compliance, we meet diverse HR needs.`,
    img: "/service/4-service.webp",
  },
  {
    id: "finance-and-accounting-outsourcing",
    title: "Finance and Accounting Outsourcing",
    text: `Streamline your financial processes with our Finance and Accounting Outsourcing. We oversee Accounts Payable, managing vendor transactions and supplier relationships, and handle Accounts Receivable, ensuring prompt customer payments.`,
    img: "/service/5-service.webp",
  },
  {
    id: "marketing-outsourcing",
    title: "Marketing Outsourcing",
    text: `Elevate your marketing with our comprehensive services. From lead generation and data management to digital marketing and brand consistency, we optimize strategies and engage your audience through campaigns, events, and effective media relationships.`,
    img: "/service/6-service.avif",
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white ">
      <SEO
  title="Services | Business Process Outsourcing Solutions | Port City BPO (Pvt) Ltd"
  description="Explore Port City BPO's comprehensive Business Process Outsourcing services, including customer support, back-office operations, finance, HR, IT-enabled services, and scalable offshore business solutions."
  url="https://portcitybpo.lk/services"
/>
      <header
        className="relative h-60 md:h-80 lg:h-130 flex items-center"
        style={{
          backgroundImage: `url(/service/7-service.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div> */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-white w-full">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold">Services</h2>
          <p className="mt-2 text-sm md:text-base">What We Offer?</p>
        </div>
      </header>

      <main className="max-w-10/12 mx-auto px-0 sm:px-6 py-12 md:py-16 space-y-12 md:space-y-20">
        {sections.map((s, i) => (
          <div key={s.title} className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Image Section - Shows first on mobile, alternates on desktop */}
            <div className={`w-full ${i % 2 === 0 ? "md:order-1" : "md:order-2"} mb-4 md:mb-0`}>
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Text Content Section - Shows second on mobile, alternates on desktop */}
            <div className={`w-full ${i % 2 === 0 ? "md:order-2" : "md:order-1"} text-left`}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#005ca9] mb-3 md:mb-4">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed md:leading-7">
                {s.text}
              </p>

              {/* Precision Offset-Accent CTA Button Group */}
              <div className="mt-6 sm:mt-8 relative inline-block">
                {/* Geometric orange angle backing box */}
                <div className="absolute -left-1.5 -top-1.5 w-12 h-8 sm:w-16 sm:h-10 bg-[#ff9933]" />

                <button
                  onClick={() => navigate(`/service/${s.id}`)}
                  type="button"
                  className="relative z-10 inline-flex items-center justify-between bg-[#f8f9fa] px-4 sm:px-6 py-2.5 sm:py-3 min-w-[140px] sm:min-w-[160px] text-sm sm:text-base font-bold text-black tracking-tight shadow-md hover:bg-white hover:shadow-lg transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ffcc00] focus:ring-offset-2"
                >
                  <span>Learn More</span>
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
        ))}
      </main>
      
      {/* CTA Section */}
      <ConnectBanner
        title="How to get in touch?"
        descriptionPrefix="Interested in a partnership? Let's collaborate and achieve success together! Get in touch with us "
        formLink="/contact"
        formText="here"
        descriptionMiddle=" or email us at"
        email="contactus@portcitybpo.lk"
        emailText="contactus@portcitybpo.lk"
        descriptionSuffix=". We look forward to hearing from you."
        buttonText="Contact Us"
        backgroundImage="/service/8-service.webp"
      />
    </div>
  );
}