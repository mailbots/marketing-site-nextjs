// next.config.js
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withFonts = require('next-fonts');

let nextConfig = withCSS(withImages());
nextConfig = withFonts(withSass(nextConfig));

module.exports = Object.assign({}, nextConfig, {});
