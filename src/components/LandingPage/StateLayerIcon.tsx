import { memo, SVGProps } from 'react';

const StateLayerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 39 39' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19.5 8C25.8513 8 31 13.1487 31 19.5C31 25.8513 25.8513 31 19.5 31C13.1487 31 8 25.8513 8 19.5C8 13.1487 13.1487 8 19.5 8ZM19.5 9.91667C14.2073 9.91667 9.91667 14.2073 9.91667 19.5C9.91667 24.7927 14.2073 29.0833 19.5 29.0833C24.7927 29.0833 29.0833 24.7927 29.0833 19.5C29.0833 14.2073 24.7927 9.91667 19.5 9.91667ZM23.0718 22.6942C23.4248 22.2998 24.0306 22.2663 24.4251 22.6192C24.8193 22.9722 24.8529 23.5781 24.5 23.9725C23.273 25.3433 21.4869 26.2083 19.5 26.2083C17.5131 26.2083 15.727 25.3433 14.5 23.9725C14.1471 23.5781 14.1806 22.9722 14.575 22.6192C14.9694 22.2663 15.5752 22.2998 15.9282 22.6942C16.807 23.676 18.081 24.2917 19.5 24.2917C20.919 24.2917 22.193 23.676 23.0718 22.6942ZM16.1458 16.1458C16.9397 16.1458 17.5833 16.7894 17.5833 17.5833C17.5833 18.3772 16.9397 19.0208 16.1458 19.0208C15.3519 19.0208 14.7083 18.3772 14.7083 17.5833C14.7083 16.7894 15.3519 16.1458 16.1458 16.1458ZM22.8542 16.1458C23.648 16.1458 24.2917 16.7894 24.2917 17.5833C24.2917 18.3772 23.648 19.0208 22.8542 19.0208C22.0603 19.0208 21.4167 18.3772 21.4167 17.5833C21.4167 16.7894 22.0603 16.1458 22.8542 16.1458Z'
      fill='#3D3D3D'
    />
  </svg>
);
const Memo = memo(StateLayerIcon);
export { Memo as StateLayerIcon };