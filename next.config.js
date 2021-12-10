
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {

    reactStrictMode: true,
    images: {domains: [
        'apod.nasa.gov',
        'uploads-ssl.webflow.com',
      ]}
}

module.exports = withPlugins([[withImages]], nextConfig)