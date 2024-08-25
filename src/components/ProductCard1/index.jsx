import { Heading, RatingBar, Button, Img } from "./..";
import React from "react";

export default function ProductCard1({
  addToCartButton = "Add To Cart",
  productTitle = "CANON EOS DSLR Camera",
  productPrice = "$360",
  ratingCount = "(95)",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-full gap-4`}>
      <div className="self-stretch rounded bg-secondary">
        <div className="mt-3 flex flex-col gap-[22px]">
          <div className="mx-3 flex items-start justify-end">
            <Img
              src="images/img_eos_250d_03_500x500.png"
              alt="Eos 250d Image"
              className="mt-2.5 h-[162px] w-[58%] self-end object-contain"
            />
            <div className="flex flex-col items-end gap-2">
              <Button shape="round" className="w-[34px]">
                <Img src="images/img_wishlist.svg" />
              </Button>
              <Button shape="round" className="w-[34px]">
                <Img src="images/img_quick_view.svg" />
              </Button>
            </div>
          </div>
          <Button size="xl" className="self-stretch rounded-bl rounded-br font-medium">
            {addToCartButton}
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-1.5 self-stretch">
        <Heading as="p">{productTitle}</Heading>
        <div className="flex items-center self-stretch">
          <Heading as="p" className="!text-secondary_2">
            {productPrice}
          </Heading>
          <div className="flex flex-1 gap-2 px-2">
            <RatingBar
              value={4}
              isEditable={true}
              color="#00000071"
              activeColor="#ffad33"
              size={20}
              className="flex gap-2.5"
            />
            <Heading size="title_14px_semibold" as="p" className="!text-text2-0">
              {ratingCount}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}



