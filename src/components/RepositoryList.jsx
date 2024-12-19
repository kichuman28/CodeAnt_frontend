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
  // Add more dummy data as needed
];

export const RepositoryList = () => {
  return (
    <div className="space-y-4">
      {DUMMY_REPOS.map((repo) => (
        <div key={repo.name} className="bg-white p-4 rounded-lg border">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium">{repo.name}</h3>
                <span className="px-2 py-1 text-xs rounded bg-gray-100">
                  {repo.isPublic ? 'Public' : 'Private'}
                </span>
              </div>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                <span>● {repo.language}</span>
                <span>{repo.size}</span>
                <span>Updated {repo.updatedAt}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}; 