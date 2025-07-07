import React from 'react';

interface FeatureCardProps {
  icon: string;
  iconBgColor: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, iconBgColor, title, description }) => {
  return (
    <article className="justify-between items-stretch border shadow-[34.854px_29.626px_48.34px_0px_rgba(51,102,255,0.05)] bg-white flex min-w-60 flex-col grow shrink w-[296px] px-[30px] py-10 rounded-[20px] border-solid border-[#E5F4F2] max-md:px-5">
      <div className="flex w-full flex-col items-stretch">
        <div className={`${iconBgColor} self-center flex w-[82px] items-center gap-2.5 h-[82px] p-5 rounded-[20px]`}>
          <img
            src={icon}
            alt={`${title} icon`}
            className="aspect-[1] object-contain w-[42px]"
          />
        </div>
        <div className="w-full text-[#2D2D2D] text-center mt-[30px]">
          <h3 className="text-[28px] font-semibold leading-[1.3] tracking-[-0.28px]">
            {title}
          </h3>
          <p className="text-base font-normal leading-6 mt-6">
            {description}
          </p>
        </div>
      </div>
      <button className="self-center flex min-h-[30px] items-center gap-2 text-base text-[rgba(0,147,121,1)] font-semibold text-center justify-center mt-[30px] rounded-[20px] hover:text-[rgba(0,127,105,1)] transition-colors">
        <div className="self-stretch my-auto">Learn More</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/97d9ded634ec40d18877fc631e7e66a8/3e97c6f47d8e97088844d51ae076778c6faf43bb?placeholderIfAbsent=true"
          alt="Arrow icon"
          className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
        />
      </button>
    </article>
  );
};

export default FeatureCard;
