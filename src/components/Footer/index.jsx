import { Text, Img, Heading, Input } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex flex-col mt-[140px] gap-[60px] py-[22px] sm:gap-[30px] sm:py-5 bg-button`}
    >
      <div className="container-xs mt-[52px] md:px-5">
        <div>
          <div className="flex items-start justify-between gap-5 md:flex-col">
            <div className="flex w-[18%] flex-col gap-3.5 md:w-full">
              <div className="mr-2.5 flex flex-col items-start gap-6 md:mr-0">
                <div className="flex flex-col items-start gap-[18px]">
                  <Heading size="heading_24px_bold" as="h4" className="!text-text-0">
                    Exclusive
                  </Heading>
                  <Heading size="title_20px_medium" as="p" className="!text-text-0">
                    Subscribe
                  </Heading>
                </div>
                <Text as="p">Get 10% off your first order</Text>
              </div>
              <Input
                shape="round"
                color="undefined_undefined"
                name="Email Input"
                placeholder={`Enter your email`}
                suffix={<Img src="images/img_iconsend.svg" alt="Icon-send" className="h-[24px] w-[24px]" />}
                className="gap-8"
              />
            </div>
            <div className="flex w-[50%] items-start justify-center self-center md:w-full sm:flex-col">
              <div className="flex w-[44%] flex-col items-start gap-4 sm:w-full">
                <div className="flex flex-col items-start gap-5 self-stretch">
                  <Heading size="title_20px_medium" as="p" className="!text-text-0">
                    Support
                  </Heading>
                  <a href="#" className="w-[66%] leading-6 md:w-full">
                    <Text as="p">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</Text>
                  </a>
                </div>
                <Text as="p">exclusive@gmail.com</Text>
                <Text as="p">+88015-88888-9999</Text>
              </div>
              <div className="flex w-[54%] items-start justify-between gap-5 self-center sm:w-full">
                <div className="flex w-[66%] flex-col items-start gap-6 self-center">
                  <Heading size="title_20px_medium" as="p" className="!text-text-0">
                    Account
                  </Heading>
                  <ul className="flex flex-col items-start gap-3.5">
                    <li>
                      <a href="#">
                        <Text as="p">My Account</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Login / Register</Text>
                      </a>
                    </li>
                    <li>
                      <a href="Cart" target="_blank" rel="noreferrer">
                        <Text as="p">Cart</Text>
                      </a>
                    </li>
                    <li>
                      <a href="Wishlist" target="_blank" rel="noreferrer">
                        <Text as="p">Wishlist</Text>
                      </a>
                    </li>
                    <li>
                      <a href="Shop" target="_blank" rel="noreferrer">
                        <Text as="p">Shop</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-center gap-6">
                  <Heading size="title_20px_medium" as="p" className="!text-text-0">
                    Quick Link
                  </Heading>
                  <ul className="flex flex-col items-start gap-3.5">
                    <li>
                      <a href="#">
                        <Text as="p">Privacy Policy</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Terms Of Use</Text>
                      </a>
                    </li>
                    <li>
                      <a href="FAQ" target="_blank" rel="noreferrer">
                        <Text as="p">FAQ</Text>
                      </a>
                    </li>
                    <li>
                      <a href="Contact" target="_blank" rel="noreferrer">
                        <Text as="p">Contact</Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex w-[16%] flex-col gap-6 md:w-full">
              <div className="flex flex-col items-start justify-center gap-5">
                <Heading size="title_20px_medium" as="p" className="!text-text-0">
                  Download App
                </Heading>
                <div className="flex flex-col items-center justify-center gap-1.5 self-stretch">
                  <Heading size="title_12px_medium" as="p" className="!text-text-2">
                    Save $3 with App New User Only
                  </Heading>
                  <div className="flex items-center gap-2 self-stretch">
                    <div className="w-[42%] bg-button">
                      <Img src="images/img_qrcode_1.png" alt="Qr Code" className="h-[76px] w-[76px] object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <a href="#">
                        <Img
                          src="images/img_googleplay.png"
                          alt="Google Play"
                          className="h-[40px] object-contain md:w-[110px]"
                        />
                      </a>
                      <a href="#">
                        <Img
                          src="images/img_appstore.png"
                          alt="App Store"
                          className="h-[40px] object-contain md:w-[110px]"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[84%] justify-between gap-5 md:w-full">
                <Img src="images/img_icon_facebook.svg" alt="Facebook Icon" className="h-[24px] w-[24px]" />
                <Img src="images/img_icon_twitter.svg" alt="Twitter Icon" className="h-[24px] w-[24px]" />
                <Img src="images/defaultNoData.png" alt="Info Icon" className="h-[24px] w-[24px]" />
                <Img src="images/img_icon_linkedin.svg" alt="Linkedin Icon" className="h-[24px] w-[24px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 self-stretch">
        <Img src="images/img_underline_bg_1x1440.svg" alt="Underline Image" className="h-px w-full" />
        <div className="container-xs flex flex-col items-center px-14 md:px-5">
          <div className="flex items-center gap-1.5">
            <Img src="images/img_icon_copyright.svg" alt="Copyright Icon" className="h-[20px] w-[20px]" />
            <Text as="p" className="!text-bg">
              Copyright Rimel 2022. All right reserved
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
}



