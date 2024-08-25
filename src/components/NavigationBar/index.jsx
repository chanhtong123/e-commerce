import { Img, Text, Heading } from "./..";
import React from "react";

export default function NavigationBar({ exclusiveText = "Exclusive", homeText = "Home", ...props }) {
  return (
    <div {...props} className={`${props.className} flex sm:flex-col items-center container-xs`}>
      <div className="flex flex-1 items-center justify-center md:self-stretch sm:flex-col">
        <Heading size="heading_24px_bold" as="h4">
          {exclusiveText}
        </Heading>
        <div className="flex flex-1 items-center justify-center px-14 md:px-5 sm:self-stretch">
          <div className="flex flex-1 justify-end">
            <Text as="p" className="!text-button">
              {homeText}
            </Text>
          </div>
          <div className="ml-6 flex">
            <Text as="p" className="!text-button">
              Contact
            </Text>
          </div>
          <div className="ml-6 flex">
            <Text as="p" className="!text-button">
              About
            </Text>
          </div>
          <a href="#" className="ml-12">
            <Text as="p" className="!text-button">
              Sign Up
            </Text>
          </a>
        </div>
      </div>
      <div className="flex w-[38%] items-center justify-end md:w-full">
        <div className="flex w-[52%] justify-center rounded bg-secondary p-1.5">
          <div className="flex w-full items-center justify-between gap-5">
            <Text size="title_12px_regular" as="p" className="ml-2 self-end !text-text2-0">
              What are you looking for?
            </Text>
            <Img src="images/img_search_button.svg" alt="Search Button" className="h-[24px] w-[24px]" />
          </div>
        </div>
        <div className="flex gap-4">
          <Img src="images/img_wishlist.svg" alt="Wishlist Icon" className="h-[32px] w-[32px]" />
          <Img src="images/img_cart1.svg" alt="Cart Icon" className="h-[32px] w-[32px]" />
          <Img src="images/img_user_button.svg" alt="User Icon" className="h-[32px] w-[32px]" />
        </div>
      </div>
    </div>
  );
}



