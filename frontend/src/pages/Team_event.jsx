import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ConnectBanner from "../components/ConnectBanner";
import { Clock } from "lucide-react";
import SEO from "../components/SEO";

// Team Events Data Object
const teamEventsData = {
  "sinhala-tamil-new-year-2026": {
    id: "sinhala-tamil-new-year-2026",
    title: "Sinhala and Tamil New Year Celebrations at Port City BPO",
    date: "5 May 2026",
    shortDescription:
      "Sinhala and Tamil New Year Celebrations at Port City BPO...",
    thumbnail: "/teamevents/tamilnewyear/tamilnewyearcelebrations.png",
    description: `Port City BPO celebrated the Sinhala and Tamil New Year with great enthusiasm and cultural spirit. The event brought together employees from all backgrounds to participate in traditional games, enjoy festive meals, and embrace the rich cultural heritage of Sri Lanka.

Our celebration featured traditional customs, joyful moments, and shared experiences that reflected the spirit of Avurudu. From warm interactions to festive activities, the event created an atmosphere filled with positivity and connection. It was a meaningful opportunity for our employees to appreciate our heritage while strengthening the bond we share as one team at Port City BPO.

As we step into a new year, we remain committed to fostering a workplace culture built on respect, collaboration, and continuous growth.

We extend our heartfelt wishes to everyone for a joyful, prosperous, and blessed New Year.

සුභ අලුත් අවුරුද්දක් වේවා! இனிய புத்தாண்டு நல்வாழ்த்துக்கள்!`,
    photos: [
      "/teamevents/tamilnewyear/1-tamilnewyear.png",
      "/teamevents/tamilnewyear/2-tamilnewyear.png",
      "/teamevents/tamilnewyear/3-tamilnewyear.png",
      "/teamevents/tamilnewyear/4-tamilnewyear.png",
      "/teamevents/tamilnewyear/5-tamilnewyear.png",
      "/teamevents/tamilnewyear/6-tamilnewyear.png",
      "/teamevents/tamilnewyear/7-tamilnewyear.png",
      "/teamevents/tamilnewyear/8-tamilnewyear.png",
      "/teamevents/tamilnewyear/9-tamilnewyear.png",
      "/teamevents/tamilnewyear/10-tamilnewyear.png",
    ],
  },
  "womens-day-2026": {
    id: "womens-day-2026",
    title: "Celebrating the Strength and Impact of Women Around the World",
    date: "10 March 2026",
    shortDescription:
      "Celebrating the Strength and Impact of Women Around the World...",
    thumbnail: "/teamevents/womenaroundworld/womenaroundworld.png",
    description: `On the occasion of International Women’s Day, we take a moment to celebrate the remarkable women who continue to inspire, lead, and shape our world in countless ways.

Women play an invaluable role in every sphere of life — as leaders, professionals, caregivers, innovators, and changemakers. Their resilience, dedication, and passion continue to drive progress within families, workplaces, communities, and societies across the globe.

At Port City BPO, we recognize and deeply appreciate the incredible contributions of women who bring talent, creativity, and strength to everything they do. Their perspectives, ideas, and leadership help create more inclusive, collaborative, and forward-thinking environments.

International Women’s Day is not only a celebration but also a reminder of the importance of empowering women, supporting equality, and creating opportunities for women to grow and succeed. By uplifting and supporting women, we build stronger organizations and a more balanced and equitable future for everyone.

Today, and every day, we celebrate the achievements, resilience, and inspiring journeys of women everywhere.

Happy International Women’s Day to all the incredible women around the world.`,
    photos: [
      "/teamevents/womenaroundworld/1-womenaroundworld.png",
      "/teamevents/womenaroundworld/2-womenaroundworld.png",
      "/teamevents/womenaroundworld/3-womenaroundworld.png",
      "/teamevents/womenaroundworld/4-womenaroundworld.png",
      "/teamevents/womenaroundworld/5-womenaroundworld.png",
      "/teamevents/womenaroundworld/6-womenaroundworld.png",
    ],
  },
  "talent-lift-2026": {
    id: "talent-lift-2026",
    title: "Port City BPO Showcases Career Pathways at Talent Lift 2026",
    date: "23 February 2026",
    shortDescription:
      "Port City BPO Showcases Career Pathways at Talent Lift 2026...",
    thumbnail: "/teamevents/careerpath/careerpath.png",
    description: `Port City BPO proudly participated in Talent Lift 2026, the annual career fair organized by The Open

University of Sri Lanka. The event brought together a dynamic crowd of undergraduates and graduates seeking guidance, industry exposure, and meaningful career opportunities.

Our team engaged with hundreds of students throughout the day, sharing insights into the evolving BPO industry, emerging skill demands, and the diverse growth pathways available at Port City BPO. The event served as a valuable platform to highlight our commitment to talent development, youth empowerment, and building a future-ready workforce for Sri Lanka.

Our presence at Talent Lift reinforced our dedication to supporting the next generation of professionals and strengthening industry-academic partnerships across the country.

As we continue to expand and innovate, Port City BPO remains committed to creating pathways that uplift talent, inspire ambition, and contribute to shaping Sri Lanka’s future workforce.`,
    photos: [
      "/teamevents/careerpath/1-careerpathways.png",
      "/teamevents/careerpath/2-careerpathways.png",
      "/teamevents/careerpath/3-careerpathways.png",
      "/teamevents/careerpath/4-careerpathways.png",
      "/teamevents/careerpath/5-careerpathways.png",
      "/teamevents/careerpath/6-careerpathways.png",
      "/teamevents/careerpath/7-careerpathways.png",
      "/teamevents/careerpath/8-careerpathways.png",
    ],
  },
  "new-year-2026-welcome": {
    id: "new-year-2026-welcome",
    title: "A Shared Welcome to 2026",
    date: "10 January 2026",
    shortDescription:
      "A Shared Welcome to 2026 To welcome 2026, we gathered...",
    thumbnail: "/teamevents/welcome2026/welcome2026.png",
    description: `To welcome 2026, we gathered in the spirit of togetherness. Our celebration was built around a shared meal and the easy comfort of fellowship.

The morning centred on the warmth of good food and the steady hum of conversation. As we shared dishes and stories, we naturally turned our focus toward the new year, embracing its warmth among our family.

It was a heartfelt and grounded beginning moment of community to carry with us into all that 2026 will bring.`,
    photos: [
      "/teamevents/welcome2026/1-welcome2026.png",
      "/teamevents/welcome2026/2-welcome2026.png",
      "/teamevents/welcome2026/3-welcome2026.png",
      "/teamevents/welcome2026/4-welcome2026.png",
      "/teamevents/welcome2026/5-welcome2026.png",
      "/teamevents/welcome2026/6-welcome2026.png",
    ],
  },
  "secret-santa-2025": {
    id: "secret-santa-2025",
    title: "Secret Santa celebration 2025",
    date: "10 January 2026",
    shortDescription:
      "Secret Santa celebration 2025 Port City BPO was filled with...",
    thumbnail: "/teamevents/santacelebration/santacelebrations2025.png",
    description: `Port City BPO was filled with more than just the usual buzz of productivity it was alive with the whispered excitement and twinkling anticipation of our Secret Santa celebration.

Gifts appeared like quiet surprises, wrapped in holiday cheer and thoughtful mystery. The air hummed with laughter, genuine smiles, and the warm joy of discovering not just presents, but the kindness behind them. It was a beautiful reminder of the wonderful team spirit and connection that make our workplace special.

A heartfelt thank you to everyone who participated and helped orchestrate this lovely tradition. Here’s to carrying this spark of festive warmth and camaraderie with us into the new year.`,
    photos: [
      "/teamevents/santacelebration/1-santacelebration.png",
      "/teamevents/santacelebration/2-santacelebration.png",
      "/teamevents/santacelebration/3-santacelebration.png",
      "/teamevents/santacelebration/4-santacelebration.png",
      "/teamevents/santacelebration/5-santacelebration.png",
      "/teamevents/santacelebration/6-santacelebration.png",
    ],
  },
  "ica-marathon-2025": {
    id: "ica-marathon-2025",
    title: "More Than Just a Finish Line: Port City BPO runs the ICA 2025",
    date: "10 January 2026",
    shortDescription: "More Than Just a Finish Line: Port City BPO runs...",
    thumbnail: "/teamevents/halfmarathon/halfmarathon2025.png",
    description: `It wasn’t just about the miles. It was in the rhythmic sound of thousands of footsteps hitting the pavement in sync and the high-fives from strangers that gave us a second wind just when we needed it most. We didn’t just move as runners; we moved as part of the city’s heartbeat.

In our day-to-day, we focus on precision and KPIs. But on the pavement, we were reminded that our greatest strength is our connection. Crossing the finish line breathless and sweaty wasn’t just about the medals it was about the shared pride of knowing we did it together.

We are incredibly proud of our team for their spirit and for representing Port City BPO.`,
    photos: [
      "/teamevents/halfmarathon/1-halfmarathon.png",
      "/teamevents/halfmarathon/2-halfmarathon.png",
      "/teamevents/halfmarathon/3-halfmarathon.png",
      "/teamevents/halfmarathon/4-halfmarathon.png",
      "/teamevents/halfmarathon/5-halfmarathon.png",
    ],
  },
  "chinese-new-year-2025": {
    id: "chinese-new-year-2025",
    title: "Port City BPO: Chinese New Year 2025",
    date: "29 January 2025",
    shortDescription: "Gong Xi Fa Cai!",
    thumbnail: "/teamevents/chainesenewyear/chainesenewyeear.jpg",
    description: ``,
    photos: [
      "/teamevents/chainesenewyear/1-chinesenewyear.jpg",
      "/teamevents/chainesenewyear/2-chinesenewyear.jpg",
      "/teamevents/chainesenewyear/3-chinesenewyear.jpg",
    ],
  },
  "thai-pongal-2025": {
    id: "thai-pongal-2025",
    title: "Port City BPO: Thai Pongal Celebration",
    date: "16 January 2025",
    shortDescription: "Thai Pongal 2025",
    thumbnail: "/teamevents/pongal/pongol.jpg",
    description: ``,
    photos: [
      "/teamevents/pongal/1-pongol.jpg",
      "/teamevents/pongal/2-pongol.jpg",
      "/teamevents/pongal/3-pongol.jpg",
      "/teamevents/pongal/4-pongol.jpg",
      "/teamevents/pongal/5-pongol.jpg",
      "/teamevents/pongal/6-pongol.jpg",
      "/teamevents/pongal/7-pongol.jpg",
      "/teamevents/pongal/8-pongol.jpg",
      "/teamevents/pongal/9-pongol.jpg",
      "/teamevents/pongal/10-pongol.jpg",
      "/teamevents/pongal/11-pongol.jpg",
      "/teamevents/pongal/12-pongol.jpg",
      "/teamevents/pongal/13-pongol.jpg",
      "/teamevents/pongal/14-pongol.jpg",
      "/teamevents/pongal/15-pongol.jpg",
    ],
  },
  "pickle-ball-2025": {
    id: "pickle-ball-2025",
    title: "Port City BPO: Pickle Ball Event",
    date: "8 January 2025",
    shortDescription: "Pickle Ball",
    thumbnail: "/teamevents/pickleball/pickleball.jpg",
    description: ``,
    photos: [
      "/teamevents/pickleball/1-pickleball.jpg",
      "/teamevents/pickleball/2-pickleball.jpg",
      "/teamevents/pickleball/3-pickleball.jpg",
      "/teamevents/pickleball/4-pickleball.jpg",
      "/teamevents/pickleball/5-pickleball.jpg",
      "/teamevents/pickleball/6-pickleball.jpg",
      "/teamevents/pickleball/7-pickleball.jpg",
      "/teamevents/pickleball/8-pickleball.jpg",
    ],
  },
  "new-year-2025": {
    id: "new-year-2025",
    title: "Port City BPO: New Year 2025",
    date: "2 January 2025",
    shortDescription: "Happy New Year 2025",
    thumbnail: "/teamevents/newyear2025/newyear2025.jpg ",
    description: ``,
    photos: [
      "/teamevents/newyear2025/1-newyear2025.jpg",
      "/teamevents/newyear2025/2-newyear2025.jpg",
      "/teamevents/newyear2025/3-newyear2025.jpg",
      "/teamevents/newyear2025/4-newyear2025.jpg",
      "/teamevents/newyear2025/5-newyear2025.jpg",
      "/teamevents/newyear2025/6-newyear2025.jpg",
      "/teamevents/newyear2025/7-newyear2025.jpg",
      "/teamevents/newyear2025/8-newyear2025.jpg",
    ],
  },
  "secret-santa-2024": {
    id: "secret-santa-2024",
    title: "Port City BPO: Secret Santa X'mas event",
    date: "5 December 2024",
    shortDescription: "Our prep for the 2024 X'mas Party",
    thumbnail: "/teamevents/secretsanta/secretsanta.jpg",
    description: ``,
    photos: [
      "/teamevents/secretsanta/1-secretsanta.jpg",
      "/teamevents/secretsanta/2-secretsanta.jpg",
      "/teamevents/secretsanta/3-secretsanta.jpg",
      "/teamevents/secretsanta/4-secretsanta.jpg",
      "/teamevents/secretsanta/5-secretsanta.jpg",
      "/teamevents/secretsanta/6-secretsanta.jpg",
    ],
  },
  "xmas-party-2024": {
    id: "xmas-party-2024",
    title: "Port City BPO: X'mas 2024 Party",
    date: "2 December 2024",
    shortDescription: "Our 2024 X'mas Party",
    thumbnail: "/teamevents/xmassparty/xmassparty.jpg",
    description: ``,
    photos: [
      "/teamevents/xmassparty/1-xmass.jpg",
      "/teamevents/xmassparty/2-xmass.jpg",
      "/teamevents/xmassparty/3-xmass.jpg",
      "/teamevents/xmassparty/4-xmass.jpg",
      "/teamevents/xmassparty/5-xmass.jpg",
      "/teamevents/xmassparty/6-xmass.jpg",
      "/teamevents/xmassparty/7-xmass.jpg",
      "/teamevents/xmassparty/8-xmass.jpg",
      "/teamevents/xmassparty/9-xmass.jpg",
      "/teamevents/xmassparty/10-xmass.jpg",
      "/teamevents/xmassparty/11-xmass.jpg",
      "/teamevents/xmassparty/12-xmass.jpg",
      "/teamevents/xmassparty/13-xmass.jpg",
      "/teamevents/xmassparty/14-xmass.jpg",
      "/teamevents/xmassparty/15-xmass.jpg",
    ],
  },
};

