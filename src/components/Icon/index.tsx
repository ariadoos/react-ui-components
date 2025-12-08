import { cn } from '@src/utils/cn';
import { type IconType } from 'react-icons';

type IconProps = {
  IconName: IconType;
  size?: number;
  className?: string;
} & React.SVGProps<SVGSVGElement>;

const Icon = ({ IconName, size = 20, className, ...props }: IconProps) => (
  <IconName size={size} className={cn(className)} {...props} />
);

export { Icon, type IconProps };
