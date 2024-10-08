import communityBg from "./../../../assets/images/forum community leaderboard.svg";

const CommunityLeaderboard = () => {
  const subjects = [
    "Automation",
    "Best Practices",
    "Integration",
    "Gravity",
    "2d Motion",
  ];
  return (
    <div>
      {/* image */}
      <div className="relative">
        <img className="w-full" src={communityBg} alt="community background" />
        <h3 className="absolute bottom-6 left-8 max-w-[240px] text-white text-2xl font-semibold leading-8">
          Community Experts Leaderboard
        </h3>
      </div>
      {/* top subjects */}
      <div className="flex gap-4 items-center flex-wrap mt-10">
        {subjects?.map((subject, index) => (
          <span
            className="border rounded-xl py-2.5 px-4 cursor-pointer"
            key={index}
          >
            {subject}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CommunityLeaderboard;
