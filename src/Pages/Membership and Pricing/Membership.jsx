import MembershipPricing from "../Shared/Membership Pricing/MembershipPricing";

const Membership = () => {
  return (
    <div className="max-w-screen-desktop mx-auto px-5 font-poppins">
      {/* top heading */}
      <section className="py-3">
        <h3 className="font-semibold text-primary-blue ">Pricing Table</h3>

        <h1 className="text-[40px] font-semibold mb-2">Our Pricing Plan</h1>

        <p className="max-w-[656px] text-[#637381]">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </section>

      {/* pricing component */}
      <section className="mt-8">
        <MembershipPricing></MembershipPricing>
      </section>
    </div>
  );
};

export default Membership;
