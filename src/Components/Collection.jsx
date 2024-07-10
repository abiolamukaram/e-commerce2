import React from 'react'

const Collection = () => {
  return (
    <>
    <div className='relative mt-16'>
        <img className='' src="./src/assets/background.png" alt="" />
        <div className='w-[350px] absolute bottom-32 right-52 space-y-4'>
            <img className='w-[100px] h-[50px]' src="./src/assets/Zara_Logo.png" alt="" />
            <p className='text-white'>Lustrous yet understated. The new evening <br />wear collection exclusively offered at the <br />reopened Giorgio Armani boutique in Los <br />Angeles.</p>
            <button className='bg-white text-black p-2 border'>See Collection</button>
        </div>
    </div>
    </>
  )
}

export default Collection
