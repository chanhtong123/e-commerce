import { Helmet } from "react-helmet";
import { Heading, Img, Button, Text } from "../../components";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import ProductDetails from "../../components/ProductDetails";
import React, { Suspense } from "react";

const discountedProductsList = [
    {
        buttonLabel: "-40%",
        productImage: "images/img_g92_2_500x500_1.png",
        productName: "HAVIT HV-G92 Gamepad",
        currentPrice: "$120",
        originalPrice: "$160",
        ratingImage: "images/img_signal_orange_a200_20x100.svg",
        ratingCount: "(88)",
    },
    {
        buttonLabel: "-40%",
        productImage: "images/img_g92_2_500x500_1.png",
        productName: "AK-900 Wired Keyboard",
        currentPrice: "$960",
        originalPrice: "$1160",
        ratingImage: "images/img_television.svg",
        ratingCount: "(75)",
    },
    {
        buttonLabel: "-30%",
        productImage: "images/img_g27cq4_500x500_1.png",
        productName: "IPS LCD Gaming Monitor",
        currentPrice: "$370",
        originalPrice: "$400",
        ratingImage: "images/img_signal_orange_a200_20x100.svg",
        ratingCount: "(99)",
    },
    {
        buttonLabel: "-40%",
        productImage: "images/img_g92_2_500x500_1.png",
        productName: "RGB liquid CPU Cooler",
        currentPrice: "$160",
        originalPrice: "$170",
        ratingImage: "images/img_signal_orange_a200_20x100.svg",
        ratingCount: "(65)",
    },
];

