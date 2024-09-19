import signupImage from "./../../assets/images/Sign-up/shapes.png";
import logo from "./../../assets/images/Sign-up/Group 10.svg";
import { useState } from "react";

const Signup = () => {
  const [formPage, setFormPage] = useState(1);
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    familyName: "",
    dateOfBirth: "",
    address: "",
    email: "",
    parentsEmail1: "",
    parentsEmail2: "",
    school: "",
    yearLevel: "",
    username: "",
    password: "",
    secretQuestion: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // You can handle the final submit here
  };

  const validateStep = () => {
    // General validation for the current step
    let isValid = true;
    let isMissingField = false;

    if (formPage === 1) {
      // Check if any field in step 1 is empty
      isMissingField =
        !formData.fullName ||
        !formData.familyName ||
        !formData.dateOfBirth ||
        !formData.email ||
        !formData.parentsEmail1;
    } else if (formPage === 2) {
      // Check if any field in step 2 is empty
      isMissingField = !formData.school || !formData.yearLevel;
    } else if (formPage === 3) {
      // Check if any field in step 3 is empty
      isMissingField = !formData.username || !formData.password;
    }

    if (isMissingField) {
      setFormError("Please fill out all required fields.");
      isValid = false;
    } else {
      setFormError("");
    }

    return isValid;
  };

  const handleNext = () => {
    if (validateStep()) {
      setFormPage(formPage + 1);
    }
  };
  const progressValue = (formPage / 4) * 100;

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 px-[10%] lg:px-[10%]">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-[1440px]  grid grid-cols-1 lg:grid-cols-2 min-h-[86vh] max-h-[95vh]">
        {/* Left Side (Logo and Welcome message) */}
        <div
          style={{
            background: `url(${signupImage}) no-repeat center center`,
            backgroundSize: "cover",
          }}
          className=" text-white 8 rounded-l-lg relative h-full hidden lg:block"
        >
          <div className="flex flex-col justify-center items-center h-full">
            <img src={logo} alt="" />
          </div>

          <div className="absolute bottom-9 left-9 font-inter text-3xl font-semibold leading-[35px]">
            <p>Welcome to </p>
            <p>Science academy</p>
          </div>
        </div>
        {/* Right Side (Form) */}
        <div className="px-8 xl:px-16 py-[50px] font-inter max-h-full overflow-hidden">
          <h2 className="text-3xl font-bold mb-5">Become a Member</h2>
          <p className="text-xl font-medium text-[#3D5AF1]">
            {formPage === 1 && "Personal Information"}
            {formPage === 2 && "Academic Information"}
            {formPage === 3 && "Account Setup and Security"}
          </p>
          <p className="text-sm text-[#9CA3AF] mb-3">
            {formPage === 1 && "Please enter your Personal Information"}
            {formPage === 2 && "Please enter your Academic Information"}
            {formPage === 3 && "Please enter your Account Setup and Security"}
          </p>
          <p className="text-sm text-[#9CA3AF] mb-3"></p>
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
              <p className="text-red-500 text-sm mb-3">{formError}</p>
            )}

            {/* form page 1: Personal Information */}
            {formPage === 1 && (
              <div className="space-y-2">
                {/* full name and family name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold">Full Name*</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-semibold">Family Name*</label>
                    <input
                      type="text"
                      name="familyName"
                      value={formData.familyName}
                      onChange={handleInputChange}
                      placeholder="Enter your family name"
                      className="w-full px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                      required
                    />
                  </div>
                </div>

                {/* date of birth */}
                <div>
                  <label className="font-semibold">Date of Birth*</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                    required
                  />
                </div>

                {/* address -> optional */}
                <div>
                  <label className="font-semibold">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your address"
                    className="w-full px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                  />
                </div>

                {/* email */}
                <div>
                  <label className="font-semibold">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                    required
                  />
                </div>

                {/* parents email */}
                <div>
                  <label className="font-semibold">Parents Email 1*</label>
                  <input
                    type="email"
                    name="parentsEmail1"
                    value={formData.parentsEmail1}
                    onChange={handleInputChange}
                    placeholder="Enter your parent's email"
                    className="w-full px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                    required
                  />
                </div>

                {/* parents email 2 -> optional */}
                <div>
                  <label className="font-semibold">Parents Email 2</label>
                  <input
                    type="email"
                    name="parentsEmail2"
                    value={formData.parentsEmail2}
                    onChange={handleInputChange}
                    placeholder="Enter another parent's email (optional)"
                    className="w-full px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                  />
                </div>
              </div>
            )}

            {/* Form page 2: Academic Information */}
            {formPage === 2 && (
              <div className="space-y-2">
                {/* school */}
                <div>
                  <label className="font-semibold">School*</label>
                  <input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleInputChange}
                    placeholder="Enter your school"
                    className="w-full px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                    required
                  />
                </div>

                {/* year level */}
                <div>
                  <label className="font-semibold">Year Level*</label>
                  <input
                    type="text"
                    name="yearLevel"
                    value={formData.yearLevel}
                    onChange={handleInputChange}
                    placeholder="Enter your year level"
                    className="w-full px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
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
                  <label className="font-semibold">
                    Username or Email Address*
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Choose a username"
                    className="w-full px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                    required
                  />
                </div>

                {/* password */}
                <div>
                  <label className="font-semibold">Password*</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Choose a password"
                    className="w-full px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                    required
                  />
                </div>
              </div>
            )}

            {/* buttons */}
            <div className="flex justify-between mt-6 font-semibold gap-5 items-center">
              <button
                type="button"
                className={`w-1/2 border border-[#3D5AF1] rounded-md text-[#3D5AF1] py-2 ${
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
                  className="w-1/2 border border-[#3D5AF1] bg-[#3758F9] text-white py-2 rounded-md"
                  onClick={handleNext}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-1/2 border border-[#3D5AF1] bg-[#3758F9] text-white py-2 rounded-md"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
