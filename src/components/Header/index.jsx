import { CloseSVG } from "../Input/close.jsx";
import { Img, Input, Text, SelectBox, Heading } from "./..";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Header({ ...props }) {
  const [searchBarValue4, setSearchBarValue4] = React.useState("");

  return (
    <header {...props} className={`${props.className} flex flex-col gap-10`}>
      <div className="flex justify-center self-stretch bg-button py-3">
        <div className="container-xs flex justify-between gap-5 md:flex-col md:px-5">
          <div className="ml-[308px] flex flex-wrap gap-2 md:ml-0">
            <Text size="title_14px_regular" as="p" className="self-end">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </Text>
            <Heading size="headingxs" as="p" className="self-end !text-text-0 underline">
              ShopNow
            </Heading>
          </div>
          <SelectBox
            shape="square"
            indicator={<Img src="images/img_dropdown.svg" alt="Dropdown" className="h-[24px] w-[24px]" />}
            name="Language Dropdown"
            placeholder={`English`}
            options={dropDownOptions}
            className="w-[8%] gap-1 text-text-0 md:w-full"
          />
        </div>
      </div>
      <div className="self-stretch">
        <div className="flex flex-col items-center gap-4">
          <div className="container-xs md:px-5">
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <Img src="images/img_header_logo.png" alt="Logo Image" className="h-[30px] w-[118px] object-contain" />
              <div className="flex w-[74%] items-center justify-between gap-5 md:w-full md:flex-col">
                <ul className="flex items-start gap-12">
                  <li>
                    <a href="#">
                      <div className="flex flex-col items-center justify-center">
                        <Text as="p" className="!text-button">
                          Home
                        </Text>
                        <Img src="images/img_underline.svg" alt="Home Underline" className="h-px w-full" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-button">
                        Contact
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-button">
                        About
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-button">
                        Sign Up
                      </Text>
                    </a>
                  </li>
                </ul>
                <div className="flex w-[40%] items-center justify-center md:w-full">
                  <Input
                    size="sm"
                    variant="fill"
                    shape="round"
                    name="Search Bar"
                    placeholder={`What are you looking for?`}
                    value={searchBarValue4}
                    onChange={(e) => setSearchBarValue4(e.target.value)}
                    suffix={
                      searchBarValue4?.length > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue4("")} height={24} width={24} fillColor="#000000ff" />
                      ) : (
                        <Img src="images/img_search_button.svg" alt="Search" className="h-[24px] w-[24px]" />
                      )
                    }
                    className="flex-grow gap-[34px] text-text2-0"
                  />
                  <a href="#">
                    <Img src="images/img_wishlist.svg" alt="Wishlist Icon" className="ml-6 h-[32px] w-[32px]" />
                  </a>
                  <div className="ml-4 flex flex-col">
                    <a href="#">
                      <Img src="images/img_cart1.svg" alt="Cart Icon" className="h-[32px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img src="images/img_line_3.svg" alt="Divider Image" className="h-px w-full" />
        </div>
      </div>
    </header>
  );
}



