import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import swiper1 from "../../assets/swiper1.png";
import swiper2 from "../../assets/swiper2.png";
import swiper3 from "../../assets/swiper3.png";
import head1 from "../../assets/head1.png";
import head2 from "../../assets/head2.png";
import head3 from "../../assets/head3.png";
import head4 from "../../assets/head4.png";
import head5 from "../../assets/head5.png";
const sliderData = [
  {
    image: swiper1,
    heads: [head1, head2, head3, head4, head5],
    title: "Maths Methods",
    totalStudents: 1700,
    description:
      "Lorem ipsum dolor sit amet consectetur. Non aenean nunc nunc mi porttitor molestie molestie nec id. Tristique massa mi arcu fringilla at mattis felis.",
  },
  {
    image: swiper2,
    heads: [head1, head2, head3, head4, head5],
    title: "year 12 physics",
    totalStudents: 1700,
    description:
      "Lorem ipsum dolor sit amet consectetur. Non aenean nunc nunc mi porttitor molestie molestie nec id. Tristique massa mi arcu fringilla at mattis felis.",
  },
  {
    image: swiper3,
    heads: [head1, head2, head3, head4, head5],
    title: "Specialist maths",
    totalStudents: 1700,
    description:
      "Lorem ipsum dolor sit amet consectetur. Non aenean nunc nunc mi porttitor molestie molestie nec id. Tristique massa mi arcu fringilla at mattis felis.",
  },
  {
    image: swiper1,
    heads: [head1, head2, head3, head4, head5],
    title: "Maths Methods",
    totalStudents: 1700,
    description:
      "Lorem ipsum dolor sit amet consectetur. Non aenean nunc nunc mi porttitor molestie molestie nec id. Tristique massa mi arcu fringilla at mattis felis.",
  },
  {
    image: swiper2,
    heads: [head1, head2, head3, head4, head5],
    title: "year 12 physics",
    totalStudents: 1700,
    description:
      "Lorem ipsum dolor sit amet consectetur. Non aenean nunc nunc mi porttitor molestie molestie nec id. Tristique massa mi arcu fringilla at mattis felis.",
  },
  {
    image: swiper3,
    heads: [head1, head2, head3, head4, head5],
    title: "Specialist maths",
    totalStudents: 1700,
    description:
      "Lorem ipsum dolor sit amet consectetur. Non aenean nunc nunc mi porttitor molestie molestie nec id. Tristique massa mi arcu fringilla at mattis felis.",
  },
];
const Courses = () => {
  return (
    <div className="pt-[14rem]">
      <p className=" text-primary-heading font-poppins text-base">
        Lorem ipsum dolor{" "}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 mt-2">
          <h2 className=" text-primary-heading font-poppins text-[2rem] font-semibold capitalize">
            Explore Courses
          </h2>
          <Link className=" text-boulder underline text-base font-poppins">
            View All
          </Link>
        </div>
        <form action="" className=" relative">
          <input
            type="text"
            placeholder="Search courses"
            className="w-[23.25rem] rounded-[0.93rem] bg-white py-5 px-6 outline-none border-none"
          />
          <CiSearch
            className="absolute right-6 top-1/2 -translate-y-1/2"
            size={24}
            color="#9CA3AF"
          />
        </form>
      </div>

      {/* cards  */}
      <Swiper
        slidesPerView={3}
        navigation={true}
        spaceBetween={24}
        loop
        modules={[Navigation]}
        className="mySwiper mt-10"
      >
        {sliderData.map((item, index) => (
          <SwiperSlide key={index} className=" rounded-[1.875rem] bg-white p-6">
            <div className=" bg-sky_blue rounded-[1.25rem] flex items-center justify-center relative p-12">
              <img src={item.image} alt="" />
              <div className="flex absolute -bottom-5 left-6">
                {item.heads.map((head, i) => (
                  <div key={i} className=" -mr-4">
                    <img src={head} alt="" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between mt-12">
              <div>
                <h4 className=" text-primary-heading font-poppins text-2xl font-semibold capitalize">
                  {item.title}
                </h4>
                <p className=" text-primary-blue font-poppins text-base font-semibold capitalize mt-2">
                  +{item.totalStudents}
                </p>
              </div>
              <Link className="py-4 px-6 rounded-2xl border border-primary-heading bg-white">
                Explore Course
              </Link>
            </div>
            <hr className="w-full h-[0.0625rem] bg-mystic mt-6 mb-4" />
            <p className=" text-pale_sky font-poppins text-base pb-2">
              {item.description}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Courses;
