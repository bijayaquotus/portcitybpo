import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ConnectBanner from "../components/ConnectBanner";
import { Clock, TimerIcon } from "lucide-react";
import SEO from "../components/SEO";

// CSR Data Object
const csrData = {
  "sustaining-ecosystems-kalpitiya": {
    id: "sustaining-ecosystems-kalpitiya",
    title:
      "Sustaining Ecosystems for Tomorrow – Mangrove Conservation in Kalpitiya",
    date: "25 may 2026",
    shortDescription:
      "Sustaining Ecosystems for Tomorrow – Mangrove Conservation in Kalpitiya Building..",
    thumbnail: "/corporate/ecosystem/ecosystem.png",
    description: `Building on the success and valuable experience gained from our previous CSR initiatives, Port City BPO is proud to launch its 19th Corporate Social Responsibility project – the Mangrove Restoration & Conservation Project in Kalpitiya. This initiative reflects our continued commitment to environmental sustainability and our responsibility towards preserving Sri Lanka’s natural ecosystems for future generations.

Mangrove ecosystems play a critical role in coastal protection, biodiversity conservation, and climate change mitigation. Through this project, we aim to actively contribute to the restoration and protection of these vital natural habitats, strengthening coastal resilience while supporting long-term ecological balance.

In collaboration with the Lanka Mangrove Museum, this initiative facilitates the planting of 500 mangrove saplings in Ammathottama, Kalpitiya. The project combines hands-on conservation efforts with environmental education, community engagement, and reinforcing awareness.`,
    photos: [
      "/corporate/ecosystem/1-ecosystem.png",
      "/corporate/ecosystem/2-ecosystem.png",
      "/corporate/ecosystem/3-ecosystem.png",
      "/corporate/ecosystem/4-ecosystem.png",
      "/corporate/ecosystem/5-ecosystem.png",
      "/corporate/ecosystem/6-ecosystem.png",
      "/corporate/ecosystem/7-ecosystem.png",
      "/corporate/ecosystem/8-ecosystem.png",
      "/corporate/ecosystem/9-ecosystem.png",
      "/corporate/ecosystem/10-ecosystem.png",
    ],
  },
  "smarter-classrooms-hatton": {
    id: "smarter-classrooms-hatton",
    title: "Smarter Classrooms for Tomorrow: Empowering Young Minds in Hatton",
    date: "5 May 2026",
    shortDescription:
      "Smarter Classrooms for Tomorrow: Empowering Young Minds in Hatton At...",
    thumbnail: "/corporate/smartclassroom/smartclassroom.png",
    description: `At Port City BPO, we remain dedicated to creating meaningful and lasting community impact through purposeful Corporate Social Responsibility initiatives. Our latest CSR project, “Smarter Classrooms for Tomorrow – Empowering Young Minds in Hatton,” reflects our continued commitment to advancing education and equal opportunities for underserved communities.

Through this initiative, we donated a state-of-the-art smart board to a school in Hatton, helping transform traditional learning into an interactive, engaging, and future-ready experience. This upgrade supports teachers in delivering dynamic lessons and equips students with the digital tools they need to think creatively, learn effectively, and prepare for the world ahead.

By bridging the digital divide and enriching the learning environment, this project reinforces our belief that every child deserves access to modern education and the chance to unlock their full potential. Port City BPO is proud to stand with the Hatton community as we work together.`,
    photos: [
      "/corporate/smartclassroom/1-smartclassroom.png",
      "/corporate/smartclassroom/2-smartclassroom.png",
      "/corporate/smartclassroom/3-smartclassroom.png",
      "/corporate/smartclassroom/4-smartclassroom.png",
      "/corporate/smartclassroom/5-smartclassroom.png",
      "/corporate/smartclassroom/6-smartclassroom.png",
    ],
  },
  "games-of-love-hope": {
    id: "games-of-love-hope",
    title:
      "සෙනෙහසේ අවුරුදු සෙල්ලම් – Games of Love & Hope: A New Year Celebration of Heart, Unity & Hope",
    date: "4 May 2026",
    shortDescription: "සෙනෙහසේ අවුරුදු සෙල්ලම් – Games of Love & Hope: A...",
    thumbnail: "/corporate/gamesoflove/gamesoflove.png",
    description: `At Port City BPO, we believe in creating moments of joy, connection, and hope for communities. “සෙනෙහසේ අවුරුදු සෙල්ලම් – Games of Love & Hope” is a heartfelt Corporate Social Responsibility initiative dedicated to celebrating the Sinhala and Tamil New Year with children and families affected by thalassemia.

This initiative is centered around bringing the spirit of Avurudu to life through traditional games, shared experiences, and festive activities that foster unity, happiness, and inclusivity. By creating a space filled with laughter, cultural celebration, and togetherness, the event aims to uplift the emotional wellbeing of thalassemia patients, offering them a day where they are celebrated, supported, and surrounded by positivity.

Beyond the celebrations, this initiative reflects our deeper commitment to standing in solidarity with individuals facing ongoing health challenges. We recognize that while medical support is essential.`,
    photos: [
      "/corporate/gamesoflove/1-gamesoflove.png",
      "/corporate/gamesoflove/2-gamesoflove.png",
      "/corporate/gamesoflove/3-gamesoflove.png",
      "/corporate/gamesoflove/4-gamesoflove.png",
      "/corporate/gamesoflove/5-gamesoflove.png",
      "/corporate/gamesoflove/6-gamesoflove.png",
      "/corporate/gamesoflove/7-gamesoflove.png",
      "/corporate/gamesoflove/8-gamesoflove.png",
      "/corporate/gamesoflove/9-gamesoflove.png",
      "/corporate/gamesoflove/10-gamesoflove.png",
      "/corporate/gamesoflove/11-gamesoflove.png",
    ],
  },
  "flow-of-hope": {
    id: "flow-of-hope",
    title:
      "Flow of hope – Enhancing Access to Clean, Sustainable Water at Senanayake Maha Pirivena",
    date: "30 March 2026",
    shortDescription:
      "Flow of hope – Enhancing Access to Clean, Sustainable Water...",
    thumbnail: "/corporate/flowofhope/flowofhope.png",
    description: `At Port City BPO, we remain dedicated to driving meaningful, long-term community development through purposeful Corporate Social Responsibility initiatives. Our 13th CSR project, the Water Supply Improvement Project at Senanayake Maha Pirivena, reflects our ongoing commitment to supporting education, wellbeing, and sustainable living for underserved groups.

This project focuses on upgrading and modernising the existing water infrastructure to ensure uninterrupted access to clean, safe, and adequate water for 60 monks and 340 residential students who rely on these facilities daily. By enhancing the well structure, strengthening pipeline networks, installing a more efficient pump system, and improving storage capabilities, the initiative addresses a vital resource need that directly impacts health, hygiene, and overall quality of life.

Beyond infrastructure improvements, the project reinforces our belief that access to clean water is a fundamental right and a foundation for personal and community growth. Reliable water supply not only improves daily living conditions but also empowers students to focus on their studies without disruptions, supports the monastic community, and contributes to a healthier, more resilient environment.

Through this initiative, Port City BPO continues to foster sustainable change, create meaningful social impact, and uplift the communities that shape the future of our nation. We are proud to stand alongside institutions that nurture learning, discipline, and cultural heritage, and look forward to delivering more projects that bring lasting value to society.`,
    photos: [
      "/corporate/flowofhope/1-flowofhope.png",
      "/corporate/flowofhope/2-flowofhope.png",
      "/corporate/flowofhope/3-flowofhope.png",
      "/corporate/flowofhope/4-flowofhope.png",
      "/corporate/flowofhope/5-flowofhope.png",
      "/corporate/flowofhope/6-flowofhope.png",
      "/corporate/flowofhope/7-flowofhope.png",
      "/corporate/flowofhope/8-flowofhope.png",
      "/corporate/flowofhope/9-flowofhope.png",
    ],
  },
  "community-relief-katupathwewa": {
    id: "community-relief-katupathwewa",
    title: "Port City BPO's Community Relief Initiative – Katupathwewa",
    date: "25 February 2026",
    shortDescription:
      "Port City BPO's Community Relief Initiative – Katupathwewa At Port...",
    thumbnail: "/corporate/communityrelief/communityrelief.png",
    description: `At Port City BPO, we believe that meaningful impact begins with showing up for communities during their most challenging moments. Guided by this commitment, our team extended its ongoing disaster relief efforts to the families of Katupathwewa, who were severely affected by the recent Ditwah cyclone and floods.

In collaboration with our partners at Seva Lanka, we distributed essential rations and stationery at the DS Office in Katupathwewa, ensuring that children and families had access to immediate necessities as they navigate the path to recovery. These contributions offer more than supplies they bring stability, reassurance, and hope to those who are rebuilding their lives.

Our support for this community has continued from the very first day of the cyclone response and will remain unwavering until families regain the strength, resilience, and confidence to move forward. Each gesture reflects our dedication to standing beside communities in times of hardship, helping them find strength through unity and collective care.

This initiative highlights Port City BPO’s ongoing purpose: to uplift, empower, and stand with those who need it most. We remain deeply grateful to everyone involved and proud to play a part in helping Katupathwewa rebuild a stronger tomorrow..`,
    photos: [
      "/corporate/communityrelief/1-communityrelief.png",
      "/corporate/communityrelief/2-communityrelief.png",
      "/corporate/communityrelief/3-communityrelief.png",
      "/corporate/communityrelief/4-communityrelief.png",
      "/corporate/communityrelief/5-communityrelief.png",
      "/corporate/communityrelief/6-communityrelief.png",
    ],
  },
  "apeksha-hospital-donation": {
    id: "apeksha-hospital-donation",
    title: "Donation Initiative | Apeksha National Cancer Hospital",
    date: "23 February 2026",
    shortDescription:
      "Donation Initiative | Apeksha National Cancer Hospital At Port City...",
    thumbnail: "/corporate/hospitaldonation/hospitaldonation.png",
    description: `At Port City BPO, we believe that compassion has the power to uplift communities and bring comfort where it is needed most. Guided by this belief, our team was honoured to support patients and caregivers at the Apeksha Hospital through a special donation initiative.

As part of this effort, 1,000 king coconuts were freshly cut and distributed across the hospital premises. For many patients undergoing treatment, simple gestures of nourishment and care can bring relief, hydration, and a sense of warmth during a difficult journey. This initiative was our way of standing beside them offering not just a drink, but a moment of comfort and kindness.

For the families, medical staff, and everyone who walks through the corridors of the cancer hospital, these small acts of support serve as reminders that they are surrounded by a community that cares. By being present and contributing in a meaningful way, we hope to bring strength, hope, and encouragement to those facing some of life’s toughest challenges.

This donation reflects Port City BPO’s ongoing commitment to supporting health and wellbeing across Sri Lanka. We are deeply grateful to everyone who helped make this initiative possible and proud to play a part in uplifting the resilient community at the Apeksha National Cancer Hospital.

Together, we remain committed to creating impact rooted in empathy, humanity, and shared strength.`,
    photos: [
      "/corporate/hospitaldonation/1-hospitaldonation.png",
      "/corporate/hospitaldonation/2-hospitaldonation.png",
      "/corporate/hospitaldonation/3-hospitaldonation.png",
      "/corporate/hospitaldonation/4-hospitaldonation.png",
      "/corporate/hospitaldonation/5-hospitaldonation.png",
      "/corporate/hospitaldonation/6-hospitaldonation.png",
    ],
  },
  "blood-donation-campaign": {
    id: "blood-donation-campaign",
    title: "Giving the Gift of Life: Port City BPO Blood Donation Campaign",
    date: "18 February 2026",
    shortDescription:
      "Giving the Gift of Life: Port City BPO Blood Donation...",
    thumbnail: "/corporate/blooddonation/blooddonation.png",
    description: `At Port City BPO, we believe that true success goes beyond performance metrics and business growth it is measured by the positive impact we create in our community. In line with this commitment, we proudly organized a Blood Donation Campaign as part of our ongoing Corporate Social Responsibility (CSR) initiatives.

The campaign brought together our employees with a shared purpose: to donate blood and help save lives. The response from our team was inspiring, reflecting the compassion, unity, and social responsibility that define our workplace culture.

Every unit of blood donated has the potential to save up to three lives. Through this initiative, our employees not only contributed to strengthening the national blood supply but also demonstrated that collective action can create meaningful change.

We extend our sincere appreciation to all donors and volunteers who participated and supported this life-saving effort. Your generosity and commitment truly embody our values.`,
    photos: [
      "/corporate/blooddonation/1-blooddonation.png",
      "/corporate/blooddonation/2-blooddonation.png",
      "/corporate/blooddonation/3-blooddonation.png",
      "/corporate/blooddonation/4-blooddonation.png",
      "/corporate/blooddonation/5-blooddonation.png",
      "/corporate/blooddonation/6-blooddonation.png",
    ],
  },
  "rajanganaya-flood-relief": {
    id: "rajanganaya-flood-relief",
    title: "Rajanganaya Flood Restoration Project",
    date: "13 February 2026",
    shortDescription:
      "Rajanganaya Flood Restoration Project At Port City BPO, we believe...",
    thumbnail: "/corporate/floodrelief/floodrelief.png",
    description: `At Port City BPO, we believe that true community strength is built through compassion, action, and collective responsibility. With this belief at our core, our team travelled to Rajanganaya to support recovery efforts following the recent floods that impacted families and disrupted daily life across the area.

Day 1 marked the beginning of our contribution, as our team engaged directly with the community, offering assistance and supporting immediate restoration needs. It was a day grounded in listening, understanding, and standing beside those affected as they began rebuilding their routines and surroundings.

On Day 2, we continued this momentum by assisting with ongoing construction efforts that are essential to restoring stability and supporting long-term recovery. Each task, each hour, and each effort reflected our commitment to helping Rajanganaya regain its strength with dignity and resilience.

For the people of Rajanganaya, this project is more than an initiative it represents hope, continuity, and the reassurance that they are not facing this challenge alone. By being present on the ground, we aim to contribute not just to the rebuilding of physical spaces, but to the restoration of confidence and community spirit.

This effort reflects Port City BPO’s dedication to uplifting communities and supporting what matters most to them. We are deeply grateful to everyone who contributed, collaborated, and showed unwavering commitment over these two days. Together, we continue to build communities grounded in empathy, resilience, and unity.`,
    photos: [
      "/corporate/floodrelief/1-floodrelief.png",
      "/corporate/floodrelief/2-floodrelief.png",
      "/corporate/floodrelief/3-floodrelief.png",
      "/corporate/floodrelief/4-floodrelief.png",
      "/corporate/floodrelief/5-floodrelief.png",
      "/corporate/floodrelief/6-floodrelief.png",
    ],
  },
  "infant-jesus-church": {
    id: "infant-jesus-church",
    title:
      "Building Hope Together : Supporting the Construction of Infant Jesus Church – Dummalasuriya, Chilaw",
    date: "23 January 2026",
    shortDescription:
      "Building Hope Together : Supporting the Construction of Infant Jesus...",
    thumbnail: "/corporate/infrantchurch/infrantchurch.webp",
    description: `PAt Port City BPO, we believe strong communities grow through care, connection, and shared purpose. With this belief, we were honoured to support the construction of the Infant Jesus Church in Dummalasuriya, Chilaw.

For the local community, this church is more than a building. It is a place of prayer, comfort, gathering, and guidance where families come together in moments of joy and challenge. By contributing to its construction, we hope to help create a lasting space of belonging and hope for generations to come.

This initiative reflects our commitment to standing alongside communities and supporting what truly matters to them. We are grateful to everyone involved in making this possible and are proud to play a small part in strengthening the community of Dummalasuriya. Together, we continue to build communities rooted in compassion, resilience, and unity.`,
    photos: [
      "/corporate/infrantchurch/1-infrantchurch.webp",
      "/corporate/infrantchurch/2-infrantchurch.webp",
      "/corporate/infrantchurch/3-infrantchurch.webp",
      "/corporate/infrantchurch/4-infrantchurch.webp",
      "/corporate/infrantchurch/5-infrantchurch.webp",
    ],
  },
  "seva-lanka-partnership": {
    id: "seva-lanka-partnership",
    title: "Supporting Communities Through Our CSR Partnership with Seva Lanka",
    date: "23 January 2026",
    shortDescription:
      "Supporting Communities Through Our CSR Partnership with Seva Lanka As...",
    thumbnail: "/corporate/sevalanka/sevalanka.webp",
    description: `As part of our steadfast commitment to social responsibility, Port City BPO is honoured to have partnered with Seva Lanka to provide relief to communities affected by Cyclone Ditwah.

Understanding the needs in the aftermath of the disaster, our joint initiative focused on supporting a facility impacted by the floods. Our team had the privilege of spending time at the clinic, where we met with expecting mothers, offering not just material support but also words of solidarity and care during a challenging time.

This initiative underscores our core values of compassion, care, and tangible community upliftment. We are deeply grateful to Seva Lanka for their invaluable partnership and to the clinic staff for their unwavering dedication. It is a profound privilege to stand with the people of our community, continuing our legacy of purposeful corporate citizenship and reaffirming our belief in building a stronger, more caring society together`,
    photos: [
      "/corporate/sevalanka/1-sevalanka.webp",
      "/corporate/sevalanka/2-sevalanka.webp",
      "/corporate/sevalanka/3-sevalanka.webp",
      "/corporate/sevalanka/4-sevalanka.webp",
      "/corporate/sevalanka/5-sevalanka.webp",
      "/corporate/sevalanka/6-sevalanka.webp",
      "/corporate/sevalanka/7-sevalanka.webp",
      "/corporate/sevalanka/8-sevalanka.webp",
    ],
  },
  "foundation-of-goodness": {
    id: "foundation-of-goodness",
    title: "Partnering for Positive Impact with the Foundation of Goodness",
    date: "10 January 2026",
    shortDescription:
      "Partnering for Positive Impact with the Foundation of Goodness Port...",
    thumbnail: "/corporate/goodness/goodness.png",
    description: `Port City BPO is honoured to have partnered with the Foundation of Goodness to provide urgent relief to communities affected by the devastating floods caused by Cyclone Ditwah.

In response to the widespread need, our joint initiative provided general aid and essential supplies to support the Foundation of Goodness in their critical on-ground efforts. This contribution was aimed at helping affected families and individuals recover and rebuild in the aftermath of the disaster.

This initiative underscores our core values of compassion, solidarity, and tangible community upliftment. We are deeply grateful to the Foundation of Goodness for their invaluable partnership and unwavering dedication to serving those in need. It is a profound privilege to stand with the people of community, continuing our legacy of purposeful corporate citizenship and reaffirming our belief in building a stronger, more resilient society together..`,
    photos: [
      "/corporate/goodness/1-goodness.webp",
      "/corporate/goodness/2-goodness.webp",
      "/corporate/goodness/3-goodness.webp",
      "/corporate/goodness/4-goodness.webp",
    ],
  },
  "grace-perera-home": {
    id: "grace-perera-home",
    title: "Port City BPO: CSR at Grace Perera Home for Elders",
    date: "14 October 2025",
    shortDescription: "Port City BPO: CSR at Grace Perera Home for Elders...",
    thumbnail: "/corporate/elders/elders.png",
    description: `As part of our ongoing commitment to community welfare, Port City BPO successfully completed its 5th CSR initiative at Grace Perera Elder’s Home, Kalubowila.
Our team spent a meaningful morning sharing smiles with 35 elders by serving a wholesome Sri Lankan breakfast and donating essential sanitary and medical items to support their daily comfort and well-being.

This initiative reflects our dedication to compassion, care, and community upliftment, continuing the legacy of our previous projects.`,
    photos: [
      "/corporate/elders/1-elders.png",
      "/corporate/elders/2-elders.png",
      "/corporate/elders/3-elders.png",
      "/corporate/elders/4-elders.png",
      "/corporate/elders/5-elders.png",
      "/corporate/elders/6-elders.png",
      "/corporate/elders/7-elders.png",
      "/corporate/elders/8-elders.png",
      "/corporate/elders/9-elders.png",
      "/corporate/elders/10-elders.png",
      "/corporate/elders/11-elders.png",
    ],
  },
  "jayanthi-infants-centre": {
    id: "jayanthi-infants-centre",
    title: "Port City BPO: CSR at Jayanthi Infant's Centre",
    date: "9 July 2025",
    shortDescription:
      "Port City BPO: CSR at Jayanthi Infant's Centre Our latest...",
    thumbnail: "/corporate/jayanthi/jayanthi.jpg",
    description: `Our latest initiative took place at Jayanthi Infant’s Centre, Colombo 7, where weorganized a special donation breakfast for 20 preschool children aged 2 to 5 years.

The event featured a nutritious meal, sweet treats, and personalized gift packs filled with educational and playful items. Additionally, we provided essential supplies such as milk powder, toiletries, and baby care items. The program was not only a touching experience for the children, but also created meaningful connections for our staff, strengthening our dedication to early childhood care and giving back to the community.`,
    photos: [
      "/corporate/jayanthi/1-jayanthi.jpg",
      "/corporate/jayanthi/2-jayanthi.jpg",
      "/corporate/jayanthi/3-jayanthi.jpg",
      "/corporate/jayanthi/4-jayanthi.jpg",
      "/corporate/jayanthi/5-jayanthi.jpg",
      "/corporate/jayanthi/6-jayanthi.jpg",
      "/corporate/jayanthi/7-jayanthi.jpg",
    ],
  },
  "aloka-elders-home": {
    id: "aloka-elders-home",
    title: "Port City BPO: CSR at Aloka Elders' Home, Panadura",
    date: "3 April 2025",
    shortDescription:
      "Charity Program at Aloka Elders' Home, Panadura Recognizing the wisdom...",
    thumbnail: "/corporate/alokaelders/alokaelders.jpg",
    description: `Recognizing the wisdom and care our elders deserve, we visited Aloka Elders’Home to provide much needed supplies and share quality time with the residents.

Our team engaged in conversations, games, and heartfelt moments touplift their spirits and demonstrate our gratitude.`,
    photos: [
      "/corporate/alokaelders/1-alokaelders.jpg",
      "/corporate/alokaelders/2-alokaelders.jpg",
      "/corporate/alokaelders/3-alokaelders.jpg",
      "/corporate/alokaelders/4-alokaelders.jpg",
      "/corporate/alokaelders/5-alokaelders.jpg",
      "/corporate/alokaelders/6-alokaelders.jpg",
      "/corporate/alokaelders/7-alokaelders.jpg",
      "/corporate/alokaelders/8-alokaelders.jpg",
    ],
  },
  "sisters-of-charity": {
    id: "sisters-of-charity",
    title: "Port City BPO: CSR at Sisters of Charity of Jesus and Mary",
    date: "11 December 2024",
    shortDescription:
      "Providing Stationary for the children at Sisters of Charity of...",
    thumbnail: "/corporate/charity/charity.jpg",
    description: `Education is a key to a brighter future. To empower children in the Negombo coastal line communities, we distributed essential stationery supplies, including notebooks, pens, and drawing materials.

This effort was aimed at reducing educational barriers and inspiring enthusiasm forlearning among these young students.`,
    photos: [
      "/corporate/charity/1-charity.jpg",
      "/corporate/charity/2-charity.jpg",
    ],
  },
  "sri-jinananda-centre": {
    id: "sri-jinananda-centre",
    title: "Port City BPO: CSR at Sri Jinananda Children's Development Centre",
    date: "11 December 2024",
    shortDescription:
      "Breakfast for the children at Sri Jinananda Children's Development Centre...",
    thumbnail: "/corporate/jinanandacentre/jinanandacentre.jpg",
    description: `Our very first project was at Sri Jinanda Child Care Center, where we hosted a charity breakfast for the children.

This event provided not only nutritious meals but also moments of joy and encouragement for the young ones, reinforcing our dedication to supporting early childhood development.`,
    photos: [
      "/corporate/jinanandacentre/1-jinanandacentre.jpg",
      "/corporate/jinanandacentre/2-jinanandacentre.jpg",
      "/corporate/jinanandacentre/3-jinanandacentre.jpg",
      "/corporate/jinanandacentre/4-jinanandacentre.jpg",
      "/corporate/jinanandacentre/5-jinanandacentre.jpg",
      "/corporate/jinanandacentre/6-jinanandacentre.jpg",
    ],
  },

  "voice-of-tomorrow": {
    id: "voice-of-tomorrow",
    title: "Voice of Tomorrow – Empowering Future Leaders",
    date: "13 July 2026",
    shortDescription:
      "Voice of Tomorrow – Empowering Future Leaders...",
    thumbnail: "/corporate/voiceOfTomorow/1.png",
    description: `Continuing our commitment to creating meaningful social impact, Port City BPO is proud to launch its new Corporate Social Responsibility initiative Voice of Tomorrow, an English Empowerment Program designed to equip students with the communication skills and confidence needed for future success.

Strong English communication is a vital skill that opens doors to higher education, career opportunities, and personal growth. Through this initiative, we aim to bridge language barriers by providing students with practical learning experiences that enhance their confidence in speaking, reading, and writing English.

Delivered by qualified and experienced lecturers, the program offers structured English language training at no cost to participants. Beyond language development, Voice of Tomorrow fosters confidence and lifelong learning, empowering the next generation with the skills they need to thrive in an increasingly global environment.`,
    photos: [
      "/corporate/voiceOfTomorow/1.png",
      "/corporate/voiceOfTomorow/2.png",
      "/corporate/voiceOfTomorow/3.png",
      "/corporate/voiceOfTomorow/4.png",
      "/corporate/voiceOfTomorow/5.png",
      "/corporate/voiceOfTomorow/6.png",
      "/corporate/voiceOfTomorow/7.png",
      "/corporate/voiceOfTomorow/8.png",
      "/corporate/voiceOfTomorow/9.png",
      "/corporate/voiceOfTomorow/10.png",
    ],
  },
};

