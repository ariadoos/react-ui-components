import { Badge, type BadgeProps } from '@src/components/Badge';

interface BadgeConfig {
  variant: BadgeProps['variant'];
  title: string;
  badges: {
    size: BadgeProps['size'];
    text: string;
  }[];
}

const BADGE_CONFIGS: BadgeConfig[] = [
  {
    variant: 'neutral',
    title: 'Neutral Badges',
    badges: [
      { size: 'sm', text: 'Label' },
      { size: 'md', text: 'Label' },
      { size: 'lg', text: 'Label' },
    ],
  },
  {
    variant: 'error',
    title: 'Error Badges',
    badges: [
      { size: 'sm', text: 'Label' },
      { size: 'md', text: 'Label' },
      { size: 'lg', text: 'Label' },
    ],
  },
  {
    variant: 'warning',
    title: 'Warning Badges',
    badges: [
      { size: 'sm', text: 'Label' },
      { size: 'md', text: 'Label' },
      { size: 'lg', text: 'Label' },
    ],
  },
  {
    variant: 'success',
    title: 'Success Badges',
    badges: [
      { size: 'sm', text: 'Label' },
      { size: 'md', text: 'Label' },
      { size: 'lg', text: 'Label' },
    ],
  },
  {
    variant: 'brand',
    title: 'Brand Badges',
    badges: [
      { size: 'sm', text: 'Label' },
      { size: 'md', text: 'Label' },
      { size: 'lg', text: 'Label' },
    ],
  },
];

const Badges = () => {
  return (
    <div className="flex flex-wrap min-h-screen items-center justify-center">
      <div className="flex flex-wrap gap-6 items-center w-60">
        {BADGE_CONFIGS.map((row, rowIndex) =>
          row.badges.map((badge, badgeIndex) => (
            <Badge
              key={`${rowIndex}-${badgeIndex}`}
              variant={row.variant}
              size={badge.size}
            >
              {badge.text}
            </Badge>
          ))
        )}
      </div>
    </div>
  );
};

export default Badges;
