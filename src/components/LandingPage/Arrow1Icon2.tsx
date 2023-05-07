import { memo, SVGProps } from 'react';

const Arrow1Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 146 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M147.061 1.06066C147.646 0.474874 147.646 -0.474874 147.061 -1.06066L137.515 -10.6066C136.929 -11.1924 135.979 -11.1924 135.393 -10.6066C134.808 -10.0208 134.808 -9.07107 135.393 -8.48528L143.879 0L135.393 8.48528C134.808 9.07107 134.808 10.0208 135.393 10.6066C135.979 11.1924 136.929 11.1924 137.515 10.6066L147.061 1.06066ZM0 1.5L146 1.5V-1.5L0 -1.5L0 1.5Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(Arrow1Icon2);
export { Memo as Arrow1Icon2 };
