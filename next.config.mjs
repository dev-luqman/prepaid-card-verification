/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    unoptimized: true
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/babbangona-prod-bucket-2/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/home/cards",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
