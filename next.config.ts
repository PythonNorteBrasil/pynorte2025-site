import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * The directory where the build output is stored.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports#the-dist-directory
   */
  distDir: 'dist',

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
