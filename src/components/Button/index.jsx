import React from "react";

const variants = {
  primary: "custom-btn-primary",
  secondary: "custom-btn-secondary",
  danger: "custom-btn-danger",
  link: "custom-btn-link",
  dark: "custom-btn-dark",
  none: "custom-btn-none",
  empty: "",
};

const CustomButton = (props) => {
  const {
    id,
    size,
    variant,
    tabIndex,
    ariaLabel,
    ariaExpanded,
    type,
    disabled,
    className,
    text,
    role,
    icon,
    iconDirection,
    iconClassName,
    borderless,
    round,
    onClick,
    tooltip,
    tooltipContent,
  } = props;

  const v = variant ? variants[variant] : "";

  const btnVariant = v;

  const btn =
    icon && text ? "with-icon" : icon && !text ? "icon-only" : "text-only";

  return <div>CustomButton</div>;
};

CustomButton.defaultProps = {
  type: "button",
  variant: "secondary",
  size: "md",
  className: "",
  iconDirection: "left",
  iconClassName: "",
  borderless: false,
  round: 3,
};

export default CustomButton;
