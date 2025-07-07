import React from 'react';
import MetricItem from './MetricItem';

const Metrics: React.FC = () => {
  const metrics = [
    { number: "10k+", label: "Website launched" },
    { number: "931k+", label: "Projects created with Anima" },
    { number: "240k+", label: "New users joined Anima" },
    { number: "12k+", label: "Teams used Anima" }
  ];

  return (
    <section className="items-stretch self-center flex w-full flex-col overflow-hidden leading-[1.3] bg-[#F8F9FF] px-[55px] py-[100px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full flex-col items-stretch text-center max-md:max-w-full">
        <h2 className="text-black text-[38px] font-bold tracking-[-0.76px] self-center max-md:max-w-full">
          Our Metrics Tell the Story
        </h2>
        <p className="text-[rgba(45,45,45,1)] text-base font-normal mt-5 max-md:max-w-full">
          Our metrics component gives you the inside scoop on your success and helps you stay on top of your game in style.
        </p>
      </div>
      <div className="self-center flex max-w-full w-[1170px] gap-[30px] flex-wrap mt-[60px] max-md:mt-10">
        {metrics.map((metric, index) => (
          <MetricItem
            key={index}
            number={metric.number}
            label={metric.label}
          />
        ))}
      </div>
    </section>
  );
};

export default Metrics;