// Main CSR Listing Page Component
function CorporateSocialResponsibility() {
  const navigate = useNavigate();

  // Convert object to array for mapping
  const csrEvents = Object.values(csrData).sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Corporate Social Responsibility | Port City BPO (Pvt) Ltd"
        description="Discover Port City BPO's Corporate Social Responsibility initiatives, focused on community development, sustainability, ethical business practices, employee well-being, and creating a positive social impact."
        url="https://portcitybpo.lk/newsroom/corporate-social-responsibility"
      />
      {/* Hero Section */}
      <header className="relative h-[460px] md:h-[440px] lg:h-[520px] flex items-center overflow-hidden">
        {/* Mobile Background (visible on small screens) */}
        <div
          className="absolute inset-0 bg-cover bg-center md:hidden"
          style={{
            backgroundImage: `url('/corporate/1-corporate.jpg')`,
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
              Corporate Social Responsibility
            </h1>
          </div>
        </div>
      </header>

      {/* CSR Events Grid */}
      <main className="max-w-10/12 mx-auto  py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {csrEvents.map((event) => (
            <div
              key={event.id}
              onClick={() =>
                navigate(
                  `/newsroom/corporate-social-responsibility/${event.id}`,
                )
              }
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
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
                  <Clock className="w-4 h-4 inline-block text-gray-600 mt-" />
                  <p className="text-sm text-gray-600 font-light ">
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
        backgroundImage="/corporate/3-corporate.webp"
      />
    </div>
  );
}

// Individual CSR Event Detail Page Component
export function CSRDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = csrData[id];
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
            The CSR initiative you're looking for doesn't exist.
          </p>
          <button
            onClick={() =>
              navigate("/newsroom/corporate-social-responsibility")
            }
            className="bg-[#005ca9] text-white px-6 py-3 rounded-lg hover:bg-[#004a8a] transition-colors"
          >
            Back to CSR Initiatives
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
        <div className="max-w-10/12 mx-auto px-6 py-">
          <h1 className="heading font-bold ">{event.title}</h1>
        </div>
      </div>

      {/* Description Section */}
      <section className="max-w-10/12 mx-auto py-6">
        <div className="prose prose-lg max-w-none">
          {event.description.split("\n\n").map((paragraph, idx) => (
            <p key={idx} className="text-gray-600 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Photos Gallery Section */}
      <section className="py-16">
        <div className="max-w-10/12 mx-auto ">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.photos.map((photo, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden  shadow-lg cursor-pointer"
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

          {/* Fullscreen Button */}
          {/* <button
            onClick={() => {
              const imgElement = document.querySelector('.lightbox-image');
              if (imgElement && imgElement.requestFullscreen) {
                imgElement.requestFullscreen();
              }
            }}
            className="absolute top-4 right-20 z-10 text-white hover:text-gray-300 transition-colors"
            aria-label="Fullscreen"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button> */}

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
      <div className="max-w-10/12 mx-auto  py-12">
        <button
          onClick={() => navigate("/newsroom/corporate-social-responsibility")}
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
          Back to All CSR Initiatives
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
        backgroundImage="/corporate/3-corporate.webp"
      />
    </div>
  );
}

export default CorporateSocialResponsibility;
// hello shakti