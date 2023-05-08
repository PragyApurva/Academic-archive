import { memo, SVGProps } from 'react';

const IconSendIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 34 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M33.6368 15L0 30L6.30691 15L0 0L33.6368 15Z'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M6.19629 15H33.6369' stroke='black' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(IconSendIcon);
export { Memo as IconSendIcon };
