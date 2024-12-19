import { DashboardLayout } from '../layouts/DashboardLayout';
import { RepositoryList } from '../components/RepositoryList';
import { SearchIcon } from '../ui/icons/SearchIcon';
import { RefreshIcon } from '../ui/icons/RefreshIcon';
import { AddIcon } from '../ui/icons/AddIcon';


export const RepositoryPage = () => {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg border p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold mb-1">Repositories</h1>
              <p className="text-gray-600">33 total repositories</p>
            </div>
            <div className="flex gap-2 md:gap-4">
              <button className="px-3 md:px-4 py-2 rounded-lg border hover:bg-gray-50 flex items-center justify-center gap-2">
                <RefreshIcon className="w-4 h-4" /> 
                <span>Refresh All</span>
              </button>
              <button className="px-3 md:px-4 py-2 rounded-lg bg-[#1570EF] text-white hover:bg-blue-600 flex items-center justify-center gap-2">
                <AddIcon className="w-4 h-4" /> 
                <span>Add Repository</span>
              </button>
            </div>
          </div>
          
          <div className="relative mb-6">
            <input
              type="search"
              placeholder="Search Repositories"
              className="w-full md:w-[320px] pl-10 pr-4 py-2 border rounded-lg"
            />
            <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          <RepositoryList />
        </div>
      </div>
    </DashboardLayout>
  );
}; 