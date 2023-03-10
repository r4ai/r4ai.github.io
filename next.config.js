const withExportImages = require('next-export-optimize-images')
const withTM = require('next-transpile-modules')(['three'])

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    /* ↓ To solve the bug with ChakraUI 2.4.5 | https://github.com/chakra-ui/chakra-ui/issues/7167 */
    esmExternals: false,
  },
}

module.exports = withExportImages(withTM(nextConfig))
