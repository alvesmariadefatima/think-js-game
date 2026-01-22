import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export function Card({
  children,
  className = "",
  onClick,
  hover = false,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-xl shadow-lg p-6
        ${
          hover
            ? "hover:shadow-2xl transition-shadow cursor-pointer transform hover:scale-105 transition"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}
