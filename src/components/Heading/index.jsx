import React from "react";

const sizes = {
  textmd: "text-[16px] font-medium",
  heading_48px_semibold: "tracking-[1.92px] font-inter text-[48px] font-semibold md:text-[44px] sm:text-[38px]",
  title_16px_medium: "text-[16px] font-medium",
  title_16px_semibold: "text-[16px] font-semibold",
  heading_36px_semibold: "tracking-[1.44px] font-inter text-[36px] font-semibold md:text-[34px] sm:text-[32px]",
  title_12px_medium: "text-[12px] font-medium",
  heading_32px_bold: "tracking-[1.28px] font-inter text-[32px] font-bold md:text-[30px] sm:text-[28px]",
  title_14px_semibold: "text-[14px] font-semibold",
  heading_24px_semibold: "tracking-[0.72px] font-inter text-[24px] font-semibold md:text-[22px]",
  heading_36px_medium: "tracking-[1.44px] font-inter text-[36px] font-medium md:text-[34px] sm:text-[32px]",
  heading_24px_bold: "tracking-[0.72px] font-inter text-[24px] font-bold md:text-[22px]",
  title_20px_medium: "text-[20px] font-medium",
  title_20px_semibold: "text-[20px] font-semibold",
  texts: "text-[12px] font-medium",
  headingxs: "text-[14px] font-semibold",
};

const Heading = ({ children, className = "", size = "title_16px_medium", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-button font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };


