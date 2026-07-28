import { Check, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import ConnectBanner from "../components/ConnectBanner";
import SEO from "../components/SEO";

export default function ValueProposition() {
  const cards = [
    {
      title: "Human Resources",
      text: "Sri Lanka's English, Sinhalese and Hindi speaking populace benefits businesses targeting English, and regional markets across Asia, ensuring cost-effective local recruitment.",
      img: "/value/1-value.jpg",
    },
    {
      title: "Environment",
      text: "Colombo with its political stability, scenic landscapes, and year-round warm climate offers low living cost, making operational expenses affordable compared to other locations.",
      img: "/value/2-value.webp",
    },
    {
      title: "Strategic Location",
      text: "Strategically positioned in Asia, Colombo offers geographical advantage for business operations in terms of business negotiations, recruitment, and travel as time and cost are comparatively lower.",
      img: "/value/3-value.jpg",
    },
    {
      title: "Quality",
      text: "Our commitment is to ensure partnerships only with legal and reputable service providers who are compliant with Sri Lankan laws.",
      img: "/value/4-value.jpg",
    },
    {
      title: "Cost",
      text: "Port City BPO prioritises cost considerations, guaranteeing transparent pricing without hidden fees. Our competitive rates ensure affordability.",
      img: "/value/5-value.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Value Proposition | Port City BPO (Pvt) Ltd's Competitive Edge"
        description="Discover Port City BPO's competitive edge through innovative business process outsourcing solutions, CPCEC authorization, operational excellence, and a commitment to quality, security, and client success."
        url="https://portcitybpo.lk/value-proposition"
      />

      <header className="relative w-full min-h-[440px] md:min-h-[480px] lg:min-h-[520px] flex items-center overflow-hidden bg-[#0c1e3a]">
        {/* Mobile background (hidden on tablet/desktop) */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90 select-none pointer-events-none md:hidden"
          style={{
            backgroundImage: `url('/value/6-value.jpg')`,
          }}
        />

        {/* Desktop background (visible on tablet/desktop) */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-[right_center] lg:bg-right opacity-90 select-none pointer-events-none hidden md:block"
          style={{
            backgroundImage: ` url('/value/7-value.jpg')`,
          }}
        />

        {/* Content Structural Container */}
        <div className="relative z-10 w-full max-w-10/12 mx-auto px-6 sm:px-12 md:px-16 lg:px-20 py-16">
          <div className="text-white flex flex-col items-center text-center absolute -top-20">
            {/* Main Title Header */}
            <h1 className=" text-[36px] sm:text-[46px] md:text-[56px] lg:text-[64px] font-bold tracking-tight leading-[1.1] text-white font-sans text-left md:text-center">
              Value Proposition
            </h1>

            {/* Secondary Subtitle Accent */}
            <p className="mt-3 text font-medium tracking-wide text-white">
              Port City BPO's Competitive Edge
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-10/12 mx-auto px-0 md:px-6 py-16">
        {/* First row - 3 cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.slice(0, 3).map((c) => (
            <div key={c.title} className="space-y-4 text-center">
              <div className="w-full h-[40vh] bg-gray-100 rounded-xl overflow-hidden shadow-md">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold subheading">{c.title}</h3>
              <p className="text text-gray-600">{c.text}</p>
            </div>
          ))}
        </div>

        {/* Second row - 2 cards (Quality and Cost) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-3xl mx-auto">
          {cards.slice(3, 5).map((c) => (
            <div key={c.title} className="space-y-4 text-center">
              <div className="w-full h-[40vh] mx-auto rounded-xl overflow-hidden shadow-md">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold subheading">{c.title}</h4>
              <p className="text text-gray-600">{c.text}</p>
            </div>
          ))}
        </div>
      </main>

      {/* CTA Section */}
      <ConnectBanner
        title="REACH OUT TO US EASILY!"
        descriptionPrefix="Connect "
        formLink="/contact"
        formText="here"
        descriptionMiddle=" or drop us a line at"
        email=" hello@portcitybpo.lk "
        emailText=" hello@portcitybpo.lk "
        descriptionSuffix=". We look forward to hearing from you."
        buttonText="Contact Us"
        backgroundImage="/value/8-value.webp"
      />
    </div>
  );
}