import { cn } from '@src/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
  ['flex items-center justify-center cursor-pointer rounded font-medium'],
  {
    variants: {
      variant: {
        primary: [
          'bg-(--color-background-brand-primary)',
          'hover:bg-(--color-background-brand-primary-emphasize)',
          'text-(--color-text-primary-invert)',
          'shadow-[0px_1px_2px_0_rgb(0_0_0_/_0.06),_0px_1px_3px_0_rgb(0_0_0_/_0.10)]',
          'focus:shadow-[0px_0px_0px_4px_rgb(0.2666666805744171_0.2980392277240753_0.9058823585510254_/_0.12)]',
        ],
        secondary: [
          'bg-(--color-background-primary)',
          'hover:bg-(--color-background-primary-hover)',
          'text-(--color-text-primary)',
          'shadow-[0px_1px_2px_0_rgb(0_0_0_/_0.06),_0px_1px_3px_0_rgb(0_0_0_/_0.10)]',
          'focus:shadow-[0px_0px_0px_4px_rgb(0.2666666805744171_0.2980392277240753_0.9058823585510254_/_0.12)]',
        ],
        tertiary: [
          'bg-none',
          'hover:bg-(--color-background-primary-hover)',
          'text-(--color-text-brand)',
          'focus:shadow-[0px_0px_0px_4px_rgb(0.2666666805744171_0.2980392277240753_0.9058823585510254_/_0.12)]',
          'focus:bg-(--color-background-primary-hover)',
        ],
        linkColor: [
          'bg-none',
          'text-(--color-text-brand)',
          'focus:shadow-[0px_0px_0px_4px_rgb(0.2666666805744171_0.2980392277240753_0.9058823585510254_/_0.12)]',
        ],
        linkGray: [
          'bg-none',
          'text-(--color-text-secondary)',
          'focus:shadow-[0px_0px_0px_4px_rgb(0.2666666805744171_0.2980392277240753_0.9058823585510254_/_0.12)]',
        ],
        destructive: [
          'bg-(--color-background-error)',
          'hover:bg-(--color-background-error-emphasize)',
          'text-(--color-text-primary-invert)',
          'shadow-[0px_1px_2px_0_rgb(0_0_0_/_0.06),_0px_1px_3px_0_rgb(0_0_0_/_0.10)]',
          'focus:shadow-[0px_0px_0px_4px_rgb(0.2666666805744171_0.2980392277240753_0.9058823585510254_/_0.12)]',
        ],
      },
      size: {
        md: ['px-4', 'py-[10px]', 'gap-1', 'text-sm'],
        lg: ['px-[18px]', 'py-[10px]', 'gap-[6px]', 'text-base'],
        xl: ['px-[22px]', 'py-3', 'gap-[6px]', 'text-base'],
        '2xl': ['px-[26px]', 'py-4', 'gap-[10px]', 'text-lg'],
      },
      iconOnly: {
        false: null,
        true: ['gap-2'],
      },
      disabled: {
        false: null,
        true: [
          'bg-(--color-background-disabled)',
          'hover:bg-(--color-background-disabled)',
          'text-(--color-text-disabled)',
          'cursor-not-allowed',
          'shadow-none',
        ],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      iconOnly: false,
    },
    compoundVariants: [
      { size: 'md', iconOnly: true, class: 'p-2.5' },
      { size: 'lg', iconOnly: true, class: 'p-3' },
      { size: 'xl', iconOnly: true, class: 'p-3.5' },
      { size: '2xl', iconOnly: true, class: 'p-4' },
      { variant: 'linkGray', class: 'p-0' },
      { variant: 'linkColor', class: 'p-0' },
    ],
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = ({
  variant,
  size,
  disabled = false,
  iconOnly = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={cn(buttonVariants({ variant, size, disabled, iconOnly }))}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button, type ButtonProps };
