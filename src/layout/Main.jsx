import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Shared/Sidebar/Sidebar";

const Main = () => {
  return (
    <div className="flex min-h-screen max-w-screen-mak mx-auto">
      <div className=" xl:w-[18%] w-1/4  bg-[#F9F9F9]">
        <Sidebar />
      </div>
      <div className="flex-grow bg-gray-200">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
