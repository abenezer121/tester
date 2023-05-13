import { tss } from "../../data/index";
import React, { useState, useEffect } from "react";
import ApiDetail from "../../components/Account/ApiDetail";
import APIToken from "../../components/Account/ApiToken";
import BillingHistory from "../../components/Account/BillingHistory";
import DocCard from "../../components/Account/DocCard";
import { useSelector, useDispatch } from "react-redux";
import { setTssData } from "./../../redux/reducers/tssData";
import Notify from "./../../components/Notify";
import { jsPDF } from "jspdf";
import ManualLoc from "../../components/Account/ManualLoc";

function OnDemand() {
  const { tssData } = useSelector((state) => state.tssData);
  const [notify, setNotify] = useState({ visible: false });
  const [driverName, setDriverName] = useState("Unknown Driver");
  const { userData } = useSelector((state) => state.user);
  const [bestOrder, setBestOrder] = useState(null);
  const [totalTime, setTotalTime] = useState(null);
  const [totalDistance, setTotalDistance] = useState(null);
  const [selectedGenerated, setSelectedGenerated] = useState("Pdf");
  const [csv, setCsv] = useState("");
  const [showModal, setShowModal] = React.useState(false);
  const [message, setMessage] = React.useState("Failed");

  const dispatch = useDispatch();

  const tssLimit = 10;

  const handleDriverName = (e) => setDriverName(e.target.value);

  useEffect(() => {
    document.addEventListener("click", () => {
      setShowModal(false);
    });
  });
  let addLocation = () => {
    if (tssData.length < tssLimit) {
      const newData = [...tssData];
      const ds = {
        id: Date.now(),
        longitude: "",
        latitude: "",
        placename: "",
      };
      newData.push(ds);

      dispatch(setTssData(newData));
    } else {
      setNotify({
        visible: true,
        msg: "Sorry can not create more",
        type: "Sorry can not create more",
      });
    }
  };

  let handleCalculate = async () => {
    if (tssData.length < 2) {
      setNotify({
        visible: true,
        msg: "Please Enter More Amount",
        type: "Sorry can not create more",
      });
    } else {
      let error = false;

      for (let i = 0; i < tssData.length; i++) {
        if (
          tssData[i].latitude.trim() === "" ||
          tssData[i].longitude.trim() === ""
        ) {
          error = true;
        }
      }
      if (error) {
        setNotify({
          visible: true,
          msg: "Invalid Input",
          type: "Sorry can not create more",
        });
      } else {
        let gmarker = [];
        for (let i = 0; i < tssData.length; i++) {
          gmarker.push({
            lat: tssData[i].latitude,
            lng: tssData[i].longitude,
          });
        }
        //call tss

        tss(gmarker, userData.token)
          .then((n) => {
            // timetaken
            // totalDistance
            setShowModal(true);
            setMessage("Success");
            setTotalTime(n.timetaken);
            setTotalDistance(n.totalDistance);
            setBestOrder(n);
          })
          .catch((err) => {
            setShowModal(true);
            setMessage("Failed");
          });
      }
    }
  };

  var generateData = function () {
    var result = [];
    let best = bestOrder.bestorder;
    for (let i = 0; i < best.length; i++) {
      var data = {
        placename: "placename",
        latitude: "latitude",
        longitude: "longitude",
      };
      data.id = (i + 1).toString();
      data.placename =
        tssData[best[i]].placename.trim() == ""
          ? "Unknown Place"
          : tssData[best[i]].placename;
      data.latitude = tssData[best[i]].latitude;
      data.longitude = tssData[best[i]].longitude;
      result.push(Object.assign({}, data));
    }

    return result;
  };

  function createHeaders(keys) {
    var result = [];
    for (var i = 0; i < keys.length; i += 1) {
      result.push({
        id: keys[i],
        name: keys[i],
        prompt: keys[i],
        width: 65,
        align: "center",
        padding: 0,
      });
    }
    return result;
  }

  let handleGenerate = () => {
    var headers = createHeaders(["id", "placename", "latitude", "longitude"]);
    const doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "portrait" });
    doc.text("Driver Name", 10, 40);
    doc.text(driverName, 60, 40);
    doc.text("Total Distance", 10, 60);
    doc.text(totalDistance.toString(), 60, 60);
    doc.table(10, 80, generateData(), headers, { autoSize: true });

    doc.save("tss.pdf");
    setShowModal(false);
  };

  let loadCsv = (ev) => {
    let fileReader = new FileReader();
    fileReader.onload = function () {
      let arr = [];
      fileReader.result.split("\r\n").map((data, i) => {
        let row = data.split(",");
        if (i < tssLimit) {
          arr.push({
            id: row[0],
            longitude: row[1],
            latitude: row[2],
            placename: row[3],
          });
        }
        return null;
      });
      // console.log(arr);
      dispatch(setTssData(arr));
    };
    let val = ev.target.value.split("\\");

    setCsv(val[val.length - 1]);
    fileReader.readAsText(ev.target.files[0]);
  };

  return (
    <div className="w-full text-[#ccc] text-child flex flex-wrap gap-6">
      <div className="flex-1 flex flex-col gap-6 max-w-full">
        <APIToken />
        <ApiDetail />
        <div className="flex flex-col gap-6">
          <div className="flex gap-6 items-stretch flex-wrap">
            <DocCard />
            <Notify value={notify} />
            <div className="flex-1 flex flex-col  gap-7 text-[#777] max-w-full ">
              <div className="gap-4 flex h-1/2 text-[#777]  max-w-full ">
                <div className="leading-3 flex-1 flex flex-wrap gap-3 p-4 rounded-md bg-[#202022] max-w-full">
                  <div className="">
                    <input
                      type="file"
                      accept="csv"
                      style={{ display: "none" }}
                      id="csvUpl"
                      name="csv"
                      onChange={loadCsv}
                    />
                    <h2 className="p-0 m-0 uppercase ">Upload File</h2>
                    <p className="m-0 p-0">CSV</p>
                  </div>
                  <div className="flex flex-1 items-stretch">
                    <input
                      type="text"
                      value={csv || ""}
                      disabled
                      className="flex-1 bg-[#181818] px-3 py-2 border-0"
                    />
                    <input
                      type="submit"
                      value="Browse"
                      onClick={() => document.querySelector("#csvUpl").click()}
                      className="btn_sty1  font-bold !bg-btnprimary/40 !text-btnprimary !border-btnprimary/10"
                    />
                  </div>
                </div>
              </div>
              <div className="leading-3 h-1/2 flex gap-3 p-4  rounded-md bg-[#202022] ">
                <div className="">
                  <h2 className="p-0 m-0 uppercase ">Driver</h2>
                  <p className="m-0 p-0">optional</p>
                </div>
                <div className="flex flex-1 items-stretch">
                  <input
                    type="text"
                    value={driverName}
                    onChange={(e) => handleDriverName(e)}
                    className="flex-1 bg-[#181818] px-3 border-0"
                  />
                </div>
              </div>
            </div>
          </div>

          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl ">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}

                    {/*body*/}
                    <div className="relative p-6 flex-auto bg-[#1a1f32]">
                      {message == "Success" ? (
                        <p className="text-center my-4 text-green-500 text-lg leading-relaxed">
                          {message}
                        </p>
                      ) : (
                        <p className="text-center my-4 text-red-500 text-lg leading-relaxed">
                          {message}
                        </p>
                      )}

                      {/* <button
                  className=" text-white-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Generate Result
                </button> */}

                      <input
                        type="submit"
                        onClick={handleGenerate}
                        value="Generate"
                        className="btn_sty1 flex-1 !text-2xl font-bold !bg-btnprimary/40 !text-btnprimary !border-btnprimary/10"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}

          {/* Manual Entry */}
          <div className="flex gap-4 items-start flex-wrap">
            <div className="flex flex-1 gap-4 items-start flex-wrap">
              <div className="flex flex-col flex-1 gap-4">
                {tssData.map((n, i) =>
                  n ? <ManualLoc key={n.id} data={n} index={n.id} /> : null
                )}
              </div>
              <input
                type="submit"
                value="+"
                onClick={addLocation}
                className="btn_sty1 self-end !font-extrabold self-end !text-2xl !px-6 rounded-md !bg-btnprimary/40 !text-btnprimary !border-btnprimary/10"
              />
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            <div className="leading-3 flex-1  flex gap-3 p-4 rounded-md bg-[#202022] ">
              <div className="">
                <h2 className="p-0 m-0 uppercase ">Export</h2>
                <p className="m-0 p-0">Type</p>
              </div>
              <input
                type="submit"
                value="PDF"
                onClick={() => {
                  setSelectedGenerated("Pdf");
                }}
                className={
                  selectedGenerated === "Pdf"
                    ? "btn_sty1 !bg-btnprimary !border-btnprimary"
                    : "btn_sty1 !bg-[#181818] !border-[#181818]"
                }
              />
              <input
                type="submit"
                value="CSV"
                disabled
                onClick={() => {
                  setSelectedGenerated("Csv");
                }}
                className={
                  selectedGenerated === "Csv"
                    ? "btn_sty1 !bg-btnprimary !border-btnprimary"
                    : "btn_sty1 !bg-[#181818] !border-[#181818]"
                }
              />
              <input
                type="submit"
                value="JSON"
                disabled
                onClick={() => {
                  setSelectedGenerated("Json");
                }}
                className={
                  selectedGenerated === "Json"
                    ? "btn_sty1 !bg-btnprimary !border-btnprimary"
                    : "btn_sty1 !bg-[#181818] !border-[#181818]"
                }
              />
            </div>

            <input
              type="submit"
              onClick={handleCalculate}
              value="Calculate"
              className="btn_sty1 flex-1 !text-2xl font-bold !bg-btnprimary/40 !text-btnprimary !border-btnprimary/10"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full items-start md:w-auto">
        <BillingHistory />
      </div>
    </div>
  );
}

export default OnDemand;
