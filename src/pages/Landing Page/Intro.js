import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Running } from "../../assets/images/running.svg";
import Signin from "./../../components/Signin";
import Signup from "./../../components/Signup";
import Modal from "./../../features/Modal";

function Intro() {
  const [signupModal, setSignupModal] = useState(false);
  const [signinModal, setSigninModal] = useState(false);

  return (
    <div className="flex justify-center w-full">
      <div className="flex sw lg:justify-center text-white text-child mb-10">
        <div className=" flex flex-col gap-5 justify-center min-w-[400px]">
          <div className="h-screen sm:h-auto justify-end flex flex-col gap-10 py-10">
            <div className=" flex flex-col ">
              <h1 className="m-0">GebetaMaps</h1>
              <h1 className="m-0">Routing, Direction</h1>
              <h1 className="m-0">and Map API Service</h1>
              <p className="uppercase text-[#8476AA] m-0">Let us find your way</p>
            </div>
            <div className="flex gap-4 ">
              <a href="/#docpreview" className="btn_sty2">
                Learn More
              </a>
              <button className="btn_sty1" onClick={() => setSignupModal(true)}>
                Get Started
              </button>
            </div>
          </div>
          <Modal
            open={signupModal}
            close={() => {
              setSignupModal(false);
            }}
            elem={
              <Signup
                footer={
                  <div className="px-10 p-2">
                    <Link
                      to="#"
                      onClick={() => {
                        setSigninModal(true);
                        setSignupModal(false);
                      }}
                    >
                      Already have an account?{" "}
                      <span className="text-primary">Login</span>
                    </Link>
                  </div>
                }
              />
            }
          ></Modal>
          <Modal
            open={signinModal}
            close={() => setSigninModal(false)}
            elem={
              <Signin
                footer={
                  <div className="px-10 p-2">
                    <Link
                      to="#"
                      onClick={() => {
                        setSigninModal(false);
                        setSignupModal(true);
                      }}
                    >
                      Dont Have an account?{" "}
                      <span className="text-primary">Create One</span>
                    </Link>
                  </div>
                }
              />
            }
          ></Modal>
          <div className="flex items-center w-[calc(100vw-100px)] flex-wrap">
            <iframe src="https://www.youtube.com/embed/pTD69UWcH5Q?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              className="bg-black"
              allowFullScreen></iframe>
            <div className="px-2 flex-1 ">
              <p className="capitalize m-0 text-[#8476AA] min-w-[200px]">
                Geo-Coding, Matrix Endpoint Direction Endpoint, One-to-many
                Endpoint
              </p>
              <p className=" m-0 p-0">Watch Preview</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 max-h-full flex justify-center">
          <Running className="min-w-[800px] object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
