import { Text, Heading } from "./..";
import React from "react";

export default function CountdownTimer({ countdownNumber = "05", countdownUnit = "Days", ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center justify-center w-[16%] p-2.5 bg-bg rounded-[30px]`}
    >
      <div className="flex flex-col items-center">
        <Heading size="title_16px_semibold" as="h6">
          {countdownNumber}
        </Heading>
        <Text size="textxs" as="p" className="relative mt-[-8px] !text-button">
          {countdownUnit}
        </Text>
      </div>
    </div>
  );
}


