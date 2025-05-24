"use client";
import React from "react";

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  options?: { value: string; label: string }[];
}

const Input = ({ label, name, placeholder, type = "text", options }: InputProps) => {
  return (
    <div className="flex flex-col w-full max-w-full relative">
      <label
        htmlFor={name}
        className="text-xs font-bold text-orange-400 relative top-2 ml-2 px-1 bg-white w-fit z-10"
      >
        {label}
      </label>

      {type === "select" && options ? (
        <select
          id={name}
          name={name}
          className="px-2 py-3 text-xs border-2 border-orange-400 rounded-md bg-white focus:outline-none"
        >
          <option value="">-- Select --</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          id={name}
          className="px-2 py-3 text-xs border-2 border-orange-400 rounded-md focus:outline-none"
        />
      )}
    </div>
  );
};

export default Input;
