import { Heading, Img, Button } from "./..";
import React from "react";

export default function ProductDetails({
  buttonLabel = "-40%",
  productImage = "images/img_g92_2_500x500_1.png",
  productName = "HAVIT HV-G92 Gamepad",
  currentPrice = "$120",
  originalPrice = "$160",
  ratingImage = "images/img_signal_orange_a200_20x100.svg",
  ratingCount = "(88)",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[24%] md:w-full gap-4`}>
      <div className="relative h-[250px] self-stretch rounded bg-secondary p-3">
        <Button size="xs" className="min-w-[54px] rounded">
          {buttonLabel}
        </Button>
        <div className="absolute left-0 right-0 top-3 m-auto flex flex-1 flex-col items-end gap-2">
          <Button shape="round" className="w-[34px]">
            <Img src="images/img_wishlist.svg" />
          </Button>
          <Button shape="round" className="w-[34px]">
            <Img src="images/img_quick_view.svg" />
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 p-3.5">
          <Img src={productImage} alt="Gamepad Image" className="h-[152px] w-[78%] object-contain" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-1.5 self-stretch">
        <Heading as="p">{productName}</Heading>
        <div className="flex flex-wrap gap-3 self-stretch">
          <Heading as="p" className="!text-secondary_2">
            {currentPrice}
          </Heading>
          <Heading size="textmd" as="p" className="!text-text2-0 line-through">
            {originalPrice}
          </Heading>
        </div>
        <div className="flex gap-2 self-stretch">
          <Img src={ratingImage} alt="Rating Signal" className="h-[20px] w-[38%] object-contain" />
          <Heading size="title_14px_semibold" as="p" className="!text-text2-0">
            {ratingCount}
          </Heading>
        </div>
      </div>
    </div>
  );
}



