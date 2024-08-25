import { Helmet } from "react-helmet";
import { Text, Img, Heading, Input, Slider, Button } from "../../components";
import Header from "../../components/Header";
import BestSellingProductsSection from "./BestSellingProductsSection";
import ECommerceFlashSalesSection from "./ECommerceFlashSalesSection";
import FeaturedProductsSection from "./FeaturedProductsSection";
import FlashSaleSection from "./FlashSaleSection";
import ProductShowcaseSection from "./ProductShowcaseSection";
import ServicesSection from "./ServicesSection";
import React from "react";

export default function ECommerceHomePagePage() {
    const [sliderState, setSliderState] = React.useState(0);
    const sliderRef = React.useRef(null);
    const [sliderState1, setSliderState1] = React.useState(0);
    const sliderRef1 = React.useRef(null);

    return (
        <>
            <Helmet>
                <title>E-Commerce Home - Summer Sale on Swim Suits & Electronics</title>
                <meta
                    name="description"
                    content="Discover our E-Commerce Home with a Summer Sale for all swim suits at 50% off. Shop the latest in fashion, electronics, and more with free express delivery."
                />
            </Helmet>
            <div className="relative h-[5902px] w-full content-center md:h-auto">
                <div className="mx-auto w-full bg-bg">
                    <Header />
                    <div className="flex flex-col items-center gap-[136px] md:gap-[102px] sm:gap-[68px]">
                        <div className="container-xs md:px-5">
                            <div className="flex items-end justify-center md:flex-col">
                                <div className="flex w-[18%] flex-col items-start gap-4 md:w-full">
                                    <div className="flex justify-between gap-5 self-stretch">
                                        <Text as="p" className="!text-button">
                                            Woman’s Fashion
                                        </Text>
                                        <Img src="images/img_dropdown_button.svg" alt="Women's Dropdown" className="h-[24px] w-[24px]" />
                                    </div>
                                    <div className="flex justify-between gap-5 self-stretch">
                                        <Text as="p" className="!text-button">
                                            Men’s Fashion
                                        </Text>
                                        <Img src="images/img_dropdown_button.svg" alt="Men's Dropdown" className="h-[24px] w-[24px]" />
                                    </div>
                                    <Text as="p" className="!text-button">
                                        Electronics
                                    </Text>
                                    <Text as="p" className="!text-button">
                                        Home & Lifestyle
                                    </Text>
                                    <Text as="p" className="!text-button">
                                        Medicine
                                    </Text>
                                    <Text as="p" className="!text-button">
                                        Sports & Outdoor
                                    </Text>
                                    <Text as="p" className="!text-button">
                                        Baby’s & Toys
                                    </Text>
                                    <Text as="p" className="!text-button">
                                        Groceries & Pets
                                    </Text>
                                    <Text as="p" className="!text-button">
                                        Health & Beauty
                                    </Text>
                                </div>
                                <div className="ml-4 h-[384px] w-px self-center bg-black-900_4c md:ml-0 md:h-px md:w-[384px]" />
                                <div className="relative h-[344px] w-[80%] content-center md:h-auto md:w-full">
                                    <div className="PromoSlider mx-auto flex w-full">
                                        <Slider
                                            autoPlay
                                            autoPlayInterval={2000}
                                            responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
                                            renderDotsItem={(props) => {
                                                return props?.isActive ? (
                                                    <div className="mr-[5px] inline-block h-[14px] w-[14px] cursor-pointer rounded-[50%] border-2 border-solid border-bg" />
                                                ) : (
                                                    <div className="mr-[5px] inline-block h-[12px] w-[12px] cursor-pointer rounded-[50%] bg-white-a700_7f" />
                                                );
                                            }}
                                            activeIndex={sliderState1}
                                            onSlideChanged={(e) => {
                                                setSliderState1(e?.item);
                                            }}
                                            ref={sliderRef1}
                                            items={[...Array(3)].map(() => (
                                                <React.Fragment key={Math.random()}>
                                                    <div className="flex bg-button">
                                                        <div className="mt-4 flex w-full items-center md:flex-col">
                                                            <div className="relative z-[1] mb-2.5 flex w-[48%] justify-center self-end px-14 md:w-full md:self-auto md:px-5">
                                                                <div className="mb-9 flex w-full flex-col gap-5">
                                                                    <div className="flex items-center gap-6">
                                                                        <Img
                                                                            src="images/img_1200px_apple_gray_logo.png"
                                                                            alt="Apple Logo"
                                                                            className="h-[48px] object-cover"
                                                                        />
                                                                        <Text as="p" className="mb-2.5 self-end">
                                                                            iPhone 14 Series
                                                                        </Text>
                                                                    </div>
                                                                    <Heading
                                                                        size="heading_48px_semibold"
                                                                        as="h1"
                                                                        className="w-[88%] leading-[60px] !text-text-0 md:w-full"
                                                                    >
                                                                        Up to 10% off Voucher
                                                                    </Heading>
                                                                    <div className="flex items-center gap-[9px]">
                                                                        <div className="flex w-[24%] flex-col items-center justify-center">
                                                                            <Heading as="h2" className="!text-text-0">
                                                                                Shop Now
                                                                            </Heading>
                                                                            <div className="h-px w-full self-stretch bg-text-0" />
                                                                        </div>
                                                                        <Img
                                                                            src="images/img_arrow_right_text_0.svg"
                                                                            alt="Arrow Right Image"
                                                                            className="h-[24px] w-[24px]"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <Img
                                                                src="images/img_hero_endframe.png"
                                                                alt="Promo Endframe Image"
                                                                className="relative ml-[-66px] h-[328px] w-[52%] object-contain md:ml-0 md:w-full"
                                                            />
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                            ))}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center self-stretch">
                            {/* e commerce flash sales section */}
                            <ECommerceFlashSalesSection />
                            <div className="container-xs mt-[60px] md:px-5">
                                <div className="flex flex-col gap-[78px] md:gap-[58px] sm:gap-[39px]">
                                    <div className="h-[0.5px] rotate-[180deg] bg-black-900_4c" />
                                    <div className="flex flex-col gap-[70px] md:gap-[52px] sm:gap-[35px]">
                                        <div className="flex flex-col gap-[58px] sm:gap-[29px]">
                                            <div className="flex items-center justify-between gap-5 md:flex-col">
                                                <div className="flex flex-1 flex-col items-start gap-6 md:self-stretch">
                                                    <div className="flex items-center gap-4 self-stretch">
                                                        <div className="h-[40px] w-[20px] rounded bg-secondary_2" />
                                                        <Heading size="title_16px_semibold" as="h5" className="mb-1 self-end !text-secondary_2">
                                                            Categories
                                                        </Heading>
                                                    </div>
                                                    <Heading size="heading_36px_semibold" as="h6">
                                                        Browse By Category
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
                                            <div className="mx-auto flex w-full gap-[30px] md:mx-0 md:flex-col">
                                                <Slider
                                                    autoPlay
                                                    autoPlayInterval={2000}
                                                    responsive={{ 0: { items: 1 }, 551: { items: 2 }, 1051: { items: 6 } }}
                                                    disableDotsControls
                                                    activeIndex={sliderState}
                                                    onSlideChanged={(e) => {
                                                        setSliderState(e?.item);
                                                    }}
                                                    ref={sliderRef}
                                                    items={[...Array(18)].map(() => (
                                                        <React.Fragment key={Math.random()}>
                                                            <div className="px-[15px]">
                                                                <div className="flex flex-col items-center justify-center gap-4 rounded border border-solid border-black-900_4c p-[22px] sm:p-5">
                                                                    <Img
                                                                        src="images/img_category_cellphone.svg"
                                                                        alt="Phone Image"
                                                                        className="h-[56px] w-[56px]"
                                                                    />
                                                                    <Text as="p" className="!text-button">
                                                                        Phones
                                                                    </Text>
                                                                </div>
                                                            </div>
                                                        </React.Fragment>
                                                    ))}
                                                />
                                            </div>
                                        </div>
                                        <div className="h-[0.5px] rotate-[180deg] bg-black-900_4c" />
                                    </div>
                                </div>
                            </div>

                            {/* best selling products section */}
                            <BestSellingProductsSection />

                            {/* flash sale section */}
                            <FlashSaleSection />

                            {/* product showcase section */}
                            <ProductShowcaseSection />

                            {/* featured products section */}
                            <FeaturedProductsSection />

                            {/* services section */}
                            <ServicesSection />
                        </div>
                    </div>
                    <footer className="mt-[138px] flex flex-col items-center gap-[60px] bg-button py-[22px] sm:gap-[30px] sm:py-5">
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
                                            type="email"
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
                                                        <a href="#">
                                                            <Text as="p">Cart</Text>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <Text as="p">Wishlist</Text>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
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
                                                        <a href="#">
                                                            <Text as="p">FAQ</Text>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
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
                                                        <Img
                                                            src="images/img_qrcode_1.png"
                                                            alt="Qr Code Image"
                                                            className="h-[76px] w-[76px] object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex flex-1 flex-col gap-1">
                                                        <a href="#">
                                                            <Img
                                                                src="images/img_googleplay.png"
                                                                alt="Google Play Link"
                                                                className="h-[40px] object-contain md:w-[110px]"
                                                            />
                                                        </a>
                                                        <a href="#">
                                                            <Img
                                                                src="images/img_appstore.png"
                                                                alt="App Store Link"
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
                                            <Img src="images/img_info_bg.svg" alt="Info Background" className="h-[24px] w-[24px]" />
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
                </div>
                <div className="absolute bottom-[8%] right-[6%] m-auto h-[46px] w-[3%] rotate-[-90deg] rounded-[22px] bg-secondary" />
            </div>
        </>
    );
}







