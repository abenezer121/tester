import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  const { url } = props;
  return (
    <div className="text-white flex flex-col gap-3">
      <h2 className="text-white">Settings</h2>
      <Link
        className={"text-white " + (url === "profile" ? " active_link " : "")}
        to="/account/settings/"
      >
        Profile
      </Link>
      <Link
        className={"text-white " + (url === "password" ? " active_link " : "")}
        to="/account/settings/password"
      >
        Change Password
      </Link>
      <Link
        className={"text-white " + (url === "plans" ? " active_link " : "")}
        to="/account/plans"
      >
        Price Plans
      </Link>
    </div>
  );
}

export default Nav;
