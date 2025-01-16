import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col w-screen px-[80px] py-[120px]">
      <div className="flex">
        <div className="border border-red-500 border-solid">
          <p className="text-[56px] font-bold">LOGO</p>
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent"
            />
            <button>Subscribe</button>
          </div>
          <p className="text-[14px]">
            We’ll send you a nice “Newsletter” every two weeks. No spam.
          </p>
          <div>
            <p className="text-[16px] font-bold">Contact us</p>
            <p className="text-[14px]">1900 6067</p>
            <p className="text-[14px]">support@vocake.vn</p>
          </div>
          <div className="flex gap-2">
            <div>
              <p>HCM Head Office</p>
              <p>...</p>
            </div>
            <div>
              <p>Ha Noi City Office</p>
              <p>...</p>
            </div>
          </div>
        </div>

        <div className="border border-red-500 border-solid flex-1">
          <p>Products</p>
          <div className="flex justify-between">
            <div>
              <p>VoCake Assessment</p>
              <p>...</p>
            </div>
            <div>
              <p>VoCake Deck</p>
              <p>...</p>
            </div>
            <div>
              <p>VoCake Practice</p>
              <p>...</p>
            </div>
            <div>
              <p>VoCake Tutor</p>
              <p>...</p>
            </div>
            <div>
              <p>Others</p>
            </div>
          </div>
          <div className="border border-blue-500 border-solid flex gap-5">
            <div>
              <p>People</p>
              <div>
                <p>Educators</p>
                <p>Schools & Districts</p>
                <p>Tutors</p>
                <p>Higher Ed</p>
              </div>
            </div>
            <div>
              <p>Solutions</p>
              <div>
                <p>Use Cases</p>
                <p>Efficiency</p>
                <p>Integrations</p>
              </div>
            </div>
            <div>
              <p>Resources</p>
              <div>
                <p>Topic Library</p>
                <p>Blog</p>
                <p>FAQs</p>
                <p>Help Center</p>
                <p>Plan & Pricing</p>
                <p>Product Updates</p>
              </div>
            </div>
            <div>
              <p>Company</p>
              <div>
                <p>Use Cases</p>
                <p>Efficiency</p>
                <p>Integrations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>Start</div>
    </div>
  );
};

export default Footer;
