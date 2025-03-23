import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    taint: true,
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  transpilePackages: [
    "@workspace/ui",
    "@workspace/types-schema",
    "@t3-oss/env-nextjs",
    "@t3-oss/env-core",
  ],
};

export default nextConfig;
