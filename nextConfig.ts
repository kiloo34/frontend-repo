import type { NextConfig } from "next";
import dotenv from "dotenv";

dotenv.config();

export const nextConfig: NextConfig = {
    APP_PORT: process.env.APP_PORT || "3000",
};

export default nextConfig;