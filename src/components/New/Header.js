import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  CaretDownFilled,
  CaretLeftFilled,
  UserOutlined,
} from "@ant-design/icons";
import ProfilePopup from "./ProfilePopup";
import { useState } from "react";

function Header(props) {
  const [profilePopupOpened, setProfilePopupOpened] = useState(false);
  const type2 = props.type === "col";
  const location = useLocation();
  const url = location.pathname.split("/")[2];

  return (
    <div className={!type2 ? "flex w-full" : "overflow-hidden w-full"}>
      <div className={"" + (type2 ? "hidden" : "")}>
        <Link to="/">
          <h2 className="mr-6 self-start m-0 text-white">
            <span className="text-orange-500 font-black">gebeta</span>
            <span className="text-white font-black">maps</span>
          </h2>
        </Link>
      </div>
      <div
        className={
          !type2
            ? "hidden md:flex text-white grow justify-end items-center gap-6 flex-wrap"
            : "flex flex-col gap-6 text-white grow "
        }
      >
        <Link
          to="/account"
          className={
            " text-white " + (url === "dashboard" ? " active_link " : "")
          }
        >
          Dashboard
        </Link>
        {/* <Link to="/account/tokens" className={" text-white " + (url === "tokens" ? ' active_link ' : '')}>Tokens</Link> */}
        <Link
          to="/account/usage"
          className={" text-white " + (url === "usage" ? " active_link " : "")}
        >
          Usage
        </Link>
        <Link
          to="/account/plans"
          className={" text-white " + (url === "plans" ? " active_link " : "")}
        >
          Price Plans
        </Link>
        <Link
          to="/account/settings"
          className={
            " text-white " + (url === "settings" ? " active_link " : "")
          }
        >
          Settings
        </Link>
        <span
          className="flex items-center gap-2 cursor-pointer relative"
          onClick={() => setProfilePopupOpened(!profilePopupOpened)}
        >
          <span className="icon">
            <UserOutlined />
          </span>
          {profilePopupOpened ? <CaretLeftFilled /> : <CaretDownFilled />}
          <div
            className={
              "absolute z-10 top-full w-full sm:right-0 py-3 min-w-[200px] " +
              (profilePopupOpened ? " block " : " block md:hidden ")
            }
          >
            <ProfilePopup />
          </div>
        </span>
      </div>
    </div>
  );
}

export default Header;
