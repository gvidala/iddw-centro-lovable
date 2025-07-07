import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    { src: "https://cdn.builder.io/api/v1/image/assets/97d9ded634ec40d18877fc631e7e66a8/fd916ebd6491e776a265c48b6a2c5c10da887132?placeholderIfAbsent=true", alt: "Social Media 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/97d9ded634ec40d18877fc631e7e66a8/49755500f6f9d5b38de1a05b4c1da99b94e88569?placeholderIfAbsent=true", alt: "Social Media 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/97d9ded634ec40d18877fc631e7e66a8/712f61e60322408dda8708c8cda7a6cce3680637?placeholderIfAbsent=true", alt: "Social Media 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/97d9ded634ec40d18877fc631e7e66a8/c6ed14f3a88abc7dd9e133c4fe483fd31ca1e80b?placeholderIfAbsent=true", alt: "Social Media 4" },
  ];

  return (
    <footer className="bg-[rgba(45,45,45,1)] flex w-full items-center gap-[40px_100px] justify-between flex-wrap px-[60px] py-6 max-md:max-w-full max-md:px-5">
      <div className="text-white text-sm font-normal leading-none self-stretch my-auto">
        © 2023 Anima's Landing Page Ui Kit.{" "}
      </div>
      <div className="self-stretch flex items-center gap-4 overflow-hidden my-auto">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href="#"
            className="hover:opacity-80 transition-opacity"
            aria-label={link.alt}
          >
            <img
              src={link.src}
              alt={link.alt}
              className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto"
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
