import { Input } from 'antd';
import React , {useState} from 'react'
import {url} from "./../../../data/url"
import { useSelector, useDispatch } from "react-redux"
import { setUser } from "./../../../redux/reducers/user"
function Profile() {

  const [_organization , setOrganization] = useState("")
  const [_email , setEmail] = useState("")
  const [showLoading , setShowLoading] = useState(false)
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user)
  const  empty = (str) =>
  {
      if (typeof str == 'undefined' || !str || str.length === 0 || str === "" || !/[^\s]/.test(str) || /^\s*$/.test(str) || str.replace(/\s/g,"") === "")
          return true;
      else
          return false;
  }

  const update = () => {
    if(empty(_organization) && empty(_email)) {
      alert("empty field")
      return 
    }else{
      try{
        setShowLoading(true)
   
   
       let data = { id :  userData.id}
            
               if(!empty(_organization)){
                   Object.assign(data, {"companyname":_organization})
               }
               if(!empty(_email)){
                   Object.assign(data, {"email":_email})
                   let regEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
                   if (!regEmail.test(_email)) {
                      alert('Invalid Email Address')
                      throw Object.assign(
                        new Error('Parameter is not a number!'),
                        { code: 402 }
                      );
                   }
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
                         alert("profile updated")
                               dispatch(setUser(data.data))
                       }else{
   
                           alert(data.msg)
                       }
   
                               })
          setShowLoading(false)
       }catch(err){
           setShowLoading(false)
       }
    }
  }


  const onOrganizationChanged = (e) => {
    setOrganization(e.target.value)
  }

  const onEmailChanged = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className='sw py-10'>
      <div className='flex gap-4'>
        {/* <Nav url='profile' />  */}
        <div className='flex-1 flex flex-col items-center text-white'>
          <div className='card2 flex flex-col gap-3 w-2/3'>
            <h3 className='text-white'>Profile</h3>
            Organization
            <Input placeholder="Enter your organization's name"
            value={_organization || ''}
            onChange={(e)=>{onOrganizationChanged(e)}}
            />
            
            
            Email
            <Input placeholder="Enter your organization's email"
            value={_email || ''}
            onChange={(e)=>{onEmailChanged(e)}}
            />
            <div className='py-5'>
              <button  className='btn-sty1 w-24 theme-light' onClick={()=>{
                update()
              }}>{showLoading ? 'Saving...' : 'Save'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;