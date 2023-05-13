import React, { useEffect, useState, useRef } from "react";

import RequestSample from "../../components/Documentation/RequestSample";
import ResponseSample from "../../components/Documentation/ResponseSample";
import {
  responseSampleGeocoding,
  direction,
  responseSampleForDirection200,
  responseSampleForDirection400,
  responseSampleForOnm,
  responseSampleForDirection500,
  tssreponse200,
  matrixResponse200,
} from "../../data/responsecode";
import Direction from "../../components/Documentation/Direction";
import Matrix from "../../components/Documentation/Matrix";
import OneToMany from "../../components/Documentation/OneToMany";
import Tss from "../../components/Documentation/Tss";
import Geocoding from "../../components/Documentation/Geocoding";
import { useSelector, useDispatch } from "react-redux";
const openstreetmap = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const Index = () => {
  //for the matrix
  const [matrixStart, setMatrixStart] = useState(false);
  const [matrixCalculate, setMatrixCalculate] = useState(false);
  const [onmStart, setOnmStart] = useState(false);
  const [onmStop, setOnmStop] = useState(false);
  const [onmCalculate, setOnmCalculate] = useState(false);
  const { userData } = useSelector((state) => state.user);
  //for the routeOptimization
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
  let handleMatrixStart = () => {
    setMatrixStart(!matrixStart);
  };
  let handleMatrixCalculate = () => {
    setMatrixCalculate(!matrixCalculate);
  };

  let handleOnmStart = () => {
    setOnmStart(!onmStart);
  };

  let handleOnmStop = () => {
    setOnmStop(!onmStop);
  };

  let handleOnmCalculate = () => {
    setOnmCalculate(!onmCalculate);
  };
  return (
    <>
      <div class="flex w-full ">
        <main className="ml-[5%] mt-[3%]">
          <p className="text-5xl font-black mb-[5%]">Gebeta Routing API</p>

          <p>
            With the GebetaMaps Directions API you can integrate A-to-B route
            planning, turn-by-turn navigation, route optimization, isochrone
            calculations, and other tools in your application.
          </p>

          <p>
            The GebetaMaps Directions API consists of the following RESTful web
            services:
          </p>
          <ul className=" mb-[5%] ml-[1%]">
            <li>Routing API</li>
            <li>Route Optimization API</li>
            <li>Geocoding API</li>

            <li>Matrix API</li>
          </ul>
          <p className="font-bold text-3xl mb-[5%]">Explore our APIs</p>
          <p className="text-xl">Get Started</p>
          <p className="ml-[2%]">1. Sign up for GebetaMaps </p>
          <p className="ml-[2%]">2. Create an API key </p>
          <p>
            Each API part has its own documentation. Jump to the desired API
            part and learn about the API through the given examples and
            tutorials. In addition, for each API there are specific sample
            requests that you can send via Insomnia or Postman to see what the
            requests and responses look like. .{" "}
          </p>

          {userData.token != null ? (
            <div>
              <p className="mt-[5%] font-bold text-3xl mb-[1%]">
                Geocoding Endpoint
              </p>
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

          <p className="mt-[5%] font-bold text-3xl mb-[1%]">
            Direction Endpoint
          </p>
          <p className="  ">
            You can find directions to your destination using the Gebeta
            Directions API. Using the Directions API, you can determine the best
            route to take.
          </p>
          <p>
            The GET request is the most simple one: just specify the parameter
            in the URL and you are done. Can be tried directly in every browser.
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
            <div className=" w-[90%] h-[500px] bg-red-200">
              <Direction />
            </div>
          ) : (
            ""
          )}

          {/*Route Optimization problem*/}
          <p className="mt-[5%] font-bold text-3xl mb-[5%]">
            Route Optimization EndPoint
          </p>
          <p>
            The Gebeta Optimization API returns a path between the input
            coordinates that is optimized. Planning the route for delivery in a
            city is a common use case for the Optimization API.
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
            <div className=" w-[90%] h-[500px] mb-[200px] ">
              <button
                style={{ background: routeOptimizationStart ? "green" : "red" }}
                onClick={(e) => {
                  handleRouteOptimizationStart(e);
                }}
              >
                nodes
              </button>
              <button
                style={{
                  background: routeOptimizationCalculate ? "green" : "red",
                }}
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
          <p className="mt-[5%] font-bold text-3xl mb-[5%]">Matrix Endpoint</p>
          <p>
            The Matrix API is part of the GebetaMaps Directions API and with it,
            you can calculate many-to-many distances and times a lot more
            efficient than calling the Routing API multiple times.
          </p>
          <p>
            In the Routing API, we support multiple points, so called 'via
            points', which results in one route being calculated. The Matrix API
            results in NxM routes, or more precise NxM distances or times being
            calculated but is a lot faster compared to NxM single requests. The
            most simple example is a people trying to decide which bus
            restoursant is close to her/her instead of using beeline distance
            she/he can calculate a 1x4 matrix. Or a delivery service often in
            the need of big NxN matrices to solve vehicle routing problems. For
            example, the GebetaMaps Route Optimization API uses the Matrix API
            under the hood to achieve this.
          </p>

          <p>Some other use cases for the Matrix API:</p>
          <ol className="ml-[5%]">
            <li>
              Logistic problems often pick up many items from and deliver them
              to many locations.
            </li>
            <li>
              Calculating detours with many possible points in-between and
              selecting the best e.g. interesting for ridesharing or taxi
              applications. For this 1-to-many requests are necessary.
            </li>
            <li>
              Finding the best tour for a tourist in the need to visit as many
              points of interests as possible.
            </li>
          </ol>
          <h3>Description</h3>
          <p>
            The Matrix API calculates the well known distance-matrix for a set
            of points, i.e. it calculates all the distances between every point
            combination.
          </p>
          <p>
            A simple illustration for a 3x3 matrix with identical from and to
            points:
          </p>
          <table class="mt-[2%] mb-[2%] table-fixed border border-black">
            <thead className="border border-black">
              <tr className="border border-black">
                <th className="border border-black">-</th>
                <th className="mx-[4%] border border-black">to_point1</th>
                <th className="mx-[4%] border border-black">to_point2</th>
                <th className="mx-[4%] border border-black">to_point3</th>
              </tr>
            </thead>
            <tbody className="border border-black">
              <tr className="border border-black">
                <td className="border border-black">from_point1</td>
                <td className="border border-black">0</td>
                <td className="border border-black">1-{">"}2</td>
                <td className="border border-black">1-{">"}3</td>
              </tr>
              <tr className="border border-black">
                <td className="border border-black">from_point2</td>
                <td className="border border-black">2{"->"}1</td>
                <td className="border border-black">0</td>
                <td className="border border-black">2{"->"}3</td>
              </tr>
              <tr className="border border-black">
                <td className="border border-black">from_point3</td>
                <td className="border border-black">3{"->"}1</td>
                <td className="border border-black">3{"->"}2</td>
                <td className="border border-black">0</td>
              </tr>
            </tbody>
          </table>

          {/* code component */}
          <div className="w-full bg-[#263238] text-white mb-[5%] flex flex-col">
            <div className="bg-[#11171a] mx-[5%] mt-[2%] py-[1%]">
              <p className="mx-[2%] space-x-2 ">
                <span className="bg-green-200 px-2 py-1">GET</span>
                <span className="mx-[2%]">
                  http://mapapi.gebeta.app/api/v1/route/driving/matrix
                </span>
              </p>
            </div>
            {/* request sample here */}
            <RequestSample
              curl="curl http://mapapi.gebeta.app/api/v1/route/driving/tss/?start=[[19.23,38.232],[19.23,38.232]]&apiKey=key"
              js={direction}
            />
            <ResponseSample
              responseCodes200={matrixResponse200}
              responseCodes400={responseSampleForDirection400}
              responseCodes500={responseSampleForDirection500}
            />
          </div>

          {userData.token != null ? (
            <div className=" w-[90%] h-[500px] mb-[200px] ">
              <button
                style={{ background: matrixStart ? "green" : "red" }}
                onClick={() => {
                  handleMatrixStart();
                }}
              >
                nodes
              </button>
              <button
                style={{ background: matrixCalculate ? "green" : "red" }}
                onClick={() => {
                  handleMatrixCalculate();

                  // 1 second delay
                  setTimeout(function () {
                    setMatrixStart(false);
                    setMatrixCalculate(false);
                  }, 3000);
                }}
              >
                Calculate
              </button>
              <Matrix
                matrixStart={matrixStart}
                matrixCalculate={matrixCalculate}
              />
            </div>
          ) : (
            ""
          )}

          <p className="mt-[5%] font-bold text-3xl mb-[1%]">
            One-to-Many Endpoint
          </p>

          <p>
            By using the Gebeta Matrix API, you may choose the most efficient
            path from one place to several places.
          </p>

          <p>
            A simple illustration for a 3x3 matrix with identical from and to
            points:
          </p>
          <table class="table-fixed border border-black mt-[2%] mb-[2%]">
            <thead className="border border-black">
              <tr className="border border-black">
                <th className="border border-black">-</th>
                <th className="mx-[4%] border border-black">to_point1</th>
                <th className="mx-[4%] border border-black">to_point2</th>
                <th className="mx-[4%] border border-black">to_point3</th>
              </tr>
            </thead>
            <tbody className="border border-black">
              <tr className="border border-black">
                <td className="border border-black ">from_pointa</td>
                <td className="border border-black px-[2%]">
                  {" "}
                  <span className="px-[2%]">a-{">"}1</span>
                </td>
                <td className="border border-black px-[2%]">
                  {" "}
                  <span className="px-[2%]">a-{">"}2</span>
                </td>
                <td className="border border-black px-[2%]">
                  {" "}
                  <span className="px-[2%]">a-{">"}3</span>
                </td>
              </tr>
            </tbody>
          </table>

          {/* code component */}
          <div className="w-full bg-[#263238] text-white mb-[5%] flex flex-col">
            <div className="bg-[#11171a] mx-[5%] mt-[2%] py-[1%]">
              <p className="mx-[2%] space-x-2 ">
                <span className="bg-green-200 px-2 py-1">GET</span>
                <span className="mx-[2%]">
                  http://mapapi.gebeta.app/api/v1/route/driving/onm
                </span>
              </p>
            </div>
            {/* request sample here */}
            <RequestSample
              curl="curl  https://mapapi.gebeta.app/api/v1/route/driving/onm/?la1=9.022528936095531&lo1=38.80400061607361&json=[[9.005980058445639,38.785734616513466],[9.01166345564756,38.789008246478424]]&apiKey=token"
              js={direction}
            />
            <ResponseSample
              responseCodes200={responseSampleForOnm}
              responseCodes400={responseSampleForDirection400}
              responseCodes500={responseSampleForDirection500}
            />
          </div>

          {userData.token != null ? (
            <div className=" w-[90%] h-[500px] bg-red-200 mb-[10%]">
              <button
                style={{ background: onmStart ? "green" : "red" }}
                onClick={() => {
                  handleOnmStart();
                }}
              >
                Start node
              </button>
              <button
                className="ml-[1%]"
                style={{ background: onmStop ? "green" : "red" }}
                onClick={() => {
                  handleOnmStop();
                }}
              >
                Stop node
              </button>
              <button
                className="ml-[1%]"
                style={{ background: onmCalculate ? "green" : "red" }}
                onClick={() => {
                  handleOnmCalculate();

                  setTimeout(function () {
                    setOnmStart(false);
                    setOnmCalculate(false);
                  }, 3000);
                }}
              >
                Calculate
              </button>
              <OneToMany
                start={onmStart}
                stop={onmStop}
                calculate={onmCalculate}
              />
            </div>
          ) : (
            ""
          )}
        </main>
      </div>
    </>
  );
};

export default Index;
