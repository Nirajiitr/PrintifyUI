import React from 'react'
import Slider from './Slider'
import { CardInf } from '../data/reviewUser'
import { useInView } from 'react-intersection-observer';
const SocialProofSection = () => {
  const { ref, inView } = useInView({
    threshold: 1, 
    triggerOnce: true, 
  });
  return (
    <div className='w-full px-4 mx-auto py-14 bg-[#f7f7f7]'>
      <div className=' flex flex-col items-center lg:flex-row py-32 px-6 lg:justify-center lg:items-center'>
        <h1 className='text-5xl text-[#353A47] font-bold lg:w-1/3'>Trusted by over 8M sellers around the world</h1>
        <p ref={ref} className={`text-sm p-6 lg:w-1/3 ${inView && "animate-slideright"}`} >Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.</p>
      </div>
      <Slider CardInf = {CardInf}  />
    </div>
  )
}

export default SocialProofSection