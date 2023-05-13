import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import {setChoosedPlan} from "./../../../redux/reducers/choosedplans"
import { useSelector, useDispatch } from "react-redux"
import {url} from "./../../../data/url"


function Plan() {

    const choosedPlan = useSelector((state) => state.choosedPlan.choosed)
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state.user)
    useEffect(() => {
        try {
        
               fetch(`${url}/api/v1/route/choosedplan/getUsersPlan/?id=${userData.id}`).
                  then((data) => { return data.json() })
                  .then((data) => {
                    if (data.msg == "ok") {
          
                        dispatch(setChoosedPlan(data.data))
                      }
                  })
      
                  
          } catch (err) {
              
          }
      }, [])
    
    return (
      <div className="card2 uppercase child-text-white">

                          <div className='flex flex-wrap my-[2%] '>
                                    <div className='flex-1 flex items-center px-4 gap-3'>
                                        <span className=''>Choosed  </span>
                                    </div>
                                    <div className='flex-1 flex items-center px-4 gap-3'>
                                          <span>Remaining</span>
                                    </div>
                                    {/* Range */}
                                    <div className='flex-1 flex items-center px-4 gap-3'>
                                        status
                                    </div>
                                  </div>
{
choosedPlan.map((n , i) => {
  console.log(n)
                                
                                  return  (
                                  <>
                               
                                  <div className='flex flex-wrap my-[2%] '>
                                    <div className='flex-1 flex items-center px-4 gap-3'>
                                        <span className=''>{n.choosedplan} </span>
                                    </div>
                                    <div className='flex-1 flex items-center px-4 gap-3'>
                                          <span>{n.remainingrequest}</span>
                                    </div>
                                    {/* Range */}
                                    <div className= {n.status == "granted"  ?  'flex-1 flex items-center px-4 gap-3 text-green-500' :  'flex-1 flex items-center px-4 gap-3' }>
                                      {n.status}
                                    </div>
                                  </div>
                                  </>
                                  )
                                  
                                  
                                   
                              })
}

     
      </div>
    )
  }


  export default Plan