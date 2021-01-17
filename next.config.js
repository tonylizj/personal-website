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
      {
        source: '/flower',
        destination: '/projects/flowerid',
        permanent: true,
      },
      {
        source: '/config',
        destination: '/projects/config-sync',
        permanent: true,
      },
    ];
  },
};
