import { useState } from 'react';
import StatsCard from '../components/StatsCard';
import IssuesCard from '../components/IssuesCard';
import LoginOptions from '../components/LoginOptions';
import { AntLogo } from '../ui/icons/AntLogo';
import { BackgroundLogo } from '../ui/icons/BackgroundLogo';

const LoginPage = () => {
  const [isSaaS, setIsSaaS] = useState(true);

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Hidden on mobile */}
      <div className="hidden md:w-1/2 md:flex md:bg-gray-50 md:p-12 md:flex-col md:justify-center md:items-center md:relative">
        <div className="max-w-md w-full relative">
          <StatsCard />
          <div className="absolute -right-8 -bottom-20">
            <IssuesCard />
          </div>
        </div>
        <BackgroundLogo className="absolute bottom-0 left-0 opacity-60 w-64" />
      </div>

      {/* Right Section - Full width on mobile */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-4">
                  <AntLogo className="h-8" />
                  <span className="text-xl font-semibold">CodeAnt AI</span>
                </div>
                <h1 className="text-2xl font-semibold mb-8 text-center">Welcome to CodeAnt AI</h1>
              </div>
              
              <div className="flex mb-0">
                <button
                  onClick={() => setIsSaaS(true)}
                  className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                    isSaaS ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
                >
                  SAAS
                </button>
                <button
                  onClick={() => setIsSaaS(false)}
                  className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                    !isSaaS ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
                >
                  Self Hosted
                </button>
              </div>
            </div>

            <div className="h-px bg-gray-200" />

            <div className="p-6">
              <LoginOptions isSaaS={isSaaS} />
            </div>
          </div>

          <p className="text-center text-sm text-black mt-6">
            By signing up you agree to the{' '}
            <a href="#" className="font-bold hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 