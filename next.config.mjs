/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ensures fully static export
  trailingSlash: true, // optional, makes /about/ instead of about.html
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true }, // required if you use next/image
};

export default nextConfig;
