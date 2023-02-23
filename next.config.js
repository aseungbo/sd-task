/** @type {import('next').NextConfig} */
/**
 * CORS 에러 처리를 위한 rewrites 추가
 */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3000/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
