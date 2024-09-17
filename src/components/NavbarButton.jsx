import React from "react";

const NavbarButton = () => {
  return (
    <button className="border rounded-[6.25rem] border-primary-blue flex items-center gap-8">
      <span className=" text-primary-blue text-base capitalize ml-[3.12rem]">
        sign up
      </span>
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="my-2 mr-2"
      >
        <circle cx="17.5" cy="17.5" r="17.5" fill="#3758F9" />
        <path
          d="M13 22L23 12M23 12H15M23 12V20"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

export default NavbarButton;
