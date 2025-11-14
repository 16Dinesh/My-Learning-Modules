import type { ReactNode } from "react";

type ChildrenProps = {
  children: ReactNode;
};

export const ChildrenExample = ({ children }: ChildrenProps) => {
  return (
    <div className="children-box">
      <h3>Children Example</h3>
      {children}
    </div>
  );
};
