const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  webpack: (config) => {
    config.resolve.alias["react/jsx-runtime"] = path.join(
      __dirname,
      "/node_modules/react/jsx-runtime.js",
    );
    return config;
  },
};

module.exports = nextConfig;
