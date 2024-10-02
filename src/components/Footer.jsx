import logo from "../assets/logo.svg";
import insta from "../assets/footer/insta.svg";
import fb from "../assets/footer/fb.svg";
import linkedin from "../assets/footer/linkedin.svg";
import x from "../assets/footer/x.svg";

const Footer = () => {
  return (
    <div className="flex  justify-center bg-[#1A416A] gap-[260px] py-[80px]">
      <div>
        <img src={logo} alt="" />
        <h1 className="text-[#7FAAD6] font-inter mt-[32px]">
          Lorem ipsum dolor sit amet consectetur. Sit pulvinar nibh <br />
          amet ut interdum sodales nibh tortor. Cursus gravida arcu <br /> eget
          maecenas consequat vitae magna at interdum. Fusce <br />
          consequat lorem sit eu.
        </h1>
      </div>
      <div>
        <h1 className="text-[#FFFFFF] font-inter text-[20px] font-bold">
          Links
        </h1>
        <div className="mt-[32px] flex gap-[48px] font-poppins text-[14px] text-[#7FAAD6]">
          <div className="flex flex-col gap-[16px]">
            <h1>Home</h1>
            <h1>Courses</h1>
            <h1>Study material</h1>
            <h1>Videos</h1>
            <h1>Forum</h1>
          </div>
          <div className="flex flex-col gap-[16px]">
            <h1>Blog</h1>
            <h1>About Us</h1>
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[#FFFFFF] font-inter text-[20px] font-bold">
          Contact
        </h1>
        <div className="mt-[46px] flex gap-[48px] font-poppins text-[14px] text-[#7FAAD6]">
          <div className="flex flex-col gap-[16px]">
            <h1>emailnextech@gmail.com</h1>
            <h1>What&apos;sApp: 01234 567 890 </h1>
          </div>
        </div>
        <div className="mt-[16px] flex gap-[16px]">
          <img src={insta} alt="insta" className="cursor-pointer" />
          <img src={fb} alt="fb" className="cursor-pointer" />
          <img src={linkedin} alt="linkedin" className="cursor-pointer" />
          <img src={x} alt="x" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
