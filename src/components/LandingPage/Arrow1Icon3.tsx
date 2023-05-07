import { memo, SVGProps } from 'react';

const Arrow1Icon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 3 115' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M-1.05253 116.052C-0.471813 116.642 0.4779 116.651 1.06871 116.07L10.6965 106.607C11.2873 106.026 11.2955 105.076 10.7148 104.485C10.134 103.894 9.18432 103.886 8.59351 104.467L0.0354853 112.879L-8.37642 104.321C-8.95714 103.73 -9.90685 103.722 -10.4977 104.303C-11.0885 104.883 -11.0966 105.833 -10.5159 106.424L-1.05253 116.052ZM-0.492498 -0.0129155L-1.48272 114.987L1.51716 115.013L2.50739 0.0129155L-0.492498 -0.0129155Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(Arrow1Icon3);
export { Memo as Arrow1Icon3 };
