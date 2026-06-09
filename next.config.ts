import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fixa a raiz no diretório do projeto (há um package-lock.json solto no
  // diretório pai que confundia a detecção automática do Turbopack).
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
