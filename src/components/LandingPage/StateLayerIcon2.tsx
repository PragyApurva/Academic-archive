import { memo, SVGProps } from 'react';

const StateLayerIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 46 46' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M33 12.9999L19.25 26.7499' stroke='#F2F2F2' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M33 13L24.25 38L19.25 26.75L8 21.75L33 13Z'
      stroke='#F2F2F2'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(StateLayerIcon2);
export { Memo as StateLayerIcon2 };
