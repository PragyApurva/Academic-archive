import { memo, SVGProps } from 'react';

const IconPinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 17 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.34218 9.45703L0.739136 14.3911'
      stroke='black'
      strokeOpacity={0.7}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2.46326 5.6506L10.3872 12.6285L11.85 11.3402L11.512 8.46615L16.2609 4.9187L11.2184 0.478271L7.18993 4.66003L3.92613 4.36239L2.46326 5.6506Z'
      stroke='black'
      strokeOpacity={0.7}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(IconPinIcon);
export { Memo as IconPinIcon };
