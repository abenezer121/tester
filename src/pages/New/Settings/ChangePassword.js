import { Input } from 'antd';
import React , {useState} from 'react'
import {url} from "./../../../data/url"
import { useSelector } from "react-redux"

//gebetausertest
function ChangePassword() {
  const [password , setPassword] = useState("")
  const [confirmPassword , setConfirmPassword] = useState("")
  const [showLoading , setShowLoading] = useState(false)
  const { userData } = useSelector((state) => state.user)


  const  empty = (str) =>
  {
      if (typeof str == 'undefined' || !str || str.length === 0 || str === "" || !/[^\s]/.test(str) || /^\s*$/.test(str) || str.replace(/\s/g,"") === "")
          return true;
      else
          return false;
  }
  const update = () => {
      
    
    if(empty(password) || empty(confirmPassword)) {
      alert("empty password")
      return 
    }
    
    
    else if(password === confirmPassword){
        try{
          setShowLoading(true)
     
     
         let data = { id :  userData.id}
                
                 if(!empty(password)){
                     Object.assign(data, {"password":password})
                 }
               
               
                 fetch(`${url}/api/v1/users/updateprofile` , {
                              method: 'PUT',
                              headers: {
                                 'Content-type': 'application/json; charset=UTF-8' // Indicates the content
                             },
                             body: JSON.stringify(data)
     
                         })
                         .then((data) => { return data.json() })
                         .then((data) => {
                         if(data.msg === "ok"){
                                 alert("password updated")
                         }else{
     
                             alert(data.msg)
                         }
     
                                 })
      setShowLoading(false)
         }catch(err){
             setShowLoading(false)
         }
      }else{
        alert("password doesnt match")
      }
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onCurrentChangePassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  return (
    <div className='sw py-10'>
      <div className='flex gap-4'>
        {/* <Nav url='password' /> */}
        <div className='flex-1 flex flex-col items-center text-white'>
          <div className='card2 flex flex-col gap-3 w-2/3'>
            <h3 className='text-white'>Change Password</h3>
            {/* Current Password
            <Input placeholder="Enter your current password" />
           */}
            New Password
            <Input placeholder="Enter a new password" 
            value={password || ''}
            onChange={(e)=>{onChangePassword(e)}}
            />
            Confirm New Password
            <Input placeholder="Confirm your new password"
               value={confirmPassword || ''}
               onChange={(e)=>{onCurrentChangePassword(e)}}
            />
            <div className='py-5'>
              <button  className='btn-sty1 w-24 theme-light' onClick={()=>{
                update()
              }}>{showLoading? 'Saving...' : 'Save'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword;