import { StatsIcon } from '../ui/icons/StatsIcon';

const IssuesCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 w-[280px] -mt-24 ml-auto">
      <div className="flex justify-between items-start">
        <div className="flex flex-col items-start">
          <StatsIcon className="w-8 h-8 mb-2" />
          <p className="text-gray-600 mb-1">Issues Fixed</p>
          <p className="text-3xl font-bold">500K+</p>
        </div>
        <div className="flex flex-col items-end text-[#0049C6]">
          <span>↑ 14%</span>
          <span className="text-sm">This week</span>
        </div>
      </div>
    </div>
  );
};

export default IssuesCard; 