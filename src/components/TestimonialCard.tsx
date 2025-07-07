import React from 'react';

interface TestimonialCardProps {
  avatar: string;
  name: string;
  title: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ avatar, name, title, testimonial }) => {
  const stars = Array(5).fill("https://cdn.builder.io/api/v1/image/assets/97d9ded634ec40d18877fc631e7e66a8/e34c52d81cb92a71874495e53736a2afbe5e1ddd?placeholderIfAbsent=true");

  return (
    <article className="items-stretch border shadow-[34.854px_29.626px_48.34px_0px_rgba(51,102,255,0.05)] bg-white flex min-w-60 flex-col justify-center grow shrink w-[456px] p-10 rounded-[20px] border-solid border-[#E5F4F2] max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-center gap-[30px] justify-center flex-wrap max-md:max-w-full">
        <div className="self-stretch flex flex-col overflow-hidden items-stretch text-center justify-center w-[180px] my-auto">
          <img
            src={avatar}
            alt={`${name} avatar`}
            className="aspect-[1] object-contain w-[120px] self-center max-w-full rounded-[50%]"
          />
          <div className="flex w-full flex-col overflow-hidden mt-4">
            <div className="text-gray-900 text-[21px] font-semibold leading-[1.3]">
              {name}
            </div>
            <div className="text-gray-700 text-sm font-normal leading-[1.6] mt-1.5">
              {title}
            </div>
          </div>
        </div>
        <div className="self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto">
          <div className="flex w-full gap-[5px]">
            {stars.map((star, index) => (
              <img
                key={index}
                src={star}
                alt="Star rating"
                className="aspect-[1.04] object-contain w-6 shrink-0"
              />
            ))}
          </div>
          <blockquote className="text-[#2D2D2D] text-base font-normal leading-6 mt-6">
            {testimonial}
          </blockquote>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
