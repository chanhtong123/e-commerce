import { Heading, RatingBar, Button, Img } from "./..";
import React from "react";

export default function ProductDetails2({
  discountButton = "-35%",
  addToCartButton = "Add To Cart",
  productName = "AK-900 Wired Keyboard",
  productPrice = "$960",
  originalPrice = "$1160",
  reviewCount = "(75)",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center gap-4`}>
      <div className="self-stretch rounded bg-secondary">
        <div className="mt-3 flex flex-col gap-3.5">
          <div className="relative mx-3 h-[182px]">
            <Button size="xs" className="min-w-[54px] rounded">
              {discountButton}
            </Button>
            <div className="absolute left-0 right-0 top-0 m-auto flex flex-1 flex-col items-end gap-2">
              <Button shape="round" className="w-[34px]">
                <Img src="images/img_wishlist.svg" />
              </Button>
              <Button shape="round" className="w-[34px]">
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
          <Button size="xl" className="self-stretch rounded-bl rounded-br font-medium">
            {addToCartButton}
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-1.5 self-stretch">
        <Heading as="p">{productName}</Heading>
        <div className="flex flex-wrap gap-3 self-stretch">
          <Heading as="p" className="!text-secondary_2">
            {productPrice}
          </Heading>
          <Heading size="textmd" as="p" className="!text-text2-0 line-through">
            {originalPrice}
          </Heading>
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
          <Heading size="title_14px_semibold" as="p" className="!text-text2-0">
            {reviewCount}
          </Heading>
        </div>
      </div>
    </div>
  );
}



