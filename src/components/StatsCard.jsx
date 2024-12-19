const StatsCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
      <div className="flex justify-between mb-4">
        <img src="/placeholder-logo.png" alt="AI Logo" className="h-8" />
        <p className="text-gray-800">AI to Detect & Autofix Bad Code</p>
      </div>
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