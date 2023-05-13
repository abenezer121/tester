import React, { createContext, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import avatar from "./../../assets/images/maleavatar.png";
import TextLogo from "./../../assets/images/logowithtext.png";
import Icon, {
  BellOutlined,
  MenuOutlined,
  HomeOutlined,
  EditFilled,
  UserOutlined,
  SecurityScanOutlined,
  DollarCircleFilled,
  DownOutlined,
  RightOutlined,
  SettingFilled,
  LogoutOutlined,
} from "@ant-design/icons";

import "../../v2.css";
import Notification from "./Notification";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/reducers/user";
import { Popover } from "antd";
import { CurrentPlan } from "./CurrentPlan";

const LinkContext = createContext("linkDisp");

function SideLink({ label, iconComp, to, active, children }) {
  const [dropped, setDropped] = useState("hidden");

  function handleClick(ev) {
    if (children) {
      ev.preventDefault();
      setDropped(dropped === "hidden" ? "" : "hidden");
    }
  }
  return (
    <LinkContext.Consumer>
      {(type) => (
        <div>
          <Link
            to={to}
            onClick={handleClick}
            className={
              "flex gap-1  items-center mt-2 text-white hover:!text-[#ffa81d] relative w_hvr " +
              (active ? "!text-secondary" : "")
            }
          >
            {active ? (
              <div className="border-0 h-full relative border-r-[5px] !drop-shadow-lg !shadow-black rounded-r-md border-[#FF971D] w-0">
                &nbsp;
              </div>
            ) : (
              <div className="border-r-[5px]"></div>
            )}
            <Icon component={iconComp} className=" px-[5px] py-3" />
            <span
              className={
                "inline-block absolute sm:relative flex-1 p-0 left-12 sm:left-0 hvr_trgt sm:hvr_trgtx shadow-xl shadow-black sm:shadow-none whitespace-nowrap bg-[#1e1e1e] sm:bg-transparent "
              }
            >
              {label}
            </span>
            {children && type !== "hidden" ? (
              dropped ? (
                <span className="-mt-1 px-2 mx-2 hidden sm:flex justify-end w-5 border-transparent border overflow-hidden">
                  <RightOutlined className="!font-extrabold" />
                </span>
              ) : (
                <span className="mt-1 px-2 hidden sm:flex items-end h-3 border-transparent border overflow-hidden ">
                  <DownOutlined className="!font-extrabold  inline-block" />
                </span>
              )
            ) : null}
          </Link>
          {children && dropped !== "hidden" ? (
            <div className="flex text-white items-center relative">
              <div className="sm:w-5"></div>
              <div className="">{children}</div>
            </div>
          ) : null}
        </div>
      )}
    </LinkContext.Consumer>
  );
}
function SideBar() {
  const [type, setType] = useState("");
  const { userData } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  const url = (location.pathname.split("/")[2] || "dashboard").toLowerCase();
  const [notifyModal, setNotifyModal] = useState("hidden");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userData.id) navigate("/");
  }, [userData, navigate]);

  function handleMenu() {
    setType(type === "hidden" ? "" : "hidden");
  }

  return !userData.id ? null : (
    <div className="!bg-dark ">
      <div className="flex flex-col ">
        <div className="flex items-center text-white text-child border-b border-gray-700 shadow-md py-2 ">
          <div className="flex items-center w-56 ">
            <MenuOutlined
              className="py-2 px-4 cursor-pointer"
              onClick={handleMenu}
            />
            <Link to="/account">
              {" "}
              <img src={TextLogo} alt="Gebeta Maps" className="" />
            </Link>
          </div>
          <div className="flex-1 flex items-center">
            <h3 className="flex-1 px-4 m-0 capitalize hidden xs:inline-block">
              {url}
            </h3>
          </div>
          <div className="flex items-center relative ml-10">
            <div className="flex gap-4  ">
              <BellOutlined
                className="cursor-pointer"
                onClick={() =>
                  setNotifyModal(notifyModal === "hidden" ? "" : "hidden")
                }
              />
              <div
                className={
                  "absolute right-5 top-[118%] shadow-lg border border-[#333] shadow-black p-4 bg-[#202022] !z-50 w-[400px] max-w-[90vw] h-[300px] " +
                  notifyModal
                }
              >
                <Notification />
              </div>
              {/* <span><MailOutlined /></span> */}
            </div>
            <Popover
              placement="bottomRight"
              trigger="click"
              content={
                <Link
                  to="/"
                  className="flex gap-2 items-center text-black"
                  onClick={() => {
                    dispatch(setUser({}));
                  }}
                >
                  <LogoutOutlined />
                  <span className="whitespace-nowrap">Sign Out</span>
                </Link>
              }
            >
              <div className="flex items-center  mx-10 cursor-pointer ">
                <div className="w-12 h-12 overflow-hidden rounded-full flex justify-center items-center relative ">
                  {/* <img src={avatar} alt="profile" className="w-full h-full" /> */}
                  <span className="!m-0 !p-0 uppercase text-[6vh]">
                    {userData.companyname[0] || "A"}
                  </span>
                </div>
                <div className=" px-2 ">
                  <span className="!m-0 !p-0 ">{userData.companyname}</span>
                  <small className="text-secondary m-0 p-0 block ">
                    <CurrentPlan />
                  </small>
                </div>
              </div>
            </Popover>
          </div>
        </div>

        <LinkContext.Provider value={type}>
          <div className="flex relative ">
            {/* SideBar */}
            <div
              className={
                "h-full min-h-screen flex flex-col pr-2 sticky  top-0 shadow-xl shadow-black z-10 bg-dark py-5 " +
                type
              }
            >
              <SideLink
                label="Dashboard"
                iconComp={HomeOutlined}
                to="/account"
                active={url === "dashboard"}
              />
              <SideLink
                label="Usage"
                iconComp={UserOutlined}
                to="/account/usage"
                active={url === "usage"}
              />
              <SideLink
                label="Account & Security"
                iconComp={SecurityScanOutlined}
                to="/account/tokens"
                active={url === "tokens"}
              >
                <SideLink
                  label="Change Password"
                  iconComp={EditFilled}
                  to="/account/password"
                  active={url === "password"}
                />
                <SideLink
                  label="Edit Profile"
                  iconComp={EditFilled}
                  to="/account/profile"
                  active={url === "profile"}
                />
              </SideLink>
              <SideLink
                label="Price Plan"
                iconComp={DollarCircleFilled}
                to="/account/plans"
                active={url === "plans"}
              />
              <SideLink
                label="On Demand"
                iconComp={SettingFilled}
                to="/account/ondemand"
                active={url === "ondemand"}
              />
              <SideLink
                label="One Time Location"
                iconComp={SettingFilled}
                to="/account/onetimesms"
                active={url === "onetimesms"}
              />
            </div>
            <div className="flex-1 overflow-hidden relative ">
              <div className="p-5 flex flex-1 flex-col items-center mb-10 ">
                <Outlet />
              </div>
              <div className="bg-[#222] p-1 px-4 flex gap-6  w-full absolute bottom-0 text-[#ddd] text-child">
                <Link to="/account/privacypolicy">
                  <small>Privacy Policy</small>
                </Link>
                <Link to="/account/termsofuse">
                  <small>Terms of Use</small>
                </Link>
              </div>
            </div>
          </div>
        </LinkContext.Provider>
      </div>
    </div>
  );
}

export default SideBar;
