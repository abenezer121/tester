import React from "react"







const Contact = () => {
    return (
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

    )
}

export default Contact