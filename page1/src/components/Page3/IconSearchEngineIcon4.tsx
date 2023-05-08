import { memo, SVGProps } from 'react';

const IconSearchEngineIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 18.6667V2.33333C0 1.04467 1.09441 0 2.44444 0H19.5556C20.9056 0 22 1.04467 22 2.33333V18.6667C22 19.9554 20.9056 21 19.5556 21H2.44444C1.09441 21 0 19.9554 0 18.6667Z'
      stroke='black'
      strokeOpacity={0.75}
      strokeWidth={2}
    />
  </svg>
);

const Memo = memo(IconSearchEngineIcon4);
export { Memo as IconSearchEngineIcon4 };
