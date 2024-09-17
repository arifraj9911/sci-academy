import { useState } from "react";
import NavbarShared from "../../components/NavbarShared";
import arrowBtn from "../../assets/images/arrow.svg";
import filterViewsIcon from "../../assets/images/filter_views.svg";

const categories = ["All", "Tests", "Exams", "Textbook"];
const courses = ["CSE", "EEE", "ICT", "CIVIL"];
const subjects = ["Physics", "Chemistry", "Biology", "Mathematics"];
const views = ["Grid View", "List View"];

const VideoSolutions = () => {
  const [selected, setSelected] = useState("All");
  const [courseSelected, setCourseSelected] = useState("Course");
  const [subSelected, setSubSelected] = useState("Subject");
  const [viewSelected, setViewSelected] = useState("Grid View");

  const [toggleCourse, setToggleCourse] = useState(false);
  const [toggleSub, setToggleSub] = useState(false);
  const [toggleView, setToggleView] = useState(false);

  return (
    <div>
      {/* navbar start */}
      <NavbarShared search={true} />
      {/* navbar end */}

      <div>
        <h3 className="text-[32px] text-primary-heading font-semibold font-poppins ">
          Video Solutions
        </h3>
        <p className="text-primary-text text-[16px] mt-4 mb-10 font-inter">
          Lorem ipsum dolor sit amet consectetur. Urna magna magna convallis
          tincidunt
        </p>

        {/* filtering options start*/}
        <div className="flex items-center justify-between">
          {/* category filter */}
          <div className="flex items-center gap-2 font-poppins text-[#374151] font-medium">
            {categories.map((category, index) => (
              <p
                onClick={() => setSelected(category)}
                key={index}
                className={`px-6 py-2 border border-[#D1D5DB] rounded-lg ${
                  selected === category ? "bg-[#E5E7EB80] border-none " : ""
                }`}
              >
                {category}
              </p>
            ))}
          </div>

          {/* course/subject/grid filter */}
          <div className="font-poppins flex items-center gap-4">
            {/* course start*/}
            <div
              onClick={() => setToggleCourse(!toggleCourse)}
              className="flex items-center  gap-4 border py-2 px-4 relative border-[#D1D5DB] rounded-lg"
            >
              <span>{courseSelected}</span>
              <img
                src={arrowBtn}
                className={`duration-200 transition-transform ease-in-out ${
                  toggleCourse ? "rotate-180" : "rotate-0"
                }`}
                alt="arrow_btn"
              />

              {toggleCourse && (
                <div className="absolute flex flex-col bg-[#FFF] w-full top-12 right-0 p-3 gap-2 rounded-lg border cursor-pointer">
                  {courses.map((course, index) => (
                    <span
                      onClick={() => {
                        setCourseSelected(course);
                        setToggleCourse(false);
                      }}
                      key={index}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {/* course end*/}

            {/* subject start*/}
            <div
              onClick={() => setToggleSub(!toggleSub)}
              className="flex items-center  gap-4 border py-2 px-4 relative border-[#D1D5DB] rounded-lg"
            >
              <span>{subSelected}</span>
              <img
                src={arrowBtn}
                className={`duration-200 transition-transform ease-in-out ${
                  toggleSub ? "rotate-180" : "rotate-0"
                }`}
                alt="arrow_btn"
              />

              {toggleSub && (
                <div className="absolute flex flex-col bg-[#FFF] w-full top-12 right-0 p-3 gap-2 rounded-lg border cursor-pointer">
                  {subjects.map((subject, index) => (
                    <span
                      onClick={() => {
                        setSubSelected(subject);
                        setToggleSub(false);
                      }}
                      key={index}
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {/* subject end*/}

            {/* view start*/}
            <div
              onClick={() => setToggleView(!toggleView)}
              className="flex items-center  gap-4 border py-2 px-4 relative border-[#D1D5DB] rounded-lg"
            >
              <img src={filterViewsIcon} alt="filter_view_icon" />
              <span>{viewSelected}</span>
              <img
                src={arrowBtn}
                className={`duration-200 transition-transform ease-in-out ${
                  toggleView ? "rotate-180" : "rotate-0"
                }`}
                alt="arrow_btn"
              />

              {toggleView && (
                <div className="absolute flex flex-col bg-[#FFF] w-full top-12 right-0 p-3 gap-2 rounded-lg border cursor-pointer">
                  {views.map((view, index) => (
                    <span
                      onClick={() => {
                        setViewSelected(view);
                        setToggleView(false);
                      }}
                      key={index}
                    >
                      {view}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {/* subject end*/}
          </div>
        </div>
        {/* filtering options end*/}
      </div>
    </div>
  );
};

export default VideoSolutions;
