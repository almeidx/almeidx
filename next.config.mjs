/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
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

export default nextConfig;
