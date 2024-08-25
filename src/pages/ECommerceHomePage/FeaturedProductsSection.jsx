import { Text, Img, Heading } from "../../components";
import React from "react";

export default function FeaturedProductsSection() {
  return (
    <>
      {/* featured products section */}
      <div className="mt-[140px] flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col gap-[60px] md:px-5 sm:gap-[30px]">
          <div className="flex flex-col items-start justify-center gap-5">
            <div className="flex items-center gap-4 self-stretch">
              <div className="h-[40px] w-[20px] rounded bg-secondary_2" />
              <Heading size="title_16px_semibold" as="h6" className="!text-secondary_2">
                Featured
              </Heading>
            </div>
            <Heading size="heading_36px_semibold" as="h1">
              New Arrival
            </Heading>
          </div>
          <div className="flex gap-[30px] md:flex-col">
            <div className="relative h-[600px] w-full content-end rounded bg-button px-7 md:h-auto sm:px-5">
              <Img
                src="images/img_ps5_slim_goedko.png"
                alt="Ps5 Image"
                className="mx-auto h-[510px] w-[510px] object-cover"
              />
              <div className="absolute bottom-[5%] left-0 right-0 m-auto flex flex-1 flex-col gap-4">
                <div className="flex flex-col items-start gap-2.5">
                  <Heading size="heading_24px_semibold" as="h4" className="!text-text-0">
                    PlayStation 5
                  </Heading>
                  <Text size="title_14px_regular" as="p" className="w-[48%] leading-[21px] md:w-full">
                    Black and White version of the PS5 coming out on sale.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-center">
                  <Heading as="p" className="!text-bg">
                    Shop Now
                  </Heading>
                  <Img
                    src="images/img_underline_bg.svg"
                    alt="Underline Image"
                    className="h-px w-[16%] object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-8">
              <div className="rounded bg-black-900">
                <div className="flex items-center sm:flex-col">
                  <div className="relative z-[3] mb-6 flex w-[36%] flex-col gap-4 self-end sm:w-full sm:self-auto">
                    <div className="flex flex-col items-center gap-3">
                      <Heading size="heading_24px_semibold" as="h4" className="!text-text-0">
                        Women’s Collections
                      </Heading>
                      <Text size="title_14px_regular" as="p" className="w-full leading-[21px]">
                        Featured woman collections that give you another vibe.
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <Heading as="p" className="!text-bg">
                        Shop Now
                      </Heading>
                      <Img
                        src="images/img_underline_bg.svg"
                        alt="Women's Underline Image"
                        className="h-px w-[32%] object-contain"
                      />
                    </div>
                  </div>
                  <Img
                    src="images/img_attractive_woma.png"
                    alt="Women's Collection Image"
                    className="relative ml-[-140px] h-[284px] w-[60%] object-contain sm:ml-0 sm:w-full"
                  />
                </div>
              </div>
              <div className="flex gap-[30px] sm:flex-col">
                <div className="relative h-[284px] w-full content-center rounded bg-button p-6 md:h-auto sm:w-full sm:p-5">
                  <div className="mx-auto h-[196px] w-[196px] rounded-[98px] bg-blue_gray-100_e5 blur-[300.00px] backdrop-opacity-[0.5]" />
                  <div className="absolute bottom-[25px] left-0 right-0 m-auto h-[228px] flex-1 content-center md:h-auto">
                    <div className="mx-auto flex-1 px-4">
                      <Img
                        src="images/img_69_694768_amazo.png"
                        alt="Speaker Image"
                        className="h-[220px] w-full object-cover md:h-auto"
                      />
                    </div>
                    <Heading
                      size="heading_24px_semibold"
                      as="h4"
                      className="absolute bottom-[24%] left-0 m-auto !text-text-0"
                    >
                      Speakers
                    </Heading>
                    <Text size="title_14px_regular" as="p" className="absolute bottom-[14%] left-0 m-auto">
                      Amazon wireless speakers
                    </Text>
                    <div className="absolute bottom-[0.82px] left-0 right-0 m-auto flex flex-1 flex-col items-start">
                      <Heading as="p" className="!text-bg">
                        Shop Now
                      </Heading>
                      <Img
                        src="images/img_underline_bg.svg"
                        alt="Speaker Underline Image"
                        className="h-px w-[36%] object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative h-[284px] w-full content-center rounded bg-button px-4 py-[22px] md:h-auto sm:w-full sm:py-5">
                  <div className="mx-auto h-[238px] w-[238px] rounded-[118px] bg-blue_gray-100_e5 blur-[300.00px] backdrop-opacity-[0.5]" />
                  <div className="absolute bottom-6 left-0 right-0 m-auto h-[230px] flex-1 content-center px-2 md:h-auto">
                    <div className="mx-auto flex-1">
                      <div className="mr-1.5 flex items-center justify-center md:mr-0">
                        <Heading
                          size="heading_24px_semibold"
                          as="h4"
                          className="relative z-[4] mb-[50px] self-end !text-text-0"
                        >
                          Perfume
                        </Heading>
                        <div className="relative ml-[-98px] flex-1 py-2">
                          <Img
                            src="images/img_652e82cd70aa652.png"
                            alt="Perfume Image"
                            className="h-[202px] w-full object-cover md:h-auto"
                          />
                        </div>
                      </div>
                      <div className="relative mt-[-12px] flex flex-col items-start">
                        <Heading as="p" className="!text-bg">
                          Shop Now
                        </Heading>
                        <Img
                          src="images/img_underline_bg.svg"
                          alt="Perfume Underline Image"
                          className="h-px w-[36%] object-contain"
                        />
                      </div>
                    </div>
                    <Text size="title_14px_regular" as="p" className="absolute bottom-[15%] left-2 m-auto">
                      GUCCI INTENSE OUD EDP
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



