import React from 'react';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/97d9ded634ec40d18877fc631e7e66a8/8ff63e31c7f58b1ed1f18cd279a4eda970a97241?placeholderIfAbsent=true",
      iconBgColor: "bg-[rgba(255,98,80,0.2)]",
      title: "Fast building",
      description: "Tailor Anima's Landing Page UI Kit to your unique style and brand with customisable components, in no time!"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/97d9ded634ec40d18877fc631e7e66a8/23f56299ea36e125129a0304e282cf5b045c861e?placeholderIfAbsent=true",
      iconBgColor: "bg-[rgba(0,147,121,0.2)]",
      title: "Responsive Design",
      description: "No need to worry about screen size. Anima's Landing Page UI Kit adapts to any screen size, from desktop to mobile."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/97d9ded634ec40d18877fc631e7e66a8/048919d1db6f53277023391067a38b375acb9fe8?placeholderIfAbsent=true",
      iconBgColor: "bg-[rgba(248,213,126,0.2)]",
      title: "No Code Needed",
      description: "Zero coding skills required, Anima's Landing Page UI Kit empowers you to create stunning landing pages with ease."
    }
  ];

  return (
    <section className="self-center w-full bg-[#F8F9FF] px-[55px] py-[97px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full flex-col items-stretch text-center max-md:max-w-full">
        <h2 className="text-black text-[38px] font-bold leading-[1.3] tracking-[-0.76px] self-center">
          Features
        </h2>
        <p className="text-[#2D2D2D] text-base font-normal mt-5 max-md:max-w-full">
          Few good reasons why you should use Anima Landing Page Ui Kit to make your own pages.
        </p>
      </div>
      <div className="flex w-full items-stretch gap-[30px] flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            iconBgColor={feature.iconBgColor}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
