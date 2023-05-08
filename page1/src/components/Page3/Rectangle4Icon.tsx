import { memo, SVGProps } from 'react';

const Rectangle4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 558 226' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 25C0 11.1929 11.1929 0 25 0H533C546.807 0 558 11.1929 558 25V201C558 214.807 546.807 226 533 226H25C11.1929 226 0 214.807 0 201V25Z'
      fill='#F5F8FF'
      stroke='black'
    />
  </svg>
);

const Memo = memo(Rectangle4Icon);
export { Memo as Rectangle4Icon };
