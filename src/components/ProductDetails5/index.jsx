import { Text, RatingBar, Img, Button } from "./..";
import React from "react";

export default function ProductDetails5({
  discountLabel = "-25%",
  productTitle = "S-Series Comfort Chair ",
  productPrice = "$375",
  originalPrice = "$400",
  reviewCount = "(99)",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-full gap-3.5`}>
      <div className="relative h-[250px] self-stretch rounded bg-secondary p-3">
        <Button className="h-[26px] min-w-[54px] rounded bg-secondary_2 px-3 text-[12px] text-text-0">
          {discountLabel}
        </Button>
        <div className="absolute left-0 right-0 top-3 m-auto flex flex-1 flex-col items-end gap-2">
          <Button className="h-[34px] w-[34px] rounded-[16px] bg-bg px-1">
            <Img src="images/img_wishlist.svg" />
          </Button>
          <Button className="h-[34px] w-[34px] rounded-[16px] bg-bg px-1">
            <Img src="images/img_quick_view.svg" />
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 px-14 md:px-5">
          <Img src="images/img_sam_moghadam_kh.png" alt="Product Image" className="h-[180px] w-[80%] object-contain" />
        </div>
      </div>
      <div className="flex flex-col items-start gap-1.5 self-stretch">
        <Text className="text-[16px] font-medium !text-button">{productTitle}</Text>
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



