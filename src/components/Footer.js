import { InstagramFilled, LinkedinFilled, TwitterSquareFilled } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="flex justify-center ">
      <div className="py-10 my-10 w-full max-w-[800px]">
        <h2 className="mr-6 self-start m-0 py-2">
          <span className="text-secondary font-black">gebeta</span>
          <span className="text-white font-black">maps</span>
        </h2>
        <div className="flex justify-between color_inherit text-slate-300">
          <div className="flex flex-col">
            <h3 className="uppercase">Products</h3>
            <Link to="/documentation#routeEP">Route Optimzation API</Link>
            <Link to="/documentation#directionEP">Direction API</Link>
            <Link to="/documentation#matrixEP">Matrix Endpoint</Link>
            <Link to="/documentation#ONMEP">One-to-many Endpoint</Link>
            <Link to="/documentation#geoEP">Geocoding Endpoint</Link>
          </div>
          <div className="flex flex-col ">
            <div className="flex gap-5 justify-center pb-4 color_inherit text-white">
              <a href="https://www.linkedin.com/company/gebetamaps/"><LinkedinFilled className='social_icon' /></a>
              <a href="https://twitter.com/GebetaMaps"><TwitterSquareFilled className='social_icon' /></a>
              <a href="https://instagram.com/gebetamaps"><InstagramFilled className='social_icon' /></a>
            </div>
            <h3 className="uppercase">Company</h3>
            <Link to="/contact">Contact Us</Link>
            <Link to="/about" >About</Link>
            {/* <Link to="/contact" >Leave Feedback</Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;