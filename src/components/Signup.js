import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { setUser } from "./../redux/reducers/user";
import { useNavigate } from "react-router-dom";
import { url } from "./../data/url";

// import ClipLoader from "react-spinners/ClipLoader";

function Signup({ footer }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setMessage] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  // const { userData } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleCompanyName = (event) => {
    setCompanyName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const empty = (str) => {
    if (
      typeof str == "undefined" ||
      !str ||
      str.length === 0 ||
      str === "" ||
      !/[^\s]/.test(str) ||
      /^\s*$/.test(str) ||
      str.replace(/\s/g, "") === ""
    )
      return true;
    else return false;
  };

  const submit = async () => {
    try {
      setShowLoading(true);
      let data = {};
      if (!empty(username)) {
        Object.assign(data, { username: username });
      } else {
        setMessage("username should not be empty");
        throw new Error( "username should not be empty!");
      }
      if (!empty(password)) {
        Object.assign(data, { password: password });
      } else {
        setMessage("password should not be empty");
        throw new Error("username should not be empty!");
      }
      if (!empty(companyname)) {
        Object.assign(data, { companyname: companyname });
      } else {
        setMessage("companyname should not be empty");
        throw new Error("username should not be empty!");
      }
      if (!empty(email)) {
        Object.assign(data, { email: email });
        let regEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        if (!regEmail.test(email)) {
          setMessage("Invalid Email Address");
          throw new Error("Parameter is not a number!");
        }
      } else {
        setMessage("email should not be empty");
        throw new Error("username should not be empty!");
      }
      const login = await fetch(`${url}/api/v1/users/signup`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (login.status !== 200) {
        const data = await login.json();

        setMessage(data.msg);
      } else {
        const data = await login.json();

        dispatch(setUser(data.data));
        navigate("/account");
      }

      setShowLoading(false);
    } catch (err) {
      setShowLoading(false);
      setMessage("Error Occured Please Try Again");
    }
  };
  return (
    <div className="card bg-full-back self-end flex justify-center content-between p-10  ">
      <div className="px-5 py-7">
        <p className="text-red-600">{errorMessage}</p>
        <div className="flex flex-col gap-2">
          <div className="">Company Name</div>
          <div className="">
            <input
              value={companyname}
              onChange={handleCompanyName}
              className="w-full px-3 py-2 text-sm"
              type="text"
            />
          </div>
          <div className="">username</div>
          <div className="">
            <input
              value={username}
              onChange={handleUsername}
              className="w-full px-3 py-2 text-sm"
              type="text"
            />
          </div>
          <div className="">Email</div>
          <div className="">
            <input
              value={email}
              onChange={handleEmail}
              className="w-full px-3 py-2 text-sm"
              type="email"
            />
          </div>
          <div className="">Password</div>
          <div className="">
            <input
              value={password}
              onChange={handlePassword}
              className="w-full px-3 py-2 text-sm"
              type="password"
            />
          </div>
        </div>
        <div className=" py-7">
          {showLoading ? (
            <button
              type="button"
              className="rounded-md bg-[#1A1F32]  px-3 py-2 mt-1 mb-5 transition duration-200  hover:bg-[#1A1F32]  focus:ring-opacity-50 text-white w-full py-2.5  text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block "
              disabled
              onClick={(event) => {
                event.preventDefault();
                submit();
              }}
            >
              <span className="inline-block ">Sign In</span>
            </button>
          ) : (
            <button
              type="button"
              className=" text-white rounded-md bg-[#1A1F32] px-3 py-2 mt-1 mb-5 transition duration-200  hover:bg-[#1A1F32]  focus:ring-opacity-50 text-white w-full py-2.5  text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              onClick={(event) => {
                event.preventDefault();
                submit();
              }}
            >
              <span className="inline-block ">Sign Up</span>
            </button>
          )}

          <span className="text-black">{footer}</span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
