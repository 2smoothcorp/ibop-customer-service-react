import _package from "./package.json" assert { type: "json" };

/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        version: _package.version,
    },
};

export default nextConfig;
