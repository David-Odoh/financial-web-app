import nextI18NextConfig from "./next-i18next.config.mjs";

const nextConfig = {
  i18n: nextI18NextConfig.i18n,
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_PINATA_API_KEY: process.env.NEXT_PUBLIC_PINATA_API_KEY,
    NEXT_PUBLIC_PINATA_SECRET_API_KEY:
      process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY,
  },
  images: {
    domains: ["gateway.pinata.cloud"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
