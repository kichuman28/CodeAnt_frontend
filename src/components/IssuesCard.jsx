import { StatsIcon } from '../ui/icons/StatsIcon';
import { UpArrowIcon } from '../ui/icons/UpArrowIcon';

const IssuesCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_15px_50px_-12px_rgb(0,0,0,0.25)] p-6 w-[280px] -mt-24 ml-auto">
      <div className="flex justify-between items-start">
        <div className="flex flex-col items-start">
          <StatsIcon className="w-8 h-8 mb-2" />
          <p className="text-gray-600 mb-1 font-bold">Issues Fixed</p>
          <p className="text-3xl font-bold">500K+</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center ">
            <UpArrowIcon className="w-6 h-6" />
            <span className="font-bold text-[#0049C6]">14%</span>
          </div>
          <span className="text-sm text-black">This week</span>
        </div>
      </div>
    </div>
  );
};

export default IssuesCard;