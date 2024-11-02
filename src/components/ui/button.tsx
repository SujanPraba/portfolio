// src/components/ui/button.tsx

import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
