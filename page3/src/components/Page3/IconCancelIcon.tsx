import { memo, SVGProps } from 'react';

const IconCancelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 11L4.50001 5.50002M4.50001 5.50002L9 0M4.50001 5.50002L0 0M4.50001 5.50002L9 11'
      stroke='#364470'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(IconCancelIcon);
export { Memo as IconCancelIcon };
