import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import React from 'react';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium',
  {
    variants: {
      variant: {
        default: 'bg-neutral-900 text-white',
        outline: 'border border-neutral-800 text-neutral-900',
        ghost: 'text-neutral-900',
      },
      size: {
        default: 'h-10 px-3 py-2',
        sm: 'h-8 px-3 py-1',
        lg: 'h-12 px-4 py-2',
        icon: 'size-10',
        'icon-sm': 'size-8',
        'icon-lg': 'size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonProps = {
  className?: string;
  variant?: string;
  size: string;
};

export const Button = ({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
};

