import React from 'react'

const Newsletter = () => {
  return (
    <>
      <div className='w-full border bg-slate-200 mt-14'>
      <div className='w-[80%] ml-40 mt-14'>
        <h2 className='text-2xl font-bold text-center p-10'>Follow Products And Discounts On Instagram</h2>
        <div className='flex justify-center gap-5'>
            <img className='w-[150px] h-[150px]' src="./src/assets/card7.png" alt="" />
            <img className='w-[150px] h-[150px]' src="./src/assets/card8.png" alt="" />
            <img className='w-[150px] h-[150px]' src="./src/assets/card9.png" alt="" />
            <img className='w-[150px] h-[150px]' src="./src/assets/card10.png" alt="" />
            <img className='w-[150px] h-[150px]' src="./src/assets/card11.png" alt="" />
            <img className='w-[150px] h-[150px]' src="./src/assets/card12.png" alt="" />
        </div>
      </div>
      <div>
        <p className='text-2xl font-bold text-center p-10'>Or Subscribe To The Newsletter</p>
      </div>
      </div>
    </>
  )
}

export default Newsletter
