import React from "react";
import { Link } from "react-router-dom";


function About() {
  return (
    <div className="bg-dark min-h-screen flex justify-center">
      <div className="sw flex flex-col gap-4 py-6 max-w-[700px]">
        <h4 className="text-slate-400 "><Link to="/" className="text-slate-200">Home</Link> / About</h4>
        <div className="flex-1 flex flex-col gap-4 p-10 card rounded-md bg-[#202022]">
          <div>
            <h2 className="m-0 text-[#aaa]">Introduction</h2>
            <p>With the GebetaMaps Directions API you can integrate A-to-B route planning, turn-by-turn navigation, route optimization, isochrone calculations, and other tools in your application.</p>
            <div className="py-3 flex gap-4 items-center">
              <a href="/documentation#routeEP" className="btn_sty1 sml bg-secondary/40">Routing API</a>
              <a href="/documentation#matrixEP" className="btn_sty1 sml ">Matrix API</a>
              <a href="/documentation#routeEP" className="btn_sty1 sml ">Route Optimization API</a>
              <a href="/documentation#geoEP" className="btn_sty1 sml ">Geocoding API</a>
            </div>
          </div>
          <hr className="border-[#555] my-1" />
          <div>
            <h2 className="m-0 text-[#aaa]">Getting Started</h2>
            <div className="py-3 flex gap-4 items-center">
              <Link to="/#" className="btn_sty1 sml bg-secondary/40">Signup for gebeta maps</Link>
              <Link to="/#" className="btn_sty1 sml ">Create an API key</Link>
            </div>
            <p>
              Each API part has its own documentation. Jump to the desired API part and learn about the API through the given examples and tutorials. In addition, for each API there are specific sample requests that you can send via Insomnia or Postman to see what the requests and responses look like.
            </p>
          </div>
          <div>
            <h2 className="m-0 text-[#aaa]">About Us</h2>
            <p>Welcome to Gebeta Maps, your go-to provider of mapping and location-based services.</p>
            <p>Founded in 2021 by a team of experienced professionals in the field, we have a mission to make accurate and reliable GIS and map-related services more accessible and affordable for individuals and businesses. Our flagship offering is a suite of APIs that provide a range of mapping and location-based services, including geocoding, directions, matrix calculations, route optimization, and one-to-many calculations. Our APIs are easy to use and integrate with other software, making them a popular choice among developers and businesses.</p>
            <p>At Gebeta Maps, we use state-of-the-art mapping technology and data processing algorithms to create maps that are accurate to within inches, and we are constantly innovating to improve our services. Our team of experts work together to push the boundaries of what's possible with mapping and location technology.</p>
            <p>With our headquarters in Ethiopia, Addis Ababa, and a strong focus on the African market, Gebeta Maps is well-positioned to serve customers in this region. Our services are now available in Nigeria and other African countries, making us a pan-African player in the mapping and location services industry.</p>
            <p>We offer four different pricing plans based on usage and preferences: Starter, Business, Professional, and Premium. Our APIs can be used in a variety of applications, such as navigation and route planning, real-time traffic updates, and location-based advertising.  We are also in talks with companies in Nigeria, Kenya, and other African countries to start providing our services there as well.</p>
            <p>At Gebeta Maps, we are committed to innovation, reliability, and customer service. We believe that by providing accurate, reliable, and easy-to-use mapping and location services, we can make a real difference in the lives and operations of individuals and businesses around the world. Thank you for choosing Gebeta Maps. Let's map the world together.</p>
          </div>
        </div>
      </div>
    </div>
  )
}



export default About;