import React from 'react'

 const NewOutput = () => {
  return (
    <div className='flex flex-col gap-3'>
        <h1 className='text-[14px] font-[500] text-[#98A1B2]'>405 Characters</h1>
        <p className="text-[16px] font-[500] text-gray-700">Get Excited we are diving deep into the future of AI assisted design with Figma's<br/>New AI Assistance Jambot.</p>
        <p className="text-[16px] font-[500] text-gray-700">Jambot  is revolutionizing the Design process,automating task ang empowring <br/>Design to focus on what they Do best </p>
    
        <p className="text-[16px] font-[500] text-gray-700"> Integrated ? Stay tuned  as we</p>

        <div className='mt-4 px-4 flex gap-2 '>
                <button type="button" class="text-white bg-[#0070F4] px-4 py-3 font-[14px]  font-medium rounded-lg text-sm  text-center inline-flex items-center   ">
                    
                    Edit and Publish
                </button>
                <button type="button" class="text-[#101010] bg-[#F6F7F9] px-4 py-3 font-[14px]  font-medium rounded-lg text-sm  text-center inline-flex items-center   ">
                    
                Regenerate
                </button>
            </div>
    
    </div>

  )
}
export default NewOutput