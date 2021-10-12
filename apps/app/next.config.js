/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.NEXT_API_REWRITE,
      },
    ];
  },
  webpack: (config) => {
    // Let Babel compile outside of src/.
    const tsRule = config.module.rules.find(
      (rule) => rule.test && rule.test.toString().includes("tsx|ts")
    );
    tsRule.include = undefined;
    tsRule.exclude = /node_modules/;

    return config;
  },
};
