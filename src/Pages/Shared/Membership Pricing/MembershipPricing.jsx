import { useState } from "react";
import shape from "./../../../assets/images/membership pricing/shape.png";

const MembershipPricing = () => {
  const [subscribeType, setSubscribeType] = useState("monthly");

  return (
    <div className="">
      {/* Subscription Type Buttons */}
      <section className="flex items-center mb-8">
        <div className="flex items-center bg-[#F3F4F6] font-medium rounded-2xl p-1.5 h-[56px]">
          <button
            className={`h-full w-[120px] rounded-xl  ${
              subscribeType === "monthly" ? "bg-[#F3F4F6]" : "bg-white"
            }`}
            onClick={() => setSubscribeType("monthly")}
          >
            Monthly
          </button>
          <button
            className={`h-full w-[120px] rounded-xl  ${
              subscribeType === "yearly" ? "bg-[#F3F4F6]" : "bg-white"
            }`}
            onClick={() => setSubscribeType("yearly")}
          >
            Yearly
          </button>
        </div>
      </section>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {/* Personal Plan */}
        <div className="bg-white border border-gray-200 p-12 rounded-xl shadow-md relative">
          <h2 className="text-[#13C296] font-semibold text-lg font-inter">
            Personal
          </h2>
          {/* Shape Image */}
          <img src={shape} alt="bg-shape" className="absolute right-0 top-5" />
          {/* Monthly or Yearly Price */}
          <h3 className="text-[42px] font-bold mt-3 mb-4 flex items-center">
            ${subscribeType === "monthly" ? "5" : "59"}
            <span className="text-base font-medium text-[#637381] ml-1">
              /{subscribeType === "monthly" ? "month" : "year"}
            </span>
          </h3>
          {/* Plan Description */}
          <p className="text-[#637381] mb-8">
            Perfect for using on a personal website or a client project.
          </p>
          <hr className="my-8" />
          {/* Plan Details */}
          <ul className="space-y-1 text-[#637381]">
            <li>
              <span className="mr-1 text-lg">•</span> 1 User
            </li>
            <li>
              <span className="mr-1 text-lg">•</span> All UI Components
            </li>
            <li>
              <span className="mr-1 text-lg">•</span> Lifetime Access
            </li>
            <li>
              <span className="mr-1 text-lg">•</span> Free Updates
            </li>
            <li>
              <span className="mr-1 text-lg">•</span> Use On 1 (One) Project
            </li>
            <li>
              <span className="mr-1 text-lg">•</span> 3 Months Support
            </li>
          </ul>
          {/* Button */}
          <button className="mt-6 w-full h-[50px] text-[#3758F9] border border-[#DFE4EA] hover:bg-[#3758F9] hover:text-white rounded-lg transition-all duration-300 ease-in-out">
            Choose Personal
          </button>
        </div>

        {/* Business Plan */}
        <div className="bg-white border border-gray-200 p-12 rounded-xl shadow-md relative">
          <h2 className="text-[#7B61FF] font-semibold text-lg font-inter">
            Business
          </h2>
          <img src={shape} alt="bg-shape" className="absolute right-0 top-5" />
          <h3 className="text-[42px] font-bold mt-3 mb-4 flex items-center">
            ${subscribeType === "monthly" ? "19" : "199"}
            <span className="text-base font-medium text-[#637381] ml-1">
              /{subscribeType === "monthly" ? "month" : "year"}
            </span>
          </h3>
          <p className="text-[#637381] mb-8">
            Perfect for using on a personal website or a client project.
          </p>
          <hr className="my-8" />
          <ul className="space-y-1 text-[#637381]">
            <li>
              <span className="mr-1 text-lg">•</span> 1 User
            </li>
            <li>
              <span className="mr-1 text-lg">•</span> All UI Components
            </li>
            <li>
              <span className="mr-1 text-lg">•</span> Lifetime Access
            </li>
            <li>
              <span className="mr-1 text-lg">•</span> Free Updates
            </li>
            <li>
              <span className="mr-1 text-lg">•</span> Use On 1 (One) Project
            </li>
            <li>
              <span className="mr-1 text-lg">•</span> 3 Months Support
            </li>
          </ul>
          <button className="mt-6 w-full h-[50px] text-[#3758F9] border border-[#DFE4EA] hover:bg-[#3758F9] hover:text-white rounded-lg transition-all duration-300 ease-in-out">
            Choose Business
          </button>
        </div>

        {/* Professional Plan */}
        <div className="bg-white border border-gray-200 p-12 rounded-xl shadow-md relative">
          <h2 className="text-[#FF8F62] font-semibold text-lg font-inter">
            Professional
          </h2>
          <img src={shape} alt="bg-shape" className="absolute right-0 top-5" />
          <h3 className="text-[42px] font-bold mt-3 mb-4 flex items-center">
            ${subscribeType === "monthly" ? "25" : "250"}
            <span className="text-base font-medium text-[#637381] ml-1">
              /{subscribeType === "monthly" ? "month" : "year"}
            </span>
          </h3>
          <p className="text-[#637381] mb-8">
            Perfect for using on a personal website or a client project.
          </p>
          <hr className="my-8" />
          <ul className="space-y-1 text-[#637381]">
            <li>
              <span className="mr-1 text-lg">•</span> 1 User
            </li>
            <li>
              <span className="mr-1 text-lg">•</span> All UI Components
            </li>
            <li>
              <span className="mr-1 text-lg">•</span> Lifetime Access
            </li>
            <li>
              <span className="mr-1 text-lg">•</span> Free Updates
            </li>
            <li>
              <span className="mr-1 text-lg">•</span> Use On 1 (One) Project
            </li>
            <li>
              <span className="mr-1 text-lg">•</span> 3 Months Support
            </li>
          </ul>
          <button className="mt-6 w-full h-[50px] text-[#3758F9] border border-[#DFE4EA] hover:bg-[#3758F9] hover:text-white rounded-lg transition-all duration-300 ease-in-out">
            Choose Professional
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipPricing;
