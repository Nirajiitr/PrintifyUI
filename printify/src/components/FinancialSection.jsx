import React from 'react'

const FinancialSection = () => {
  return (
    <div className="flex justify-center items-center w-full bg-white p-2 sm:p-4">
    <div className="bg-[#203741] text-white rounded-3xl shadow-lg py-14 px-6 w-full max-w-lg m-5 sm:m-14">
      <h2 className="text-2xl font-bold sm:mb-2">Make Money, Risk-Free</h2>
      <p className="text-sm mt-2 sm:my-4">You pay for fulfillment only when you make a sale</p>

      <div className="bg-[#17262B] p-3 sm:p-6 rounded-lg my-5 sm:my-10">
        <div className="flex justify-between sm:py-3 my-2">
          <span>You sell a t-shirt</span>
          <span>$30</span>
        </div>
        <div className="flex justify-between sm:py-3 my-2">
          <span>You pay for its production</span>
          <span>$12</span>
        </div>
        <hr className="border-gray-600 sm:py-3 my-2" />
        <div className="flex justify-between text-lg font-bold text-[#18C559] ">
          <span>Your profit</span>
          <span>$18</span>
        </div>
      </div>
          <a className="withColorBtn inline-block sm:block text-center rounded w-full vsm:w-40 px-8 py-3 " href="#">
          Start selling
          </a>         
       
      <p className="text-sm text-[#99A1A5] mt-9">
        100% Free to use • 900+ Products • Largest print network
      </p>
    </div>
  </div>
  )
}

export default FinancialSection