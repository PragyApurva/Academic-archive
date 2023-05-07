import { memo, SVGProps } from 'react';

const IconSearchEngineIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 35 36' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 31.134V3.89176C0 1.7424 1.74111 0 3.88889 0H31.1111C33.2589 0 35 1.7424 35 3.89176V31.134C35 33.2835 33.2589 35.0258 31.1111 35.0258H3.88889C1.74111 35.0258 0 33.2835 0 31.134Z'
      stroke='black'
      strokeOpacity={0.75}
      strokeWidth={2}
    />
    <path
      d='M22.1093 21.1122C23.3119 19.9053 24.0555 18.2401 24.0555 16.401C24.0555 12.7163 21.0708 9.72937 17.389 9.72937C13.707 9.72937 10.7222 12.7163 10.7222 16.401C10.7222 20.0855 13.707 23.0724 17.389 23.0724C19.2331 23.0724 20.9024 22.3233 22.1093 21.1122ZM22.1093 21.1122L26.2778 25.2964'
      stroke='black'
      strokeOpacity={0.75}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(IconSearchEngineIcon2);
export { Memo as IconSearchEngineIcon2 };
