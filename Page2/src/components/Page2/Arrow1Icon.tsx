import { memo, SVGProps } from 'react';

const Arrow1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 169 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M170.061 1.06066C170.646 0.474874 170.646 -0.474874 170.061 -1.06066L160.515 -10.6066C159.929 -11.1924 158.979 -11.1924 158.393 -10.6066C157.808 -10.0208 157.808 -9.07107 158.393 -8.48528L166.879 6.77742e-09L158.393 8.48528C157.808 9.07107 157.808 10.0208 158.393 10.6066C158.979 11.1924 159.929 11.1924 160.515 10.6066L170.061 1.06066ZM0 1.5L169 1.5L169 -1.5L0 -1.5L0 1.5Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Arrow1Icon);
export { Memo as Arrow1Icon };
