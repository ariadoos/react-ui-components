import { RiStarLine } from 'react-icons/ri';
import { type ButtonProps, Button } from '@src/components/Button';
import { Icon, type IconProps } from '@src/components/Icon';

interface ButtonConfig {
  variant: ButtonProps['variant'];
  title: string;
  icon: IconProps['IconName'];
  buttons: {
    size: ButtonProps['size'];
    text: string;
    iconLeft?: boolean;
    iconRight?: boolean;
    iconOnly?: boolean;
    disabled?: boolean;
    iconSize?: IconProps['size'];
    ariaLabel?: string;
  }[];
}

const BUTTON_CONFIGS: ButtonConfig[] = [
  {
    variant: 'primary',
    title: 'Primary Buttons',
    icon: RiStarLine,
    buttons: [
      { size: 'md', text: 'Button CTA' },
      { size: 'lg', text: 'Button CTA', iconLeft: true },
      { size: 'xl', text: 'Button CTA', iconRight: true },
      { size: '2xl', text: 'Button CTA' },
      {
        size: '2xl',
        text: '',
        iconOnly: true,
        iconSize: 24,
        ariaLabel: 'Button CTA',
      },
    ],
  },
  {
    variant: 'secondary',
    title: 'Secondary Buttons',
    icon: RiStarLine,
    buttons: [
      { size: 'md', text: 'Button CTA' },
      { size: 'lg', text: 'Button CTA', iconLeft: true },
      { size: 'xl', text: 'Button CTA', iconRight: true },
      { size: '2xl', text: 'Button CTA' },
      {
        size: '2xl',
        text: '',
        iconOnly: true,
        iconSize: 24,
        ariaLabel: 'Button CTA',
      },
    ],
  },
  {
    variant: 'tertiary',
    title: 'Tertiary Buttons',
    icon: RiStarLine,
    buttons: [
      { size: 'md', text: 'Button CTA' },
      { size: 'lg', text: 'Button CTA', iconLeft: true },
      { size: 'xl', text: 'Button CTA', iconRight: true },
      { size: '2xl', text: 'Button CTA' },
      {
        size: '2xl',
        text: '',
        iconOnly: true,
        iconSize: 24,
        ariaLabel: 'Button CTA',
      },
    ],
  },
  {
    variant: 'linkColor',
    title: 'Link Color Buttons',
    icon: RiStarLine,
    buttons: [
      { size: 'md', text: 'Button CTA' },
      { size: 'lg', text: 'Button CTA', iconLeft: true },
      { size: 'xl', text: 'Button CTA', iconRight: true },
      { size: '2xl', text: 'Button CTA' },
      {
        size: '2xl',
        text: '',
        iconOnly: true,
        iconSize: 24,
        ariaLabel: 'Button CTA',
      },
    ],
  },
  {
    variant: 'linkGray',
    title: 'Link Gray Buttons',
    icon: RiStarLine,
    buttons: [
      { size: 'md', text: 'Button CTA' },
      { size: 'lg', text: 'Button CTA', iconLeft: true },
      { size: 'xl', text: 'Button CTA', iconRight: true },
      { size: '2xl', text: 'Button CTA' },
      {
        size: '2xl',
        text: '',
        iconOnly: true,
        iconSize: 24,
        ariaLabel: 'Button CTA',
      },
    ],
  },
  {
    variant: 'destructive',
    title: 'Destructive Buttons',
    icon: RiStarLine,
    buttons: [
      { size: 'md', text: 'Button CTA' },
      { size: 'lg', text: 'Button CTA', iconLeft: true },
      { size: 'xl', text: 'Button CTA', iconRight: true },
      { size: '2xl', text: 'Button CTA' },
      {
        size: '2xl',
        text: '',
        iconOnly: true,
        iconSize: 24,
        ariaLabel: 'Button CTA',
      },
    ],
  },
];

const Buttons = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-fit flex-col items-start bg-white  px-6 md:px-8 py-28 gap-4">
      {BUTTON_CONFIGS.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-wrap items-center justify-start gap-7 md:gap-5 pb-12 max-w-[323px] md:max-w-full"
        >
          {row.buttons.map((config, buttonIndex) => (
            <Button
              key={buttonIndex}
              variant={row.variant}
              size={config.size}
              iconOnly={config.iconOnly || false}
              disabled={config.disabled || false}
              aria-label={
                config.iconOnly && config.ariaLabel
                  ? config.ariaLabel
                  : undefined
              }
            >
              {/* Conditional Icon Left */}
              {config.iconLeft && !config.iconOnly && (
                <Icon IconName={row.icon} size={config.iconSize} />
              )}

              {/* Text Content */}
              {config.text.trim().length > 0 && <span>{config.text}</span>}

              {/* Icon Only check */}
              {config.iconOnly && (
                <Icon IconName={row.icon} size={config.iconSize} />
              )}

              {/* Conditional Icon Right */}
              {config.iconRight && !config.iconOnly && (
                <Icon IconName={row.icon} size={config.iconSize} />
              )}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Buttons;
