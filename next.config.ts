import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export", // static site for GitHub Pages
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  images: { unoptimized: true },
  trailingSlash: true,
};
export default config;
