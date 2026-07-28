import React, { useState, useEffect, useRef } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Navbar from "../components/Navbar";
import ConnectBanner from "../components/ConnectBanner";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SEO from "../components/SEO";

const jobs = [
  {
    title: "Associate - Employee Relations",
    image: "/careers/1-careers.png",
  },
  {
    title: "Associate - Administration",
    image: "/careers/2-careers.png",
  },
  {
    title: "Associate - Administration Chinese Speaking",
    image: "/careers/3-careers.png",
  },
  {
    title: "Data Entry Associate",
    image: "/careers/4-careers.png",
  },
  {
    title: "Executive - Customer Support",
    image: "/careers/5-careers.png",
  },
  {
    title: "Payment Associate",
    image: "/careers/6-careers.png",
  },
];

// Custom Toast Component
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'error':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getColors = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-400 text-green-800';
      case 'error':
        return 'bg-red-50 border-red-400 text-red-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-400 text-yellow-800';
      default:
        return 'bg-blue-50 border-blue-400 text-blue-800';
    }
  };

  const getIconColors = () => {
    switch (type) {
      case 'success':
        return 'text-green-400';
      case 'error':
        return 'text-red-400';
      case 'warning':
        return 'text-yellow-400';
      default:
        return 'text-blue-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      className={`fixed top-4 right-4 z-50 w-full max-w-sm border-l-4 rounded-lg shadow-lg ${getColors()}`}
      role="alert"
    >
      <div className="flex items-start p-4">
        <div className={`flex-shrink-0 ${getIconColors()}`}>
          {getIcon()}
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

// Toast Container
const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="fixed top-4 right-4 z-80 space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

// Custom Toast Hook
const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return { toasts, showToast, removeToast };
};

// Application Form Modal Component
const ApplicationFormModal = ({ isOpen, onClose, jobTitle, showToast }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    nationalId: "",
    termsAccepted: false,
    cv: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [turnstileError, setTurnstileError] = useState(false);
  const turnstileRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const URI=`${import.meta.env.VITE_API_URL}`

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, cv: files[0] }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.nationalId.trim()) {
      newErrors.nationalId = "National ID is required";
    }
    
    if (!formData.cv) {
      newErrors.cv = "Please upload your CV";
    } else if (!formData.cv.type.includes("pdf") && !formData.cv.type.includes("doc")) {
      newErrors.cv = "Please upload a PDF or DOC file";
    }
    
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms and conditions";
    }
    
    if (!turnstileToken) {
      setTurnstileError(true);
      newErrors.turnstile = "Please complete the security verification";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!validateForm()) {
    showToast("Please fix the errors in the form", "error");
    return;
  }

  setIsSubmitting(true);

  try {
    const submitData = new FormData();
    submitData.append("fullName", formData.fullName);
    submitData.append("email", formData.email);
    submitData.append("phone", formData.phone);
    submitData.append("nationalId", formData.nationalId);
    submitData.append("jobTitle", jobTitle);
    submitData.append("cv", formData.cv);
    submitData.append("termsAccepted", formData.termsAccepted);
    submitData.append("turnstileToken", turnstileToken);
    
// console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",submitData)

    const response = await fetch(`${URI}/jobs/apply`, {
      method: "POST",
      body: submitData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to submit application");
    }
    
    showToast(data.message, "success");
    
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      nationalId: "",
      termsAccepted: false,
      cv: null,
    });
    setTurnstileToken(null);
    if (turnstileRef.current) {
      turnstileRef.current.reset();
    }
    
    setTimeout(() => {
      onClose();
      setIsSubmitting(false);
    }, 2000);
    
  } catch (error) {
    console.error("Error submitting application:", error);
    showToast(error.message || "Failed to submit application. Please try again.", "error");
    setIsSubmitting(false);
    if (turnstileRef.current) {
      turnstileRef.current.reset();
    }
    setTurnstileToken(null);
  }
};


  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/30 bg-opacity-50 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative min-h-screen md:min-h-0 flex items-center justify-center p-4"
        >
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[100vh] flex flex-col overflow-hidden">
            <div className="shrink-0 bg-[#005ca9] p-6 text-white z-10">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold" id="modal-title">
                    Apply for Position
                  </h3>
                  <p className="text-white/80 text-sm mt-1">{jobTitle}</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:text-white/80 transition-colors p-1"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#005ca9] focus:border-transparent transition`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#005ca9] focus:border-transparent transition`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#005ca9] focus:border-transparent transition`}
                  placeholder="+94 77 123 4567"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="nationalId" className="block text-sm font-semibold text-gray-700 mb-1">
                  National ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nationalId"
                  name="nationalId"
                  value={formData.nationalId}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.nationalId ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#005ca9] focus:border-transparent transition`}
                  placeholder="Enter your National ID"
                />
                {errors.nationalId && (
                  <p className="mt-1 text-sm text-red-500">{errors.nationalId}</p>
                )}
              </div>

              <div>
                <label htmlFor="cv" className="block text-sm font-semibold text-gray-700 mb-1">
                  Upload CV <span className="text-red-500">*</span>
                </label>
                <div className={`relative border-2 border-dashed ${errors.cv ? 'border-red-500' : 'border-gray-300'} rounded-lg p-6 hover:border-[#005ca9] transition-colors`}>
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600">
                      {formData.cv ? formData.cv.name : "Click to upload or drag and drop"}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                </div>
                {errors.cv && (
                  <p className="mt-1 text-sm text-red-500">{errors.cv}</p>
                )}
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id="termsAccepted"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    className={`w-4 h-4 border ${errors.termsAccepted ? 'border-red-500' : 'border-gray-300'} rounded focus:ring-2 focus:ring-[#005ca9]`}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="termsAccepted" className="text-gray-700">
    I agree to the{" "}
    <a
      href="/terms-of-use"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#005ca9] hover:underline font-medium"
      onClick={(e) => e.stopPropagation()}
    >
      Terms and Conditions
    </a>{" "}
    and confirm that the information provided is accurate.
  </label>
                  {errors.termsAccepted && (
                    <p className="mt-1 text-sm text-red-500">{errors.termsAccepted}</p>
                  )}
                </div>
              </div>

              {/* Cloudflare Turnstile */}
              <div className={`flex flex-col items-start ${turnstileError ? "border border-red-300 rounded-lg p-2" : ""}`}>
                <Turnstile
                  siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY || "YOUR_SITE_KEY"}
                  onSuccess={(token) => {
                    setTurnstileToken(token);
                    setTurnstileError(false);
                    if (errors.turnstile) {
                      setErrors((prev) => {
                        const newErrors = { ...prev };
                        delete newErrors.turnstile;
                        return newErrors;
                      });
                    }
                  }}
                  onError={() => {
                    setTurnstileError(true);
                    setTurnstileToken(null);
                  }}
                  onExpire={() => {
                    setTurnstileError(true);
                    setTurnstileToken(null);
                  }}
                  ref={turnstileRef}
                  options={{ theme: "light", size: "normal" }}
                />
                {(errors.turnstile || turnstileError) && (
                  <p className="mt-1 text-sm text-red-500">
                    Please complete the security verification
                  </p>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-[#005ca9] text-white rounded-lg hover:bg-[#004a8a] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            </form>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default function Careers() {
  const [isDesktop, setIsDesktop] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const { toasts, showToast, removeToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const handleApplyNow = (jobTitle) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob("");
  };

  return (
    <div className="min-h-screen bg-white">

      <SEO
  title="Careers | Join Port City BPO (Pvt) Ltd"
  description="Explore career opportunities at Port City BPO. Join our team and build your future with a CPCEC-authorised Business Process Outsourcing company committed to innovation, integrity, and professional growth."
  url="https://portcitybpo.lk/careers"
/>
      <ToastContainer toasts={toasts} removeToast={removeToast} />

      <main>
        <header className="relative min-h-[400px] h-auto md:h-120 lg:h-130 flex items-start md:items-center overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center md:hidden"
            style={{
              backgroundImage: 'url("/careers/7-careers.jpg")',
            }}
          />

          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center hidden md:block"
            style={{
              backgroundImage: 'url("/careers/8-careers.jpg")',
            }}
          />

          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-left md:text-center pt-20 px-5 sm:pt-12 md:pt-0 pb-10 md:pb-0 pr-0 md:pr-80">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white">
                  Careers
                </h1>
                <p className="mt-2 text-sm sm:text-base text-white/90">
                  Join Our Team. Build Your Future.
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="w-full px-0 md:px-15 py-12">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-15/12 mx-auto mb-12 px-6 md:px-12 lg:px-16 text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#005ca9] tracking-tight uppercase">
              SEIZE THE OPPORTUNITY TODAY!
            </h2>

            <p className="mt-4 text-slate-600 leading-8 text-base md:text-lg font-normal max-w-10xl lg:mx-0 mx-auto">
              Join Port City BPO and take part in a groundbreaking BPO
              experience. As an Authorised Person approved by the Colombo Port
              City Economic Commission (CPCEC), we uphold transparency, quality,
              and innovation. Port City BPO values integrity, holds high
              standards, and promotes a thriving space for creativity. If you're
              ready to shape the future of Business Process Outsourcing, explore
              career possibilities with us and become a catalyst in the world of
              offshore solutions.
            </p>

            <p className="mt-10 item-center text-center subheading font-bold py-15">
              Ready to Make an Impact?
            </p>

            <h3 className="heading text-[#005ca9] uppercase mt-2 tracking-wide">
              Current Openings
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full px-4 md:px-12 lg:px-16 max-w-11/12 mx-auto"
          >
            <Swiper
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              mousewheel={true}
              keyboard={true}
              loop={false}
              className="careers-swiper"
            >
              {jobs.map((job, idx) => (
                <SwiperSlide key={idx}>
                  <motion.article
                    className="rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden h-full relative group"
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full aspect-[1/1.514] bg-white overflow-hidden relative flex items-center justify-center p-0">
                      <img
                        src={job.image}
                        alt={job.title}
                        className="w-full h-full object-contain object-top block"
                      />
                      
                      {/* Apply Now Button - Hidden by default, shows on hover */}
                      <div className="absolute inset-0 flex items-center justify-center mt-[50vh] md:mt-[30vh] lg:mt-[50vh] opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => handleApplyNow(job.title)}
                          className="
                            group/btn
                            relative
                            overflow-hidden
                            px-6 py-2 md:px-10 md:py-2
                            rounded-full
                            bg-gradient-to-r from-[#005ca9] via-[#0c71c3] to-[#1a8ad4]
                            text-white
                            font-bold
                            text-sm md:text-lg
                            shadow-[0_8px_30px_rgba(0,92,169,0.45)]
                            hover:shadow-[0_15px_40px_rgba(0,92,169,0.6)]
                            hover:scale-105
                            active:scale-95
                            transition-all duration-300
                            border-2 border-white/30
                            hover:border-white/50
                            min-w-[120px] md:min-w-[160px]
                            before:absolute 
                            before:inset-0 
                            before:bg-gradient-to-r 
                            before:from-transparent 
                            before:via-white/20 
                            before:to-transparent 
                            before:-translate-x-full 
                            before:group-hover/btn:translate-x-full 
                            before:transition-transform 
                            before:duration-700 
                            before:skew-x-12
                            backdrop-blur-sm
                            animate-[fadeInUp_0.5s_ease-out]
                          "
                        >
                          <span className="relative flex items-center justify-center gap-2">
                            Apply Now
                            <svg 
                              className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </span>
                        </button>
                      </div>

                      {/* Dark overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 pointer-events-none" />
                    </div>

                    <div className="p-4 text-center">
                      <h4 className="text-sm font-semibold text-gray-800 line-clamp-2">
                        {job.title}
                      </h4>
                    </div>
                  </motion.article>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="swiper-button-prev !text-[#005ca9] !w-12 !h-12 !bg-white !rounded-full !shadow-lg hover:!bg-gray-50 transition-all duration-200 after:!text-xl after:!font-bold !hidden md:!flex !items-center !justify-center">
              <span className="sr-only">Previous</span>
            </button>
            <button className="swiper-button-next !text-[#005ca9] !w-12 !h-12 !bg-white !rounded-full !shadow-lg hover:!bg-gray-50 transition-all duration-200 after:!text-xl after:!font-bold !hidden md:!flex !items-center !justify-center">
              <span className="sr-only">Next</span>
            </button>
          </motion.div>
        </section>

        <motion.div>
          <ConnectBanner
            title="Let's Touch Base!"
            descriptionPrefix="Your future career awaits! Connect with us at "
            formLink="/contact"
            formText="here"
            descriptionMiddle=" or drop us an email at"
            email="contactus@portcitybpo.lk"
            emailText=" contactus@portcitybpo.lk"
            descriptionSuffix=". We're eager to hear from you!"
            buttonText="Contact Us"
            backgroundImage="/careers/9-careers.webp"
          />
        </motion.div>
      </main>

      <ApplicationFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        jobTitle={selectedJob}
        showToast={showToast}
      />
    </div>
  );
}