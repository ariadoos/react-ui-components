import { cn } from '@src/utils/cn';
import { cva } from 'class-variance-authority';
import React, { useState } from 'react';

const textareaVariants = cva(
  [
    'px-3.5 py-3 w-full h-[108px]',
    'rounded-lg bg-background-tertiary border border-solid border-border-primary',
    'text-text-filled placeholder:text-text-placeholder',
    'focus:outline-none',
    'resize-none',
  ],
  {
    variants: {
      hasError: {
        false:
          'focus:shadow-[0_0_0_4px_rgba(68,76,231,0.12),0_1px_2px_0_rgba(16,24,40,0.05),0_0_0_1px_rgba(68,76,231,1)]',
        true: 'border-border-error focus:shadow-[0_0_0_4px_rgba(217,45,32,0.12),0_0_0_1px_rgba(217,45,32,1)]',
      },
      disabled: {
        false: '',
        true: 'border-border-disabled text-text-disabled placeholder:text-text-disabled cursor-not-allowed',
      },
      maxLengthError: {
        true: 'focus:shadow-[0_0_0_4px_rgba(217,45,32,0.12),0_0_0_1px_rgba(217,45,32,1)]',
        false: '',
      },
    },
    defaultVariants: {
      hasError: false,
      disabled: false,
      maxLengthError: false,
    },
  }
);

type TextareaCustomProps = {
  label?: string;
  errorMessage?: string;
};

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  TextareaCustomProps;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id,
      label,
      placeholder,
      value,
      errorMessage,
      disabled,
      rows,
      cols,
      onChange,
      maxLength,
      ...props
    },
    ref
  ) => {
    const [textareaValue, setTextareaValue] = useState<string>(
      value?.toString() || ''
    );

    const generatedId = React.useId();
    const textareaId = id || `textarea-${generatedId}`;

    const descriptiveId = `${textareaId}-desc`;
    const hasError = Boolean(errorMessage);
    const maxLengthError =
      maxLength !== undefined ? textareaValue.length > maxLength : false;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTextareaValue(e.target.value);

      if (onChange) onChange(e);
    };

    return (
      <div className="flex flex-col gap-1.5 self-stretch">
        {label && (
          <label
            htmlFor={textareaId}
            className="font-medium text-sm text-text-title"
          >
            {label}
          </label>
        )}

        <textarea
          id={textareaId}
          ref={ref}
          className={cn(
            textareaVariants({ hasError, disabled, maxLengthError })
          )}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          placeholder={placeholder}
          rows={rows}
          cols={cols}
          autoComplete="off"
          aria-invalid={hasError}
          aria-describedby={hasError ? descriptiveId : undefined}
          {...props}
        />

        <div className="flex col gap-1 w-full">
          {!hasError && maxLength !== undefined && (
            <p
              className={cn([
                'font-normal text-sm text-right flex-1',
                maxLengthError ? 'text-text-error' : 'text-text-placeholder',
              ])}
            >
              {textareaValue.length} / {maxLength}
            </p>
          )}
          {hasError && (
            <p
              id={descriptiveId}
              className={cn([
                'font-normal text-sm flex-1',
                hasError ? 'text-text-error' : 'text-text-hit',
              ])}
            >
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    );
  }
);

export { Textarea, type TextareaProps };
