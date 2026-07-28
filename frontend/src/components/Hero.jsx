import { useState, useEffect } from "react";

const slidesData = [
  {
    id: 1,
    heading: "An Authorised Person Approved",
    heading2: "PORT CITY BPO",
    subheading: "By the Colombo Port City Economic Comission",
    image: "/home/3-homepage.jpg",
    mobileImage: "/home/4-homepage.jpg",
  },
  {
    id: 2,
    heading: "Innovate & Scale Operations",
    subheading: "Efficiency Redefined",
    image: "/home/5-homepage.jpg",
    mobileImage: "/home/6-homepage.jpg",
  },
  {
    id: 3,
    heading: "Build Your Dream Business",
    subheading: "Stronger, Together",
    image: "/home/7-homepage.jpg",
    mobileImage: "/home/8-homepage.jpg",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      if (!isAnimating) {
        const next = (currentSlide + 1) % slidesData.length;
        triggerSlide(next, "next");
      }
    }, 4000);
    
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating, autoplay]);

  const triggerSlide = (nextSlide, slideDirection) => {
    if (isAnimating || nextSlide === currentSlide) return;
    setIsAnimating(true);
    setDirection(slideDirection);
    setCurrentSlide(nextSlide);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    setAutoplay(false);
    const next = currentSlide === 0 ? slidesData.length - 1 : currentSlide - 1;
    triggerSlide(next, "prev");
    setTimeout(() => setAutoplay(true), 5000);
  };

  const handleNext = () => {
    setAutoplay(false);
    const next = currentSlide === slidesData.length - 1 ? 0 : currentSlide + 1;
    triggerSlide(next, "next");
    setTimeout(() => setAutoplay(true), 5000);
  };

  const handleDotClick = (index) => {
    setAutoplay(false);
    const slideDirection = index > currentSlide ? "next" : "prev";
    triggerSlide(index, slideDirection);
    setTimeout(() => setAutoplay(true), 5000);
  };

  return (
    <section className="relative h-screen max-h-[650px] sm:max-h-[700px] md:h-[580px] lg:h-[680px] w-full overflow-hidden bg-[#1a1c1e] -mt-6 md:mt-0">
      <div className="relative w-full h-full">
        {slidesData.map((slide, index) => {
          const isActive = index === currentSlide;
          const imageUrl = isMobile && slide.mobileImage ? slide.mobileImage : slide.image;
          
          let transform = "translate-x-full";
          if (isActive) {
            transform = "translate-x-0";
          } else if (index < currentSlide) {
            transform = "-translate-x-full";
          } else {
            transform = "translate-x-full";
          }
          
          return (
            <div
              key={slide.id}
              className="absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out will-change-transform"
              style={{
                transform,
                zIndex: isActive ? 10 : 5,
                pointerEvents: isActive ? 'auto' : 'none'
              }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${imageUrl})`,
                  backgroundColor: '#1a1c1e',
                  backgroundPosition: isMobile ? 'center' : 'center'
                }}
              />
              
              {/* Dark Overlay for better text readability */}
              {/* <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-[#216b9e]/95 md:via-[#297fb9]/85 md:to-transparent pointer-events-none" /> */}

              {/* Content Box */}
              <div className="relative max-w-10/12 mx-auto h-full flex items-start md:items-center  pt-20 md:pt-0">
              
                <div className="w-full md:w-[55%] lg:w-[50%] select-none text-left">
                  <span className="text-white font-light leading-loose ">{slide.heading2 }</span>
                  <h1 className="text-5xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight md:leading-[1.1] whitespace-pre-line drop-shadow-lg">
                    {slide.heading}
                    
                  </h1>
                  <p className="mt-2 sm:mt-3 md:mt-4 text-xl sm:text-xl md:text-xl lg:text-xl text-white/90 font-medium tracking-wide max-w-full md:max-w-[90%]">
                    {slide.subheading}
                  </p>
                  
                 
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows - Responsive */}
      <button
        onClick={handlePrev}
        type="button"
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 top-3/5 lg:top-1/2 text-white hover:text-white  p-1.5 sm:p-2 transition-all cursor-pointer "
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        type="button"
        className="absolute right-2 sm:right-4 md:right-6 top-3/5 lg:top-1/2 -translate-y-1/2 z-20 text-white hover:text-white  p-1.5 sm:p-2 transition-all cursor-pointer "
        aria-label="Next slide"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Indicators - Improved for mobile */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2 md:gap-2.5">
        {slidesData.map((_, index) => {
          const isActive = index === currentSlide;
          return (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              type="button"
              className={`transition-all duration-300 focus:outline-none ${
                isActive 
                  ? "w-6 sm:w-8 md:w-10 h-1.5 sm:h-2 bg-[#FFCC00] rounded-full" 
                  : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 hover:bg-white/70 rounded-full"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>

     
    </section>
  );
}