// Main Team Events Listing Page Component
function TeamEvents() {
  const navigate = useNavigate();

  // Convert object to array for mapping
  const teamEvents = Object.values(teamEventsData).sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  return (
    <div className="min-h-screen bg-white -mt-4">
      <SEO
  title="Team Events | Life at Port City BPO"
  description="Explore team events at Port City BPO and discover our collaborative workplace culture through employee engagement activities, celebrations, training programs, and team-building initiatives."
  url="https://portcitybpo.lk/newsroom/team-events"
/>
      {/* Hero Section */}
      {/* Hero Section */}
      <header className="relative h-[460px] md:h-[440px] lg:h-[520px] flex items-center overflow-hidden">
        {/* Mobile Background (visible on small screens) */}
        <div
          className="absolute inset-0 bg-cover bg-center md:hidden"
          style={{
            backgroundImage: `url('/teamevents/1-teamevent.jpg')`,
          }}
        />

        {/* Desktop Background (visible on medium screens and up) */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: `url('/corporate/2-corporate.jpg')`,
          }}
        />

        {/* Content Container */}
        <div className=" z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 absolute top-1/5 lg:top-0 lg:relative ">
          {/* Text aligned left on mobile, center on tablet/desktop (or keep left if preferred) */}
          <div className="text-left md:text-center max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-tight ">
              Team Events
            </h1>
          </div>
        </div>
      </header>

      {/* Team Events Grid */}
      <main className="max-w-10/12 mx-auto  py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamEvents.map((event) => (
            <div
              key={event.id}
              onClick={() => navigate(`/newsroom/team-events/${event.id}`)}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                {/* 👇 UPDATED THIS LINE 👇 */}
                <img
                  src={event.thumbnail || event.photos[0]}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#005ca9] transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {event.shortDescription}
                </p>

                <div className="flex gap-2 mt-1 items-center">
                  <Clock className="w-4 h-4 inline-block text-gray-600" />
                  <p className="text-sm text-gray-600 font-light">
                    {event.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CTA Section */}
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
    </div>
  );
}

