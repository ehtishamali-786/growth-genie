import React from 'react'
import Image from 'next/image';
import Add from '../../../../public/images/add.png'
import OutputTab from '@/pages/outputTab';
 const PostScratch = () => {
  return (
    <div >
        <hr className='mt-4'/>
        <div className='flex  gap-12'>
            <div className='w-[50%] mt-4'>
                <h1 className='text-[14px] font-[500] text-[#101010]'>What do you want to post about?</h1>
                <div className='shadow-lg rounded-lg px-2 pb-8 pt-2 border-2 border-indigo-400/50 mt-2'>
                    <h1 className='text-[14px] font-[500] text-[#101010]'>1. "Exploring Jambot: A Deep Dive into Figma's AI Asistance"</h1>
                </div>
                <h1 className='text-[16px] font-[500] text-[#101010] mt-4'>Select your Ton of Voice</h1>
                <div className='flex flex-wrap gap-4 mt-2'>
                    <div className='shadow-lg rounded-full   px-4 py-2  border-2 border-indigo-400/50 '>
                    <h1>Excited</h1>
                    </div>
                    <div className='shadow-lg rounded-full px-4 py-2  border-2 border-indigo-400/50 '>
                    <h1>Professional</h1>
                    </div>
                    <div className='shadow-lg rounded-full px-4 py-2  border-2 border-indigo-400/50'>
                    <h1>Encouraging</h1>
                    </div>
                    <div className='shadow-lg rounded-full px-4 py-2  border-2 border-indigo-400/50 '>
                    <h1>Funny</h1>
                    </div>
                    <div className='shadow-lg rounded-full px-4 py-2  border-2 border-indigo-400/50 '>
                    <h1>Dramatic</h1>
                    </div>
                    <div className='shadow-lg rounded-full px-4 py-2  border-2 border-indigo-400/50 '>
                    <h1>Candid</h1>
                    </div>
                    <div className='shadow-lg rounded-full px-4 py-2  border-2 border-indigo-400/50 '>
                    <h1>Casual</h1>
                    </div>
                    <div className='shadow-lg rounded-full px-4 py-2  border-2 border-indigo-400/50 '>
                    <h1>Convincing</h1>
                    </div>
                    <div className='shadow-lg rounded-full px-4 py-2  border-2 border-indigo-400/50 '>
                    <h1>Urgent</h1>
                    </div>
                    <div className='shadow-lg rounded-full px-4 py-2  border-2 border-indigo-400/50 '>
                    <h1>Engaging</h1>
                    </div>
                    <div className='shadow-lg rounded-full px-4 py-2  border-2 border-indigo-400/50 '>
                    <h1>Creative</h1>
                    </div>
                    <div className='shadow-lg rounded-full px-4 py-2  border-2 border-indigo-400/50 '>
                    <h1>Worried</h1>
                    </div>
                    <div className='shadow-lg rounded-full px-4 py-2  border-2 border-indigo-400/50 '>
                    <h1>Passionate</h1>
                    </div>
                </div>
                <h1 className='text-[14px] font-[500] text-[#101010] mt-4'>Select Post Formate</h1>
                
                <div class=" mt-2 text-gray px-4 py-2 font-[14px] border-2 border-indigo-400/50  font-medium rounded-lg text-sm  text-center inline-flex items-center gap-2  ">
                    <Image src={Add} width={12} height={12} alt='add' />
                    Select a Post Format
                </div>
            
            </div>
            <div className='w-[60%] mt-4'>
                <h1 className='text-[16px] font-[500] text-[#101010]'>Output</h1>
                <p className='text-[12px] font-[500] text-[#98A1B2]'>Here is the AI generated content for you. Feel free to Tweak Before you post it.</p>
               <div className='mt-4'>
                <OutputTab/>
               </div>
            </div>
        </div>
    </div>
  )
}
export default PostScratch
