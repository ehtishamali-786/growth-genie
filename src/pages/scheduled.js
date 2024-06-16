import Slider from './slider'
import '../app/globals.css'

const Scheduled = () => {
    return (
        <div >
            <Slider />

            <hr className='mt-4' />
            <div className='flex flex-wrap gap-6'>
                <div className='mt-4 '>
                    <div className='flex gap-2 mb-4'>

                    <h1 className='text-[12px] text-[#101010] font-[700]'>Today</h1>
                    <p className='text-[12px] text-gray-500 font-[500]'>January 02</p>
                    </div>
                    <div className="flex flex-col gap-3 bg-[#F6F7F9] rounded-lg shadow-lg w-[280px]  p-2 h-[220px] cursor-pointer">
                        <h1 className="text-[14px] text-gray-500 font-[400]">09:00 AM</h1>
                        <div className="flex flex-col gap-2 bg-white p-2">
                            <p className='text-[10px] font-[400] text-gray-500'>Last edited Jan 2, 2024, 12:25 PM <br />987 characters</p>
                            <h2 className="text-[10px] font-[600] text-gray-700">Founders and sales leaders, listen up.</h2>
                            <p className="text-[10px] font-[600] text-gray-700">
                                Every deal/opportunity in your CRM should <br /> have a "next step date" field and a "next step" field.
                            </p>
                        </div>
                        <div className="flex gap-4 p-2 bg-white">
                            <div className='flex justify-center item-center bg-[#F6F7F9] rounded-full px-10 py-1 cursor-pointer'>
                                <svg class="h-4 w-8 text-gray-500" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
                            </div>
                            <div className='flex justify-center item-center bg-[#F6F7F9] rounded-full px-10 py-1 cursor-pointer '>
                                <svg class="h-4 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4 '>
                    <div className='flex gap-2 mb-4'>

                    <h1 className='text-[12px] text-[#101010] font-[700]'>Tomorrow</h1>
                    <p className='text-[12px] text-gray-500 font-[500]'>January 03</p>
                    </div>
                    <div className="flex flex-col gap-3 bg-[#F6F7F9] rounded-lg shadow-lg w-[280px]  p-2 h-[220px] cursor-pointer">
                        <h1 className="text-[14px] text-gray-500 font-[400]">09:00 AM</h1>
                        <div className="flex justify-center text-center p-10">
                            <p className='text-gray-600 text-[12]'>Empty</p>
                        </div>
                        <div className="flex gap-4 p-2 bg-white">
                            <div className='flex justify-center item-center bg-[#F6F7F9] rounded-full px-10 py-1 cursor-pointer'>
                                <svg class="h-4 w-8 text-gray-500" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
                            </div>
                            <div className='flex justify-center item-center bg-[#F6F7F9] rounded-full px-10 py-1 cursor-pointer '>
                                <svg class="h-4 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4 '>
                    <div className='flex gap-2 mb-4'>

                    <h1 className='text-[12px] text-[#101010] font-[700]'>Thursday</h1>
                    <p className='text-[12px] text-gray-500 font-[500]'>January 04</p>
                    </div>
                    <div className="flex flex-col gap-3 bg-[#F6F7F9] rounded-lg shadow-lg w-[280px]  p-2 h-[220px] cursor-pointer">
                        <h1 className="text-[14px] text-gray-500 font-[400]">09:00 AM</h1>
                        <div className="flex justify-center text-center p-10">
                            <p className='text-gray-600 text-[12]'>Empty</p>
                        </div>
                        <div className="flex gap-4 p-2 bg-white">
                            <div className='flex justify-center item-center bg-[#F6F7F9] rounded-full px-10 py-1 cursor-pointer'>
                                <svg class="h-4 w-8 text-gray-500" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
                            </div>
                            <div className='flex justify-center item-center bg-[#F6F7F9] rounded-full px-10 py-1 cursor-pointer '>
                                <svg class="h-4 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4 '>
                    <div className='flex gap-2 mb-4'>

                    <h1 className='text-[12px] text-[#101010] font-[700]'>Friday</h1>
                    <p className='text-[12px] text-gray-500 font-[500]'>January 05</p>
                    </div>
                    <div className="flex flex-col gap-3 bg-[#F6F7F9] rounded-lg shadow-lg w-[280px]  p-2 h-[220px] cursor-pointer">
                        <h1 className="text-[14px] text-gray-500 font-[400]">09:00 AM</h1>
                        <div className="flex justify-center text-center p-10">
                            <p className='text-gray-600 text-[12]'>Empty</p>
                        </div>
                        <div className="flex gap-4 p-2 bg-white">
                            <div className='flex justify-center item-center bg-[#F6F7F9] rounded-full px-10 py-1 cursor-pointer'>
                                <svg class="h-4 w-8 text-gray-500" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
                            </div>
                            <div className='flex justify-center item-center bg-[#F6F7F9] rounded-full px-10 py-1 cursor-pointer '>
                                <svg class="h-4 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scheduled;

