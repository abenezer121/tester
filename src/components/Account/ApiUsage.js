import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { url } from "./../../data/url";

import { format } from "date-fns";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
function APIUsage() {
  const { userData } = useSelector((state) => state.user);

  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  // const [selectedGraph, setSelected] = useState("All");

  function sortWithIndeces(toSort) {
    for (var i = 0; i < toSort.length; i++) {
      toSort[i] = [toSort[i], i];
    }
    toSort.sort(function (left, right) {
      return left[0] < right[0] ? -1 : 1;
    });
    let sortIndices = [];
    for (var j = 0; j < toSort.length; j++) {
      sortIndices.push(toSort[j][1]);
      toSort[j] = toSort[j][0];
    }

    return sortIndices;
  }

  useEffect(() => {
    fetch(
      `${url}/api/v2/route/apicalls/getMonthlyApiCallForGraph?userid=${userData.id}`
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        if (data.msg == "ok") {
          let _data = [];
          let _label = [];

          for (var prop in data.data) {
            try {
              _label.push(prop);
              _data.push(data.data[prop]);
            } catch (err) {}
          }

          let index = sortWithIndeces(_label);

          const output = index.map((i) => _data[i]);

          setLabels(_label);
          setData(output);
        }
      });
  }, [userData.id]);

  // function changeFilter(ev) {
  //   setSelected(ev.target.value);
  // }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: true,
        text: "Api Usage Graph",
      },
    },
  };

  const datas = {
    labels: labels,
    datasets: [
      {
        // label: "First dataset",
        data: data,
        fill: true,
        backgroundColor: "rgba(222,117,1,0.2)",
        borderColor: "rgba(222,117,0,1)",
      },
    ],
  };

  return (
    <div className="rounded-md px-4 py-3 bg-[#202022] ">
      <div className="flex justify-between items-center w-full sm:!sw">
        <div>
          <h2 className="m-0">API Usage</h2>
          <span>Track your api usage here</span>
        </div>
        <div className="flex gap-4 items-center ">
          {/* <label className="flex items-center gap-2">
            <input
              type="radio"
              name="filter"
              className=""
              value="All"
              onClick={changeFilter}
            />{" "}
            All
          </label> */}
          {/* <label className="flex items-center gap-2">
            <input
              type="radio"
              name="filter"
              className=""
              value="ONM"
              onClick={changeFilter}
            />{" "}
            ONM
          </label> */}
          {/* <label className="flex items-center gap-2">
            <input
              type="radio"
              name="filter"
              className=""
              value="Direction"
              onClick={changeFilter}
            />{" "}
            Direction
          </label> */}
          {/* <label className="flex items-center gap-2">
            <input
              type="radio"
              name="filter"
              className=""
              value="TSS"
              onClick={changeFilter}
            />{" "}
            Tss
          </label> */}
          {/* <label className="flex items-center gap-2">
            <input
              type="radio"
              name="filter"
              className=""
              value="Matrix"
              onClick={changeFilter}
            />{" "}
            Matrix
          </label> */}
        </div>
      </div>
      <div></div>
      <div className="text-white  ">
        {/* <h2 className="text-white mb-0">Sep, 09 - 22 2022</h2>
        <span className="lowercase mb-4 inline-block">ALL DATES START AT 00:00 ETHIOPIAN LT</span> */}
        <div className="border border-dashed rounded-md border-white p-10 flex items-center justify-center sm:h-[200px] md:h-[200px] lg:h-[600px]">
          {data.length > 0 ? (
            <Line options={options} data={datas} className="!w-full" />
          ) : (
            <h3 className="text-white">
              You don't have any account activity for the selected period and
              API key.
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default APIUsage;
