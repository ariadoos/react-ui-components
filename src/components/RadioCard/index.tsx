import { cn } from '@src/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const iconSize = {
  sm: 20,
  md: 20,
  lg: 20,
  xl: 24,
  '2xl': 24,
};

const iconClasses = (disabled = false) =>
  `fill-text-primary hover:fill-text-primary-hover ${disabled ? 'fill-text-disabled' : ''}`;

const radioCardVariants = cva(
  [
    'flex items-center justify-center cursor-pointer rounded font-medium',
    'border border-solid border-border-primary',
    'hover:bg-background-primary-hover',
    'text-text-primary hover:text-text-primary-hover',
    'focus:shadow-[0_0_0_4px_rgb(68_76_231_/_0.12)] focus-visible:outline-none',
    'peer-checked:border-border-brand-solid',
  ],
  {
    variants: {
      cardSize: {
        sm: ['px-3', 'py-2', 'gap-1', 'text-sm'],
        md: ['px-4', 'py-2.5', 'gap-1.5', 'text-base'],
        lg: ['px-5', 'py-3', 'gap-1.5', 'text-base'],
        xl: ['px-6', 'py-4', 'gap-2.5', 'text-lg'],
        '2xl': ['px-6', 'py-4', 'gap-[10px]', 'text-lg'],
      },
      disabled: {
        false: null,
        true: [
          'bg-(--color-background-disabled)',
          'hover:bg-(--color-background-disabled)',
          'text-(--color-text-disabled) hover:text-(--color-text-disabled)',
          'cursor-not-allowed pointer-events-none',
          'shadow-none',
        ],
      },
    },
    defaultVariants: {
      cardSize: 'md',
      disabled: false,
    },
  }
);

type RadioCardCustomProps = {
  label?: string;
  Icon?: React.ComponentType<CustomIconProps>;
  IconFront?: React.ComponentType<CustomIconProps>;
  IconBack?: React.ComponentType<CustomIconProps>;
};

type CustomIconProps = {
  className?: string;
  size?: number;
  color?: string;
};

type RadioCardProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof radioCardVariants> &
  RadioCardCustomProps;

const RadioCard = React.forwardRef<HTMLInputElement, RadioCardProps>(
  (
    {
      id,
      label,
      cardSize,
      name,
      value,
      disabled,
      Icon,
      IconFront,
      IconBack,
      onChange,
      className,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || `radio-card-${generatedId}`;
    const iconOnly = !!Icon;

    return (
      <div className="flex flex-col gap-1.5 relative">
        <input
          name={name}
          ref={ref}
          id={inputId}
          value={value}
          type="radio"
          onChange={onChange}
          className={'peer sr-only'}
          disabled={disabled}
          {...props}
        />

        <label
          tabIndex={disabled ? -1 : 0}
          htmlFor={inputId}
          className={cn(radioCardVariants({ cardSize, disabled }), className)}
        >
          {iconOnly ? (
            <span>
              <Icon
                size={iconSize[cardSize as keyof typeof iconSize] ?? 20}
                className={cn(iconClasses(disabled))}
              />
            </span>
          ) : (
            <>
              {IconFront && (
                <span>
                  <IconFront
                    size={iconSize[cardSize as keyof typeof iconSize] ?? 20}
                    className={cn(iconClasses(disabled))}
                  />
                </span>
              )}

              <span>{label}</span>

              {IconBack && (
                <span>
                  <IconBack
                    size={iconSize[cardSize as keyof typeof iconSize] ?? 20}
                    className={cn(iconClasses(disabled))}
                  />
                </span>
              )}
            </>
          )}
        </label>
      </div>
    );
  }
);

export { RadioCard, type RadioCardProps };
