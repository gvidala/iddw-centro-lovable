import React from 'react';

interface MetricItemProps {
  number: string;
  label: string;
}

const MetricItem: React.FC<MetricItemProps> = ({ number, label }) => {
  return (
    <div className="min-w-60 overflow-hidden flex-1 shrink basis-[0%] pl-5 border-l-4 border-l-[#F2BFAF] border-[rgba(242,191,175,1)] border-solid">
      <div className="text-[#2D2D2D] text-[38px] font-bold tracking-[-0.76px]">
        {number}
      </div>
      <div className="text-[rgba(45,45,45,1)] text-base font-normal">
        {label}
      </div>
    </div>
  );
};

export default MetricItem;
