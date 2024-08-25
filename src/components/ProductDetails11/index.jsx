import { Img, Text, RatingBar, Button } from "./..";
import React from "react";

export default function ProductDetails11({
  productName = "Quilted Satin Jacket",
  productPrice = "$660",
  ratingCount = "(55)",
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
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1">
          <Img src="images/img_698717_z8a1x_34.png" alt="Product Image" className="h-[176px] w-[74%] object-contain" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-1.5 self-stretch">
        <Text className="text-[16px] font-medium !text-button">{productName}</Text>
        <div className="flex items-center self-stretch">
          <Text className="text-[16px] font-medium !text-secondary_2">{productPrice}</Text>
          <div className="flex flex-1 gap-2 px-2">
            <RatingBar
              value={1}
              isEditable={true}
              color="#00000071"
              activeColor="#ffad33"
              size={20}
              starCount={3}
              className="flex gap-2.5"
            />
            <Text className="text-[14px] font-semibold !text-text2-0">{ratingCount}</Text>
          </div>
        </div>
        <Img src="images/img_user_secondary_2_2.svg" alt="Profile Image" className="h-[20px]" />
      </div>
    </div>
  );
}



