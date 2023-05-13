

import React , {useState} from "react";
import {ReactComponent as Logo} from '../../assets/images/mapslogo.svg';
import {ReactComponent as MapsLogo} from '../../assets/images/mapslogo.svg';
import {ReactComponent as Hamburger} from "./../../assets/icons/hamburger.svg"
import {Link} from 'react-router-dom';
import {ArrowRightIcon} from '@heroicons/react/24/solid'
import Signup from "./../../components/Signup";
import Signin from "./../../components/Signin";

import Modal from "./../../features/Modal"
function ComingSoon() {

  const [sidebarShow , setSideBarShow] = useState(false)
  const [signupModal,setSignupModal] = useState(false);
  const [signinModal,setSigninModal] = useState(false);
  return (
    <div className="w-full min-h-screen  overflow-hidden bg-[#1A1F32] ">

<div className="flex gap-4 ">
            <Modal open={signupModal} close={() => {setSignupModal(false)}} elem={<Signup 
              footer={
                <div className="px-10 p-2">
                  <Link to="#" onClick={() => {setSigninModal(true); setSignupModal(false)}}>Already have an account? <span className="text-primary">Login</span></Link>
                </div>
              }
            
            />}>
         
            </Modal>
            <Modal open={signinModal} close={() => setSigninModal(false)} elem={<Signin
              footer={
                <div className="px-10 p-2">
                  <Link to="#" onClick={() => {setSigninModal(false); setSignupModal(true)}}>Dont Have an account? <span className="text-primary">Create One</span></Link>
                </div>
              }
            />}>

            </Modal>
          </div>

              <div class="text-center">
  
</div>


<div 
 class={  
  sidebarShow ?
  " fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800 right-0 border border-l-[#1A1F32] " :
  " fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800  hidden" }

  

tabindex="-1" aria-labelledby="drawer-right-label">
   <button type="button" onClick={()=>{setSideBarShow(!sidebarShow)}} data-drawer-dismiss="drawer-right-example" aria-controls="drawer-right-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      <span class="sr-only">Close menu</span>
   </button>

   <div className="flex  flex-col  mt-[20%] space-y-3 text-center ">
   <a href='/' className="text-xl font-bold">Home</a> 
        <a href='/contact' className="text-xl font-bold">Contact Us</a>
        <a href='/documentation' className="text-xl font-bold">Documentation</a>
        <a href='/about' className="text-xl font-bold">About</a>
    
            
                      
      <button onClick={() => {
        setSideBarShow(false)
        setSigninModal(true)}} class="  text-white font-bold py-2 px-4 rounded-full px-[5%] ">
          Sign In
      </button>
      
    
   </div>
   
  
</div>
      <div className="w-full  flex font-bold">

        <div className="w-[50%] bg-[#1A1F32] flex flex-col justify-between text-white   "> 
         <div className=" flex px-10 py-7 w-full justify-between">
                      <div className=" flex gap-3 items-center">
                      <Link to="/">
            <h2 className="mr-6 self-start m-0 text-white">
              <span className="text-orange-500 font-black">gebeta</span>
              <span className="text-white font-black">maps</span>
            </h2>
          </Link>
                    
                        <span className="border-[#1A1F32] border h-full"></span>
                     
                    </div>
                    <p></p>
                        <a href='/' className="hidden md:flex text-white text-lg ml-[5%]  ">Home</a>
                          <a href='/documentation' className="hidden md:flex text-white text-lg mx-[5%] ">Documentation</a>
                  
          </div>   
        </div>
        <div className="w-[50%] flex flex-col justify-between  bg-[#1A1F32] text-white" >
          <div className="hidden md:flex px-10 py-7 w-full justify-between">
   
         
               <a href='/about' className="text-white text-lg">About</a>
             
                 <a href='/contact' className="text-white text-lg">Contact Us</a>
                 <a href='/#'></a>

                 <button onClick={() => setSigninModal(true)} class="bg-transparent text-white  hover:text-white border border-white   font-bold py-2 px-4 rounded-full px-[5%] lg:ml-[5%]">

                      SIGN IN
                 </button>
              

             
              
     
     </div> 
     <div className=" w-full md:hidden flex justify-between px-10 py-7">
            <div></div>
                        <span onClick={()=>{setSideBarShow(!sidebarShow)}} className="text-white mr-[5%] md:hidden">Menu</span>
          </div>    
        </div>
      </div>

      <div className="bg-[#1A1F32]">

      <div class="w-full flex ">
            <div className="w-[80%] flex flex-col mx-[10%]">
                <span className="text-2xl text-white my-[1%]">Contact Us</span>
                <hr className=' border-gray-500' />
                <h2 className="justify-center text-center text-white my-[3%]">How Can We Help</h2>
                <div className="w-full flex flex-col md:flex-row justify-between text-white">
   
                    <div className="md:w-[40%] w-full">
                        <h2 className="text-white">Directly Report Issue</h2>
                        <span>Briefly state and submit your issue and we will do our very best to <br/> resolve it</span>
                        <div class="">
                                    <textarea id="comment" rows="8" class="px-0 w-full  text-gray-900 bg-[#D4D4D4] border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write your report" required=""></textarea>
                                    <div class="flex justify-between items-center ">
                                            <div class="flex pl-0 ">
                                            </div>
                                        <button type="submit" class="inline-flex items-center py-2 px-4 text-xs font-medium text-center text-white bg-[#6C6AD7] ">
                                            SUBMIT
                                        </button>
                                    </div>
                        </div>


                    </div>
                    <div className="md:w-[40%] w-full">
                        <h2 className="text-white">Leave a Feedback</h2>
                        <span>We always try to improve and provide you the best service, we welcome any comments about your experience and our serivice</span>
                        <div class="">
                            <textarea id="comment" rows="8" class="px-0 w-full  text-gray-900 bg-[#D4D4D4] border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write your feedback" required=""></textarea>
                            <div class="flex justify-between items-center ">
                                    <div class="flex pl-0 ">
                                    </div>
                                <button type="submit" class="inline-flex items-center py-2 px-4 text-xs font-medium text-center text-white bg-[#6C6AD7] ">
                                    SUBMIT
                                </button>
                            </div>
                </div>
                    </div>
              
                </div>
            </div>
            
        </div>

        <div className="w-full flex items-center justify-center mb-[3%]  mt-[5%]">
          <div className="w-[80%]   flex justify-between">
            <div className="">
              
              <span className="text-white text-xl  ">
                <span className="text-primary text-2xl ">Gebeta</span>Maps
                <br />
                PRODUCTS
            </span>
        
              <div className="flex flex-col mt-[1%]">
                <Link to="/documentation "  > <span className="text-[#A0A0A2]">Geocoding</span></Link>
                <Link to="/documentation "  > <span className="text-[#A0A0A2]">Direction</span></Link>
                <Link to="/documentation "  > <span className="text-[#A0A0A2]">Matrix</span></Link>
                <Link to="/documentation "  > <span className="text-[#A0A0A2]">Optimization</span></Link>
                <Link to="/documentation "  > <span className="text-[#A0A0A2]">ONM</span></Link>
              </div>
              
            
            </div>
            <div>
                <span className="text-white text-xl  ">
                   
                    COMPANY
                </span>
            
                  <div className="flex flex-col mt-[1%]">
                    <Link to="/contact "  > <span className="text-[#A0A0A2]">Contact</span></Link>
                    <Link to="/about "  > <span className="text-[#A0A0A2]">About</span></Link>
                    <Link to="/contact "  > <span className="text-[#A0A0A2]">Leave Feedback</span></Link>
    
                  </div>
            </div>
          </div>
          

        </div>
       


      </div>
    </div>
  )
}

export default ComingSoon;
