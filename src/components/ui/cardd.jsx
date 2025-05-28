import React from "react";

export const FormCard = ({ className, children, ...props }) => {
  return (
    <div
      className={`rounded-xl border bg-white text-black shadow ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const FormCardContent = ({ className, children, ...props }) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};
