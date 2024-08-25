import DeliveryServiceInfo from "../../components/DeliveryServiceInfo";
import React, { Suspense } from "react";

const serviceList = [
  {
    serviceImage: "images/img_services.svg",
    deliveryTitle: "FREE AND FAST DELIVERY",
    deliveryDescription: "Free delivery for all orders over $140",
  },
  {
    serviceImage: "images/img_play.svg",
    deliveryTitle: "24/7 CUSTOMER SERVICE",
    deliveryDescription: "Friendly 24/7 customer support",
  },
  {
    serviceImage: "images/img_checkmark.svg",
    deliveryTitle: "MONEY BACK GUARANTEE",
    deliveryDescription: "We reurn money within 30 days",
  },
];

export default function ServicesSection() {
  return (
    <>
      {/* services section */}
      <div className="mt-[140px] flex justify-center self-stretch">
        <div className="container-xs flex justify-center px-14 md:px-5">
          <div className="flex w-[88%] gap-[88px] md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {serviceList.map((d, index) => (
                <DeliveryServiceInfo {...d} key={"servicesList" + index} className="w-[32%]" />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}



