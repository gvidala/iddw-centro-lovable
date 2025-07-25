import React from 'react';

const LogoBar: React.FC = () => {
  const metaPlatforms = [
    { 
      src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", 
      alt: "Facebook", 
      url: "https://www.facebook.com" 
    },
    { 
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", 
      alt: "Instagram", 
      url: "https://www.instagram.com" 
    },
    { 
      src: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg", 
      alt: "Twitter", 
      url: "https://www.twitter.com" 
    },
    { 
      src: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png", 
      alt: "LinkedIn", 
      url: "https://www.linkedin.com" 
    },
    { 
      src: "https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg", 
      alt: "Messenger", 
      url: "https://www.messenger.com" 
    },
    { 
      src: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", 
      alt: "WhatsApp", 
      url: "https://www.whatsapp.com" 
    },
  ];

  return (
    <section className="self-center w-full pt-[60px] px-[55px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-center gap-[40px_100px] overflow-hidden justify-between flex-wrap py-10 border-[rgba(216,216,216,1)] border-t border-b max-md:max-w-full">
        {metaPlatforms.map((platform, index) => (
          <a
            key={index}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <img
              src={platform.src}
              alt={platform.alt}
              className="aspect-[1] object-contain w-16 shadow-[0px_10px_20px_rgba(41,41,42,0.07)] self-stretch shrink-0 my-auto rounded-[100px]"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default LogoBar;
