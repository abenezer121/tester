import React from "react";
import { useSelector } from "react-redux";
import {
  direction,
  responseSampleForDirection400,
  responseSampleForDirection500,
  responseSampleGeocoding,
} from "../../data/responsecode";
import Geocoding from "../../components/Documentation/Geocoding";
import RequestSample from "../../components/Documentation/RequestSample";
import ResponseSample from "../../components/Documentation/ResponseSample";

function GeocodingAPI() {
  const { userData } = useSelector((state) => state.user);

  return (
    <div className="text-[#aaa] text-child" id="geoEP">
      {userData.token != null ? (
        <div className="mb-40">
          <h2 className=" btn_sty1 bg-secondary/30 sml inline-block">
            Geocoding Endpoint
          </h2>
          <p>
            You can forward geocode using the Gebeta Geocoding API, which
            converts text queries like "Bole Edna Mall" into longitude and
            latitude coordinates.
          </p>

          <div className="w-full bg-[#263238] text-white mb-[5%] flex flex-col">
            <div className="bg-[#11171a] mx-[5%] mt-[2%] py-[1%]">
              <p className="mx-[2%] space-x-2 ">
                <span className="bg-green-200 px-2 py-1">GET</span>
                <span className="mx-[2%]">
                  http://mapapi.gebeta.app/api/v1/route/geocoding
                </span>
              </p>
            </div>
            {/* request sample here */}
            <RequestSample
              curl="curl https://mapapi.gebeta.app/api/v1/route/geocoding?name=doctor mulu&apiKey=apiKey"
              js={direction}
            />
            <ResponseSample
              responseCodes200={responseSampleGeocoding}
              responseCodes400={responseSampleForDirection400}
              responseCodes500={responseSampleForDirection500}
            />
          </div>
          <Geocoding />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default GeocodingAPI;
