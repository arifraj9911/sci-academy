import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Shared/Sidebar/Sidebar";

const Main = () => {
  return (
    <div className="flex min-h-screen max-w-screen-mak mx-auto">
      <div className="2xl:w-[16%] xl:w-[18%] w-1/5  bg-[#F9F9F9]">
        <Sidebar />
      </div>
      <div className="flex-grow  bg-[#FFF] pl-9 pt-8 pr-20">
        
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
