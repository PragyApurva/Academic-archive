import { memo, SVGProps } from 'react';

const IconArrowRightCircledIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 31 31' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.29999 15.5H21.7M21.7 15.5L16.275 10.075M21.7 15.5L16.275 20.925'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15.5 31C24.0603 31 31 24.0603 31 15.5C31 6.93958 24.0603 0 15.5 0C6.93958 0 0 6.93958 0 15.5C0 24.0603 6.93958 31 15.5 31Z'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(IconArrowRightCircledIcon2);
export { Memo as IconArrowRightCircledIcon2 };
