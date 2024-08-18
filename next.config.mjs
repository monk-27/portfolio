/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GITHUB_USERNAME: process.env.GITHUB_USERNAME,
        FORMSPARK_KEY: process.env.FORMSPARK_KEY,
    },
};

export default nextConfig;

