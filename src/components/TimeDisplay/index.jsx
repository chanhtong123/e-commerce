import { Heading, Img } from "./..";
import React from "react";

export default function TimeDisplay({
  daysText = "Days",
  daysValue = "03",
  hoursText = "Hours",
  hoursValue = "23",
  minutesText = "Minutes",
  minutesValue = "19",
  secondsText = "Seconds",
  secondsValue = "56",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex self-end justify-center items-center md:self-stretch sm:self-auto gap-4 px-[42px] md:px-5 flex-1`}
    >
      <div className="flex flex-col items-start justify-center">
        <Heading size="title_12px_medium" as="p">
          {daysText}
        </Heading>
        <Heading size="heading_32px_bold" as="h2" className="sm:text-[27px]">
          {daysValue}
        </Heading>
      </div>
      <Img src="images/img_semiclone.svg" alt="Separator One" className="mb-3.5 h-[16px] self-end" />
      <div className="flex flex-col items-start">
        <Heading size="title_12px_medium" as="p">
          {hoursText}
        </Heading>
        <Heading size="heading_32px_bold" as="h2" className="sm:text-[27px]">
          {hoursValue}
        </Heading>
      </div>
      <Img src="images/img_semiclone.svg" alt="Separator Two" className="mb-3.5 h-[16px] self-end" />
      <div className="flex flex-col items-start">
        <Heading size="title_12px_medium" as="p">
          {minutesText}
        </Heading>
        <Heading size="heading_32px_bold" as="h2" className="sm:text-[27px]">
          {minutesValue}
        </Heading>
      </div>
      <Img src="images/img_semiclone.svg" alt="Separator Three" className="mb-3.5 h-[16px] self-end" />
      <div className="flex flex-1 flex-col items-start">
        <Heading size="title_12px_medium" as="p">
          {secondsText}
        </Heading>
        <Heading size="heading_32px_bold" as="h2" className="sm:text-[27px]">
          {secondsValue}
        </Heading>
      </div>
    </div>
  );
}



