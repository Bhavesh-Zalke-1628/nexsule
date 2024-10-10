import React from 'react'
import img1 from '../assets/firstbase.webp'
import img2 from '../assets/secondbase.webp'
import img3 from '../assets/thirdbase.webp'
function BasicComponent() {
    return (
        <div className=' w-full h-full flex items-center justify-center mt-9 flex-col gap-1'>
            <div className=' flex items-center justify-between w-[60vw] h-[70vh] '>
                <div className=' w-[60%] h-full flex flex-col justify-center gap-3'>
                    <h1 className='  text-green-600 text-4xl font-extrabold opacity-75 font-custom space-x-12'>A Sustainable Platform for Specialty Pharma.</h1>
                    <p className=' text-gray-500 w-[90%] leading-7'>
                        As a globally operating company headquartered in Germany, CHEPLAPHARM has established a leading and sustainable platform for specialty pharma during the past two decades. We invest worldwide in well-established pharmaceutical brands which have been developed and introduced by research-based pharmaceutical companies. Our deep expertise in this field enables us to sustain the value of these brands for patients and the medical community. In this way we help the research-based pharmaceutical industry divest from older products so they can focus resources on innovation and new product pipelines. This is how we ACHIEVE MORE together.
                    </p>
                    <button className=' hover:bg-orange-500 transition-all ease-in-out duration-300 bg-green-500 w-fit text-white mt-4 px-7 py-3 uppercase text-center font-bold rounded-lg'>
                        Learn more
                    </button>
                </div>
                <div >
                    <img
                        className=' rounded-r-full rounded-t-full'
                        src={img1}
                        alt=""
                    />
                </div>
            </div>
            <div className=' flex items-center justify-between w-[60vw] h-[70vh] '>
                <div >
                    <img
                        className=' rounded-r-full rounded-t-full'
                        src={img2}
                        alt=""
                    />
                </div>
                <div className=' w-[60%] h-full flex flex-col justify-center gap-3'>
                    <h1 className='  text-green-600 text-4xl font-extrabold opacity-75 font-custom space-x-12'>
                        ACHIEVE MORE with CHEPLAPHARM.
                    </h1>
                    <p className=' text-gray-500 w-[90%] leading-7'>
                        We take action to ensure the global availability of well-established pharmaceutics – to ACHIEVE MORE for patients and the medical community. This is only possible with an organization of people who are driven to ACHIEVE MORE. If this sounds like you, we would be happy to have you on board.
                    </p>
                    <div className=' flex gap-2'>
                        <button className=' hover:bg-orange-500 transition-all ease-in-out duration-300 bg-green-500 w-fit text-white mt-4 px-7 py-3 uppercase text-center font-bold rounded-lg'>
                            Learn more
                        </button>
                        <div className=' hover:border-l-red-500  w-fit text-green-600 mt-4 px-7 py-3 uppercase text-center font-bold rounded-lg'>
                            Apply now
                        </div>
                    </div>
                </div>

            </div>

            <div className=' flex items-center justify-between w-[60vw] h-[70vh] '>
                <div className=' w-[60%] h-full flex flex-col justify-center gap-3'>
                    <h1 className='  text-green-600 text-4xl font-extrabold opacity-75 font-custom space-x-12'>
                        Investing Sustainably in a Growth Strategy.
                    </h1>
                    <p className=' text-gray-500 w-[90%] leading-7'>
                        What matters to our investors also matters to us: acting responsibly and sustainably with maximum transparency. We believe that business success, ethical conduct and patient wellbeing all fit together magnificently. Please and explore the investment opportunities we offer. And let’s ACHIEVE MORE together.
                    </p>
                    <button className=' hover:bg-orange-500 transition-all ease-in-out duration-300 bg-green-500 w-fit text-white mt-4 px-7 py-3 uppercase text-center font-bold rounded-lg'>
                        Learn more
                    </button>
                </div>
                <div >
                    <img
                        className=' rounded-r-full rounded-t-full'
                        src={img3}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default BasicComponent
