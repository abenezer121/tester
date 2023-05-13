import React from "react";
import { Polygon } from "../Object/Polygon";


function PriceBox(props) {
  const {obj} = props;
  const color0 = obj.colors[0] ? "bg-"+obj.colors[0]+"-700":null;
  return (
    <div className="flex flex-col  bg-white drop-shadow-lg m-1  snap-always snap-center">
      {
        !obj.description 
        ?
        <div className="!text-white font-bold max-w-xs min-w-[170px]">
          <div className={color0+" h-[200px] flex justify-center relative"} style={{backgroundColor: obj.colors[0]}}>
            <div className="flex flex-col justify-center items-center">
              <div className="w-10 h-10">{obj.icon}</div>
              <h2 className="text-white">{obj.title}</h2>
            </div>
            <div className="absolute bottom-0 flex justify-center ">
              <div className="relative flex justify-center items-center translate-y-1/2 w-2/3 ">
                <Polygon className='w-full h-full' color={obj.colors[1]} />
                <div className="absolute z-10">
                  <div className="relative flex justify-center">
                    <h2 className="m-0 text-white">{obj.price}</h2>
                    <sub className="absolute text-[8px] bottom-0 whitespace-nowrap">per month</sub>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="p-6">&nbsp;</h2>
        </div>
        :
        <div className="max-w-xs min-w-[220px]">
          <h2 className="p-4 px-4">{obj.title}</h2>
          <p className="px-4 h-[200px] overflow-y-auto text-gray-600">
            {obj.description}
          </p>
        </div>
      }
      <div className={(obj.description ? null : "text-center")+" h-[200px] overflow-y-auto text-gray-600"}>
        {
          obj.features.map((value,i) => {
            return i % 2 === 0 ? (
              <div key={i} className="px-4 p-1 min-h-[35px]">{value}</div>
            ) : (
              <div key={i} className="px-4 p-1 min-h-[35px] bg-gray-300">{value}</div>
            )
          })
        }
      </div>
      <div className="flex justify-center p-5">
        {obj.footer}
      </div>
    </div>
  )
}

export default PriceBox;