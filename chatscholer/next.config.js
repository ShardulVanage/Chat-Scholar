/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  i18n:{
    locales:['en','ch'],
    defaultLocale:'en'
  }
}

module.exports = nextConfig
