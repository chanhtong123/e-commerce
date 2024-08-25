import { Button, Heading, RatingBar, Img, Slider } from "../../components";
import ProductCard1 from "../../components/ProductCard1";
import ProductDetails10 from "../../components/ProductDetails10";
import ProductDetails5 from "../../components/ProductDetails5";
import ProductDetails6 from "../../components/ProductDetails6";
import ProductDetails7 from "../../components/ProductDetails7";
import ProductDetails8 from "../../components/ProductDetails8";
import ProductDetails9 from "../../components/ProductDetails9";
import React from "react";

export default function ProductShowcaseSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* product showcase section */}
      <div className="mt-[70px] flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col items-center gap-[60px] md:px-5 sm:gap-[30px]">
          <div className="flex flex-col gap-[58px] self-stretch sm:gap-[29px]">
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <div className="flex flex-1 flex-col items-start gap-6 md:self-stretch">
                <div className="flex items-center gap-4 self-stretch">
                  <div className="h-[40px] w-[20px] rounded bg-secondary_2" />
                  <Heading size="title_16px_semibold" as="h6" className="!text-secondary_2">
                    Our Products
                  </Heading>
                </div>
                <Heading size="heading_36px_semibold" as="h1">
                  Explore Our Products
                </Heading>
              </div>
              <div className="flex gap-2 self-end md:self-auto">
                <Button
                  onClick={() => {
                    sliderRef?.current?.slidePrev();
                  }}
                  size="3xl"
                  className="w-[46px] rounded-[22px]"
                >
                  <Img src="images/img_arrow_left.svg" />
                </Button>
                <Button
                  onClick={() => {
                    sliderRef?.current?.slideNext();
                  }}
                  size="3xl"
                  className="w-[46px] rounded-[22px]"
                >
                  <Img src="images/img_arrow_right_button.svg" />
                </Button>
              </div>
            </div>
            <div className="mx-auto flex w-full">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
                disableDotsControls
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                items={[...Array(3)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex flex-col gap-[60px] sm:gap-[30px]">
                      <div className="flex gap-[30px] md:flex-col">
                        <ProductDetails5 />
                        <ProductCard1 />
                        <ProductDetails6 />
                        <div className="flex w-full flex-col gap-4">
                          <div className="flex items-start justify-end rounded bg-secondary p-3">
                            <Img
                              src="images/img_curology_j7pkvqrtusm_unsplash.png"
                              alt="Product Image"
                              className="mb-8 mt-[34px] h-[158px] w-[70%] self-center object-contain"
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
                          <div className="flex flex-col items-start justify-center gap-1">
                            <Heading as="p">Curology Product Set </Heading>
                            <div className="flex items-center gap-1 self-stretch">
                              <div className="flex">
                                <Heading as="p" className="!text-secondary_2">
                                  $500
                                </Heading>
                              </div>
                              <div className="flex flex-1 gap-2">
                                <RatingBar
                                  value={4}
                                  isEditable={true}
                                  color="#00000071"
                                  activeColor="#ffad33"
                                  size={20}
                                  className="flex gap-2.5"
                                />
                                <Heading size="title_14px_semibold" as="p" className="!text-text2-0">
                                  (145)
                                </Heading>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-[30px] md:flex-col">
                        <ProductDetails7 />
                        <ProductDetails8 />
                        <ProductDetails9 />
                        <ProductDetails10 />
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
          </div>
          <Button size="4xl" className="min-w-[234px] rounded font-medium">
            View All Products
          </Button>
        </div>
      </div>
    </>
  );
}



