import { Button, Slider, Img, Heading } from "../../components";
import ProductDetails1 from "../../components/ProductDetails1";
import ProductDetails2 from "../../components/ProductDetails2";
import ProductDetails3 from "../../components/ProductDetails3";
import ProductDetails4 from "../../components/ProductDetails4";
import TimeDisplay from "../../components/TimeDisplay";
import React from "react";

export default function ECommerceFlashSalesSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* e commerce flash sales section */}
      <div className="flex flex-col items-center gap-[58px] self-stretch sm:gap-[29px]">
        <div className="flex w-[82%] flex-col items-center md:w-full md:px-5">
          <div className="container-xs flex flex-col gap-8">
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <div className="flex flex-1 items-center md:flex-col md:self-stretch">
                <div className="flex w-[30%] flex-col items-start gap-6 md:w-full">
                  <div className="flex items-center gap-4 self-stretch">
                    <div className="h-[40px] w-[20px] rounded bg-secondary_2" />
                    <Heading size="title_16px_semibold" as="h3" className="mb-1 self-end !text-secondary_2">
                      Today’s
                    </Heading>
                  </div>
                  <Heading size="heading_36px_semibold" as="h4">
                    Flash Sales
                  </Heading>
                </div>
                <TimeDisplay />
              </div>
              <div className="mb-1.5 flex gap-2 self-end md:self-auto">
                <Button size="3xl" className="w-[46px] rounded-[22px]">
                  <Img src="images/img_arrow_left.svg" />
                </Button>
                <Button size="3xl" className="w-[46px] rounded-[22px]">
                  <Img src="images/img_arrow_right_button.svg" />
                </Button>
              </div>
            </div>
            <div className="mx-auto flex w-full gap-[30px] md:mx-0 md:flex-col">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 4 } }}
                disableDotsControls
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                items={[...Array(12)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="px-[15px]">
                      <ProductDetails1 />
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
          </div>
        </div>
        <div className="container-xs flex flex-col items-center px-14 md:px-5">
          <Button size="4xl" className="min-w-[234px] rounded font-medium">
            View All Products
          </Button>
        </div>
      </div>
    </>
  );
}



