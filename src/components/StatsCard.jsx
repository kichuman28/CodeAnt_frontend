import { AntLogo } from '../ui/icons/AntLogo';

const StatsCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-16">
      <div className="flex items-center gap-2 mb-4">
        <AntLogo className="h-8" />
        <p className="text-gray-800 font-bold">AI to Detect & Autofix Bad Code</p>
      </div>
      <div className="h-px bg-gray-200 mb-4 -mx-6" />
      <div className="flex justify-between">
        <div className="text-center">
          <p className="font-bold">30+</p>
          <p className="text-sm text-gray-600">Language Support</p>
        </div>
        <div className="text-center">
          <p className="font-bold">10K+</p>
          <p className="text-sm text-gray-600">Developers</p>
        </div>
        <div className="text-center">
          <p className="font-bold">100K+</p>
          <p className="text-sm text-gray-600">Hours Saved</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard; 