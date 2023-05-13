import React from "react"


const Contact = () => {
	return (
		<div className="sw textwhite text-[#bbb] py-10 max-w-[700px]">
			<div className="">
				<h3>Contact Us</h3>
				<hr className="border-slate-500" />
			</div>
			<div>
				<h3 className="w-full  py-5 capitalize">How can we help?</h3>
				<div className="flex justify-between flex-wrap gap-24 mt-10">
					<form action="" method="post" className="flex flex-col gap-4 sty1 flex-1 min-w-[300px] ">
						<div className="flex-1">
							<b className="capitalize">Directly report issue</b>
							<p className="">Briefly state and submit your issue and we will do our very best to resolve it.<br /><br /> </p>
						</div>
						<textarea className='bg-transparent p-6 border border-gray-700 min-h-[250px]' placeholder="what's on your mind?"></textarea>
						<input type='submit' className="self-end !p-2 !px-5" value='Submit' />
					</form>
				</div>
			</div>
		</div>
	) 
}


export default Contact;