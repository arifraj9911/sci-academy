import { levelTwoData } from "../../../data/forumData";
import { useEffect, useState } from "react";
import searchIcon from "./../../../assets/images/search-normal.svg";
import arrowBtn from "./../../../assets/images/arrow.svg";
import CommunityLeaderboard from "../Community Experts Leaderboard/CommunityLeaderboard";
import NavbarShared from "../../../components/NavbarShared";
import { useParams } from "react-router-dom";

const ForumLevelTwo = () => {
  const params = useParams();
  const { id } = params;

  const [LevelTwoDiscussionData, setLevelTwoDiscussionData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setLevelTwoDiscussionData(levelTwoData[id]);
    setFilteredData(levelTwoData[id]);
  }, [id]);

  // search related
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchInput(query);

    const filter = LevelTwoDiscussionData?.filter((discussion) =>
      discussion?.topic?.toLowerCase().includes(query)
    );

    setFilteredData(filter);
  };

  // for filter
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [optionSelected, setOptionSelected] = useState("Recently Active");

  const options = [
    "Recent Discussions",
    "Popular Topics",
    "Trending Now",
    "New Arrivals",
    "Most Commented",
  ];
  return (
    <div>
      {/* nav */}
      <NavbarShared about={true} />

      {/* heading */}
      <section>
        <h1 className="text-[32px] font-semibold">Discussion</h1>
        {/* short desc and search/filter */}
        <div className="flex items-center justify-between">
          <p className="text-[#637381]">Join the Science Academy community</p>

          {/* search and filter */}
          <div className="flex items-center justify-end gap-5">
            {/* search */}
            <div className="relative">
              <img
                className="absolute top-3 left-4"
                src={searchIcon}
                alt="search"
              />
              <input
                type="text"
                name=""
                placeholder="Search discussion"
                className="border border-[#DFE4EA] text-secondary-text rounded-2xl py-3 pl-12 pr-4 outline-none"
                value={searchInput}
                onChange={handleSearch}
              />
            </div>

            {/* filter */}
            <div className="relative">
              <div
                onClick={() => setToggleDropdown(!toggleDropdown)}
                className="flex item-center gap-4 border py-3 px-4 border-[#DFE4EA] rounded-2xl cursor-pointer"
              >
                <span>{optionSelected}</span>
                <img
                  src={arrowBtn}
                  alt="arrow btn"
                  className={`duration-200 transition-transform ease-in-out ${
                    toggleDropdown ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              {/* dropdown options */}
              {toggleDropdown && (
                <div className="absolute mt-2 flex flex-col bg-white w-full top-12 right-0 p-3 gap-2 rounded-2xl border border-[#DFE4EA] z-10">
                  {options.map((discussion, index) => (
                    <span
                      className="cursor-pointer"
                      key={index}
                      onClick={() => {
                        setOptionSelected(discussion);
                        setToggleDropdown(false);
                      }}
                    >
                      {discussion}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <hr className="my-10" />

      {/* main section */}
      <section className="flex gap-6">
        {/* left - discussions */}
        <div className="w-3/4">
          <h3 className="text-xl font-semibold mb-7">Discussion : Level 2</h3>
          {/* table */}
          <div className="overflow-x-auto rounded-2xl shadow-md border border-gray-200">
            <table className="min-w-full ">
              {/* head */}
              <thead>
                <tr className=" border-b border-gray-200">
                  <th className="text-left px-6 py-3.5 text-gray-600">
                    Topics
                  </th>
                  <th className="text-left px-6 py-3.5 text-gray-600">
                    Threads
                  </th>
                  <th className="text-left px-6 py-3.5 text-gray-600">Posts</th>
                  <th className="text-left px-6 py-3.5 text-gray-600">
                    Last Post By
                  </th>
                </tr>
              </thead>
              {/* body */}
              <tbody>
                {filteredData?.map((item, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-[#3758F90D] border-b border-gray-200 cursor-pointer`}
                  >
                    <td className="px-6 py-3">{item.topic}</td>
                    <td className="px-6 py-3">{item.threads}</td>
                    <td className="px-6 py-3">{item.posts}</td>
                    <td className="px-6 py-3 flex items-center">
                      <img
                        src={item.lastPostBy.avatar}
                        alt={item.lastPostBy.name}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <span>{item.lastPostBy.name}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* right - Community expert leaderBoard */}
        <div className="flex-1">
          <CommunityLeaderboard></CommunityLeaderboard>
        </div>
      </section>
    </div>
  );
};

export default ForumLevelTwo;
