import { AntLogo } from '../ui/icons/AntLogo';
import { HomeIcon } from '../ui/icons/HomeIcon';
import { CodeIcon } from '../ui/icons/CodeIcon';
import { BookIcon } from '../ui/icons/BookIcon';
import { CloudIcon } from '../ui/icons/CloudIcon';
import { SettingsIcon } from '../ui/icons/SettingsIcon';
import { LogoutIcon } from '../ui/icons/LogoutIcon';
import { SupportIcon } from '../ui/icons/SupportIcon';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const MenuItem = ({ Icon, text, isActive, onClick }) => (
  <div className="px-4">
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-[12px] text-left rounded-lg ${
        isActive 
          ? 'bg-[#1570EF] text-white' 
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-700'}`} />
      <span>{text}</span>
    </button>
  </div>
);

const UserDropdown = () => (
  <button className="w-[202px] h-[40px] flex items-center justify-between px-4 py-3 hover:bg-gray-50 border border-gray-200 rounded-lg mx-4 gap-[spacing-md]">
    <div className="flex items-center gap-2">
      <span className="font-medium">Adwaith Jayasankar</span>
    </div>
    <ChevronDownIcon className="w-5 h-5 text-gray-500" />
  </button>
);

export const Sidebar = ({ mobile = false, onItemClick }) => {
  return (
    <div className={`${mobile ? 'w-full' : 'w-64'} bg-white flex flex-col ${!mobile && 'border-r h-full'}`}>
      {!mobile && (
        <div className="p-4">
          <div className="flex items-center gap-2">
            <AntLogo className="h-8" />
            <span className="font-semibold text-xl">CodeAnt AI</span>
          </div>
        </div>
      )}

      <UserDropdown />
      
      <div className={`flex flex-col ${!mobile && 'flex-1'} py-4`}>
        <MenuItem Icon={HomeIcon} text="Repositories" isActive={true} onClick={onItemClick} />
        <MenuItem Icon={CodeIcon} text="AI Code Review" onClick={onItemClick} />
        <MenuItem Icon={CloudIcon} text="Cloud Security" onClick={onItemClick} />
        <MenuItem Icon={BookIcon} text="How to Use" onClick={onItemClick} />
        <MenuItem Icon={SettingsIcon} text="Settings" onClick={onItemClick} />
        
        <div className={mobile ? '' : 'mt-auto'}>
          <MenuItem Icon={SupportIcon} text="Support" onClick={onItemClick} />
          <MenuItem Icon={LogoutIcon} text="Logout" onClick={onItemClick} />
        </div>
      </div>
    </div>
  );
}; 