// Individual Team Event Detail Page Component
export function TeamEventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = teamEventsData[id];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!event) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Event Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The team event you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/newsroom/team-events")}
            className="bg-[#005ca9] text-white px-6 py-3 rounded-lg hover:bg-[#004a8a] transition-colors"
          >
            Back to Team Events
          </button>
        </div>
      </div>
    );
  }

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % event.photos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + event.photos.length) % event.photos.length,
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Title and Date */}
      <div className="relative bg-[#0670b2] text-white py-10 text-left mt-4 lg:mt-0">
        <div className="max-w-10/12 mx-auto ">
          <h1 className="heading font-bold">{event.title}</h1>
        </div>
      </div>

      {/* Description Section */}
      <section className="max-w-10/12 mx-auto  py-6">
        <div className="prose prose-lg max-w-none">
          {event.description.split("\n\n").map((paragraph, idx) => (
            <p key={idx} className="text-gray-600 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Photos Gallery Section */}
      <section className="bg-white">
        <div className="max-w-10/12 mx-auto ">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.photos.map((photo, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden shadow-lg cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={photo}
                  alt={`${event.title} - Photo ${idx + 1}`}
                  className="w-full h-84 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous Arrow */}
          {event.photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 hover:bg-black/70"
              aria-label="Previous image"
            >
              <svg
                className="w-8 h-8 md:w-10 md:h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Next Arrow */}
          {event.photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 hover:bg-black/70"
              aria-label="Next image"
            >
              <svg
                className="w-8 h-8 md:w-10 md:h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {event.photos.length}
          </div>

          {/* Main Image */}
          <img
            src={event.photos[currentImageIndex]}
            alt={`${event.title} - ${currentImageIndex + 1}`}
            className="lightbox-image max-w-[95vw] max-h-[90vh] object-contain cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Back Button */}
      <div className="max-w-10/12 mx-auto py-12">
        <button
          onClick={() => navigate("/newsroom/team-events")}
          className="inline-flex items-center text-[#005ca9] font-semibold hover:text-[#ff9933] transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to All Team Events
        </button>
      </div>

      {/* CTA Section */}
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
    </div>
  );
}

export default TeamEvents;
