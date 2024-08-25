import { Text, RatingBar, Img, Button } from "./..";
import React from "react";

export default function ProductDetails7({
  productName = "ASUS FHD Gaming Laptop",
  productPrice = "$700",
  reviewCount = "(325)",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-full gap-4`}>
      <div className="relative h-[250px] self-stretch rounded bg-secondary p-3">
        <div className="absolute left-0 right-0 top-3 m-auto flex flex-1 flex-col items-end gap-2">
          <Button className="h-[34px] w-[34px] rounded-[16px] bg-bg px-1">
            <Img src="images/img_wishlist.svg" />
          </Button>
          <Button className="h-[34px] w-[34px] rounded-[16px] bg-bg px-1">
            <Img src="images/img_quick_view.svg" />
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 px-9 sm:px-5">
          <Img
            src="images/img_ideapad_gaming_3i_01_500x500.png"
            alt="Gaming Laptop Image"
            className="h-[180px] w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-1 self-stretch">
        <Text className="text-[16px] font-medium !text-button">{productName}</Text>
        <div className="flex items-center self-stretch">
          <Text className="text-[16px] font-medium !text-secondary_2">{productPrice}</Text>
          <div className="flex flex-1 gap-2 px-2">
            <RatingBar
              value={5}
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
    </div>
  );
}



