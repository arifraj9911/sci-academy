import { Link } from "react-router-dom";
import HeroButton from "../components/HeroButton";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div className="w-full">
      <header className="bg-hero-pattern bg-center bg-cover w-full h-screen">
        <div className="max-w-screen-desktop mx-auto">
          <Navbar />
          <div className="flex items-center mt-[93px]">
            <div className="flex flex-col items-start gap-12">
              <h1 className=" text-ebony_clay font-inter text-6xl font-extrabold">
                Improve your ATAR score with our video tutorials for all your
                textbook problems
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Urna magna magna
                convallis tincidunt fermentum velit ornare. Lorem pretium
                pharetra quis convallis amet.
              </p>
              <Link>
                <HeroButton />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
