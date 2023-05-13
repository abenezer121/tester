import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import {url} from "./../../../data/url"
import ClipLoader from "react-spinners/ClipLoader";



function Card(props) {
    return (
      <div className="card2 uppercase">
        <h2 className="text-white ">
          <span className="text-primary">{props.metricsname}</span>
        
        </h2>
       <h2 className="text-white">{props.metricsnumber}</h2>
      </div>
    )
  }

export default Card;