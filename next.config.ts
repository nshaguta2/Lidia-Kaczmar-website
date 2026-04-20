import type { NextConfig } from "next";

const githubRepoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const inferredBasePath =
  process.env.GITHUB_ACTIONS === "true" && githubRepoName ? `/${githubRepoName}` : "";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? inferredBasePath;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
