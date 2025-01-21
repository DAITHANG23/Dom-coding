import withMDX from "@next/mdx";
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default withMDX(nextConfig);
