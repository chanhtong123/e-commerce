import React from "react";
import PropTypes from "prop-types";

const shapes = {
    square: "rounded-[0px]",
    round: "rounded",
};

const variants = {
    underline: {
        button: "text-text2-1 border-b border-button border-solid",
    },
    outline: {
        text_0: "border-text-0 border-[1.5px] border-solid text-text-1",
    },
    fill: {
        secondary: "bg-secondary",
    },
};

const sizes = {
    md: "h-[48px] px-3.5 text-[16px]",
    sm: "h-[38px] pl-5 pr-3 text-[12px]",
    xs: "h-[32px] px-3 text-[16px]",
};

const Input = React.forwardRef(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            type = "text",
            label = "",
            prefix,
            suffix,
            onChange,
            shape,
            variant = "outline",
            size = "md",
            color = "",
            ...restProps
        },
        ref,
    ) => {
        return (
            <label
                className={`${className} flex items-center justify-center cursor-text  ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}
            >
                {!!label && label}
                {!!prefix && prefix}
                <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
                {!!suffix && suffix}
            </label>
        );
    },
);
Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    shape: PropTypes.oneOf(["square", "round"]),
    size: PropTypes.oneOf(["md", "sm", "xs"]),
    variant: PropTypes.oneOf(["underline", "outline", "fill"]),
    color: PropTypes.oneOf(["button", "text_0", "secondary"]),
};

export { Input };



