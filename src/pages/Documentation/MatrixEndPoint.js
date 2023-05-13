import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  direction,
  matrixResponse200,
  responseSampleForDirection400,
  responseSampleForDirection500,
} from "../../data/responsecode";
import Matrix from "../../components/Documentation/Matrix";
import RequestSample from "../../components/Documentation/RequestSample";
import ResponseSample from "../../components/Documentation/ResponseSample";

function MatrixEndPoint() {
  const { userData } = useSelector((state) => state.user);
  const [matrixStart, setMatrixStart] = useState(false);
  const [matrixCalculate, setMatrixCalculate] = useState(false);

  let handleMatrixStart = () => {
    setMatrixStart(!matrixStart);
  };
  let handleMatrixCalculate = () => {
    setMatrixCalculate(!matrixCalculate);
  };

  return (
    <section className="text-[#aaa] text-child" id="matrixEP">
      <h2 className=" btn_sty1 bg-secondary/30 sml inline-block">
        Matrix Endpoint
      </h2>
      <p>
        The Matrix API is part of the GebetaMaps Directions API and with it, you
        can calculate many-to-many distances and times a lot more efficient than
        calling the Routing API multiple times.
      </p>
      <p>
        In the Routing API, we support multiple points, so called 'via points',
        which results in one route being calculated. The Matrix API results in
        NxM routes, or more precise NxM distances or times being calculated but
        is a lot faster compared to NxM single requests. The most simple example
        is a people trying to decide which bus restoursant is close to her/her
        instead of using beeline distance she/he can calculate a 1x4 matrix. Or
        a delivery service often in the need of big NxN matrices to solve
        vehicle routing problems. For example, the GebetaMaps Route Optimization
        API uses the Matrix API under the hood to achieve this.
      </p>

      <p>Some other use cases for the Matrix API:</p>
      <ol className="ml-[5%]">
        <li>
          Logistic problems often pick up many items from and deliver them to
          many locations.
        </li>
        <li>
          Calculating detours with many possible points in-between and selecting
          the best e.g. interesting for ridesharing or taxi applications. For
          this 1-to-many requests are necessary.
        </li>
        <li>
          Finding the best tour for a tourist in the need to visit as many
          points of interests as possible.
        </li>
      </ol>
      <h3>Description</h3>
      <p>
        The Matrix API calculates the well known distance-matrix for a set of
        points, i.e. it calculates all the distances between every point
        combination.
      </p>
      <p>
        A simple illustration for a 3x3 matrix with identical from and to
        points:
      </p>
      <table className="mt-[2%] mb-[2%] table-fixed border border-black">
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
        <div className=" w-[90%] h-[500px] mb-[50px] ">
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
          <Matrix matrixStart={matrixStart} matrixCalculate={matrixCalculate} />
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default MatrixEndPoint;
