
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {

    reactStrictMode: true,
    images: {domains: [
        'apod.nasa.gov',
        'uploads-ssl.webflow.com',
        'images.dmca.com'
      ]}
}

module.exports = withPlugins([[withImages]], nextConfig)