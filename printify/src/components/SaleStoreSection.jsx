import React from 'react'
import { useInView } from 'react-intersection-observer';

const SaleStoreSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, 
    triggerOnce: true, 
  });
  return (
    <div ref={ref} className='w-full'>
      <div className={`w-full my-32 mx-auto max-w-[1100px] pt-24 lg:pt-36 ${inView && 'animate-closeToOpen'}`}>
       <div className='talk-to-sales h-24 lg:h-36 rounded-3xl'>
        <p className=' sm:text-2xl vsm:font-bold w-1/2 lg:max-w-[45%] pl-[10%] text-[#216C46]'>Are you a large business looking for custom solutions?</p>
        <a className="withoutColorBtn rounded vsm:px-3 py-1 mr-10 vsm:mr-20" href="#">Talk to sales</a>
       </div>
      </div>

    </div>
  )
}

export default SaleStoreSection