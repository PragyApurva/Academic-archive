import { memo, SVGProps } from 'react';

const IconCheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 21 19' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 11.4L6 19L21 0' stroke='#031653' strokeWidth={5.19312} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(IconCheckIcon);
export { Memo as IconCheckIcon };
