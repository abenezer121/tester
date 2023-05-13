import { DatePicker, Select } from "antd";
import { CopyOutlined, DeleteFilled, SyncOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./../../../redux/reducers/user";
import { url } from "./../../../data/url";
import ClipLoader from "react-spinners/ClipLoader";
import Modal from "./../../../features/Modal/index";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { setMetrics } from "./../../../redux/reducers/metrics";
const { Option } = Select;
const { RangePicker } = DatePicker;

function Index() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  const [selectedGraph, setSelected] = useState("All");

  useEffect(() => {
    fetch(`${url}/api/v1/route/apicalls/getDataForGraph?id=${userData.id}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        if (data.msg == "ok") {
          let _data = [];
          let _label = [];
          console.group(data.data);
          let dataa = getAll(data.data);

          for (let i = 0; i < dataa.length; i++) {
            try {
              let str =
                dataa[i][0].substring(0, 4) +
                "-" +
                dataa[i][0].substring(4, 6) +
                "-" +
                dataa[i][0].substring(6, 8);
              _label.push(str);
              _data.push(dataa[i][1]);
            } catch (err) {}
          }

          setLabels(_label);
          setData(_data);
        }
      });
  }, [selectedGraph]);

  useEffect(() => {
    fetch(`${url}/api/v1/route/apicalls/getDataForGraph?id=${userData.id}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        if (data.msg == "ok") {
          let _data = [];
          let _label = [];

          let dataa = getAll(data.data);
          for (let i = 0; i < dataa.length; i++) {
            try {
              let str =
                dataa[i][0].substring(0, 4) +
                "-" +
                dataa[i][0].substring(4, 6) +
                "-" +
                dataa[i][0].substring(6, 8);
              _label.push(str);
              _data.push(dataa[i][1]);
            } catch (err) {}
          }
          setLabels(_label);
          setData(_data);
        }
      });
  }, []);

  const getAll = (data) => {
    let Ldata = [];
    if (selectedGraph != "All") {
      var map = new Object();

      for (let i = 0; i < data.length; i++) {
        if (data[i][0] == selectedGraph) {
          if (map[data[i][1]] == undefined) {
            map[data[i][1]] = data[i][2];
          } else {
            data[i][1] = data[i][2] + map[data[i][1]];
          }
        }
      }
      for (const [key, value] of Object.entries(map)) {
        Ldata.push([key, value]);
      }
      return Ldata;
    } else {
      var map = new Object();
      for (let i = 0; i < data.length; i++) {
        if (map[data[i][1]] == undefined) {
          map[data[i][1]] = data[i][2];
        } else {
          map[data[i][1]] = data[i][2] + map[data[i][1]];
        }
      }

      for (const [key, value] of Object.entries(map)) {
        Ldata.push([key, value]);
      }
      return Ldata;
    }
  };

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

        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div className="sw py-4 flex flex-col gap-10  h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          metricsname={"Direction API CALL METER"}
          metricsnumber={metrics.direction}
        />
        <Card
          metricsname={"One to Many API CALL METER"}
          metricsnumber={metrics.onm}
        />
        <Card
          metricsname={"Route Optimization API CALL METER"}
          metricsnumber={metrics.tss}
        />
        <Card
          metricsname={"Matrix API CALL METER"}
          metricsnumber={metrics.matrix}
        />
      </div>

      <div>
        <h2 className="text-white">Usage Statistics</h2>
        <div className="flex items-center text-white gap-3">
          {/* <Select defaultValue="All Api Keys" className="btn-sty1 !rounded-full">
            <Option value="All Api Keys">All Api Keys</Option>
            <Option value="Free Public Keys">Free Public Keys</Option>
          </Select>
          <span>For</span> */}
          <Select
            defaultValue={selectedGraph}
            onSelect={(value, event) => {
              setSelected(value);
            }}
          >
            <Option value="All">All</Option>
            <Option value="Direction">Direction</Option>
            <Option value="ONM">ONM</Option>
            <Option value="Matrix">Matrix</Option>
            <Option value="TSS">TSS</Option>
          </Select>
          <span>From</span>
          <RangePicker
            onChange={(value, dateString) => {
              // const [labels, setLabels] = useState([])
              // const [data , setData] = useState([])

              let starter = dateString[0].split("-");
              let end = dateString[1].split("-");

              var from = new Date(
                starter[0],
                parseInt(starter[1]) - 1,
                starter[2]
              ); // -1 because months are from 0 to 11
              var to = new Date(end[0], parseInt(end[1]) - 1, end[2]);

              fetch(
                `${url}/api/v1/route/apicalls/getDataForGraph?id=${userData.id}`
              )
                .then((data) => {
                  return data.json();
                })
                .then((data) => {
                  if (data.msg == "ok") {
                    let _data = [];
                    let _label = [];

                    let dataa = getAll(data.data);

                    for (let i = 0; i < dataa.length; i++) {
                      try {
                        let str =
                          dataa[i][0].substring(0, 4) +
                          "-" +
                          dataa[i][0].substring(4, 6) +
                          "-" +
                          dataa[i][0].substring(6, 8);
                        let dateFromData = str.split("-");
                        var check = new Date(
                          dateFromData[0],
                          parseInt(dateFromData[1]) - 1,
                          dateFromData[2]
                        );
                        if (check > from && check < to) {
                          _label.push(str);
                          _data.push(dataa[1]);
                        }
                      } catch (err) {}
                    }

                    setLabels(_label);
                    setData(_data);
                  }
                });
            }}
          />
        </div>
      </div>
      <div className="text-white  ">
        {/* <h2 className="text-white mb-0">Sep, 09 - 22 2022</h2>
        <span className="lowercase mb-4 inline-block">ALL DATES START AT 00:00 ETHIOPIAN LT</span> */}
        <div className="border border-dashed rounded-md border-white p-10 flex items-center justify-center sm:h-[200px] md:h-[200px] lg:h-[600px]">
          {data.length > 0 ? (
            <Line options={options} data={datas} />
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

export default Index;
