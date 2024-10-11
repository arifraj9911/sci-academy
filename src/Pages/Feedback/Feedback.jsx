import NavbarShared from "../../components/NavbarShared";
import star from "../../assets/images/star.svg";
import starYlw from "../../assets/images/star-rating.svg";
import starWth from "../../assets/images/star-white.svg";

const Feedback = () => {
  const handleFeedback = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const country = form.country.value;
    const message = form.message.value;

    const feedbackData = { name, phone, email, subject, country, message };

    form.reset();
    console.log(feedbackData);
  };

  return (
    <div className="mb-20">
      {/* navbar start */}
      <NavbarShared />
      {/* navbar end */}

      {/* feedback div */}
      <div className="border p-8 rounded-3xl w-full max-w-3xl mx-auto mt-3">
        {/* feedback header start */}
        <div className="flex gap-4 items-start">
          <div className="border rounded-lg p-4">
            <img src={star} alt="star" />
          </div>
          <div className="font-poppins">
            <h3 className="text-2xl font-semibold text-[#111928]">
              Write your own feedback
            </h3>
            <p className="text-primary-text">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        {/* feedback header end */}

        {/* star rating start */}
        <div className="mt-11 font-inter font-semibold space-y-6">
          {[
            "Is the practice material helpful for your subject?",
            "Would you recommend this site to friends?",
            "Is the site engaging?",
          ].map((question, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-center"
            >
              <span>{question}</span>
              <span className="flex gap-2 items-center mt-2 sm:mt-0">
                <img src={starYlw} alt="star_yellow" />
                <img src={starYlw} alt="star_yellow" />
                <img src={index === 2 ? starWth : starYlw} alt="star_rating" />
                <img src={index === 2 ? starWth : starYlw} alt="star_rating" />
                <img src={starWth} alt="star_white" />
              </span>
            </div>
          ))}
        </div>
        {/* star rating end */}

        <hr className="my-6" />

        {/* feedback form */}
        <div>
          <h3 className="text-2xl font-semibold font-inter text-[#111928]">
            What would you like to see more on this website?
          </h3>

          <form onSubmit={handleFeedback} className="mt-6 flex flex-col gap-6">
            {/* name, phone */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col gap-3 w-full">
                <label htmlFor="name" className="text-[#1F2A37] font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="p-2 border rounded-md border-[#DFE4EA] outline-none text-[#2B2B2B] w-full"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label htmlFor="phone" className="text-[#1F2A37] font-semibold">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="p-2 border rounded-md border-[#DFE4EA] outline-none text-[#2B2B2B] w-full"
                />
              </div>
            </div>

            {/* email */}
            <div className="flex flex-col gap-3 w-full">
              <label htmlFor="email" className="text-[#1F2A37] font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="p-2 border rounded-md border-[#DFE4EA] outline-none text-[#2B2B2B] w-full"
              />
            </div>

            {/* subject, country */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col gap-3 w-full">
                <label
                  htmlFor="subject"
                  className="text-[#1F2A37] font-semibold"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="p-2 border rounded-md border-[#DFE4EA] outline-none text-[#2B2B2B] w-full"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label
                  htmlFor="country"
                  className="text-[#1F2A37] font-semibold"
                >
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  className="p-2 border rounded-md border-[#DFE4EA] outline-none text-[#2B2B2B] w-full"
                />
              </div>
            </div>

            {/* message */}
            <div className="flex flex-col gap-3 w-full">
              <label htmlFor="message" className="text-[#1F2A37] font-semibold">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                className="p-2 border rounded-md border-[#DFE4EA] outline-none text-[#2B2B2B] w-full"
              ></textarea>
            </div>

            {/* button */}
            <div className="flex justify-end">
              <input
                type="submit"
                value="Send"
                className="text-white bg-[#3758F9] py-2 px-6 rounded-2xl"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
