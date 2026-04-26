import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  disabled = false, 
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none';
  
  const variants = {
    primary: 'bg-[#0A1628] text-white hover:bg-opacity-90',
    secondary: 'bg-white text-[#0A1628] border border-[#0A1628] hover:bg-gray-50',
    accent: 'bg-[#C9A84C] text-[#0A1628] hover:bg-opacity-90',
    outline: 'bg-transparent border border-gray-300 text-gray-700 hover:border-[#0A1628]'
  };

  const sizes = {
    sm: 'text-sm px-3 py-1.5 rounded-sm',
    md: 'text-base px-5 py-2.5 rounded-md',
    lg: 'text-lg px-8 py-3.5 rounded-md'
  };

  return (
    <button
      className={twMerge(
        clsx(baseStyles, variants[variant], sizes[size], disabled && 'opacity-50 cursor-not-allowed hover:bg-none'),
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
