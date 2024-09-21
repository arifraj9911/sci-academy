import { useState } from "react";
import cardImg from "./../../../assets/images/membership pricing/card-pos.svg";
import masterCardImg from "./../../../assets/images/membership pricing/Mastercard.svg";
import { Link } from "react-router-dom";
import { GrStatusGood } from "react-icons/gr";

const PaymentForm = () => {
  const [emailOption, setEmailOption] = useState("account");

  const handleSubmit = (e) => {
    e.preventDefault(); 

    
    const formData = {
      nameOnCard: e.target.elements.nameOnCard.value,
      expiry: e.target.elements.expiry.value,
      cardDetails: e.target.elements.cardDetails.value,
      cvv: e.target.elements.cvv.value,
      email:
        emailOption === "account"
          ? "ramyk@hotmail.com.au"
          : e.target.elements.altEmail?.value,
    };

    // Log or process the form data as needed
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen font-poppins">
      <div className="bg-white border border-[#DFE4EA] rounded-3xl shadow-sm p-8 w-[688px]">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-16 w-16 border flex items-center justify-center rounded-xl">
            <img src={cardImg} alt="icon" />
          </div>
          <div className="">
            <h2 className="text-2xl font-semibold">Add payment details</h2>
            <p className=" text-[#637381]">
              We'll automatically debit your card.
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="font-inter" onSubmit={handleSubmit}>
          {/* Name on Card and expiry*/}
          <div className="flex items-center gap-6 mb-4">
            <div className="flex-1">
              <label className="font-semibold">Name on Card</label>
              <input
                type="text"
                name="nameOnCard"
                placeholder="Ramy Kozman"
                className="w-full mt-2 px-3 h-12 border rounded-md outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div className="w-1/5">
              <label className="font-semibold">Expiry</label>
              <input
                type="text"
                name="expiry"
                placeholder="10/2024"
                className="w-full mt-2 px-3 h-12 border rounded-md outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Card Details and CCV*/}
          <div className="flex items-center gap-6 mb-5">
            <div className="flex-1">
              <label className="font-semibold">Card Details</label>
              <div className="relative">
                <input
                  type="text"
                  name="cardDetails"
                  placeholder="1234 1234 1234 1234"
                  className="w-full mt-2 pl-12 pr-3 h-12 border rounded-md outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <img
                  className="absolute left-3 top-5"
                  src={masterCardImg}
                  alt=""
                />
              </div>
            </div>

            <div className="w-1/5">
              <label className="font-semibold">CVV</label>
              <input
                type="text"
                name="cvv"
                placeholder="***"
                className="w-full mt-2 px-3 h-12 border rounded-md outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Email Options */}

          <div className=" mb-8 space-y-4">
            {/* users email */}
            <div className=" mb-8 space-y-4">
              {/* Send to account email */}
              <div className="flex items-start">
                <input
                  type="radio"
                  id="account-email"
                  name="emailOption"
                  value="account" 
                  checked={emailOption === "account"}
                  onChange={() => setEmailOption("account")}
                  className="h-5 w-5"
                />
                <div className="flex flex-col gap-1 ml-3 -mt-0.5">
                  <label htmlFor="account-email" className="font-semibold">
                    Send to my account email
                  </label>
                  {/* todo: set dynamic user email */}
                  <p className="text-sm text-[#637381]">ramyk@hotmail.com.au</p>
                </div>
              </div>

              {/* Send to alternative email */}
              <div className="flex items-center">
                <input
                  type="radio"
                  id="alt-email"
                  name="emailOption"
                  value="alternative" 
                  checked={emailOption === "alternative"}
                  onChange={() => setEmailOption("alternative")}
                  className="h-5 w-5"
                />
                <label htmlFor="alt-email" className="ml-3 font-semibold  ">
                  Send to an alternative email
                </label>
              </div>

              {/* Conditionally render alternative email input */}
              {emailOption === "alternative" && (
                <input
                  type="email"
                  name="altEmail" 
                  placeholder="billing@scienceacademy.com"
                  className="w-full mt-2 px-3 h-12 border rounded-md outline-none focus:ring-1 focus:ring-indigo-500"
                />
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-6">
            {/* back */}
            <Link to={"/profile/membership"}>
              <button
                type="button"
                className="w-full h-[50px] border border-[#DFE4EA]  text-[#3758F9] font-medium rounded-2xl"
              >
                Back
              </button>
            </Link>
            {/* Purchase */}
            <button
              type="submit"
              className="w-full h-[50px] border border-[#DFE4EA]  text-white font-medium rounded-2xl bg-[#3758F9] flex items-center justify-center gap-1.5"
            >
              Purchase
              <GrStatusGood className="text-xl"></GrStatusGood>
            </button>
          </div>
        </form>
      </div>
      {/* Footer */}
      <p className="text-[#637381] mt-4 text-center max-w-[685px] ">
        You may cancel at any time in your billing setting. By clicking on the
        button you agree to our{" "}
        <a href="#" className="underline">
          Terms of Service
        </a>{" "}
        and authorize this recurring charge.
      </p>
    </div>
  );
};

export default PaymentForm;
