import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};

export const ComponentPropsExample = ({
  children,
  variant = "primary",
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      style={{
        padding: "8px",
        background: variant === "primary" ? "blue" : "gray",
        color: "white",
      }}
    >
      {children}
    </button>
  );
};
