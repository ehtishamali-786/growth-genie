import Link from "next/link";


const PostGenerator = () => {
    return (
        <>
        
        <hr className="mt-8" />
        <div className="flex flex-wrap gap-6 mt-7">
            <Link href="/post-generator/post-from-scratch">
           
        <div className="flex flex-col gap-3 bg-white rounded-lg shadow-lg w-[285px]h-[249px] cursor-pointer">
            <div className=" flex justify-center item-center bg-[#F6F7F9] p-10">
                <h1 className="text-[22px] text-[#101010] font-[400]">Start From Scratch</h1>
            </div>
            <div className="flex flex-col gap-2 m-4">
            <h1 className="text-[14px] text-[#101010] font-[700]">Generate post from scratch</h1>
            <p className="text-[12px] text-gray-500 font-[400]">Use power of AI to generate high quality<br/> Linkedin posts</p>
            </div>
        </div>
        </Link>
        <div className="flex flex-col gap-3 bg-white rounded-lg shadow-lg w-[285px]h-[249px] cursor-pointer">
            <div className=" flex justify-center item-center bg-[#F6F7F9] p-10">
                <h1 className="text-[22px] text-[#101010] font-[400]">Idea Generator</h1>
            </div>
            <div className="flex flex-col gap-2 m-4">
            <h1 className="text-[14px] text-[#101010] font-[700]">Generate an Idea</h1>
            <p className="text-[12px] text-gray-500 font-[400]">Use power of AI to generate high quality<br/> Linkedin posts</p>
            </div>
        </div>
        <div className="flex flex-col gap-3 bg-white rounded-lg shadow-lg w-[285px]h-[249px] cursor-pointer">
            <div className=" flex justify-center item-center bg-[#F6F7F9] p-10">
                <h1 className="text-[22px] text-[#101010] font-[400]">Article to Post</h1>
            </div>
            <div className="flex flex-col gap-2 m-4">
            <h1 className="text-[14px] text-[#101010] font-[700]">Convert article to post</h1>
            <p className="text-[12px] text-gray-500 font-[400]">Use power of AI to generate high quality<br/> Linkedin posts</p>
            </div>
        </div>
        <div className="flex flex-col gap-3 bg-white rounded-lg shadow-lg w-[285px]h-[249px] cursor-pointer ">
            <div className=" flex justify-center item-center bg-[#F6F7F9] px-5 py-10">
                <h1 className="text-[22px] text-[#101010] font-[400]">Share Recent learnings</h1>
            </div>
            <div className="flex flex-col gap-2 m-4">
            <h1 className="text-[14px] text-[#101010] font-[700]">Share what you learned</h1>
            <p className="text-[12px] text-gray-500 font-[400]">Use power of AI to generate high quality<br/> Linkedin posts</p>
            </div>
        </div>
      </div>
      </>
    );
  };
  
  export default PostGenerator;
  