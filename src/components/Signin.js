import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { setUser } from "./../redux/reducers/user";
import { useNavigate } from "react-router-dom";
import { url } from "./../data/url";

// import ClipLoader from "react-spinners/ClipLoader";

function Signin({ footer }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setMessage] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  // const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUsername = (event) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const submit = async () => {
    try {
      setShowLoading(true);
      const login = await fetch(`${url}/api/v1/users/login`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
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
    <div className="card bg-full-back self-end flex justify-center content-between p-10 ">
      <div className="px-5 py-7">
        <p className="text-red-600">{errorMessage}</p>
        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          username
        </label>
        <input
          type="text"
          className="border  px-3 py-2 mt-1 mb-5 text-sm w-full text-black"
          value={username}
          onChange={handleUsername}
        />
        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          Password
        </label>
        <input
          type="password"
          className="border px-3 py-2 mt-1 mb-5 text-sm w-full text-black"
          value={password}
          onChange={handlePassword}
        />

        <div className=" py-7">
          {showLoading ? (
            <button
              type="button"
              className="rounded-md bg-[#1A1F32] text-white px-3 py-2 mt-1 mb-5 transition duration-200    focus:ring-opacity-50 text-white w-full py-2.5  text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block "
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
              className="rounded-md bg-[#1A1F32] text-white px-3 py-2 mt-1 mb-5 transition duration-200   focus:ring-opacity-50 text-white w-full py-2.5  text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              onClick={(event) => {
                event.preventDefault();
                submit();
              }}
            >
              <span className="inline-block ">Sign In</span>
            </button>
          )}

          <span className="text-black">{footer}</span>
        </div>
      </div>
    </div>
  );
}

export default Signin;
