/** @type {import('next').NextConfig} */
import nextIntlPlugin from "next-intl/plugin";

const withNextIntl = nextIntlPlugin("./i18n.ts");

const nextConfig = {
  reactStrictMode: false,
};

export default withNextIntl(nextConfig);
