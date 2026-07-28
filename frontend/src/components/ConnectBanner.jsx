import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ConnectBanner = ({ 
  backgroundImage = "/home/1-homepage.webp",
  
  // Title text
  title = "Let's Elevate Your Technical Support Strategy",
  titleClassName = "text-[32px] sm:text-[38px] md:text-[44px] font-bold tracking-tight leading-tight text-white text-center md:text-left",
  
  // Description text
  description = null,
  descriptionPrefix = "Partner with us for expert, reliable, and cost-effective technical support outsourcing.\n\nGet in touch with us ",
  email = "contactus@portcitybpo.lk",
  emailText = "contactus@portcitybpo.lk",
  emailClassName = "text-[#ffcc00] font-medium hover:underline transition-all",
  descriptionMiddle = " or email us at ",
  formLink = "/contact",
  formText = "here",
  formClassName = "text-[#ffcc00] font-medium hover:underline transition-all",
  descriptionSuffix = " to enhance your IT operations and ensure a seamless user experience",
  descriptionClassName = "mt-4 text-[15px] sm:text-[16px] text-slate-100/90 font-normal leading-relaxed max-w-[540px] whitespace-pre-line",
  
  // Button text
  buttonText = "Contact Us",
  buttonClassName = "relative z-10 inline-flex items-center justify-between bg-[#f8f9fa] px-6 py-3 min-w-[160px] text-[14px] font-bold text-black tracking-tight shadow-md hover:bg-white transition-colors duration-150 cursor-pointer focus:outline-none decoration-none",
  buttonIcon = true,
  
  // Accent box
  accentBox = true,
  accentBoxClassName = "absolute -left-1.5 -top-1.5 w-16 h-10 bg-[#ff9933]",
  
  // Navigation
  buttonLink = "/contact",
  
  // Additional styling
  containerClassName = "",
  overlayClassName = "",
  innerContainerClassName = "relative z-10 max-w-10/12 w-full mx-auto  grid md:grid-cols-[1.2fr_1fr] items-center h-full pt-10 md:pt-0",
  leftColumnClassName = "text-white flex flex-col justify-center",
  buttonContainerClassName = "mt-8 mb-6 md:mb-0 relative inline-block self-start",
  
  // Props for right column (if needed)
  rightColumn = null,
  
  // Any additional children
  children
}) => {
  const navigate = useNavigate();

  // Handle form link click
  const handleFormClick = (e) => {
    if (formLink.startsWith("/")) {
      e.preventDefault();
      navigate(formLink);
    }
  };
  
  // Handle button click
  const handleButtonClick = () => {
    if (buttonLink.startsWith("/")) {
      navigate(buttonLink);
    } else {
      window.location.href = buttonLink;
    }
  };

  // Default description with the new format
  const defaultDescription = (
    <>
      {descriptionPrefix}
      <Link
        to={formLink}
        className={formClassName}
        onClick={handleFormClick}
      >
        {formText}
      </Link>
      {descriptionMiddle}
      <a
        href={`mailto:${email}`}
        className={emailClassName}
      >
        {emailText}
      </a>
      {descriptionSuffix}
    </>
  );

  return (
    <section
  className={`
    relative w-full min-h-[380px] md:h-[460px] lg:h-[500px] 
    bg-cover bg-no-repeat flex items-center overflow-hidden select-none 
    bg-[position:30%_center] md:bg-center
    ${containerClassName}
  `}
  style={{
    backgroundImage: `url('${backgroundImage}')`,
  }}
>
  {/* Optional overlay */}
  {overlayClassName && <div className={`absolute inset-0 pointer-events-none ${overlayClassName}`} />}
  
  <div className={innerContainerClassName}>
    {/* Left Side: Copywriting Content Stack */}
    <div className={leftColumnClassName}>
      <h2 className={titleClassName}>
        {title}
      </h2>

      <div className={descriptionClassName}>
        {description || defaultDescription}
        {children}
      </div>

      {/* Precision Offset-Accent CTA Button Group */}
      <div className={buttonContainerClassName}>
        {/* The exact geometric orange angle backing box from the image */}
        {accentBox && <div className={accentBoxClassName} />}

        <button
          onClick={handleButtonClick}
          type="button"
          className={buttonClassName}
        >
          <span>{buttonText}</span>
          {buttonIcon && (
            <svg
              className="w-3.5 h-3.5 text-black ml-4"
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
          )}
        </button>
      </div>
    </div>
    
    {/* Right Column (optional) */}
    {rightColumn && (
      <div className="flex justify-end items-center">
        {rightColumn}
      </div>
    )}
  </div>
</section>
  );
};

export default ConnectBanner;