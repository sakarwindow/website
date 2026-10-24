import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProductGrid from "@/components/ProductGrid";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore our complete range of aluminium sliding systems, windows, doors, partitions and cladding.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Product Catalog"
        title="Windows & doors, engineered to perform."
        italic={["engineered"]}
        text="From slim sliding systems and arched windows to entrance doors, glass partitions and cladding — explore our complete aluminium range."
      />
      <ProductGrid />
      <CTA />
    </>
  );
}
