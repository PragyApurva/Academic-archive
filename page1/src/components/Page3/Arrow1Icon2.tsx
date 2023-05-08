import { memo, SVGProps } from 'react';

const Arrow1Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 3 115' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M-1.05241 116.052C-0.47169 116.642 0.478022 116.651 1.06883 116.07L10.6966 106.607C11.2874 106.026 11.2956 105.076 10.7149 104.485C10.1342 103.894 9.18444 103.886 8.59364 104.467L0.0356074 112.879L-8.3763 104.321C-8.95702 103.73 -9.90673 103.722 -10.4975 104.303C-11.0883 104.883 -11.0965 105.833 -10.5158 106.424L-1.05241 116.052ZM-0.492376 -0.0129155L-1.4826 114.987L1.51729 115.013L2.50751 0.0129155L-0.492376 -0.0129155Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Arrow1Icon2);
export { Memo as Arrow1Icon2 };
