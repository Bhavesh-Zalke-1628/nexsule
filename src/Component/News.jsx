import React from 'react'
import { TfiMenuAlt } from "react-icons/tfi";
import { PiSquaresFour } from "react-icons/pi";
function News() {
    return (
        <div className=' w-full h-full flex items-center justify-center flex-col'>
            <h1 className='font-custom text-green-600 w-[60vw] text-3xl font-extrabold opacity-75'>Our CHEPLAPHARM News</h1>
            <p className='w-[60vw] text-xl opacity-75 space-x-3 mt-2'>View:</p>
            <div className=' flex w-[60vw] gap-1 mt-2 text-2xl opacity-60'>
                <TfiMenuAlt />
                <PiSquaresFour />
            </div>

            {/* news */}
            <div className=' border mt-2 w-[60vw] cursor-pointer px-6 py-8 hover:shadow-neutral-500'>
                <p className=' text-gray-500'>10/10/2024</p>
                <div className=' flex items-center justify-between gap-20'>
                    <h1 className=' text-green-600 text-xl font-bold font-custom w-[60%]'>
                        Expansion in Oncology: CHEPLAPHARM reaches agreement with Lilly on acquisition of Gemzar®
                    </h1>
                    <button className=' bg-gray-400 text-sm font-bold py-1 px-1 opacity-65'>Press releases</button>
                    <div className=''>
                        Read more
                    </div>
                </div>
            </div>
            <div className=' border mt-2 w-[60vw] cursor-pointer px-6 py-8 hover:shadow-neutral-500'>
                <p className=' text-gray-500'>10/10/2024</p>
                <div className=' flex items-center justify-between gap-20'>
                    <h1 className=' text-green-600 text-xl font-bold font-custom w-[60%]'>
                        Expansion in Oncology: CHEPLAPHARM reaches agreement with Lilly on acquisition of Gemzar®
                    </h1>
                    <button className=' bg-gray-400 text-sm font-bold py-1 px-1 opacity-65'>Press releases</button>
                    <div className=''>
                        Read more
                    </div>
                </div>
            </div>
            <div className=' border mt-2 w-[60vw] cursor-pointer px-6 py-8 hover:shadow-neutral-500'>
                <p className=' text-gray-500'>10/10/2024</p>
                <div className=' flex items-center justify-between gap-20'>
                    <h1 className=' text-green-600 text-xl font-bold font-custom w-[60%]'>
                        Expansion in Oncology: CHEPLAPHARM reaches agreement with Lilly on acquisition of Gemzar®
                    </h1>
                    <button className=' bg-gray-400 text-sm font-bold py-1 px-1 opacity-65'>Press releases</button>
                    <div className=''>
                        Read more
                    </div>
                </div>
            </div>

            <button className=' bg-green-600 px-7 py-3 mt-5 rounded-md text-2xl capitalize font-bold text-white opacity-55 font-custom'>
                All news
            </button>

        </div>
    )
}

export default News
