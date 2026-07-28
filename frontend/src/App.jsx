import { Routes, Route } from "react-router-dom"; // Remove BrowserRouter import
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import ValueProposition from "./pages/ValueProposition";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import AboutLanding from "./pages/AboutLanding";
import Team_event, { TeamEventDetail } from "./pages/Team_event";
import Corporate_social_responsibility, { CSRDetail } from "./pages/Corporate_social_responsibility";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
       <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-10 lg:pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/value-proposition" element={<ValueProposition />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutLanding />} />
          <Route path="/about/:section" element={<About />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/newsroom/corporate-social-responsibility" element={<Corporate_social_responsibility />} />
          <Route path="/newsroom/corporate-social-responsibility/:id" element={<CSRDetail/>} />
          <Route path="/newsroom/team-events" element={<Team_event/>} />
          <Route path="/newsroom/team-events/:id" element={<TeamEventDetail/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />

         
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;