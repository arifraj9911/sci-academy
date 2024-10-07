import Arrow_Left_MD from "../assets/adminPanel/Arrow_Left_MD.svg";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="flex justify-center items-center space-x-4 mt-6">
      {/* Previous Button */}
      <button
        className={`flex justify-center items-center w-10 h-10 rounded-full border border-mystic ${
          currentPage === 1 ? "cursor-not-allowed" : ""
        }`}
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        <span className="">
          <img src={Arrow_Left_MD} alt="" />
        </span>
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, idx) => (
        <button
          key={idx}
          className={`flex justify-center items-center w-10 h-10 rounded-full border text-biscay ${
            currentPage === idx + 1
              ? "border-biscay bg-blue-50"
              : "border-gray-300"
          }`}
          onClick={() => setCurrentPage(idx + 1)}
        >
          <span className="text-biscay font-poppins text-base font-semibold">
            {`0${idx + 1}`.slice(-2)}
          </span>
        </button>
      ))}

      {/* Next Button */}
      <button
        className={`flex justify-center items-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100 ${
          currentPage === totalPages ? "cursor-not-allowed" : ""
        }`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <span className="">
          <img src={Arrow_Left_MD} alt="" className=" rotate-180" />
        </span>
      </button>
    </div>
  );
};

export default Pagination;
