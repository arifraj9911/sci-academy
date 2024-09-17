import Courses from "../components/home/Courses";
import Header from "../components/home/Header";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Header />
      <WhyChooseUs />
      <div className="w-full bg-zircon">
        <div className="mt-[9.38rem] max-w-screen-desktop mx-auto">
          <Courses />
        </div>
      </div>
    </div>
  );
};

export default Home;
