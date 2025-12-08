import { cn } from '@src/utils/cn';
import { cva } from 'class-variance-authority';
import React from 'react';

const textInputVariants = cva(
  [
    'flex items-center gap-2 self-stretch px-3.5 py-2.5 pr-[37px] w-full',
    'rounded bg-background-tertiary border border-solid',
    'text-text-filled placeholder:text-text-placeholder border-border-primary',
    'focus:outline-none',
  ],
  {
    variants: {
      hasError: {
        false:
          'focus:shadow-[0_0_0_4px_rgba(68,76,231,0.12),0_1px_2px_0_rgba(16,24,40,0.05),0_0_0_1px_rgba(68,76,231,1)]',
        true: 'focus:shadow-[0_0_0_4px_rgba(217,45,32,0.12),0_0_0_1px_rgba(217,45,32,1)]',
      },
      disabled: {
        false: '',
        true: 'border-border-disabled text-text-disabled placeholder:text-text-disabled cursor-not-allowed',
      },
      hasIconFront: {
        false: '',
        true: 'pl-10',
      },
    },
    defaultVariants: {
      hasError: false,
      disabled: false,
      hasIconFront: false,
    },
  }
);

const ICON_COMMON_CLASSES =
  'flex items-center justify-center absolute pointer-events-none top-0 bottom-0';

type TextInputCustomProps = {
  label?: string;
  hintText?: string;

  errorMessage?: string;

  IconFront?: React.ComponentType<CustomIconProps>;
  IconBack?: React.ComponentType<CustomIconProps>;
};

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> &
  TextInputCustomProps;

type CustomIconProps = {
  className?: string;
  size?: number;
  color?: string;
};

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      id,
      label,
      placeholder,
      value,
      hintText,
      errorMessage,
      disabled,
      IconFront,
      IconBack,
      onChange,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || `text-input-${generatedId}`;

    const descriptiveId = `${inputId}-desc`;
    const descriptiveText = errorMessage ? errorMessage : hintText;

    const hasError = Boolean(errorMessage);
    const hasIconFront = Boolean(IconFront);

    return (
      <div className="flex flex-col gap-1.5 relative">
        {label && (
          <label
            htmlFor={inputId}
            className="font-medium text-sm text-text-title"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {IconFront && (
            <div className={`${ICON_COMMON_CLASSES} left-0 pl-3.5`}>
              <IconFront size={16} className={`fill-icon-primary`} />
            </div>
          )}

          <input
            id={inputId}
            ref={ref}
            type="text"
            className={cn(
              textInputVariants({ hasError, disabled, hasIconFront })
            )}
            value={value}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            autoComplete="off"
            aria-invalid={hasError}
            aria-describedby={descriptiveText ? descriptiveId : undefined}
            {...props}
          />

          {IconBack && (
            <div className={`${ICON_COMMON_CLASSES} right-0 pr-3.5`}>
              <IconBack
                size={16}
                className={hasError ? `fill-icon-error` : `fill-icon-primary`}
              />
            </div>
          )}
        </div>

        {descriptiveText && (
          <p
            id={descriptiveId}
            className={cn([
              'font-normal text-sm',
              hasError ? 'text-text-error' : 'text-text-hit',
            ])}
          >
            {descriptiveText}
          </p>
        )}
      </div>
    );
  }
);

export { TextInput, type TextInputProps, type CustomIconProps };
