import { memo, SVGProps } from 'react';

const Arrow2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 163 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M-1.04757 -1.07359C-1.6405 -0.495038 -1.65215 0.454638 -1.0736 1.04757L8.35451 10.7099C8.93306 11.3028 9.88274 11.3145 10.4757 10.7359C11.0686 10.1574 11.0802 9.20771 10.5017 8.61478L2.12116 0.0260265L10.7099 -8.35451C11.3028 -8.93307 11.3145 -9.88274 10.7359 -10.4757C10.1574 -11.0686 9.2077 -11.0803 8.61477 -10.5017L-1.04757 -1.07359ZM163.018 0.500113L0.0183993 -1.49989L-0.0184077 1.49989L162.982 3.49989L163.018 0.500113Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Arrow2Icon);
export { Memo as Arrow2Icon };
