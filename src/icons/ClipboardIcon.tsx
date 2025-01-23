import React from "react";

const ClipboardIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M336 64h32a48 48 0 0 1 48 48v320a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V112a48 48 0 0 1 48-48h32"
      ></path>
      <rect
        width="160"
        height="64"
        x="176"
        y="32"
        fill="none"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="26.13"
        ry="26.13"
      ></rect>
    </svg>
  );
};

export default ClipboardIcon;
