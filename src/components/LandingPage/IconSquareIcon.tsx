import { memo, SVGProps } from 'react';

const IconSquareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M21 0.666667V19.3333C21 19.7016 20.6866 20 20.3 20H0.7C0.313402 20 0 19.7016 0 19.3333V0.666667C0 0.298478 0.313402 0 0.7 0H20.3C20.6866 0 21 0.298478 21 0.666667Z'
      stroke='black'
      strokeOpacity={0.7}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(IconSquareIcon);
export { Memo as IconSquareIcon };
