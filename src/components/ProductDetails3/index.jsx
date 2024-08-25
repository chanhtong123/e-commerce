import { Text, RatingBar, Button, Img } from "./..";
import React from "react";

export default function ProductDetails3({
  discountLabel = "-35%",
  addToCartButton = "Add To Cart",
  productName = "AK-900 Wired Keyboard",
  productPrice = "$960",
  originalPrice = "$1160",
  reviewCount = "(75)",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-full gap-4`}>
      <div className="self-stretch rounded bg-secondary">
        <div className="mt-3 flex flex-col gap-3.5">
          <div className="relative mx-3 h-[182px]">
            <Button className="h-[26px] min-w-[54px] rounded bg-secondary_2 px-3 text-[12px] text-text-0">
              {discountLabel}
            </Button>
            <div className="absolute left-0 right-0 top-0 m-auto flex flex-1 flex-col items-end gap-2">
              <Button className="h-[34px] w-[34px] rounded-[16px] bg-bg px-1">
                <Img src="images/img_wishlist.svg" />
              </Button>
              <Button className="h-[34px] w-[34px] rounded-[16px] bg-bg px-1">
                <Img src="images/img_quick_view.svg" />
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 px-7 py-[38px] sm:p-5">
              <Img
                src="images/img_ak_900_01_500x500.png"
                alt="Product Image"
                className="h-[100px] w-full object-cover"
              />
            </div>
          </div>
          <Button className="h-[40px] self-stretch rounded-bl rounded-br bg-button px-[34px] text-[16px] font-medium text-bg sm:px-5">
            {addToCartButton}
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-1.5 self-stretch">
        <Text className="text-[16px] font-medium !text-button">{productName}</Text>
        <div className="flex flex-wrap gap-3 self-stretch">
          <Text className="text-[16px] font-medium !text-secondary_2">{productPrice}</Text>
          <Text className="text-[16px] font-medium !text-text2-0 line-through">{originalPrice}</Text>
        </div>
        <div className="flex gap-2 self-stretch">
          <RatingBar
            value={4}
            isEditable={true}
            color="#00000071"
            activeColor="#ffad33"
            size={20}
            className="flex gap-2.5"
          />
          <Text className="text-[14px] font-semibold !text-text2-0">{reviewCount}</Text>
        </div>
      </div>
    </div>
  );
}



