import React from 'react'

const Card = () => {
  return (
   <>
    <div className='space-y-4'>
    <div className='w-[80%] flex ml-[100px] gap-4'>
    <div className='w-[250px] h-auto space-y-2'>
      <img className='w-[250px] h-[300px]' src="./src/assets/top-product.png" alt="" />
      <p className='font-bold p-1'>Adicolor Classics Joggers</p>
     <div className='flex justify-between p-1'>
     <p>Dress</p>
     <p>$63.85</p>
     </div>
    </div>
    <div className='w-[250px] h-auto space-y-2'>
      <img className='w-[250px] h-[300px]' src="./src/assets/top-product1.png" alt="" />
      <p className='font-bold p-1'>Nike Sportswear Futura Luxe</p>
     <div className='flex justify-between p-1'>
     <p>Bag</p>
     <p>$130.00</p>
     </div>
    </div>
    <div className='w-[250px] h-auto space-y-2'>
      <img className='w-[250px] h-[300px]' src="./src/assets/top-product2.png" alt="" />
      <p className='font-bold p-1'>Geometric print Scarf</p>
     <div className='flex justify-between p-1'>
     <p>Dress</p>
     <p>$53.85</p>
     </div>
    </div>
    <div className='w-[250px] h-auto space-y-2'>
      <img className='w-[250px] h-[300px]' src="./src/assets/top-product3.png" alt="" />
      <p className='font-bold p-1'>Yellow Reserved Hoodie</p>
     <div className='flex justify-between p-1'>
     <p>Dress</p>
     <p className='line-through pl-[70px]'>$364.00</p>
     <p className='text-red-500'>$155.00</p>
     </div>
    </div>
    </div>
    <div className='w-[80%] flex ml-[100px] gap-4'>
    <div className='w-[250px] h-auto space-y-2'>
      <img className='w-[250px] h-[300px]' src="./src/assets/top-product4.png" alt="" />
      <p className='font-bold p-1'>Basic Dress Green</p>
     <div className='flex justify-between p-1'>
     <p>Dress</p>
     <p>$63.85</p>
     </div>
    </div>
    <div className='w-[250px] h-auto space-y-2'>
      <img className='w-[250px] h-[300px]' src="./src/assets/top-product5.png" alt="" />
      <p className='font-bold p-1'>Nike Air Zoom Pegasus</p>
     <div className='flex justify-between p-1'>
     <p>Shoe</p>
     <p className='line-through pl-[70px]'>$220.00</p>
     <p className=' text-red-600'>$198.00</p>
     </div>
    </div>
    <div className='w-[250px] h-auto space-y-2'>
      <img className='w-[250px] h-[300px]' src="./src/assets/top-product6.png" alt="" />
      <p className='font-bold p-1'>Nike Repel Miler</p>
     <div className='flex justify-between p-1'>
     <p>hoodies</p>
     <p>$120.00</p>
     </div>
    </div>
    <div className='w-[250px] h-auto space-y-2'>
      <img className='w-[250px] h-[300px]' src="./src/assets/top-product7.png" alt="" />
      <p className='font-bold p-1'>Nike Sportswear Futura Luxe</p>
     <div className='flex justify-between p-1'>
     <p>Glasses</p>
     <p>$160.00</p>
     </div>
    </div>
    </div>
    </div>
   </>
  )
}

export default Card
