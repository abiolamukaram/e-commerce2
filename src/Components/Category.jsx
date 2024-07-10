import React from 'react'

const Category = () => {
  return (
    <div className='flex w-[90%] items-center h-auto mt-[50px]'>
      <p className='text-xl -rotate-90 ml-[100px] w-[250px] h-[150px] text-center uppercase bg-black text-white py-[40px] '>Explore New And <br /> Popular Styles</p>
      <div className='flex w-[80%] border justify-between gap-5'>
        <img className='w-[400px] h-[400px]' src="./src/assets/card.png" alt="" />
        <div className='space-y-5'>
          <img className='w-[200px] h-[200px]' src="./src/assets/card1.png" alt="" />
          <img className='w-[200px] h-[200px]' src="./src/assets/card3.png" alt="" />
          </div>
        <div className='space-y-5'>
          <img className='w-[200px] h-[200px]' src="./src/assets/card2.png" alt="" />
          <img className='w-[200px] h-[200px]' src="./src/assets/card4.png" alt="" />
          </div>
      </div>
    </div>
  )
}

export default Category
