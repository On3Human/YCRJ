import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Card({ children, className, ...props }) {
  return (
    <div 
      className={twMerge(
        clsx('bg-white border border-gray-200 rounded-lg shadow-sm'),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }) {
    return (
      <div className={twMerge('px-6 py-4 border-b border-gray-100', className)} {...props}>
          {children}
      </div>
    )
}

export function CardContent({ children, className, ...props }) {
    return (
      <div className={twMerge('px-6 py-5', className)} {...props}>
          {children}
      </div>
    )
}
