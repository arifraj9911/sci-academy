const HeroButton = () => {
  return (
    <button className="border rounded-[6.25rem] bg-primary-blue border-primary-blue flex items-center gap-8">
      <span className=" text-white text-xl font-normal font-poppins capitalize ml-[3.12rem]">
        Explore all Courses
      </span>
      <svg
        width="64"
        height="64"
        viewBox="0 0 78 78"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="my-2 mr-2"
      >
        <circle cx="39" cy="39" r="39" fill="white" />
        <path
          d="M30.5156 47.4852L47.4862 30.5146M47.4862 30.5146H38.0586M47.4862 30.5146L47.4857 39.9427"
          stroke="#3758F9"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

export default HeroButton;
