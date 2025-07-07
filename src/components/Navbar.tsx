
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="justify-between items-center flex w-full gap-[40px_100px] text-center flex-wrap bg-[#F8F9FF] px-[50px] py-5 max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex items-center gap-1.5 text-[21px] text-[rgba(45,45,45,1)] font-bold leading-[1.3] my-auto">
        <div className="self-stretch my-auto">
          Landing<span className="font-normal">Page</span>
        </div>
      </div>
      <div className="self-stretch flex min-w-60 items-center gap-[40px_50px] text-base font-semibold flex-wrap my-auto max-md:max-w-full">
        <button 
          onClick={() => navigate('/contact')}
          className="self-stretch flex min-h-[30px] items-center gap-2 text-[rgba(0,147,121,1)] whitespace-nowrap justify-center my-auto rounded-[20px] hover:text-[rgba(0,127,105,1)] transition-colors"
        >
          <div className="self-stretch my-auto">Contact</div>
        </button>
        <button 
          onClick={() => navigate('/pricing')}
          className="self-stretch flex min-h-[30px] items-center gap-2 text-[rgba(0,147,121,1)] whitespace-nowrap justify-center my-auto rounded-[20px] hover:text-[rgba(0,127,105,1)] transition-colors"
        >
          <div className="self-stretch my-auto">Pricing</div>
        </button>
        <div className="self-stretch flex min-w-60 gap-5 my-auto max-md:max-w-full">
          <button className="bg-[rgba(229,244,242,1)] flex min-h-[60px] items-center gap-2 text-[rgba(0,147,121,1)] justify-center px-[50px] py-[18px] rounded-[20px] max-md:px-5 hover:bg-[rgba(219,239,237,1)] transition-colors">
            <div className="self-stretch my-auto">How it works</div>
          </button>
          <button className="bg-[rgba(0,147,121,1)] flex min-h-[60px] items-center gap-2 text-white justify-center px-[50px] py-[18px] rounded-[20px] max-md:px-5 hover:bg-[rgba(0,127,105,1)] transition-colors">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/97d9ded634ec40d18877fc631e7e66a8/9cf0909a943c81390fbf1d491eb546f026184b1a?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
              alt="Get Started Icon"
            />
            <div className="text-white self-stretch my-auto">Get Started</div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
