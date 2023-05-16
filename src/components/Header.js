import React from 'react'
import man_pic from '../assets/man-pic.jpg'
import { MdBrush } from 'react-icons/md'
import { AiFillStar, AiOutlineRight, AiFillCamera } from 'react-icons/ai'

const Header = () => {
    return (
        <div className=' mb-[3rem] h-[250px] md:h-[280px] sm:h-[250px]'>
            <div className='h-[100px] sm:h-[120px] md:h-[150px] w-[100vw] mx-0 bg-background-blue rounded-b-[20px] sm:rounded-b-[30px] md:rounded-b-[50px] relative '>

                <div className='absolute flex flex-col md:flex-row md:items-end justify-center md:justify-start items-center bottom-[-150%] sm:bottom-[-120%] md:bottom-[-100%] w-full md:px-[10%]'>
                    <div className='text-center flex flex-col items-center z-20'>
                        <div className='relative'>
                            <img src={man_pic} alt="man pic"
                                className='w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] rounded-full ' />
                            <span className='p-1 sm:p-2 bg-yellow rounded-full ml-[10px] text-[0.9rem] absolute bottom-0 right-0 sm:right-4 md:right-6'><AiFillCamera /></span>
                        </div>
                        <h2 className='text-black text-[1.2rem] sm:text-xl md:text-xl mt-2 flex items-center'>
                            Joseph Cotchett
                            <span className='p-1 bg-yellow rounded-full ml-[10px] text-[0.9rem]'><MdBrush /></span>
                        </h2>
                        <p className='text-text-secondary text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] italic'>
                            Family, Corporate, Propert Expert
                        </p>
                    </div>

                    <div className='mt-4 flex items-center md:ml-[50px]'>
                        <div className='bg-white rounded-md text-[0.9rem] sm:text-[1.1rem] flex items-center z-20 overflow-hidden mr-[20px]'>
                            <span className='border-2 py-1 px-3 border-r-gray-light border-l-white border-t-white border-b-white '>
                                Total Cases
                            </span>
                            <span className='py-1 px-3'>124</span>
                        </div>
                        <div className='flex '>
                            <span className='w-[25px] h-[25px] rounded-full bg-yellow flex items-center justify-center mr-[5px]'>
                                <AiFillStar className='text-white' />
                            </span>
                            <span className='w-[25px] h-[25px] rounded-full bg-yellow block mr-[5px]'></span>
                            <span className='w-[25px] h-[25px] rounded-full bg-yellow block mr-[5px]'></span>
                        </div>
                        <div className=''><AiOutlineRight /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
