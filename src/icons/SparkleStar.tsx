import { cn } from '@/lib/utils';
import type { SVGComponent } from '@/types';

export const SparkleStar: SVGComponent<{
  color?: string;
  size?: number;
}> = props => {
  const { color = '#FFC700', size = 100, className, ...rest } = props;
  return (
    <span className="pointer-events-none absolute inset-0 animate-grow-shrink">
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          'pointer-events-none absolute z-[2] inline-block animate-spin-half',
          className
        )}
        {...rest}
      >
        <path
          d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
          fill={color}
        ></path>
      </svg>
    </span>
  );
};
