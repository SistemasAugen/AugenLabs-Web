/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  pageExtensions: ['tsx', '_middleware.ts'],
  i18n: {
    locales: ['es', 'en', 'pt'],
    defaultLocale: 'es',
  },

  // experimental: {
  //   removeConsole: true,
  // }
}
