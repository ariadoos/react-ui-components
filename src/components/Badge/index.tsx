import { cn } from '@src/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  [
    'flex items-center justify-center cursor-pointer rounded-full border border-solid font-normal text-center',
  ],
  {
    variants: {
      variant: {
        neutral: [
          'bg-(--color-background-neutral-subtle)',
          'border-(--color-border-primary)',
          'text-(--color-text-secondary)',
        ],
        error: [
          'bg-(--color-background-error-subtle)',
          'border-(--color-border-error)',
          'text-(--color-text-error)',
        ],
        warning: [
          'bg-(--color-background-warning-subtle)',
          'border-(--color-border-warning)',
          'text-(--color-text-warning)',
        ],
        success: [
          'bg-(--color-background-success-subtle)',
          'border-(--color-border-success)',
          'text-(--color-text-success)',
        ],
        brand: [
          'bg-(--color-background-brand-subtle)',
          'border-(--color-border-brand-subtle)',
          'text-(--color-text-brand)',
        ],
      },
      size: {
        sm: ['text-xs', 'px-1.5', 'py-0.5'],
        md: ['text-sm', 'px-2', 'py-0.5'],
        lg: ['text-sm', 'px-2.5', 'py-1'],
      },
    },
    defaultVariants: {
      variant: 'neutral',
      size: 'sm',
    },
  }
);

type BadgeProps = React.HtmlHTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

const Badge = ({
  variant,
  size,
  children,
  className,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </span>
  );
};

export { Badge, type BadgeProps };
