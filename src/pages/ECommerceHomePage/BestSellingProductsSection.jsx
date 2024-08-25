import { Button, Heading } from "../../components";
import ProductCard from "../../components/ProductCard";
import React, { Suspense } from "react";

const productList = [
  {
    productImage: "images/img_672462_zah9d_56.png",
    productName: "The north coat",
    productPrice: "$260",
    discountedPrice: "$360",
    reviewCount: "(65)",
  },
  {
    productImage: "images/img_547953_9c2st_87.png",
    productName: "Gucci duffle bag",
    productPrice: "$960",
    discountedPrice: "$1160",
    reviewCount: "(65)",
  },
  {
    productImage: "images/img_672462_zah9d_56.png",
    productName: "RGB liquid CPU Cooler",
    productPrice: "$160",
    discountedPrice: "$170",
    reviewCount: "(65)",
  },
  {
    productImage: "images/img_672462_zah9d_56.png",
    productName: "Small BookSelf",
    productPrice: "$260",
    discountedPrice: "$360",
    reviewCount: "(65)",
  },
];

export default function BestSellingProductsSection() {
  return (
    <>
      {/* best selling products section */}
      <div className="mt-[68px] flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col gap-[58px] md:px-5 sm:gap-[29px]">
          <div className="flex items-center justify-center md:flex-col">
            <div className="flex flex-1 flex-col items-start gap-6 md:self-stretch">
              <div className="flex items-center gap-4 self-stretch">
                <div className="h-[40px] w-[20px] rounded bg-secondary_2" />
                <Heading size="title_16px_semibold" as="h6" className="!text-secondary_2">
                  This Month
                </Heading>
              </div>
              <Heading size="heading_36px_semibold" as="h1">
                Best Selling Products
              </Heading>
            </div>
            <Button size="4xl" className="min-w-[158px] self-end rounded font-medium md:self-auto">
              View All
            </Button>
          </div>
          <div className="flex gap-[30px] md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {productList.map((d, index) => (
                <ProductCard {...d} key={"productsList" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}



