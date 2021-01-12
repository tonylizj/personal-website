module.exports = {
  async redirects() {
    return [
      {
        source: '/hl',
        destination: '/projects/highlighter',
        permanent: true,
      },
      {
        source: '/flower',
        destination: '/projects/flowerid',
        permanent: true,
      },
    ];
  },
};
