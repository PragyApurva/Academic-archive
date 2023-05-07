import { memo, SVGProps } from 'react';

const IconSearchEngineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 35 36' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 31.7432V4.4415C0 2.28746 1.69265 0.54126 3.78064 0.54126H30.2452C32.3332 0.54126 34.0258 2.28746 34.0258 4.4415V31.7432C34.0258 33.8973 32.3332 35.6435 30.2452 35.6435H3.78064C1.69265 35.6435 0 33.8973 0 31.7432Z'
      stroke='black'
      strokeOpacity={0.75}
      strokeWidth={2}
    />
    <path
      d='M22.0701 21.2337C23.2393 20.0242 23.9621 18.3553 23.9621 16.5122C23.9621 12.8195 21.0605 9.82605 17.4812 9.82605C13.9017 9.82605 11 12.8195 11 16.5122C11 20.2048 13.9017 23.1982 17.4812 23.1982C19.2739 23.1982 20.8968 22.4474 22.0701 21.2337ZM22.0701 21.2337L26.1226 25.427'
      stroke='black'
      strokeOpacity={0.75}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(IconSearchEngineIcon);
export { Memo as IconSearchEngineIcon };
