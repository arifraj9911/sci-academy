import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Shared/Sidebar/Sidebar";

const Main = () => {
  return (
    <div className="flex min-h-screen max-w-screen-mak mx-auto">
      <div className="2xl:w-[16%] xl:w-[18%] w-1/5  bg-[#F9F9F9] sticky top-0 min-h-screen ">
          <Sidebar />
        </div>
        <div className="flex-grow overflow-auto w-full bg-[#FFF] pl-9 py-8 pr-20">
          <Outlet></Outlet>
        </div>
    </div>
  );
};

export default Main;
