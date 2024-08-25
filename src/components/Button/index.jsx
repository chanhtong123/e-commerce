import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[16px]",
};
const variants = {
  fill: {
    button: "bg-button text-bg",
    button1_0: "bg-button1-0 text-text-0",
    secondary: "bg-secondary",
    secondary_2: "bg-secondary_2 text-text-0",
    bg: "bg-bg",
  },
  outline: {
    text2_0: "border-text2-0 border border-solid text-button",
  },
};
const sizes = {
  "2xl": "h-[44px] px-[34px] text-[16px]",
  lg: "h-[40px] px-1",
  xl: "h-[40px] px-[34px] text-[16px]",
  "4xl": "h-[56px] px-[34px] text-[16px]",
  sm: "h-[32px] px-1.5 text-[14px]",
  "3xl": "h-[46px] px-2.5",
  xs: "h-[26px] px-3 text-[12px]",
  md: "h-[34px] px-1",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["2xl", "lg", "xl", "4xl", "sm", "3xl", "xs", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["button", "button1_0", "secondary", "secondary_2", "bg", "text2_0"]),
};

export { Button };



