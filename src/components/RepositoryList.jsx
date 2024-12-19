import { DatabaseIcon } from '../ui/icons/DatabaseIcon';
const DUMMY_REPOS = [
  {
    name: 'design-system',
    isPublic: true,
    language: 'React',
    size: '7320 KB',
    updatedAt: '1 day ago'
  },
  {
    name: 'codeant-ci-app',
    isPublic: false,
    language: 'Javascript',
    size: '5871 KB',
    updatedAt: '2 days ago'
  },
  {
    name: 'analytics-dashboard',
    isPublic: false,
    language: 'Python',
    size: '4521 KB',
    updatedAt: '5 days ago'
  },
  {
    name: 'mobile-app',
    isPublic: true,
    language: 'Swift',
    size: '3096 KB',
    updatedAt: '3 days ago'
  },
  {
    name: 'e-commerce-platform',
    isPublic: false,
    language: 'Java',
    size: '6210 KB',
    updatedAt: '6 days ago'
  }
];

export const RepositoryList = () => {
  return (
    <div className="bg-white -mx-4 md:-m-6 mt-2">
      <div className="h-px bg-gray-200" />
      {DUMMY_REPOS.map((repo, index) => (
        <div key={repo.name}>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg font-medium truncate">{repo.name}</h3>
                  <span className="px-2 py-1 text-xs rounded-xl border border-[#B2DDFF] bg-blue-50 text-[#175CD3] whitespace-nowrap">
                    {repo.isPublic ? 'Public' : 'Private'}
                  </span>
                </div>
                <div className="flex items-center gap-4 md:gap-8 mt-2 text-sm text-gray-600 flex-wrap">
                  <span>{repo.language} <span className="text-[#1570EF]">●</span></span>
                  <span className="flex items-center gap-1">
                    <DatabaseIcon className="w-3 h-3" />
                    {repo.size}
                  </span>
                  <span>Updated {repo.updatedAt}</span>
                </div>
              </div>
            </div>
          </div>
          {index < DUMMY_REPOS.length - 1 && <div className="h-px bg-gray-200" />}
        </div>
      ))}
    </div>
  );
};