import React, { useState } from "react";
import {
  CopyOutlined,
  DeleteFilled,
  EyeInvisibleFilled,
} from "@ant-design/icons";
import { createRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { url } from "./../../data/url";
import { setUser } from "./../../redux/reducers/user";
import Modal from "../../features/Modal";
import Notify from "../Notify";

function APIToken() {
  const { userData } = useSelector((state) => state.user);
  const [showTokenModal, setTokenModal] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [description, setDescription] = useState("");
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const dispatch = useDispatch();

  const tokenView = () => {
    return (
      <div className="bg-[#aaa] shadow w-[300px] rounded-lg  divide-gray-200">
        <div className="px-5 py-3">
          <p className="text-red-600">{errorMessage}</p>
          <label className="font-semibold text-sm text-black pb-1 block">
            Description
          </label>
          <textarea
            type="textarea"
            rows={4}
            className="border h-auto px-3 py-2 mt-1 mb-5 text-sm w-full text-black"
            placeholder="Token Definition.."
            onChange={handleDescription}
            defaultValue={description}
          ></textarea>

          <div className=" py-3">
            {showLoading ? (
              <button
                type="button"
                className="w-[270px]  rounded-md bg-orange-200 text-black  py-2 mt-1 mb-5 transition duration-200 bg-blue-500 hover:bg-orange-500  focus:ring-opacity-50 text-white  py-2.5  text-sm shadow-sm hover:shadow-md font-semibold"
                disabled
                onClick={(event) => {
                  event.preventDefault();
                  updateToken();
                }}
              >
                <span className="inline-block ">Sign In</span>
              </button>
            ) : (
              <button
                type="button"
                className="w-[270px]  rounded-md  text-white  py-2 mt-1 mb-5 transition duration-200 bg-[#1A1F32]  focus:ring-opacity-50 text-white  py-2.5  text-sm shadow-sm hover:shadow-md font-semibold "
                onClick={(event) => {
                  event.preventDefault();

                  updateToken();
                }}
              >
                Add
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  //function to delete apiKey
  const deleteToken = () => {
    try {
      setShowLoading(true);
      fetch(`${url}/api/v1/users/setToken`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
        body: JSON.stringify({ id: userData.id, token: "token" }),
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          dispatch(setUser(data.data));
        });
      setShowLoading(false);
    } catch (err) {
      setShowLoading(false);
    }
  };

  const updateToken = () => {
    try {
      setShowLoading(true);
      fetch(`${url}/api/v1/users/setToken`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
        body: JSON.stringify({ id: userData.id, email: description }),
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          if (data.msg === "ok") {
            dispatch(setUser(data.data));
            setTokenModal(false);
          } else {
            alert("failed");
            setErrorMessage('Failed!');
            setTokenModal(false);
          }
        });

      setShowLoading(false);
    } catch (err) {
      setErrorMessage('Failed!');
      setShowLoading(false);
    }
  };

  const inputRef = createRef();
  const [notify, setNotify] = useState({ visible: false });

  function copyToClipboard() {
    navigator.clipboard.writeText(inputRef.current.value);
    setNotify({ visible: true, msg: "Copied", type: "success" });
  }

  const [textType, setTextType] = useState("text");

  return (
    <div className="flex gap-1 sm:gap-4 items-center flex-wrap bg-[#202022] px-4 py-3 text-[#aaa] text-child">
      <Modal
        open={showTokenModal}
        close={() => {
          setTokenModal(false);
        }}
        elem={tokenView()}
      ></Modal>
      <Notify value={notify} />
      <button className="btn-sty1 self-start my-6 bg-black/60 text-[#aaa] " onClick={() => setTokenModal(true)}>+ API Token</button>
      <div className="flex-1 flex items-center gap-4">
        <input
          disabled
          type={textType}
          ref={inputRef}
          value={userData.token || ""}
          className="bg-transparent p-1 flex-1"
        />
        <div className="flex gap-6">
          <EyeInvisibleFilled
            className="cursor-pointer"
            onClick={() =>
              setTextType(textType === "text" ? "password" : "text")
            }
          />
          <CopyOutlined className="cursor-pointer" onClick={copyToClipboard} />
          <DeleteFilled
            className="!text-red-600 cursor-pointer"
            onClick={(event) => {
              event.preventDefault();
              deleteToken();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default APIToken;
