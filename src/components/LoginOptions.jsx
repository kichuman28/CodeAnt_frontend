import { useState } from 'react';
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
  const saasOptions = [
    { Icon: GithubIcon, text: "Sign in with Github" },
    { Icon: BitbucketIcon, text: "Sign in with Bitbucket" },
    { Icon: AzureIcon, text: "Sign in with Azure DevOps" },
    { Icon: GitlabIcon, text: "Sign in with GitLab" },
  ];

  const selfHostedOptions = [
    { Icon: GitlabIcon, text: "Self Hosted GitLab" },
    { Icon: SSOIcon, text: "Sign in with SSO" },
  ];

  const options = isSaaS ? saasOptions : selfHostedOptions;

  return (
    <div className="w-full max-w-md">
      {options.map((option, index) => (
        <LoginOption
          key={index}
          Icon={option.Icon}
          text={option.text}
          onClick={() => console.log(`Clicked: ${option.text}`)}
        />
      ))}
    </div>
  );
};

export default LoginOptions; 