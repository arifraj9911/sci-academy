import logo from "../../../assets/images/logo.svg";
import science from "../../../assets/images/Science.svg";
import academy from "../../../assets/images/Academy.svg";
import NavLinkItem from "../../../components/NavLinkItem";

const Sidebar = () => {
  return (
    <div className="p-6 min-h-screen sticky top-0 ">
      {/* logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" />
        <div className="space-y-1">
          <img src={science} alt="science" />
          <img src={academy} alt="academy" />
        </div>
      </div>

      {/* menu Link */}
      <NavLinkItem></NavLinkItem>
    </div>
  );
};

export default Sidebar;
