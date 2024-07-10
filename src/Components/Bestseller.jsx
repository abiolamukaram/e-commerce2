import React from 'react'

const Bestseller = () => {
  return (
    <>
      <div className='mt-24'>
        <h1 className='text-2xl font-bold text-center'>Best Sellers</h1>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu nunc, fermentum quis sapien in, placerat <br />scelerisque risus. Class aptent taciti sociosqu ad litora torquent per </p>
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
      <img className='w-[250px] h-[300px]' src="./src/assets/top-product1.png" alt="" />
      <p className='font-bold p-1'>Nike Sportswear Futura Luxe</p>
     <div className='flex justify-between p-1'>
     <p>Bag</p>
     <p>$130.00</p>
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
    <div className='w-[250px] h-auto space-y-2'>
      <img className='w-[250px] h-[300px]' src="./src/assets/top-product5.png" alt="" />
      <p className='font-bold p-1'>Nike Air Zoom Pegasus</p>
     <div className='flex justify-between p-1'>
     <p>Shoe</p>
     <p className='line-through pl-[70px]'>$220.00</p>
     <p className=' text-red-600'>$198.00</p>
     </div>
    </div>
  </div>

  
    </>
  )
}

export default Bestseller
