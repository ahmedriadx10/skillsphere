export default function StarIcon({ filled }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? "#e0365a" : "#e5e7eb"}
    >
      <polygon points="9,1 11.5,6.5 17.5,7.3 13,11.5 14.3,17.5 9,14.5 3.7,17.5 5,11.5 0.5,7.3 6.5,6.5" />
    </svg>
  );
}