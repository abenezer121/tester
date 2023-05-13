import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  direction,
  responseSampleForDirection400,
  responseSampleForDirection500,
  tssreponse200,
} from "../../data/responsecode";
import RequestSample from "../../components/Documentation/RequestSample";
import ResponseSample from "../../components/Documentation/ResponseSample";
import Tss from "../../components/Documentation/Tss";

function RouteEndPoint() {
  const { userData } = useSelector((state) => state.user);
  const [routeOptimizationStart, setRouteOptimizationStart] = useState(false);
  const [routeOptimizationCalculate, setRouteOptimizationCalculate] =
    useState(false);

  let handleRouteOptimizationStart = (event) => {
    event.preventDefault();
    setRouteOptimizationStart(!routeOptimizationStart);
  };

  let handleRouteOptimizationCalculate = (event) => {
    event.preventDefault();
    setRouteOptimizationCalculate(!routeOptimizationCalculate);
  };

  return (
    <div className="text-[#aaa] text-child" id="routeEP">
      <h2 className=" btn_sty1 bg-secondary/30 sml inline-block">
        Route Optimization EndPoint
      </h2>
      <p>
        The Gebeta Optimization API returns a path between the input coordinates
        that is optimized. Planning the route for delivery in a city is a common
        use case for the Optimization API.
      </p>
      {/* code component */}
      <div className="w-full bg-[#263238] text-white mb-[5%] flex flex-col">
        <div className="bg-[#11171a] mx-[5%] mt-[2%] py-[1%]">
          <p className="mx-[2%] space-x-2 ">
            <span className="bg-green-200 px-2 py-1">GET</span>
            <span className="mx-[2%]">
              http://mapapi.gebeta.app/api/v1/route/driving/route
            </span>
          </p>
        </div>
        {/* request sample here */}
        <RequestSample
          curl="curl http://mapapi.gebeta.app/api/v1/route/driving/tss/?start=[[19.23,38.232],[19.23,38.232]]&apiKey=key"
          js={direction}
        />
        <ResponseSample
          responseCodes200={tssreponse200}
          responseCodes400={responseSampleForDirection400}
          responseCodes500={responseSampleForDirection500}
        />
      </div>
      {/*  */}

      {userData.token != null ? (
        <div className=" w-[90%] h-[500px] mb-[50px] ">
          <button
            style={{ background: routeOptimizationStart ? "green" : "red" }}
            onClick={(e) => {
              handleRouteOptimizationStart(e);
            }}
          >
            nodes
          </button>
          <button
            style={{ background: routeOptimizationCalculate ? "green" : "red" }}
            onClick={(e) => {
              handleRouteOptimizationCalculate(e);

              setTimeout(function () {
                setRouteOptimizationCalculate(false);
                setRouteOptimizationStart(false);
              }, 300);
            }}
          >
            Calculate
          </button>
          <Tss
            routeOptimizationStart={routeOptimizationStart}
            routeOptimizationCalculate={routeOptimizationCalculate}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default RouteEndPoint;
