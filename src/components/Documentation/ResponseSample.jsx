import React, { useState } from "react";

const ResponseSample = ({ responseCodes200, responseCodes400, responseCodes500 }) => {
  const [responseNumber, setResponseLanguage] = useState(0)
  const handleresponseNumber = (i) => setResponseLanguage(i)

  const returnResponse = () => {
    if (responseNumber === 0) {
      return responseCodes200.map((item, index) => {
        return <span key={index}>{item}</span>;
      })
    }
    else if (responseNumber === 1) {
      return responseCodes400.map((item, index) => {
        return <span key={index}>{item}</span>;
      })
    }
    else if (responseNumber === 2) {
      return responseCodes500.map((item, index) => {
        return <span key={index}>{item}</span>;
      })
    }
  }
  return (
    <>
      <p className='mt-[2%] mx-[5%] font-bold text-xl rounded-md '>Response samples</p>
      <div className='flex mx-[5%] space-x-2 mt-[1%] rounded-md text-red-200'>
        <p className={responseNumber === 0 ? 'bg-white px-2 py-1 text-black rounded-md rounded-md text-green-600' : 'bg-[#11171a] px-2 py-1 text-black rounded-md rounded-md text-green-600'} onClick={() => { handleresponseNumber(0) }}>200</p>
        <p className={responseNumber === 1 ? 'bg-white px-2 py-1 rounded-md rounded-md text-red-600' : 'bg-[#11171a] px-2 py-1 rounded-md rounded-md text-red-600'} onClick={() => { handleresponseNumber(1) }}>400</p>
        <p className={responseNumber === 2 ? 'bg-white px-2 py-1 rounded-md rounded-md text-red-600' : 'bg-[#11171a] px-2 py-1 rounded-md rounded-md text-red-600'} onClick={() => { handleresponseNumber(2) }}>500</p>
      </div>
      <div className='bg-[#11171a] mx-[5%] mt-[2%] py-[1%] mb-[1%]'>

        <div className='mx-[2%] mt-[2%] space-x-2 overflow-x-auto pb-[1%] flex flex-col'>
          {returnResponse()}


        </div>
      </div>
    </>
  );
}

export default ResponseSample