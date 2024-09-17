import { Link } from "react-router-dom";
import HeroButton from "../../components/home/HeroButton";
import headerImg from "../../assets/header-img.png";

const Header = () => {
  return (
    <header className="bg-hero-pattern bg-center bg-cover w-full h-screen">
      <div className="max-w-screen-desktop mx-auto">
        <div className="flex items-center justify-between gap-32 pt-[160px]">
          <div className="flex flex-col items-start gap-12 w-[46rem]">
            <h1 className=" text-ebony_clay font-inter text-5xl leading-normal font-extrabold">
              Improve your ATAR score with our video tutorials for all your
              textbook problems
            </h1>
            <p className=" text-pale_sky text-base font-inter">
              Lorem ipsum dolor sit amet consectetur. Urna magna magna convallis
              tincidunt fermentum velit ornare. Lorem pretium pharetra quis
              convallis amet.
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
