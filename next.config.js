/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirect() {
    return [
      {
        source: "/old-blog/123",
        destination: "/new-sexy-blog/123",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
