import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="items-stretch flex w-full flex-col text-center bg-[#F8F9FF] pt-[120px] pb-[60px] px-[55px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <header className="flex w-full flex-col overflow-hidden text-[#2D2D2D] max-md:max-w-full">
        <h1 className="text-[#2D2D2D] text-[90px] font-bold leading-[117px] tracking-[-2.25px] max-md:max-w-full max-md:text-[40px] max-md:leading-[58px]">
          Build Landing Pages with Typeform embedded
        </h1>
        <p className="text-[#2D2D2D] text-[28px] font-normal leading-[1.4] mt-5 max-md:max-w-full">
          With Anima, you can embed Typeform in just a few steps.
        </p>
      </header>
      <div className="self-center flex gap-[18px] text-base text-white font-semibold justify-center mt-10">
        <div className="flex min-w-60 gap-[18px]">
          <button className="bg-[rgba(0,147,121,1)] flex min-w-60 min-h-[60px] items-center gap-2 justify-center px-[50px] py-[18px] rounded-[20px] max-md:px-5 hover:bg-[rgba(0,127,105,1)] transition-colors">
            <div className="text-white self-stretch my-auto">
              Go to the typeform
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
