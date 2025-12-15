import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ustaw root dla outputFileTracing, żeby Next.js nie próbował zgadywać workspace root
  outputFileTracingRoot: __dirname,
  // Możesz dodać inne opcje Next.js poniżej
}

export default nextConfig;
