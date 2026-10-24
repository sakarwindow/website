import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProductGrid from "@/components/ProductGrid";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore our complete range of uPVC and aluminium windows, doors and specialty systems.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Product Catalog"
        title="Windows & doors, engineered to perform."
        italic={["engineered"]}
        text="From compact ventilators to panoramic lift & slide doors — explore systems built for comfort, security and lasting beauty."
      />
      <ProductGrid />
      <CTA />
    </>
  );
}
