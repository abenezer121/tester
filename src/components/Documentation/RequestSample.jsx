import React, { useState } from 'react'

const RequestSample = (props) => {
  const [requestLanguage, setRequestLanguage] = useState(0)
  const handlerequestLanguage = (i) => setRequestLanguage(i)
  return (
  <div>
    <p className='mt-[2%] mx-[5%] font-bold text-xl'>Request samples</p>
    <div className='flex mx-[5%] space-x-2 mt-[1%]'>
      <p className={requestLanguage === 0 ? 'bg-white px-2 py-1 text-black rounded-md' : 'bg-[#11171a] px-2 py-1 rounded-md'} onClick={() => { handlerequestLanguage(0) }}>Curl</p>
      <p className={requestLanguage === 1 ? 'bg-white px-2 py-1 text-black rounded-md' : 'bg-[#11171a] px-2 py-1 rounded-md'} onClick={() => handlerequestLanguage(1)}>JavaScript</p>

    </div>
    <div className='bg-[#11171a] mx-[5%] mt-[2%] py-[1%] mb-[1%]'>
      {
        requestLanguage === 0 ? <p className='mx-[2%] space-x-2 overflow-x-auto pb-[1%]'>{props.curl}</p> :
          <p className='mx-[2%] mt-[2%] space-x-2 overflow-x-scroll pb-[1%] flex flex-col'>{props.js.map((data) => {
            return data
          })}</p>
      }


    </div>
  </div>)
}

export default RequestSample