import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow LAN access during development from your current machine IP.
  allowedDevOrigins: ["172.18.4.38"],
};

export default nextConfig;
