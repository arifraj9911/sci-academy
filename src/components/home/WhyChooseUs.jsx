import wcs from "../../assets/why_choose_us.png";
import playButton from "../../assets/play-circle.svg";

const WhyChooseUs = () => {
  return (
    <div className="mt-[120px] max-w-screen-desktop mx-auto">
      {/* <div className="w-[34rem] mx-auto">
        <h2 className=" text-primary-heading text-center font-poppins text-[2rem] font-semibold capitalize">
          Why you should choose us?
        </h2>
        <p className=" text-primary-text text-center font-inter text-base mt-4">
          Lorem ipsum dolor sit amet consectetur. Tortor viverra donec nibh
          ipsum venenatis neque interdum. Porta rhoncus tellus dolor vel
        </p>
      </div> */}
      <div className=" mt-[3.75rem] flex items-center gap-20">
        <div className="w-[59rem] h-auto relative">
          <img src={wcs} alt="wcs img" />
          <button className=" absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src={playButton} alt="play button" />
          </button>
        </div>
        <div className="flex flex-col items-start gap-[32px]">
          <h1 className="text-primary-heading font-poppins text-[32px] font-semibold capitalize">
            About Us
          </h1>
          <div className="flex items-start gap-6">
            <div>
              <div className="w-[2.67rem] h-[2.67rem] rounded-full border border-primary-blue flex items-center justify-center text-primary-blue text-center font-poppins text-base font-semibold">
                1
              </div>
            </div>
            <div>
              <p className=" text-primary-heading font-poppins text-xl font-semibold capitalize">
                Lorem ipsum dolor sit amet
              </p>
              <p className="mt-4 text-primary-text text-base font-inter">
                Lorem ipsum dolor sit amet consectetur. Auctor tortor vulputate
                et proin ipsum. Nisl elementum et
              </p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div>
              <div className="w-[2.67rem] h-[2.67rem] rounded-full border border-primary-blue flex items-center justify-center text-primary-blue text-center font-poppins text-base font-semibold">
                2
              </div>
            </div>
            <div>
              <p className=" text-primary-heading font-poppins text-xl font-semibold capitalize">
                Lorem ipsum dolor sit amet
              </p>
              <p className="mt-4 text-primary-text text-base font-inter">
                Lorem ipsum dolor sit amet consectetur. Auctor tortor vulputate
                et proin ipsum. Nisl elementum et
              </p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div>
              <div className="w-[2.67rem] h-[2.67rem] rounded-full border border-primary-blue flex items-center justify-center text-primary-blue text-center font-poppins text-base font-semibold">
                3
              </div>
            </div>
            <div>
              <p className=" text-primary-heading font-poppins text-xl font-semibold capitalize">
                Lorem ipsum dolor sit amet
              </p>
              <p className="mt-4 text-primary-text text-base font-inter">
                Lorem ipsum dolor sit amet consectetur. Auctor tortor vulputate
                et proin ipsum. Nisl elementum et
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
