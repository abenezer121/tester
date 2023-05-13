import { CopyOutlined, DeleteFilled, SyncOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { setUser } from "./../../../redux/reducers/user"
import {url} from "./../../../data/url"
import ClipLoader from "react-spinners/ClipLoader";
import Modal from "./../../../features/Modal/index";
import ApiDoc from "./ApiDoc"
import Plan from"./Plan"
import ApiKeys from "./Token"
function Index() {

  const { userData } = useSelector((state) => state.user)

  const [showLoading, setShowLoading] = useState(false)
 
 
  const dispatch = useDispatch();
  function Sidebar() {
    return (
      <div className="hidden sm:flex flex-col gap-3 text-white min-w-[200px] ">
        {/* <div className="flex  justify-between">
          <div>
            <h3 className="text-white m-0">Account</h3>
            <small>username</small>
          </div>
          <Link to="/">Edit Account</Link>
        </div>
  
        <div className="flex justify-between">
          <div>
            <h3 className="text-white m-0">Price Plan</h3>
            <small>
              pay as you go
              <br />
              <Link to="/">View pricing plans</Link>
            </small>
          </div>
          <Link to="/">Premium Plan</Link>
        </div> */}
      </div>
    )
  }
 


  
  

  function Boards() {
    return (
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ApiDoc />
          <Plan />
          <ApiKeys className='md:col-span-2' />
        </div>
      </div>
    )
  }




  return (
    <div className="sw py-4">
      <div className="flex gap-10">
        { showLoading ?
          <div className="  mx-[2%]">  <div className="card flex justify-center"><ClipLoader color="#36d7b7" /></div></div>
          :<Boards />
        }
        <Sidebar />
      </div>
    </div>
  )
}

export default Index;