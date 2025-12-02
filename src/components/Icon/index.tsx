import { type IconType } from 'react-icons';

type IconProps = {
  IconName: IconType;
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Icon = ({ IconName, size = 20, ...props }: IconProps) => (
  <IconName size={size} {...props} />
);

export { Icon, type IconProps };
