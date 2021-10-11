import type { ComponentPropsWithoutRef, ForwardedRef } from "react";
import { forwardRef } from "react";
import { css, Stitches, CSS } from "../../stitches.config";

export const button = css({
  // Reset
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },
  display: "flex",
  gap: "$2",
  justifyContent: "center",
  backgroundColor: "$hiContrast",
  color: "$loContrast",
  borderRadius: "0",
  fontSize: "13px",
  padding: "10px 15px",
  textAlign: "center",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "grey",
  },

  variants: {
    constrained: {
      true: { width: "fit-content" },
      false: { width: "100%" },
    },
  },
  defaultVariants: {
    constrained: "true",
  },
});

const Button = forwardRef(
  (
    props: ComponentPropsWithoutRef<"button"> &
      Stitches.VariantProps<typeof button> & { css?: CSS },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const { className, css, constrained, ...rest } = props;

    return (
      <button
        {...rest}
        className={button({
          className,
          css,
          constrained,
        })}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
