import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import droneImage from '../assets/drone.png';

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20 gilroy-font'>
            {["we provide", "drone", "solutions"].map((items, index)=>{
                return(
                    <div className='masker'>
                        <div className='w-fit flex items-center'>
                            {index===1 && (<motion.div initial={{width: 0}} animate={{width:"9vw"}} transition={{ease: [0.61, 1, 0.88, 1], duration: 1}} className='mr-[1vw] rounded-md w-[9vw] h-[5.5vw]'>
                                <img src={droneImage}/>
                                </motion.div>)}
                            <h1 className="uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-semibold">
                                {items}
                            </h1>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-24 flex justify-between items-center py-5 px-20'>
            {["For public and private companies", "From the first pitch to IPO"].map((item, index)=>
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            )}
            <div className='start flex items-center gap-4'>
                <div className='px-5 py-1.5 border-[1px] border-zinc-500 rounded-full font-light text-md uppercase'>start the project</div>
                <div className='w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-zinc-500'>
                    <GoArrowUpRight />
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage