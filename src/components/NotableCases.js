import React from 'react'
import { MdBrush } from 'react-icons/md'
import { notableCases } from '../data'

const NotableCases = () => {
    return (
        <div className='mt-[1rem] mb-[3rem]'>
            <h2 className='flex items-center mb-[1.2rem]'>
                <span className='text-heading-h2 text:xs sm:text-base font-semibold md:text-xl'>Notable Cases</span>
                <span className='p-1 bg-yellow rounded-full ml-[10px]'><MdBrush /></span>
            </h2>

            {
                notableCases.map((item) => {
                    return (
                        <div key={item.id} className='mb-4  px-4 py-4 bg-white md:rounded-lg rounded-md'>
                            <div className='flex justify-between items-start mb-3'>
                                <div>
                                    <h3 className='text-black font-bold text-[0.8rem] sm:text-[0.9rem] md:text-[1.1rem] mb-1'>{item.title}</h3>
                                    <p className='text-text-secondary text-[0.8rem] sm:text-[0.9rem] md:text-[1rem]'>{item.from} - {item.to}</p>
                                </div>
                                <h3 className={`md:text-xl uppercase font-medium text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] ml-1
                                ${item.status === 'win' && 'text-win-yellow'} ${item.status === 'progress' && 'text-cyan-500'} ${item.status === 'lost' && 'text-red-700'}`}>
                                    {item.status}
                                </h3>
                            </div>
                            <div className=' text-text-secondary text-[0.8rem] sm:text-[0.9rem] md:text-[1rem]'>
                                <p><span className='text-black font-semibold'>Description: </span>{item.description}</p>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default NotableCases
