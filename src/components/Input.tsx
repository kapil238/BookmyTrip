'use client';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  options?: { value: string; label: string }[];
}

const Input = ({ label, name, placeholder, type = 'text', options }: InputProps) => {
  const isSelect = type === 'select' && options;

  return (
    <div className="flex flex-col w-full max-w-full relative">
      <label
        htmlFor={name}
        className="text-xs font-bold text-orange-400 relative top-2 ml-2 px-1 bg-white w-fit z-10"
      >
        {label}
      </label>

      {isSelect ? (
        <div className="relative">
          <select
            id={name}
            name={name}
            className="w-full px-2 py-3 pr-8 text-xs border-2 border-orange-400 rounded-md bg-white focus:outline-none appearance-none"
          >
            <option value="">-- Select --</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-400 text-xs pointer-events-none" />
        </div>
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
