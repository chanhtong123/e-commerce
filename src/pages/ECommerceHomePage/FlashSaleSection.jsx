import { Img, Button, Text, Heading } from "../../components";
import React from "react";

export default function FlashSaleSection() {
  return (
    <>
      {/* flash sale section */}
      <div className="mt-[138px] flex justify-center self-stretch">
        <div className="container-xs flex justify-center md:px-5">
          <div className="relative h-[500px] w-full bg-button px-14 md:px-5">
            <div className="absolute bottom-0 right-[10%] top-0 my-auto h-[500px] w-[504px] rounded-[252px] bg-blue_gray-100_4c blur-[200.00px] backdrop-opacity-[0.5]" />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-center gap-[42px] md:relative md:flex-col">
              <div className="flex w-[44%] flex-col items-start gap-8 md:w-full">
                <Heading size="title_16px_semibold" as="h6" className="!text-button1-0">
                  Categories
                </Heading>
                <Heading size="heading_48px_semibold" as="h1" className="w-full leading-[60px] !text-text-0">
                  Enhance Your Music Experience
                </Heading>
                <div className="flex gap-6 self-stretch">
                  <div className="w-[16%] rounded-[30px] bg-bg p-2.5">
                    <div className="flex flex-col items-center">
                      <Heading size="title_16px_semibold" as="h6">
                        23
                      </Heading>
                      <Text size="textxs" as="p" className="relative mt-[-4px] !text-button">
                        Hours
                      </Text>
                    </div>
                  </div>
                  <div className="flex w-[16%] flex-col items-center justify-center rounded-[30px] bg-bg p-2.5">
                    <Heading size="title_16px_semibold" as="h6">
                      05
                    </Heading>
                    <Text size="textxs" as="p" className="relative mt-[-4px] !text-button">
                      Days
                    </Text>
                  </div>
                  <div className="w-[16%] rounded-[30px] bg-bg px-2 py-2.5">
                    <div className="flex flex-col items-center">
                      <Heading size="title_16px_semibold" as="h6">
                        59
                      </Heading>
                      <Text size="textxs" as="p" className="relative mt-[-6px] !text-button">
                        Minutes
                      </Text>
                    </div>
                  </div>
                  <div className="w-[16%] rounded-[30px] bg-bg px-1.5 py-2.5">
                    <div className="flex flex-col items-center">
                      <Heading size="title_16px_semibold" as="h6">
                        35
                      </Heading>
                      <Text size="textxs" as="p" className="relative mt-[-6px] !text-button">
                        Seconds
                      </Text>
                    </div>
                  </div>
                </div>
                <Button size="4xl" className="min-w-[170px] rounded font-medium">
                  Buy Now!
                </Button>
              </div>
              <Img
                src="images/img_jbl_boombox_2_hero_020_x1.png"
                alt="Product Image"
                className="h-[330px] w-[56%] object-contain md:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



