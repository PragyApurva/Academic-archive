import { memo, SVGProps } from 'react';

const IconPinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 17 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.3423 9.45703L0.739258 14.3911'
      stroke='black'
      strokeOpacity={0.7}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2.46338 5.6506L10.3873 12.6285L11.8501 11.3402L11.5122 8.46615L16.261 4.9187L11.2186 0.478271L7.19005 4.66003L3.92626 4.36239L2.46338 5.6506Z'
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
