/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
    ignoreBuildErrors: true, // Add this line
  },
  eslint: {
    ignoreDuringBuilds: true, // Add this line
  }
};

export default nextConfig;
