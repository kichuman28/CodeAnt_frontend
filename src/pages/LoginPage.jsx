import { useState } from 'react';
import StatsCard from '../components/StatsCard';
import IssuesCard from '../components/IssuesCard';
import LoginOptions from '../components/LoginOptions';

const LoginPage = () => {
  const [isSaaS, setIsSaaS] = useState(true);

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="w-1/2 bg-gray-50 p-12 flex flex-col justify-center items-center relative">
        <div className="max-w-md w-full">
          <StatsCard />
          <IssuesCard />
        </div>
        <img 
          src="/ant-logo.png" 
          alt="Background Logo" 
          className="absolute bottom-0 left-0 opacity-20 w-96"
        />
      </div>

      {/* Right Section */}
      <div className="w-1/2 p-12 flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <img src="/codeant-logo.png" alt="CodeAnt AI" className="h-8 mx-auto mb-4" />
            <h1 className="text-2xl font-semibold mb-8">Welcome to CodeAnt AI</h1>
            
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setIsSaaS(true)}
                className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                  isSaaS ? 'bg-blue-500 text-white' : 'bg-white'
                }`}
              >
                SAAS
              </button>
              <button
                onClick={() => setIsSaaS(false)}
                className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                  !isSaaS ? 'bg-blue-500 text-white' : 'bg-white'
                }`}
              >
                Self Hosted
              </button>
            </div>
          </div>

          <LoginOptions isSaaS={isSaaS} />

          <p className="text-center text-sm text-gray-600 mt-6">
            By signing up you agree to the{' '}
            <a href="#" className="text-blue-500 hover:underline">
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