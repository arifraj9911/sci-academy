import { NavLink } from "react-router-dom";
import SaveButton from "../../components/admin/SaveButton";

const Courses = () => {
  return (
    <div className="px-14 pt-24">
      <div>
        <h1 className=" text-primary-heading font-poppins text-[2rem] font-semibold mb-2">
          Courses
        </h1>
        <p className=" text-pale_sky font-inter text-base mb-8">
          Lorem ipsum dolor sit amet consectetur. Urna magna magna convallis
          tincidunt
        </p>
      </div>
      <div className="flex">
        {/* Sidebar */}
        <aside className="px-8 border-r border-mercury">
          <h3 className=" text-gray_chateau font-inter text-sm font-medium mb-4">
            CATEGORIES
          </h3>
          <ul className="space-y-4">
            <li>
              <NavLink className="p-2 rounded text-dove_gray text-sm font-medium">
                All Courses
              </NavLink>
            </li>
            <li>
              <NavLink className="p-2 rounded text-dove_gray text-sm font-medium">
                Maths Methods
              </NavLink>
            </li>
            <li>
              <NavLink className="p-2 rounded text-dove_gray text-sm font-medium">
                Year 12 physics
              </NavLink>
            </li>
            <li>
              <NavLink className="p-2 rounded text-dove_gray text-sm font-medium">
                Specialist maths
              </NavLink>
            </li>
            <li>
              <NavLink className="p-2 rounded text-dove_gray text-sm font-medium">
                Marketing
              </NavLink>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="w-[31.75rem ] ml-6">
          <form>
            {/* Course Name */}
            <label
              htmlFor="courseName"
              className="block mb-3 text-base font-semibold text-ebony_clay font-inter"
            >
              Course Name
            </label>
            <input
              type="text"
              id="courseName"
              placeholder="Enter your full Course Name"
              className="block w-full px-5 py-3 text-primary-heading font-inter text-base border border-primary-blue bg-athens_gray rounded-md mb-4 focus:outline-none"
            />

            {/* Number of Courses */}
            <label
              htmlFor="numberOfCourses"
              className="block mb-3 text-base font-semibold text-ebony_clay font-inter"
            >
              Number of Course
            </label>
            <input
              type="text"
              id="numberOfCourses"
              placeholder="Enter Number of Subjects"
              className="block w-full px-5 py-3 text-primary-heading font-inter text-base border border-primary-blue bg-athens_gray rounded-md mb-4 focus:outline-none"
            />

            {/* Delete Course with Add Button */}
            <label
              htmlFor="deleteCourse"
              className="block mb-3 text-base font-semibold text-ebony_clay font-inter"
            >
              Delete Course
            </label>
            <div className="flex items-stretch mb-4">
              <input
                type="text"
                id="deleteCourse"
                placeholder="Enter your full Course Name"
                className="flex-grow px-5 py-3 text-primary-heading font-inter text-base border border-primary-blue bg-athens_gray rounded-md focus:outline-none"
              />
              <button
                type="button"
                className="ml-2 bg-black text-white px-4 py-3 rounded-md hover:bg-gray-800"
              >
                + Add
              </button>
            </div>

            {/* Select Course */}
            <label
              htmlFor="selectCourse"
              className="block mb-3 text-base font-semibold text-ebony_clay font-inter"
            >
              Select Course
            </label>
            <select
              id="selectCourse"
              className="block w-full px-5 py-3 text-primary-heading font-inter text-base border border-primary-blue bg-athens_gray rounded-md mb-4 focus:outline-none"
            >
              <option value="">Select Subjects</option>
              <option value="Maths">Maths</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
            </select>

            {/* Delete Course with Dropdown */}
            <label
              htmlFor="deleteCourseDropdown"
              className="block mb-3 text-base font-semibold text-ebony_clay font-inter"
            >
              Delete Course
            </label>
            <div className="flex mb-6">
              <select
                id="deleteCourseDropdown"
                className="flex-grow px-5 py-3 text-primary-heading font-inter text-base border border-primary-blue bg-athens_gray rounded-md focus:outline-none"
              >
                <option value="">Select Course</option>
                <option value="Maths">Maths</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
              </select>
              <button
                type="button"
                className="ml-2 bg-black text-white px-4 py-3 rounded-md hover:bg-gray-800"
              >
                × Delete
              </button>
            </div>

            {/* Save Button */}
            <SaveButton />
          </form>
        </main>
      </div>
    </div>
  );
};

export default Courses;
