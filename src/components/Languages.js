import React from 'react'
import { MdBrush } from 'react-icons/md'
import { languages } from '../data'
import { AiFillSound, AiOutlineRead } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs'

const Languages = () => {
    return (
        <div className='mt-[1rem] mb-[3rem]'>
            <div className='grid grid-cols-5 md:grid-cols-7 gap-2 items-center'>
                <h2 className='flex items-center mb-[0.8rem] w-[100%] col-span-2'>
                    <span className='text-heading-h2 text:xs sm:text-base font-semibold md:text-xl'>Languages</span>
                    <span className='p-1 bg-yellow rounded-full ml-[5px]'><MdBrush /></span>
                </h2>
                <span className='text-text-secondary'><AiFillSound /></span>
                <span className='text-text-secondary'><AiOutlineRead /></span>
                <span className='text-text-secondary'><BsFillPencilFill /></span>
            </div>
            <hr className='mb-4' />
            {
                languages.map((item) => {
                    return (
                        <div className='grid grid-cols-5 md:grid-cols-7 gap-2 mb-2 '>
                            <p className='text-text-secondary text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] capitalize col-span-2'>
                                {item.language}
                            </p>
                            <span className={`w-[15px] h-[15px] rounded-full ${item.speak ? 'bg-yellow inline' : 'bg-gray-light'}`}></span>
                            <span className={`w-[15px] h-[15px] rounded-full p-2  ${item.read ? 'bg-yellow inline' : 'bg-gray-light'}`}></span>
                            <span className={`w-[15px] h-[15px] rounded-full p-2  ${item.write ? 'bg-yellow inline' : 'bg-gray-light'}`}></span>
                        </div>
                    )
                })
            }
            <hr className='mb-4' />
        </div>
    )
}

export default Languages
