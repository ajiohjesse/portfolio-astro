import type { SVGComponent } from '@/types';

const StarBadge: SVGComponent = props => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="17.5" cy="17.5" r="17" fill="#001219" stroke="#55EEFF" />
      <path
        d="M11.5823 26.1667L13.1395 19.7271L7.91663 15.3958L14.8166 14.8229L17.5 8.75L20.1833 14.8229L27.0833 15.3958L21.8604 19.7271L23.4177 26.1667L17.5 22.7521L11.5823 26.1667Z"
        fill="#55EEFF"
      />
    </svg>
  );
};

export default StarBadge;
