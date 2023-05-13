import React, {useState, useContext, useCallback, useEffect} from 'react';
import {io} from 'socket.io-client'
import Direction from '../../components/Documentation/Direction';
import { SocketContext , socket } from '../../components/context/socket';
import L from "leaflet";
import {
    MapContainer,
    TileLayer,
    useMap,
    Polyline,
    useMapEvents,
    Marker,
    Popup,
    Polygon,
    FeatureGroup,
    EditControl,
  } from "react-leaflet";
  const uuidv4 = require('uuid').v4;

  function GpsData(){
    return <p></p>
  }

function GpsGetter() {
    const [time, setTime] = React.useState('fetching') 
    const [default_latitude , setDefaultLatitude] = React.useState(9.02151)
    const [default_longitude , setDefaultLongitude] = React.useState(38.80115)
    const [gpslatitude , setGpsLatitude] = React.useState(null)
    const [gpslongitude , setGpsLongitude] = React.useState(null)
    const [socket, setSocket]= useState(useContext(SocketContext));

    const RedIcon = L.icon({
        iconUrl: require("./../../components/Documentation/red.png"),
        iconRetinaUrl: require("./../../components/Documentation/red.png"),
        iconAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: [35, 35],
        className: "leaflet-venue-icon",
      });


    React.useEffect(()=>{
  
        socket.on('connect', ()=>{
          console.log("connection made")
         
     
        })
        socket.on('connect_error', ()=>{
          setTimeout(()=>socket.connect(),5000)
        }) 
        
        
        socket.on("messageResponse",data =>{

          setDefaultLatitude(data.latitude)
          setDefaultLongitude(data.longitude)
          //the gps data
          setGpsLatitude(data.latitude)
          setGpsLongitude(data.longitude)
    })
      
      socket.on('disconnect',()=>setTime('server disconnected'))

  
 },[])

 
 function SetViewOnClick({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
  
    return null;
  }

  const dodofunction = () => {
    //assign this to use list
    socket.emit("sendsms" , { phone : "0929111582"})
  }


return  (
    <div className=" w-full bg-white">
      <button onClick={dodofunction}>Send the link</button>
      
    <main className="ml-[5%] mt-[3%]">
        <p>Getting Gps Data</p>
        <p>Latitude -- {gpslatitude}</p>
        <p>Longitude -- {gpslongitude}</p>
      <div className=' w-[90%] h-[500px] bg-red-200' >
      <div className="leaflet-container">
      <MapContainer center={[default_latitude, default_longitude]} zoom={15}>

        {
          default_latitude != null  ?  <SetViewOnClick
          coords={[
              default_latitude,
              default_longitude
          ]}/> : ""
        }
     
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {
            gpslatitude != null && gpslongitude != null ?
            <Marker icon={RedIcon} position={[default_latitude ,default_longitude ]}/> : ""

        }
      
      </MapContainer>
        </div>
      </div> 
    </main>
  </div>
    
    );
}

export default GpsData;




