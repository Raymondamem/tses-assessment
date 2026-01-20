export default function SidebarBookIcon({ bg }: { bg: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9297 13.981V4.92854C17.9297 4.02854 17.1947 3.36104 16.3022 3.43604H16.2572C14.6822 3.57104 12.2897 4.37355 10.9547 5.21355L10.8272 5.29604C10.6097 5.43104 10.2497 5.43104 10.0322 5.29604L9.84469 5.18355C8.50969 4.35105 6.12469 3.55604 4.54969 3.42854C3.65719 3.35354 2.92969 4.02854 2.92969 4.92104V13.981C2.92969 14.701 3.51469 15.376 4.23469 15.466L4.45219 15.496C6.07969 15.7135 8.59219 16.5385 10.0322 17.326L10.0622 17.341C10.2647 17.4535 10.5872 17.4535 10.7822 17.341C12.2222 16.546 14.7422 15.7135 16.3772 15.496L16.6247 15.466C17.3447 15.376 17.9297 14.701 17.9297 13.981Z"
        stroke={bg ? "#0A60E1" : "#636363"}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4248 5.54199V16.792"
        stroke={bg ? "#0A60E1" : "#636363"}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.23926 7.79297H5.55176"
        stroke={bg ? "#0A60E1" : "#636363"}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.80176 10.0439H5.55176"
        stroke={bg ? "#0A60E1" : "#636363"}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
