const IssuesCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-purple-200 rounded-full mr-2" />
          <p className="text-gray-600">Issues Fixed</p>
        </div>
        <div className="flex items-center text-green-600">
          <span>↑ 14%</span>
          <span className="text-sm ml-1">This week</span>
        </div>
      </div>
      <p className="text-3xl font-bold">500K+</p>
    </div>
  );
};

export default IssuesCard; 