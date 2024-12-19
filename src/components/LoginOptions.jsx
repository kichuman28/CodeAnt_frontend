import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GithubIcon } from '../ui/icons/GithubIcon';
import { BitbucketIcon } from '../ui/icons/BitbucketIcon';
import { AzureIcon } from '../ui/icons/AzureIcon';
import { GitlabIcon } from '../ui/icons/GitlabIcon';
import { SSOIcon } from '../ui/icons/SSOIcon';

const LoginOption = ({ Icon, text, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-center gap-2 p-3 mb-4 border rounded-lg hover:bg-gray-50 transition-colors"
  >
    <Icon className="w-6 h-6" />
    <span>{text}</span>
  </button>
);

const LoginOptions = ({ isSaaS }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add any login logic here if needed
    navigate('/repositories');
  };

  const saasOptions = [
    { Icon: GithubIcon, text: <span className="font-semibold">Sign in with Github</span> },
    { Icon: BitbucketIcon, text: <span className="font-semibold">Sign in with Bitbucket</span> },
    { Icon: AzureIcon, text: <span className="font-semibold">Sign in with Azure DevOps</span> },
    { Icon: GitlabIcon, text: <span className="font-semibold">Sign in with GitLab</span> },
  ];

  const selfHostedOptions = [
    { Icon: GitlabIcon, text: <span className="font-semibold">Self Hosted GitLab</span> },
    { Icon: SSOIcon, text: <span className="font-semibold">Sign in with SSO</span> },
  ];

  const options = isSaaS ? saasOptions : selfHostedOptions;

  return (
    <div className="w-full max-w-md min-h-[280px]">
      {options.map((option, index) => (
        <LoginOption
          key={index}
          Icon={option.Icon}
          text={option.text}
          onClick={handleLogin}
        />
      ))}
    </div>
  );
};

export default LoginOptions; 