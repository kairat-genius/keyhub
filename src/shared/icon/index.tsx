import type {IconName} from './type';
import type { SVGProps } from 'react';
import { cn } from '../utils/clsx';


interface IconProps extends SVGProps<SVGSVGElement> {
  icon: IconName;
  className?: string;
}

const Icon = ({ icon, className, ...props }: IconProps) => {
  return (
    <svg
      className={cn('icon', className)}
      {...props}
    >
      <use xlinkHref={`/sprites.svg#${icon}`} />
    </svg>
  );
};

export default Icon;
