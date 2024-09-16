import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Shared/Sidebar/Sidebar";

const Main = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-[16%] bg-gray-400">
        <Sidebar />
      </div>
      <div className="flex-grow bg-gray-200">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
