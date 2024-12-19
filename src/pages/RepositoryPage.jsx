import { DashboardLayout } from '../layouts/DashboardLayout';
import { RepositoryList } from '../components/RepositoryList';
import { SearchIcon } from '../ui/icons/SearchIcon';
import { RefreshIcon } from '../ui/icons/RefreshIcon';
import { AddIcon } from '../ui/icons/AddIcon';


export const RepositoryPage = () => {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg border p-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-semibold mb-1">Repositories</h1>
              <p className="text-gray-600">33 total repositories</p>
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 rounded-lg border hover:bg-gray-50 flex items-center gap-2">
                <RefreshIcon className="w-4 h-4" /> Refresh All
              </button>
              <button className="px-4 py-2 rounded-lg bg-[#1570EF] text-white hover:bg-blue-600 flex items-center gap-2">
                <AddIcon className="w-4 h-4" /> Add Repository
              </button>
            </div>
          </div>
          
          <div className="mb-6 relative">
            <input
              type="search"
              placeholder="Search Repositories"
              className="w-[320px] pl-10 pr-4 py-2 border rounded-lg"
            />
            <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          <RepositoryList />
        </div>
      </div>
    </DashboardLayout>
  );
}; 