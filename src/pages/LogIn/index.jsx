import { Helmet } from "react-helmet";
import { Text, Button, Input, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header1";
import React from "react";

export default function LogInPage() {
  return (
    <>
      <Helmet>
        <title>Login to Exclusive - Access Your Account</title>
        <meta
          name="description"
          content="Log in to your Exclusive account to enjoy personalized shopping experiences. Get 10% off your first order and access to our summer sale."
        />
      </Helmet>
      <div className="w-full bg-bg">
        <Header1 />
        <div className="mt-[60px] flex items-center md:flex-col">
          <div className="flex flex-1 justify-center md:self-stretch md:px-5">
            <div className="flex rounded-br rounded-tr bg-blue_gray-100">
              <Img
                src="images/img_dl_beatsnoop_1.png"
                alt="Product Image"
                className="mt-[74px] h-[706px] w-full object-cover md:h-auto"
              />
            </div>
          </div>
          <div className="flex w-[40%] flex-col gap-10 px-14 md:w-full md:px-5">
            <div className="flex flex-col gap-[46px]">
              <div className="flex flex-col items-start gap-3.5">
                <Heading size="heading_36px_medium" as="h1">
                  Log in to Exclusive
                </Heading>
                <Text as="p" className="!text-button">
                  Enter your details below
                </Text>
              </div>
              <div className="flex flex-col items-start gap-10">
                <Input
                  size="xs"
                  shape="square"
                  type="email"
                  name="Email or Phone Input"
                  placeholder={`Email or Phone Number`}
                  className="w-[84%] text-text2-1"
                />
                <Input
                  size="xs"
                  variant="underline"
                  shape="square"
                  type="password"
                  name="Password Input"
                  placeholder={`Password`}
                  className="w-[84%]"
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-5">
              <Button size="4xl" className="min-w-[142px] rounded font-medium">
                Log In
              </Button>
              <Text as="p" className="mb-3 mr-[70px] self-end !text-secondary_2">
                Forget Password?
              </Text>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}



