import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  direction,
  responseSampleForDirection400,
  responseSampleForDirection500,
  responseSampleForOnm,
} from "../../data/responsecode";
import OneToMany from "../../components/Documentation/OneToMany";
import RequestSample from "../../components/Documentation/RequestSample";
import ResponseSample from "../../components/Documentation/ResponseSample";

function ONMEndPoint() {
  const { userData } = useSelector((state) => state.user);
  const [onmStart, setOnmStart] = useState(false);
  const [onmStop, setOnmStop] = useState(false);
  const [onmCalculate, setOnmCalculate] = useState(false);

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
    <section className="text-[#aaa] text-child" id="ONMEP">
      <h2 className=" btn_sty1 bg-secondary/30 sml inline-block">
        One-to-Many Endpoint
      </h2>

      <p>
        By using the Gebeta Matrix API, you may choose the most efficient path
        from one place to several places.
      </p>

      <p>
        A simple illustration for a 3x3 matrix with identical from and to
        points:
      </p>
      <table className="table-fixed border border-black mt-[2%] mb-[2%]">
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
          <OneToMany start={onmStart} stop={onmStop} calculate={onmCalculate} />
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default ONMEndPoint;
