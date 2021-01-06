const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins(
  [
    [optimizedImages, {
      limit: 0,
      optimizeImagesInDev: true,
      /* config for next-optimized-images */
    }],

    // your other plugins here
  ],
  {
    reactStrictMode: true,
  },
);
