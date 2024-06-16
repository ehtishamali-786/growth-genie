"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import JohnImage from '../../public/images/john.png'
import Logo from '../../public/images/GrowthGenie.png'
import Setting from '../../public/images/settingIcon.svg'
import Add from '../../public/images/add.png'
import Calender from '../../public/images/code.png'
// import { FaHome, FaUser, FaEdit } from 'react-icons/fa';

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div className="h-screen bg-gray-100 w-64 flex flex-col ">
            <div className='px-4 pt-4'>

            <Image src={Logo} width={170} height={100} alt='logo'  />
            </div>
            <div className='mt-8 ml-1 px-4 '>
                <button type="button" class="text-white bg-[#0070F4] px-4 py-3 font-[14px]  font-medium rounded-lg text-sm  text-center inline-flex items-center gap-2  ">
                    <Image src={Add} width={12} height={12} alt='add' />
                    Create a Post
                </button>
            </div>
            <nav className="flex mt-2">
                <ul className='flex-1 flex-col gap-0 ml-0'>
                    <li className=" px-4 py-2"
                    style={{backgroundColor:pathname === '/post-generator'|| pathname === '/post-generator/post-from-scratch' ?'#A5CBEA':''}}
                    >
                        <Link href="/post-generator">
                            <div className='flex gap-4'>
                                <Image src={Setting} width={20} height={20} alt='setting' />
                                <p className="flex items-center font-[16px] font-[400] color-[#101010]">
                                    Post Generator
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className=" px-4 py-2"
                     style={{backgroundColor:pathname === '/' ?'#A5CBEA':''}}
                    >
                        <Link href="/">
                            <div className='flex gap-4'>
                                <Image src={Setting} width={20} height={20} alt='setting' />
                                <p className="flex items-center font-[16px] font-[400] color-[#101010]">
                                    My Posts
                                </p>
                            </div>

                        </Link>
                    </li>
                    <li className="px-4 py-2"
                    style={{backgroundColor:pathname === '/content-inspiration' ?'#A5CBEA':''}}
                    >
                        <Link href="/content-inspiration">
                            <div className='flex gap-4'>
                                <Image src={Setting} width={20} height={20} alt='setting' />
                                <p className="flex items-center font-[16px] font-[400] color-[#101010]">
                                    Content Inspiration
                                </p>
                            </div>
                        </Link>
                    </li>
                    {/* Add more links as needed */}
                </ul>
            </nav>
            <div className="mt-auto p-4">
                <div className="shadow-md p-3 rounded-lg">
                    <Image src={Calender} width={24} height={24}alt='calender'/>
                    <h1 className="text-[16px] font-[500] color-[#101010] mt-3">Words Generated </h1>
                    <p className='text-[12px] font-[400] color-[#101010] mt-1'>0k/10k</p>
                    <hr class="h-[2px]  bg-[#D9D9D9] border-0 mt-3"></hr>
                    <p className="text-[12px] font-[400] color-[#101010] mt-3">You are on the free trial...</p>
                </div>
                <div className="flex items-center mt-8">
                    <Image
                        src={JohnImage}
                        alt="John Doe"
                        width={100}
                        height={100}
                        className="w-10 h-10 rounded-full mr-2"
                    />
                    <div>

                    <span className="text-[14px] font-[500] color-[#101010]">John Doe</span>
                    <p className="text-[12px] font-[400] color-[#101010] ">johndoe@email.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
