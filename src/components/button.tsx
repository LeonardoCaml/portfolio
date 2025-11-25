import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  style: string;
  action: any;
}

const Button: React.FC<ButtonProps> = ({ children, style, action }) => {
  return (
    <button
      className={`p-2 px-6 border border-2 rounded-full font-bold hover:scale-105 transition ${style}`}
      onClick={action}
    >
      {children}
    </button>
  );
};

export default Button;
