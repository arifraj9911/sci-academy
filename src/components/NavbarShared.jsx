import searchIcon from "../assets/images/search-normal.svg";
import avatar from "../assets/images/avatar.svg";

const NavbarShared = ({ search }) => {
  return (
    <div className="  flex items-center  justify-between">
      {/* search start */}
      {search && (
        <div className="relative">
          <img
            className="absolute top-3 left-4"
            src={searchIcon}
            alt="search"
          />
          <input
            type="text"
            name=""
            placeholder="Search video"
            className="border border-[#DFE4EA] text-secondary-text rounded-2xl py-3 pl-12 pr-4 outline-none"
            id=""
          />
        </div>
      )}
      {/* search end */}

      {/* avatar */}
      <div className="flex justify-end  w-full">
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default NavbarShared;
