import { Text, RatingBar, Button, Img } from "./..";
import React from "react";

export default function ProductCard({
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
              alt="Product Image"
              className="mt-2.5 h-[162px] w-[58%] self-end object-contain"
            />
            <div className="flex flex-col items-end gap-2">
              <Button className="h-[34px] w-[34px] rounded-[16px] bg-bg px-1">
                <Img src="images/img_wishlist.svg" />
              </Button>
              <Button className="h-[34px] w-[34px] rounded-[16px] bg-bg px-1">
                <Img src="images/img_quick_view.svg" />
              </Button>
            </div>
          </div>
          <Button className="h-[40px] self-stretch rounded-bl rounded-br bg-button px-[34px] text-[16px] font-medium text-bg sm:px-5">
            {addToCartButton}
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-1.5 self-stretch">
        <Text className="text-[16px] font-medium !text-button">{productTitle}</Text>
        <div className="flex items-center self-stretch">
          <Text className="text-[16px] font-medium !text-secondary_2">{productPrice}</Text>
          <div className="flex flex-1 gap-2 px-2">
            <RatingBar
              value={4}
              isEditable={true}
              color="#00000071"
              activeColor="#ffad33"
              size={20}
              className="flex gap-2.5"
            />
            <Text className="text-[14px] font-semibold !text-text2-0">{ratingCount}</Text>
          </div>
        </div>
      </div>
    </div>
  );
}



