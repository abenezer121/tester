import React, { useEffect } from "react";

import ApiDetail from "../../components/Account/ApiDetail";
import APIToken from "../../components/Account/ApiToken";
import APIUsage from "../../components/Account/ApiUsage";
import BillingHistory from "../../components/Account/BillingHistory";
import DocCard from "../../components/Account/DocCard";
import { useSelector, useDispatch } from "react-redux";
import { setMetrics } from "./../../redux/reducers/metrics";
import { url } from "./../../data/url";
function Cards() {
  const { metrics } = useSelector((state) => state.metrics);
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const prepareData = (data) => {
    let _data = {
      tss: 0,
      matrix: 0,
      direction: 0,
      onm: 0,
    };
    // let data
    for (let i = 0; i < data.length; i++) {
      if (data[i][0] === "Matrix") _data.matrix = data[i][1];

      if (data[i][0] === "Direction") _data.direction = data[i][1];

      if (data[i][0] === "Tss" || data[i][0] === "TSS") _data.tss = data[i][1];

      if (data[i][0] === "Onm" || data[i][0] === "ONM") _data.onm = data[i][1];
    }

    return _data;
  };

  useEffect(() => {
    fetch(`${url}/api/v2/route/apicalls/getMonthlyMatrix?userid=${userData.id}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        if (data.msg === "ok") {
          console.log(data.data);
          dispatch(
            setMetrics({
              tss: data.data.TSS,
              matrix: data.data.Matrix,
              direction: data.data.Direction,
              onm: data.data.ONM,
            })
          );
        }
      });
  }, [userData, dispatch]);
  const objs = [
    {
      package: "ONM",
      calls: metrics.onm,
    },
    {
      package: "Matrix",
      calls: metrics.matrix,
    },
    {
      package: "Direction",
      calls: metrics.direction,
    },
    {
      package: "Tss",
      calls: metrics.tss,
    },
  ];

  return (
    <div className="flex gap-6 items-stretch flex-wrap">
      <DocCard />

      <div className="flex-1 flex gridgrid-cols-2 flex-wrap gap-6 justify-evenly xs:min-w-[400px] !max-w-full ">
        {objs.map((data, i) => (
          <div
            key={i}
            className="p-4 bg-[#202022] flex-1 text-[#777] rounded-md flex justify-between min-w-full xs:min-w-[40%]"
          >
            <div className="leading-3">
              <h2 className="p-0 m-0">{data.package}</h2>
              <p className="m-0 p-0">endpoint</p>
            </div>
            <div className="flex items-end">
              <h1 className="m-0">{data.calls}</h1>
              <span>Calls</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Usage() {
  return (
    <div className="w-full text-[#ccc] text-child flex flex-wrap gap-4">
      <div className="flex-1 flex flex-col gap-6 max-w-full">
        <APIToken />
        <ApiDetail />
        <Cards />
        <APIUsage />
      </div>
      <div className="flex w-full items-start md:w-auto">
        <BillingHistory />
      </div>
    </div>
  );
}

export default Usage;
