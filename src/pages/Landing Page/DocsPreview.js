import React from "react";
import { Link } from "react-router-dom";
import GeoImage from '../../assets/images/docs/geocoding.jpg'
import DEPImage2 from '../../assets/images/docs/direction2.png'
import MatrixImg from '../../assets/images/docs/matrix.png'
import RouteImage from '../../assets/images/docs/route.png'



function DirectionEndPoint() {
  return (
    <div className="p-4 flex flex-wrap gap-3">
      <div className="max-w-full relative">
        <div className="bg-white max-w-full w-[400px] h-52 flex overflow-x-auto z-0 snap-x snap-mandatory relative">
          <img alt="Direction Endpoint" src={DEPImage2} className='min-w-full h-full snap-start' />
        </div>
        <h3 className="bg-[#19191a] p-2 !text-gray-400 border border-gray-800 ">
          Direction Endpoint
        </h3>
      </div>
      <div className="max-w-[400px] p-10">
        <p className='text-white'>
          You can find directions to your destination using the Gebeta Directions API. Using the Directions API, you can determine the best route to take.
        </p>
        <Link to="/documentation#directionEP" className="btn_sty1">Documentation</Link>
      </div>
    </div>
  )
}
function GeoCodingEndPoint() {
  return (
    <div className="p-4 flex flex-wrap flex-row-reverse gap-3">
      <div className="max-w-full">
        <div className="bg-white max-w-full w-[400px] h-52">
          <img alt="Geocoding Endpoint" src={GeoImage} className='w-full h-full' />
        </div>
        <h3 className="bg-[#19191a] p-2 !text-gray-400 border border-gray-800">
          GeoCoding Endpoint
        </h3>
      </div>
      <div className="max-w-[400px] p-10">
        <p className='text-white'>
        You can forward geocode using the Gebeta Geocoding API, which converts text queries like "Bole Edna Mall" into longitude and latitude coordinates.
        </p>
        <Link to="/documentation#geoEP" className="btn_sty1">Documentation</Link>
      </div>
    </div>
  )
}
function RouteOptimization() {
  return (
    <div className="p-4 flex flex-wrap gap-3">
      <div className="max-w-full">
        <div className="bg-white max-w-full w-[400px] h-52">
          <img alt="Route Endpoint" src={RouteImage} className='w-full h-full' />
        </div>
        <h3 className="bg-[#19191a] p-2 !text-gray-400 border border-gray-800">
          Route Optimization Endpoint
        </h3>
      </div>
      <div className="max-w-[400px] p-10">
        <p className='text-white'>
          The Gebeta Optimization API returns a path between the input coordinates that is optimized. Planning the route for delivery in a city is a common use case for the Optimization API.
        </p>
        <Link to="/documentation#routeEP" className="btn_sty1">Documentation</Link>
      </div>
    </div>
  )
}
function MatrixEndPoint() {
  return (
    <div className="p-4 flex flex-wrap flex-row-reverse gap-3">
      <div className="max-w-full">
        <div className="bg-white max-w-full w-[400px] h-52">
          <img alt="Matrix Endpoint" src={MatrixImg} className='w-full h-full' />
        </div>
        <h3 className="bg-[#19191a] p-2 !text-gray-400 border border-gray-800">
          Matrix Endpoint
        </h3>
      </div>
      <div className="max-w-[400px] p-10">
        <p className='text-white'>
          By using the Gebeta Matrix API, you may choose the most efficient path between several places.
        </p>
        <Link to="/documentation#matrixEP" className="btn_sty1">Documentation</Link>
      </div>
    </div>
  )
}


function DocsPreview() {
  return (
    <section className="pt-20" id='docpreview'>
      <div className="flex flex-col bg1 items-center">
        <div className="sw flex justify-center text-white text-child">
          <div className="flex flex-col max-w-full gap-44">
            <DirectionEndPoint />
            <GeoCodingEndPoint />
            <RouteOptimization />
            <MatrixEndPoint />
          </div>
        </div>
      </div>
      <div className="p-4 flex justify-center gap-3">
        <div className="sw relative bg_locVector h-[200px] sm:h-[350px]">
          {/* <img src={LocVector} className="inline-flex !w-full !h-full" alt='Location Vector' /> */}
        </div>
      </div>
    </section>
)
}

export default DocsPreview;