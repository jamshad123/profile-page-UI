import React from 'react'
import { proffEndorsements } from '../data'
import { SlFrame } from 'react-icons/sl'

const ProfessionalEndorsements = () => {
    return (
        <div className='mt-[1rem] mb-[3rem]'>
            <h2 className=' mb-[1.2rem] text-heading-h2 text:xs sm:text-base font-semibold md:text-xl'>
                Professional Endorsements
            </h2>
            {
                proffEndorsements.map((item) => {
                    return (
                        <div key={item.id} className='mb-4  px-4 py-4 bg-white md:rounded-lg rounded-md flex items-center justify-between'>
                            <div>
                                <h3 className='text-black font-bold text-[0.8rem] sm:text-[0.9rem] md:text-[1.1rem]'>{item.title}</h3>
                                <p className='text-text-secondary text-[0.8rem] sm:text-[0.9rem] md:text-[1rem]'>{item.endorsements} Endorsements | {item.recommendations} Recommendations</p>
                            </div>
                            <span className='p-2 bg-yellow rounded-full ml-[10px]'><SlFrame /></span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProfessionalEndorsements
