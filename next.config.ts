import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'grabit-react-next.maraviyainfotech.com',
      },
      {
        hostname: 'lh3.googleusercontent.com',
      },
      {
        hostname: 'bbxbvkdtyrbquobhbhur.supabase.co',
      },
      {
        hostname: 'github.com',
      },
    ],
  },
};

export default nextConfig;
