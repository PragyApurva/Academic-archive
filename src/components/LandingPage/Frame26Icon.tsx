import { memo, SVGProps } from 'react';

const Frame26Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 99 42' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 21C0 9.40202 9.40202 0 21 0H69C85.5685 0 99 13.4315 99 30V42H21C9.40202 42 0 32.598 0 21V21Z'
      fill='#93A2D8'
    />
    <path
      d='M79.82 35.4002H57.1017C56.4933 35.4002 56 34.9525 56 34.4002V18.067C56 17.5147 56.4933 17.067 57.1017 17.067H62.1837C63.4736 17.067 64.669 16.4527 65.3327 15.4487L70.3096 7.91977C71.3836 6.29524 73.913 6.1408 75.2168 7.62019C75.8314 8.3175 76.0296 9.24433 75.7468 10.0997L73.8694 15.7797C73.6574 16.4213 74.1867 17.067 74.9247 17.067H83.3255C85.747 17.067 87.5057 19.157 86.8685 21.2773L83.363 32.9439C82.9273 34.3942 81.4761 35.4002 79.82 35.4002Z'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
    />
    <path d='M62.4267 35.4002V17.067' stroke='black' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(Frame26Icon);
export { Memo as Frame26Icon };
