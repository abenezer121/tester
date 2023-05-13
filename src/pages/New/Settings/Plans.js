// import { Box, Slider } from '@mui/material';
import { Slider } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Plans() {
  const [marks, setMarks] = useState({});
  const minMark = 0,
    maxMark = 200000;

  const { userData } = useSelector((state) => state.user);
  const plans = useSelector((state) => state.plan.plan);
  const choosedPlan = useSelector((state) => state.choosedPlan.choosed);

  // change this everytime price changed
  const [starter, setStarter] = useState(100000);
  const [business, setBusiness] = useState(500001);
  const [professional, setProfessional] = useState(1000001);
  const [premium, setPremium] = useState(1500001);

  const [showLoading, setShowLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      if (plans.length == 0) {
        fetch(`${url}/api/v1/plan/getAllPlans`)
          .then((data) => {
            return data.json();
          })
          .then((data) => {
            if (data.msg == "ok") {
              dispatch(setPlan(data.data));
            }
          });
      }
    } catch (err) {}
  }, []);

  const returnMarks = (minMark, maxMark) => {
    const ret = 700000;
    let marks = {};

    for (let i = minMark; i <= maxMark; i += parseInt(maxMark / 2)) {
      marks[i] = {
        style: {
          color: "white",
        },
        label: <span className="text-white">{i}</span>,
      };
      // marks.push({
      //   value: i,
      //   style: {
      //     color: 'red'
      //   },
      //   label: <span classNme='text-white'>{i}</span>
      // })
    }

    setMarks(marks);
  };

  const returnApiCall = (position) => {
    if (position == 0) {
      return (
        <>
          {starter} <br />
          API_CALLS
        </>
      );
    } else if (position == 1) {
      return (
        <>
          {business} <br />
          API_CALLS{" "}
        </>
      );
    } else if (position == 2) {
      return (
        <>
          {professional} <br />
          API_CALLS{" "}
        </>
      );
    } else if (position == 3) {
      return (
        <>
          {premium} <br />
          API_CALLS{" "}
        </>
      );
    }
  };

  const returnApiCost = (position) => {
    if (position == 0) {
      return <div> ETB {(starter * (80 / 1000)).toFixed(2)}</div>;
    } else if (position == 1) {
      return <div> ETB {(business * (68 / 1000)).toFixed(2)}</div>;
    } else if (position == 2) {
      return <div> ETB {(professional * (52 / 1000)).toFixed(2)}</div>;
    } else if (position == 3) {
      return <div> ETB {(premium * (40 / 1000)).toFixed(2)}</div>;
    }
  };
  const percentOff = ["15% off", "35% off", "50% off"];
  return (
    <div className="sw py-10 text-white">
      <div className="flex justify-around">
        <div className="flex-1">
          <h3 className="text-white">Price Plans</h3>
        </div>
        <div className="w-[86px] flex justify-center">
          <h3 className="text-white">COST</h3>
        </div>
      </div>

      {/* Plans */}

      <hr className=" border-gray-500" />
      <div className="flex flex-wrap ">
        <div className="w-full md:flex-1  flex flex-col gap-3 py-3 pb-6">
          <div className="flex gap-2 items-center">
            <h2 className="text-white uppercase my-auto !self-center">
              Starter Package
            </h2>
            {/* <Link to="/documentation#" className='btn-sty2'>Doc</Link> */}
          </div>
          <div className="flex gap-2">
            <div className="text-white border-l-2 border-white p-2">
              <span>ETB80 PER Thousand Calls</span>
            </div>
            {/* <Link to="/" className='btn-sty2'>Choose Plan</Link> */}
          </div>
        </div>

        {/* Range */}
        <div className="flex-1 flex items-center px-4 gap-3">
          <Slider
            included={false}
            marks={marks}
            defaultValue={1000000}
            min={minMark}
            max={maxMark}
            className="w-full"
          />
          <div className="grow px-6 text-center">
            123123 <br />
            API_CALLS
          </div>
        </div>

        <div className="bg-[#252B43] flex items-center justify-center p-8 w-[86px]">
          ETB_123123
        </div>
      </div>

      <hr className=" border-gray-500" />
      <div className="flex flex-wrap ">
        <div className="w-full md:flex-1  flex flex-col gap-3 py-3 pb-6">
          <div className="flex gap-2 items-center">
            <h2 className="text-white uppercase my-auto !self-center">
              Business Package
            </h2>
            {/* <Link to="/documentation#" className='btn-sty2'>Doc</Link> */}
          </div>
          <div className="flex gap-2">
            <div className="text-white border-l-2 border-white p-2">
              <span>ETB68 PER Thousand Calls</span>
            </div>
            {/* <Link to="/" className='btn-sty2'>Choose Plan</Link> */}
            {/* <Link to="/" className='btn-sty2 !bg-green-500'>15% OFF</Link> */}
          </div>
        </div>

        {/* Range */}
        <div className="flex-1 flex items-center px-4 gap-3">
          <Slider
            included={false}
            marks={marks}
            defaultValue={1000000}
            min={minMark}
            max={maxMark}
            className="w-full"
          />
          <div className="grow px-6 text-center">
            123123 <br />
            API_CALLS
          </div>
        </div>

        <div className="bg-[#252B43] flex items-center justify-center p-8 w-[86px]">
          ETB_123123
        </div>
      </div>

      <hr className=" border-gray-500" />
      <div className="flex flex-wrap ">
        <div className="w-full md:flex-1  flex flex-col gap-3 py-3 pb-6">
          <div className="flex gap-2 items-center">
            <h2 className="text-white uppercase my-auto !self-center">
              Professional Package
            </h2>
            {/* <Link to="/documentation#" className='btn-sty2'>Doc</Link> */}
          </div>
          <div className="flex gap-2">
            <div className="text-white border-l-2 border-white p-2">
              <span>ETB52 PER Thousand Calls</span>
            </div>
            {/* <Link to="/" className='btn-sty2'>Choose Plan</Link> */}
            {/* <Link to="/" className='btn-sty2 bg-green-500'>30% OFF</Link> */}
          </div>
        </div>

        {/* Range */}
        <div className="flex-1 flex items-center px-4 gap-3">
          <Slider
            included={false}
            marks={marks}
            defaultValue={1000000}
            min={minMark}
            max={maxMark}
            className="w-full"
          />
          <div className="grow px-6 text-center">
            123123 <br />
            API_CALLS
          </div>
        </div>

        <div className="bg-[#252B43] flex items-center justify-center p-8 w-[86px]">
          ETB_123123
        </div>
      </div>

      <hr className=" border-gray-500" />
      <div className="flex flex-wrap ">
        <div className="w-full md:flex-1  flex flex-col gap-3 py-3 pb-6">
          <div className="flex gap-2 items-center">
            <h2 className="text-white uppercase my-auto !self-center">
              Premium Package
            </h2>
            {/* <Link to="/documentation#" className='btn-sty2'>Doc</Link> */}
          </div>
          <div className="flex gap-2">
            <div className="text-white border-l-2 border-white p-2">
              <span>ETB 40 PER Thousand Calls</span>
            </div>
            {/* <Link to="/" className='btn-sty2'>Choose Plan</Link> */}
            {/* <Link to="/" className='btn-sty2 bg-green-500'>50% OFF</Link> */}
          </div>
        </div>

        {/* Range */}
        <div className="flex-1 flex items-center px-4 gap-3">
          <Slider
            included={false}
            marks={marks}
            defaultValue={1000000}
            min={minMark}
            max={maxMark}
            className="w-full"
          />
          <div className="grow px-6 text-center">
            123123 <br />
            API_CALLS
          </div>
        </div>

        <div className="bg-[#252B43] flex items-center justify-center p-8 w-[86px]">
          ETB_123123
        </div>
      </div>
    </div>
  );
}

export default Plans;
