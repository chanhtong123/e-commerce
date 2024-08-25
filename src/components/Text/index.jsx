import React from "react";

const sizes = {
  heading_24px_regular: "tracking-[0.72px] font-inter text-[24px] font-normal md:text-[22px]",
  heading_20px_regular: "tracking-[0.60px] font-inter text-[20px] font-normal",
  title_16px_regular: "text-[16px] font-normal not-italic",
  title_14px_regular: "text-[14px] font-normal not-italic",
  title_12px_regular: "text-[12px] font-normal not-italic",
  textxs: "text-[11px] font-normal not-italic",
};

const Text = ({ children, className = "", as, size = "title_16px_regular", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-text-0 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };



