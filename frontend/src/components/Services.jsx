
import csImg from "../assets/CS-Outsourcing.webp";
import marketingImg from "../assets/Marketing.webp";
import dataEntryImg from "../assets/Data-entry-and-processing.webp";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Customer Service Outsourcing",
    desc: "Ensure top-notch customer communication with our efficient Customer Services Outsourcing.",
    img: csImg,
    alt: "Customer Service Analyst talking on headset",
  },
  {
    title: "Marketing Outsourcing",
    desc: "Amplify your market presence through strategic marketing campaigns.",
    img: marketingImg,
    alt: "Corporate team discussing strategy charts on desk",
  },
  {
    title: "Data Entry and Processing Outsourcing",
    desc: "Enhance data management efficiency with our precise Data Entry and Processing services.",
    img: dataEntryImg,
    alt: "Professional writing information on notepad next to keyboard",
  },
];

export default function Services() {
  const navigate = useNavigate();
  return (
    <section className="py-16 md:py-14 bg-[#f5f5f5]">
      <div className="max-w-10/12 mx-auto px-0 sm:px-12 lg:px-16">
        
        {/* Section Heading */}
        <h2 className="heading text-[#005ca9] tracking-normal uppercase mb-10 md:mb-12">
          WHAT WE OFFER?
        </h2>

        {/* Services Multi-Column Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {services.map((item, index) => (
            <div key={index} className="flex flex-col w-full">
              {/* Image Container with precise 1:1 round properties */}
              <div className="w-full overflow-hidden rounded-[20px] aspect-[1.12/1] bg-zinc-200">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Meta Content Stack */}
              <div className="pt-5 pb-2 px-3 text-center flex flex-col items-center">
                <h3 className="subheading ">
                  {item.title}
                </h3>

                <p className="mt-2.5 text">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lower Call-To-Action Element Group */}
        <div className="text-center mt-12 md:mt-16 flex flex-col items-center">
          <p className="subheading mb-5">
            See more of what we can offer!
          </p>

          
           {/* Precision Offset-Accent CTA Button Group */}
          <div className="mt-8 mb-6 md:mb-0 relative inline-block self-center">
            {/* The exact geometric orange angle backing box from the image */}
            <div className="absolute -left-1.5 -top-1.5 w-16 h-10 bg-[#ff9933]" />
            
            <button
              onClick={() => navigate("/services")}
              type="button"
              className="relative z-10 inline-flex items-center justify-between bg-[#f8f9fa] px-6 py-3 min-w-[160px] text-[18px] font-bold text-black tracking-tight shadow-md hover:bg-white transition-colors duration-150 cursor-pointer focus:outline-none"
            >
              <span>Explore All Our Services</span>
              <svg 
                className="w-3.5 h-3.5 text-black ml-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

