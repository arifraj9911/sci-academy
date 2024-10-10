import { useState } from "react";
import Swal from "sweetalert2";
import { createMember } from "../server-action/CreateSignUp";

const MemberForm = () => {
  const [formPage, setFormPage] = useState(1);
  const [formError, setFormError] = useState("");
  const [ formSuccess, setFormSuccess ] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    date_of_birth: "",
    address: "",
    email: "",
    parent_mail_one: "",
    parent_mail_two: "",
    school_name: "",
    year_level: "",
    username: "",
    password: "",
    secret_question: "",
    secret_question_answer: "",
    user_type: "",
    gender: "",
    mobile_no: "",
    bio: "",
    avatar: "",
        
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(formData); // You can handle the final submit here

    try {
      const response = await createMember(formData);

      setFormSuccess(true);
      Swal.fire({
        title: "Sign up successful!",
        text: "Your account has been created.",
        icon: "success",
        confirmButtonText: "OK"
      })

      setFormData({
        firstname: "",
        lastname: "",
        date_of_birth: "",
        address: "",
        email: "",
        parent_mail_one: "",
        parent_mail_two: "",
        school_name: "",
        year_level: "",
        username: "",
        password: "",
        secret_question: "",
        secret_question_answer: "",
        user_type: "",
        gender: "",
        mobile_no: "",
        bio: "",
        avatar: "",
      });
    }

    catch (error) {
      console.error("Error submitting the form:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to create an account.",
        icon: "error",
        confirmButtonText: "OK"
      })
    }
  };

  const validateStep = () => {
    // General validation for the current step
    let isValid = true;
    let isMissingField = false;

    if (formPage === 1) {
      // Check if any field in step 1 is empty
      isMissingField =
        !formData.firstname ||
        !formData.lastname ||
        !formData.date_of_birth ||
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
            {/* first name and last name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              <div>
                <label className="font-medium md:font-semibold">
                  First Name*
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  placeholder="Enter your First name"
                  className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                  required
                />
              </div>
              <div>
                <label className="font-medium md:font-semibold">
                  Last Name*
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              {/* date of birth */}
            <div>
              <label className="font-medium md:font-semibold">
                Phone Number*
              </label>
              <input
                type="number"
                name="mobile_no"
                value={formData.mobile_no}
                placeholder="Enter your Phone Number"
                onChange={handleInputChange}
                className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                required
              />
            </div>
              
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
            </div>

            

            {/* address -> optional */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
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
              <div>
                <label className="font-medium md:font-semibold">
                  Gender*
                </label>
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                  required
                />
              </div>
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
                name="parent_mail_one"
                value={formData.parent_mail_one}
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
                name="parent_mail_two"
                value={formData.parent_mail_two}
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
              <label className="font-medium md:font-semibold">School Name*</label>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              <div>
                <label className="font-medium md:font-semibold">
                  Secret Question*
                </label>
                <input
                  type="text"
                  name="secret_question"
                  value={formData.secret_question}
                  onChange={handleInputChange}
                  placeholder="Enter your secret question"
                  className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                  required
                />
              </div>
              <div>
                <label className="font-medium md:font-semibold">
                  Secret Question Answer*
                </label>
                <input
                  type="text"
                  name="secret_question_answer"
                  value={formData.secret_question_answer}
                  onChange={handleInputChange}
                  placeholder="Enter your secret question answer"
                  className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                  required
                />
              </div>
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