export default function ProductDetailspagePage() {
    return (
        <>
            <Helmet>
                <title>HAVIT HV-G92 Gamepad - Buy Now and Save Big</title>
                <meta
                    name="description"
                    content="Get your hands on the HAVIT HV-G92 Gamepad with a special 40% discount. Read customer reviews, enjoy free delivery, and shop confidently with our 30-day return policy."
                />
            </Helmet>
            <div className="w-full bg-bg">
                <header className="flex items-center justify-center bg-button py-3">
                    <div className="container-xs flex justify-end md:px-5">
                        <div className="flex w-[74%] justify-between gap-5 md:w-full md:flex-col">
                            <div className="flex flex-wrap gap-2">
                                <Text size="title_14px_regular" as="p" className="self-end">
                                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                                </Text>
                                <Heading size="headingxs" as="p" className="self-end !text-text-0 underline">
                                    ShopNow
                                </Heading>
                            </div>
                            <div className="flex items-center gap-1">
                                <Text size="title_14px_regular" as="p" className="self-end">
                                    English
                                </Text>
                                <a href="#">
                                    <Img src="images/img_dropdown.svg" alt="Language Dropdown" className="h-[24px] w-[24px]" />
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="mt-10 flex flex-col items-center gap-[140px] md:gap-[105px] sm:gap-[70px]">
                    <div className="flex flex-col items-center self-stretch">
                        <div className="container-xs md:px-5">
                            <NavigationBar />
                        </div>
                        <Img src="images/img_line_3.svg" alt="Linethree" className="mt-4 h-px w-full" />
                        <div className="container-xs mt-[78px] md:px-5">
                            <div className="flex flex-col gap-[78px] md:gap-[58px] sm:gap-[39px]">
                                <div className="flex items-center">
                                    <Text size="title_14px_regular" as="p" className="!text-text2-0">
                                        Account
                                    </Text>
                                    <div className="ml-3 h-px w-[6px] rotate-[117deg] bg-text2-0" />
                                    <Text size="title_14px_regular" as="p" className="ml-3 !text-text2-0">
                                        Gaming
                                    </Text>
                                    <div className="ml-3 h-px w-[6px] rotate-[117deg] bg-text2-0" />
                                    <Text size="title_14px_regular" as="p" className="ml-3 !text-button">
                                        Havic HV G-92 Gamepad
                                    </Text>
                                </div>
                                <div className="flex md:flex-col">
                                    <div className="flex flex-1 justify-center gap-[30px] md:flex-col md:self-stretch">
                                        <div className="flex w-[24%] flex-col gap-4 md:w-full">
                                            <div className="flex rounded bg-secondary p-3">
                                                <Img
                                                    src="images/img_image_57.png"
                                                    alt="First Product Image"
                                                    className="h-[114px] w-[82%] object-contain"
                                                />
                                            </div>
                                            <div className="flex rounded bg-secondary p-5">
                                                <Img
                                                    src="images/img_image_58.png"
                                                    alt="Second Product Image"
                                                    className="h-[96px] w-[86%] object-contain"
                                                />
                                            </div>
                                            <div className="rounded bg-secondary px-[18px] py-[22px] sm:py-5">
                                                <Img
                                                    src="images/img_image_61.png"
                                                    alt="Third Product Image"
                                                    className="h-[94px] w-full object-cover md:h-auto"
                                                />
                                            </div>
                                            <div className="flex rounded bg-secondary p-4">
                                                <Img
                                                    src="images/img_image_59.png"
                                                    alt="Fourth Product Image"
                                                    className="h-[106px] w-[88%] object-contain"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-[70%] rounded bg-secondary px-[26px] py-[130px] md:w-full md:py-5 sm:p-5">
                                            <Img
                                                src="images/img_image_63.png"
                                                alt="Single Product Image"
                                                className="mt-[22px] h-[314px] w-full object-cover md:h-auto"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex w-[36%] flex-col items-end gap-10 md:w-full">
                                        <div className="flex w-[92%] flex-col items-start md:w-full">
                                            <Heading size="heading_24px_semibold" as="h1">
                                                Havic HV G-92 Gamepad
                                            </Heading>
                                            <div className="mt-2 flex gap-2 self-stretch sm:flex-col">
                                                <div className="flex w-full justify-center gap-2 sm:w-full">
                                                    <Img
                                                        src="images/img_television.svg"
                                                        alt="Review Image"
                                                        className="h-[20px] w-[50%] object-contain"
                                                    />
                                                    <Text size="title_14px_regular" as="p" className="!text-text2-0">
                                                        (150 Reviews)
                                                    </Text>
                                                </div>
                                                <div className="flex w-full items-center gap-[15px] px-2 sm:w-full">
                                                    <div className="h-[16px] w-px self-end bg-text2-0" />
                                                    <Text size="title_14px_regular" as="p" className="!text-button1-1">
                                                        In Stock
                                                    </Text>
                                                </div>
                                            </div>
                                            <Heading
                                                size="heading_24px_regular"
                                                as="p"
                                                className="mt-3 !font-inter text-[24px] font-normal tracking-[0.72px] md:text-[22px]"
                                            >
                                                $192.00
                                            </Heading>
                                            <Text
                                                size="title_14px_regular"
                                                as="p"
                                                className="mt-5 w-[92%] leading-[21px] !text-button md:w-full"
                                            >
                                                PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free
                                                install & mess free removal Pressure sensitive.
                                            </Text>
                                            <Img src="images/img_underline.svg" alt="Description Underline" className="mt-6 h-px w-full" />
                                            <div className="mt-5 flex items-center gap-[25px] self-stretch">
                                                <Heading
                                                    size="heading_20px_regular"
                                                    as="p"
                                                    className="!font-inter text-[20px] font-normal tracking-[0.60px]"
                                                >
                                                    Colours:
                                                </Heading>
                                                <Img src="images/img_colour_chnage_red_300.svg" alt="Color Change Image" className="h-[20px]" />
                                            </div>
                                            <div className="mt-5 flex items-center self-stretch">
                                                <Heading
                                                    size="heading_20px_regular"
                                                    as="p"
                                                    className="!font-inter text-[20px] font-normal tracking-[0.60px]"
                                                >
                                                    Size:
                                                </Heading>
                                                <div className="flex flex-1 gap-4 px-6 sm:px-5">
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        color="undefined_undefined"
                                                        className="min-w-[32px] rounded font-medium"
                                                    >
                                                        XS
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        color="undefined_undefined"
                                                        className="min-w-[32px] rounded font-medium"
                                                    >
                                                        S
                                                    </Button>
                                                    <Button size="sm" className="min-w-[32px] rounded font-medium">
                                                        M
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        color="undefined_undefined"
                                                        className="min-w-[32px] rounded font-medium"
                                                    >
                                                        L
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        color="undefined_undefined"
                                                        className="min-w-[32px] rounded font-medium"
                                                    >
                                                        XL
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="mt-6 flex items-center self-stretch">
                                                <div className="flex flex-col items-center rounded-bl rounded-tl border border-solid border-text2-0 px-2 py-2.5">
                                                    <Img src="images/img_icon_minus.svg" alt="Minus Icon" className="h-[24px] w-[24px]" />
                                                </div>
                                                <Button
                                                    size="2xl"
                                                    variant="outline"
                                                    shape="square"
                                                    color="undefined_undefined"
                                                    className="min-w-[80px] border-b border-t font-medium"
                                                >
                                                    2
                                                </Button>
                                                <div className="flex flex-col items-center rounded-br rounded-tr bg-secondary_2 px-2 py-2.5">
                                                    <Img src="images/img_icon_plus.svg" alt="Plus Icon" className="h-[24px] w-[24px]" />
                                                </div>
                                                <Button size="3xl" className="ml-4 min-w-[164px] rounded font-medium">
                                                    Buy Now
                                                </Button>
                                                <Button
                                                    size="xl"
                                                    variant="outline"
                                                    color="undefined_undefined"
                                                    className="ml-[18px] w-[40px] rounded"
                                                >
                                                    <Img src="images/img_wishlist.svg" />
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="flex w-[92%] flex-col gap-4 rounded border border-solid border-text2-0 py-6 md:w-full sm:py-5">
                                            <div className="mx-4 flex items-center justify-center gap-4 md:mx-0">
                                                <Img src="images/img_icon_delivery.svg" alt="Delivery Icon" className="h-[40px] w-[40px]" />
                                                <div className="flex flex-1 flex-col items-start justify-center gap-1.5">
                                                    <Heading as="h2">Free Delivery</Heading>
                                                    <Heading size="texts" as="h3" className="underline">
                                                        Enter your postal code for Delivery Availability
                                                    </Heading>
                                                </div>
                                            </div>
                                            <Img src="images/img_underline_button.svg" alt="Button Underline" className="h-px" />
                                            <div className="mx-4 flex items-center justify-center gap-4 md:mx-0">
                                                <Img src="images/img_icon_return.svg" alt="Return Icon" className="h-[40px] w-[40px]" />
                                                <div className="flex flex-1 flex-col items-start justify-center gap-1.5">
                                                    <Heading as="h4">Return Delivery</Heading>
                                                    <Heading size="title_12px_medium" as="h5" className="flex">
                                                        <span>Free 30 Days Delivery Returns.&nbsp;</span>
                                                        <a href="#" className="inline underline">
                                                            Details
                                                        </a>
                                                    </Heading>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-xs md:px-5">
                        <div className="flex flex-col gap-[60px] sm:gap-[30px]">
                            <div className="flex items-center gap-4">
                                <div className="h-[40px] w-[20px] rounded bg-secondary_2" />
                                <Heading size="title_16px_semibold" as="h2" className="!text-secondary_2">
                                    Related Item
                                </Heading>
                            </div>
                            <div className="flex gap-[30px] md:flex-col">
                                <Suspense fallback={<div>Loading feed...</div>}>
                                    {discountedProductsList.map((d, index) => (
                                        <ProductDetails {...d} key={"listContainer" + index} />
                                    ))}
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}




