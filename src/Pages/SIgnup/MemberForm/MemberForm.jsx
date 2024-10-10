import { useState } from "react";

const MemberForm = () => {
  const [formPage, setFormPage] = useState(1);
  const [formError, setFormError] = useState("");
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   familyName: "",
  //   dateOfBirth: "",
  //   address: "",
  //   email: "",
  //   parentsEmail1: "",
  //   parentsEmail2: "",
  //   school: "",
  //   yearLevel: "",
  //   username: "",
  //   password: "",
  //   secretQuestion: "",
  // });
  const [formData, setFormData] = useState({
    fullName: "",
    firstname: "arif",
    lastname: "raj",
    familyName: "",
    date_of_birth: "",
    address: "",
    email: "",
    parent_email_one: "",
    parent_email_two: "",
    student: {
      avatar: "",
      bio: "",
      academic_info: [
        {
          school_name: "",
          year_level: "",
        },
      ],
    },

    gender: "male",
    username: "",
    password: "",
    secret_question: "Birthplace",
    secret_question_answer: "Comillapri",
    mobile_no: "1234567890",
    user_type: "student",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData({ ...formData, [name]: value });
  };

  const signUp = async () => {
    try {
      const response = await fetch(
        "http://104.248.122.19:5001/scienceacademyapi/v1/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData); // You can handle the final submit here

    signUp();
  };

  // const validateStep = () => {
  //   // General validation for the current step
  //   let isValid = true;
  //   let isMissingField = false;

  //   if (formPage === 1) {
  //     // Check if any field in step 1 is empty
  //     isMissingField =
  //       !formData.fullName ||
  //       !formData.familyName ||
  //       !formData.dateOfBirth ||
  //       !formData.email ||
  //       !formData.parentsEmail1;
  //   } else if (formPage === 2) {
  //     // Check if any field in step 2 is empty
  //     isMissingField = !formData.school || !formData.yearLevel;
  //   } else if (formPage === 3) {
  //     // Check if any field in step 3 is empty
  //     isMissingField = !formData.username || !formData.password;
  //   }

  //   if (isMissingField) {
  //     setFormError("Please fill out all required fields.");
  //     isValid = false;
  //   } else {
  //     setFormError("");
  //   }

  //   return isValid;
  // };

  const handleNext = () => {
    // if (validateStep()) {
    //   setFormPage(formPage + 1);
    // }
    setFormPage(formPage + 1);
  };
  const progressValue = (formPage / 4) * 100;
  return (
    <div className="px-6 xl:px-16 py-7 md:py-[50px] font-inter max-h-full overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-5">
        Become a Member
      </h2>
      <p className="text-lg md:text-xl font-medium text-[#3D5AF1]">
        {formPage === 1 && "Personal Information"}
        {formPage === 2 && "Academic Information"}
        {formPage === 3 && "Account Setup and Security"}
      </p>
      <p className="text-sm text-[#9CA3AF] mb-2 md:mb-3">
        {formPage === 1 && "Please enter your Personal Information"}
        {formPage === 2 && "Please enter your Academic Information"}
        {formPage === 3 && "Please enter your Account Setup and Security"}
      </p>
      {/* <p className="text-sm text-[#9CA3AF] mb-3"></p> */}
      {/* progress bar */}
      <div className="mb-3">
        <progress
          className="progress progress-success w-full"
          value={progressValue}
          max="100"
        ></progress>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit} className="text-[#1F2A37]">
        {/* Display common error message */}
        {formError && (
          <p className="text-red-500 text-sm mb-2 md:mb-3">{formError}</p>
        )}

        {/* form page 1: Personal Information */}
        {formPage === 1 && (
          <div className="space-y-2">
            {/* full name and family name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              <div>
                <label className="font-medium md:font-semibold">
                  Full Name*
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                  required
                />
              </div>
              <div>
                <label className="font-medium md:font-semibold">
                  Family Name*
                </label>
                <input
                  type="text"
                  name="familyName"
                  value={formData.familyName}
                  onChange={handleInputChange}
                  placeholder="Enter your family name"
                  className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                  required
                />
              </div>
            </div>

            {/* date of birth */}
            <div>
              <label className="font-medium md:font-semibold">
                Date of Birth*
              </label>
              <input
                type="date"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleInputChange}
                className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                required
              />
            </div>

            {/* address -> optional */}
            <div>
              <label className="font-medium md:font-semibold">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your address"
                className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
              />
            </div>

            {/* email */}
            <div>
              <label className="font-medium md:font-semibold">Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                required
              />
            </div>

            {/* parents email */}
            <div>
              <label className="font-medium md:font-semibold">
                Parents Email 1*
              </label>
              <input
                type="email"
                name="parent_email_one"
                value={formData.parent_email_one}
                onChange={handleInputChange}
                placeholder="Enter your parent's email"
                className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                required
              />
            </div>

            {/* parents email 2 -> optional */}
            <div>
              <label className="font-medium md:font-semibold">
                Parents Email 2
              </label>
              <input
                type="email"
                name="parent_email_two"
                value={formData.parent_email_two}
                onChange={handleInputChange}
                placeholder="Enter another parent's email (optional)"
                className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
              />
            </div>
          </div>
        )}

        {/* Form page 2: Academic Information */}
        {formPage === 2 && (
          <div className="space-y-2">
            {/* school */}
            <div>
              <label className="font-medium md:font-semibold">School*</label>
              <input
                type="text"
                name="school_name"
                value={formData.school_name}
                onChange={handleInputChange}
                placeholder="Enter your school"
                className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                required
              />
            </div>

            {/* year level */}
            <div>
              <label className="font-medium md:font-semibold">
                Year Level*
              </label>
              <input
                type="text"
                name="year_level"
                value={formData.year_level}
                onChange={handleInputChange}
                placeholder="Enter your year level"
                className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                required
              />
            </div>
          </div>
        )}

        {/* Step 3: Account Setup */}
        {formPage === 3 && (
          <div className="space-y-2">
            {/* username or email */}
            <div>
              <label className="font-medium md:font-semibold">
                Username or Email Address*
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Choose a username"
                className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                required
              />
            </div>

            {/* password */}
            <div>
              <label className="font-medium md:font-semibold">Password*</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Choose a password"
                className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                required
              />
            </div>
          </div>
        )}

        {/* buttons */}
        <div className="flex justify-between mt-6 font-semibold gap-5 items-center">
          <button
            type="button"
            className={`w-1/2 border border-[#1A416A] rounded-md text-[#1A416A] py-2 ${
              formPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => formPage > 1 && setFormPage(formPage - 1)}
            disabled={formPage === 1}
          >
            Back
          </button>

          {formPage < 3 ? (
            <button
              type="button"
              className="w-1/2 border border-[#1A416A] bg-[#1A416A] text-white py-2 rounded-md"
              onClick={handleNext}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="w-1/2 border border-[#1A416A] bg-[#1A416A] text-white py-2 rounded-md"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MemberForm;
