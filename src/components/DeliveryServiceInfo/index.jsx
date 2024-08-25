import { Text, Heading, Img } from "./..";
import React from "react";

export default function DeliveryServiceInfo({
  serviceImage = "images/defaultNoData.png",
  deliveryTitle = "FREE AND FAST DELIVERY",
  deliveryDetail = "Free delivery for all orders over $140",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[32%] md:w-full gap-5`}>
      <Img src={serviceImage} alt="Serviceimage" className="h-[80px] w-[80px]" />
      <div className="flex flex-col items-center gap-1 self-stretch">
        <Heading size="title_20px_semibold" as="h5">
          {deliveryTitle}
        </Heading>
        <Text size="title_14px_regular" as="p" className="!text-button">
          {deliveryDetail}
        </Text>
      </div>
    </div>
  );
}



