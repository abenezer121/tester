import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { setChoosedPlan } from "./../../../redux/reducers/choosedplans";
import { useSelector, useDispatch } from "react-redux";
import { url } from "./../../../data/url";
import { setUser } from "./../../../redux/reducers/user";
import Modal from "./../../../features/Modal/index";
import { CopyOutlined, DeleteFilled, SyncOutlined } from "@ant-design/icons";
import { Input } from "antd";

function ApiKeys(props) {
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
      <div className="bg shadow w-[300px] rounded-lg  divide-gray-200">
        <div className="px-5 py-7">
          <p className="text-red-600">{errorMessage}</p>
          <label className="font-semibold text-sm text-gray-600 pb-1 block">
            description
          </label>
          <input
            type="text"
            className="border  px-3 py-2 mt-1 mb-5 text-sm w-full text-black"
            value={description}
            onChange={handleDescription}
          />

          <div className=" py-7">
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
          if (data.msg == "ok") {
            dispatch(setUser(data.data));
            setTokenModal(false);
          } else {
            alert("failed");
            setTokenModal(false);
          }
        });

      setShowLoading(false);
    } catch (err) {
      setShowLoading(false);
    }
  };

  return (
    <div className={"card2  uppercase " + props.className}>
      <Modal
        open={showTokenModal}
        close={() => {
          setTokenModal(false);
        }}
        elem={tokenView()}
      ></Modal>
      <div className="flex flex-col">
        <h2 className="text-white">Api Keys</h2>
        <button
          className="btn-sty1 self-start my-6 "
          onClick={() => setTokenModal(true)}
        >
          + Create Tokens
        </button>
        <div>
          <div className="flex justify-between">
            <h3 className="text-white">Current Token</h3>
            <div className="flex gap-3">
              {/* <SyncOutlined className="!text-blue-500 cursor-pointer" /> */}
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
        <Input
          placeholder="API Key"
          value={userData.token}
          className="resize-none rounded-md"
          suffix={<CopyOutlined className="cursor-pointer" />}
          autoSize
        />
      </div>
    </div>
  );
}

export default ApiKeys;
