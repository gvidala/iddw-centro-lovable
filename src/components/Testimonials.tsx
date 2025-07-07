import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/97d9ded634ec40d18877fc631e7e66a8/2bad3fd1436c886407fccf5d8b61fa5eced5603f?placeholderIfAbsent=true",
      name: "Lauren M.",
      title: "UI Designer @Boo",
      testimonial: "\"Anima's Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently.\""
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/97d9ded634ec40d18877fc631e7e66a8/11343cc5ecd85b5b1031ff270578908bf586e5df?placeholderIfAbsent=true",
      name: "David B.",
      title: "Lead Designer @Creative",
      testimonial: "\"The Landing Page UI Kit has been a game changer. The pre-designed components and templates have helped us deliver projects faster!\""
    }
  ];

  return (
    <section className="w-full bg-[#F8D57E] px-[55px] py-[68px] max-md:max-w-full max-md:px-5">
      <div className="w-full text-center max-md:max-w-full">
        <h2 className="text-black text-[38px] font-bold leading-[1.3] tracking-[-0.76px] max-md:max-w-full">
          Real Stories from Satisfied Customers
        </h2>
        <p className="text-[#2D2D2D] text-base font-normal mt-5 max-md:max-w-full">
          See how our landing page ui kit is making an impact.
        </p>
      </div>
      <div className="flex w-full gap-[30px] justify-center flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            avatar={testimonial.avatar}
            name={testimonial.name}
            title={testimonial.title}
            testimonial={testimonial.testimonial}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
