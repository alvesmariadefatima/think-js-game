import { ReactNode } from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  icon?: ReactNode;
  error?: string;
}

export function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  label,
  icon,
  error,
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`
            w-full px-4 py-3 rounded-lg border-2 transition
            ${icon ? "pl-10" : ""}
            ${error ? "border-red-500" : "border-gray-300"}
            focus:outline-none focus:border-purple-500
          `}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
