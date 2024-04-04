import React from "react";

const OurSevices = () => {
  return (
    <div className="my-5 pt-3">
      <h2 className="text-2xl font-bold mx-3 mb-4">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 mx-3">
        {/* Image Section */}
        <div className="col-span-5 sm:col-span-12 md:col-span-5">
          <img src="../assets/meeting space.avif" alt="portfolio" />
        </div>
        {/* Text Section */}
        <div className="col-span-7 sm:col-span-12 md:col-span-7">
          <h3 className="font-bold text-lg">Some Of The Following Services We Offer.</h3>
          <p className="py-2">We offer a great variety of services & programs. Our clients and our experience prove that the following services can literally change your life!</p>
          <ul className="text-base list-disc">
            <li>Full Service Event Design & Coordination</li>
            <li>Partial Planning & Coordination</li>
            <li>Day Of Event Coordination</li>
            <li>Venue Sourcing</li>
            <li>Audio Visual Management</li>
            <li>All Vendor Management – Vendor Referral Only</li>
            <li>Guest Management List & RSVP Management</li>
            <li>Wedding Rehearsal</li>
            <li>Corporate Event Coordinator</li>
            <li>Occasional Event Planning Such As Birthday, Bridal Shower, Anniversary, New Year & More</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurSevices;
