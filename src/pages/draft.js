import React from 'react';

const Draft = () => {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col gap-3 bg-white rounded-lg shadow-lg p-6 mb-4 ">
      <div className='flex justify-center item-center bg-[#F6F7F9] rounded-full w-10 px-2 py-2'>
      <svg class="h-6 w-8 text-gray-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
        </div>
        <p className='text-[12px] font-[400] text-gray-500'>Last edited Jan 2, 2024, 12:25 PM <br/>987 characters</p>
        <h2 className="text-[16px] font-[500] text-gray-700">Founders and sales leaders, listen up.</h2>
        <p className="text-[16px] font-[500] text-gray-700">
          Every deal/opportunity in your CRM should <br/> have a "next step date" field and a "next <br/> step" field.
        </p>
        <p className="text-[16px] font-[500] text-gray-700">
          This is granular, so stay with me...
        </p>
        <p className="text-[16px] font-[500] text-gray-700">
          You should be going day-by-day through <br/> your pipeline to make sure you understand...
        </p>
        <div className="flex gap-4 mt-4">
        <div className='flex justify-center item-center bg-[#F6F7F9] rounded-full px-20 py-2 cursor-pointer'>
        <svg class="h-6 w-8 text-gray-500"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
        </div>
          <div className='flex justify-center item-center bg-[#F6F7F9] rounded-full px-20 py-2 cursor-pointer '>
          <svg class="h-6 w-8 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-white rounded-lg shadow-md p-6 mb-4 ">
      <div className='flex justify-center item-center bg-[#F6F7F9] rounded-full w-10 px-2 py-2'>
      <svg class="h-6 w-8 text-gray-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
        </div>
        <p className='text-[12px] font-[400] text-gray-500 mb-[13rem]'>Last edited Jan 2, 2024, 12:21 PM 0 characters</p>
       
        <div className="flex gap-4 mt-4">
        <div className='flex justify-center item-center bg-[#F6F7F9] rounded-full px-20 py-2 cursor-pointer'>
        <svg class="h-6 w-8 text-gray-500"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
        </div>
          <div className='flex justify-center item-center bg-[#F6F7F9] rounded-full px-20 py-2 cursor-pointer'>
          <svg class="h-6 w-8 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Draft;
