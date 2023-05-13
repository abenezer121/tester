import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import "../v2.css";

function Navbar() {
  const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if(userData.id)
      navigate("/account");
  },[userData,navigate])

  return userData.id ? null : (
    <div className="min-h-screen bg-[#19191a]">
      <div className="flex flex-col items-center relative">
        {/* <BGPolygon className="-z-10 h-fit w-fit absolute" /> */}
        <div className="flex items-center py-5 sw relative z-10 ">
          <Header />
        </div>

        <div
          className={
            "flex flex-row items-stretch overflow-auto relative w-full "
          }
        >
          <div className="relative z-0 w-full flex flex-col items-center overflow-hidden ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
