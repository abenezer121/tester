import React from "react";
import { useSelector } from "react-redux";
import {
  direction,
  responseSampleForDirection200,
  responseSampleForDirection400,
  responseSampleForDirection500,
} from "../../data/responsecode";
import Direction from "../../components/Documentation/Direction";
import RequestSample from "../../components/Documentation/RequestSample";
import ResponseSample from "../../components/Documentation/ResponseSample";

function DirectionEndPoint() {
  const { userData } = useSelector((state) => state.user);

  return (
    <section id="directionEP" className="">
      <h2 className=" btn_sty1 bg-secondary/30 sml inline-block">
        Direction API
      </h2>
      <p className="  ">
        You can find directions to your destination using the Gebeta Directions
        API. Using the Directions API, you can determine the best route to take.
      </p>
      <p>
        The GET request is the most simple one: just specify the parameter in
        the URL and you are done. Can be tried directly in every browser.
      </p>
      {/* code component */}
      <div className="w-full bg-[#263238] text-white mb-[5%] flex flex-col max-w-full">
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
          curl="curl https://mapapi.gebeta.app/api/v1/route/bike/direction/?la1=9.022528936095531&lo1=38.80400061607361&la2=9.021755421022991&lo2=38.79883468151093&apiKey=apiKey"
          js={direction}
        />
        <ResponseSample
          responseCodes200={responseSampleForDirection200}
          responseCodes400={responseSampleForDirection400}
          responseCodes500={responseSampleForDirection500}
        />
      </div>

      {userData.token != null ? (
        <div className=" w-[90%] h-[500px] mb-[50px] bg-red-200">
          <Direction />
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default DirectionEndPoint;
