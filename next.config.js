/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const explicitBasePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || '';
const isGithubUserPage = repoName && repoName.endsWith('.github.io');
const basePath = explicitBasePath || (repoName && !isGithubUserPage ? `/${repoName}` : '');

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
