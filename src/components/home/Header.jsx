import { Link } from "react-router-dom";
import HeroButton from "../../components/home/HeroButton";
import headerImg from "../../assets/header-img.svg";
// import YD from "../../assets/YD.svg";

const Header = () => {
  return (
    <header className="bg-hero-pattern bg-center bg-cover w-full h-[920px] bg-[#1A416A]">
      <div className="max-w-screen-desktop mx-auto">
        <div className="flex items-center justify-between gap-32 pt-[160px]">
          <div className="flex flex-col items-start gap-[24px] w-[46rem]">
            <h1 className="hidden 2xl:block text-[#FFF] font-poppins text-[64px] leading-[74px] font-semibold">
              Improve your ATAR <br />
              score now with our <br />
              video tutorials
            </h1>
            <h1 className="2xl:hidden text-[#FFF] font-poppins text-[54px] leading-[74px] font-semibold">
              Improve your ATAR score now with our video tutorials
            </h1>
            {/* <img
              src={YD}
              alt="yd"
              className="absolute left-[45.8%] top-[19.2%]"
            /> */}
            <p className="text-[#7FAAD6] text-base font-inter leading-[30px]">
              Lorem ipsum dolor sit amet consectetur. Consequat et neque eget
              erat scelerisque et. Semper libero aenean purus purus cursus et
              proin viverra. Neque at orci vitae vitae malesuada. Vitae a sit
              feugiat mi fusce vitae massa.
            </p>
            <Link>
              <HeroButton />
            </Link>
          </div>
          <div className="h-auto w-[48rem]">
            <img src={headerImg} alt="header img" className="w-full h-full" />
          </div>
        </div>
        {/* why you should choose us  */}
        <div></div>
      </div>
    </header>
  );
};

export default Header;
