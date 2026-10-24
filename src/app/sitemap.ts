import type { MetadataRoute } from "next";
import { company, products } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/products", "/about", "/contact"].map((path) => ({
    url: `${company.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  const productPages = products.map((p) => ({
    url: `${company.url}/products/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...pages, ...productPages];
}
