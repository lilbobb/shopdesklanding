import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["your-domain.com", "another-domain.com"],
    disableStaticImages: false,
    formats: ["image/webp"],
  
    minimumCacheTTL: 60,
  },
};

export default nextConfig;