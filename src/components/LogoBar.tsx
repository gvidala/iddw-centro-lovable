import React from 'react';

const LogoBar: React.FC = () => {
  const logos = [
    { src: "https://cdn.builder.io/api/v1/image/assets/97d9ded634ec40d18877fc631e7e66a8/96278817b054d0a96f87922bac7a1620a9a06a54?placeholderIfAbsent=true", alt: "Company Logo 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/97d9ded634ec40d18877fc631e7e66a8/6714a4c3612d0b1b3f08eca99704736a5bdca39b?placeholderIfAbsent=true", alt: "Company Logo 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/97d9ded634ec40d18877fc631e7e66a8/f695be995b66c7c7931782542c87a0a6ea1515ba?placeholderIfAbsent=true", alt: "Company Logo 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/97d9ded634ec40d18877fc631e7e66a8/9968c5675aed095082c47ac6b88f9e6d68728748?placeholderIfAbsent=true", alt: "Company Logo 4" },
    { src: "https://cdn.builder.io/api/v1/image/assets/97d9ded634ec40d18877fc631e7e66a8/c986b9d855a38fc1cc7b770f0fe69977de59f31a?placeholderIfAbsent=true", alt: "Company Logo 5" },
    { src: "https://cdn.builder.io/api/v1/image/assets/97d9ded634ec40d18877fc631e7e66a8/243c6700225cd5ab8c972820932606d53a19536d?placeholderIfAbsent=true", alt: "Company Logo 6" },
  ];

  return (
    <section className="self-center w-full pt-[60px] px-[55px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-center gap-[40px_100px] overflow-hidden justify-between flex-wrap py-10 border-[rgba(216,216,216,1)] border-t border-b max-md:max-w-full">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="aspect-[1] object-contain w-16 shadow-[0px_10px_20px_rgba(41,41,42,0.07)] self-stretch shrink-0 my-auto rounded-[100px]"
          />
        ))}
      </div>
    </section>
  );
};

export default LogoBar;
