import React from 'react'
import { education } from '../data'

const Education = () => {
    return (
        <div className='mt-[1rem] mb-[3rem]'>
            <h2 className=' mb-[1.2rem] text-heading-h2 text:xs sm:text-base font-semibold md:text-xl'>
                Education
            </h2>
            {
                education.map((item) => {
                    return (
                        <div key={item.id} className='flex '>
                            <div className='mr-[20px] flex flex-col items-center'>
                                <span className='w-[20px] h-[20px] rounded-full bg-yellow block '></span>
                                <span className='w-[2px] md:h-[80px] sm:h-[60px] h-[70px] bg-gray-light block'></span>
                            </div>
                            <div>
                                <h3 className='text-black font-bold text-[0.8rem] sm:text-[0.9rem] md:text-[1.1rem] mb-2'>{item.title}</h3>
                                <p className='text-text-secondary text-[0.8rem] sm:text-[0.9rem] md:text-[1rem]'>{item.degree}</p>
                                <p className='text-text-secondary text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] italic'>{item.from} - {item.to}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Education
