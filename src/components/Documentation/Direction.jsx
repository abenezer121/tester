import {
  MapContainer,
  TileLayer,
  Polyline,
  useMapEvents,
  Marker,
  Popup,
  Polygon,
  FeatureGroup,
  EditControl,
} from "react-leaflet";
import { useState } from "react";
import { direction } from "./../../data/index";
import red from "./red.png";
import green from "./green.png";
import L from "leaflet";
import { setUser } from "./../../redux/reducers/user";
import { useSelector, useDispatch } from "react-redux";
const default_latitude = 9.02151;
const default_longitude = 38.80115;

function AddMarkerToClick() {
  const [rmarker, redMarker] = useState([]);
  const [gmarker, greenMarker] = useState([]);

  const [pos, setPos] = useState([]);
  const [l1, setL1] = useState("");
  const [lo1, setLO1] = useState("");
  const { userData } = useSelector((state) => state.user);
  const RedIcon = L.icon({
    iconUrl: require("./red.png"),
    iconRetinaUrl: require("./red.png"),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: "leaflet-venue-icon",
  });

  const GreenIcon = L.icon({
    iconUrl: require("./green.png"),
    iconRetinaUrl: require("./green.png"),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: "leaflet-venue-icon",
  });

  const map = useMapEvents({
    async click(e) {
      const newMarker = e.latlng;
      if (l1 == "") {
        setL1(newMarker.lat);
        setLO1(newMarker.lng);
        let _gmarker = [];
        _gmarker.push(e.latlng);
        greenMarker(_gmarker);
      } else {
        try {
          let data = await direction(
            { lat: l1, lon: lo1 },
            newMarker,
            userData.token
          );
          let _rmarker = [];

          _rmarker.push(e.latlng);
          redMarker(_rmarker);
          console.log(data);
          if (data.msg == "Ok") {
            setPos(data.direction);
          }
        } catch (err) {
          console.log(err);
        }
        setL1("");
        setLO1("");
      }
    },
  });

  return (
    <div>
      {rmarker.map((marker) => (
        <Marker position={marker} icon={RedIcon}>
          <Popup>Marker is at {marker}</Popup>
        </Marker>
      ))}

      {gmarker.map((marker) => (
        <Marker position={marker} icon={GreenIcon}>
          <Popup>Marker is at {marker}</Popup>
        </Marker>
      ))}

      <Polyline positions={pos} color="red" />
    </div>
  );
}

function Direction() {
  return (
    <div className="leaflet-container">
      <MapContainer center={[default_latitude, default_longitude]} zoom={18}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <AddMarkerToClick />
      </MapContainer>
    </div>
  );
}

export default Direction;
