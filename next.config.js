module.exports = {
  poweredByHeader: false,
  reactStrictMode: true,
  redirects() {
    return [
      {
        destination: 'https://pepemanager.com',
        permanent: true,
        source: '/bot',
      },
      {
        destination: 'https://pepe-is.life',
        permanent: true,
        source: '/emoji',
      },
    ];
  },
};
