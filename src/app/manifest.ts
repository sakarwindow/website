import type { MetadataRoute } from "next";
import { company } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: company.short,
    description: company.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a0e17",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
