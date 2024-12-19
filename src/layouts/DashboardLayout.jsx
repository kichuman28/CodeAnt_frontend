import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { AntLogo } from '../ui/icons/AntLogo';

export const DashboardLayout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen relative">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b z-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AntLogo className="h-8" />
            <span className="font-semibold text-xl">CodeAnt AI</span>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden fixed top-0 left-0 right-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-y-14' : '-translate-y-full'
        }`}
      >
        <div className="p-4">
          <Sidebar mobile={true} onItemClick={() => setIsMobileMenuOpen(false)} />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:block fixed top-0 left-0 h-full w-64">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 min-h-screen pt-16 md:pt-0 md:ml-64">
        <div className="p-4 md:p-8">
          {children}
        </div>
      </main>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};