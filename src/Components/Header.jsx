import React from 'react'

const Header = () => {
  return (
    <>
    <div className='w-full '>
    <nav className='w-[90%] h-[80px] bg-white items-center mx-[50px]'>
        <div className='flex justify-between items-center p-[20px] border '>
        <img className='w-[20px] h-[19px]' src="./src/assets/search.png" alt="" />
        <img className='w-[180px] h-[34px]' src="./src/assets/logo.png" alt="" />
        <div className='flex w-[20%] h-[16px] space-x-3'>
        <img src="./src/assets/user.png" alt="" />
        <img src="./src/assets/account.png" alt="" />
        <img src="./src/assets/shopping.png" alt="" />
        <img src="./src/assets/shop-now.png" alt="" />
        </div>
        </div>
        <div className='flex justify-between py-[15px]'>
        <h4>Jewelry & Accessories</h4>
        <h4>Clothing & Shoes</h4>
        <h4>Home & Living</h4>
        <h4>Wedding & Party</h4>
        <h4>Toys & Entertainment</h4>
        <h4>Art & Collectibles</h4>
        <h4>Craft Supplies & Tools</h4>
    </div>
    </nav>
    <div className='border bg-gray-600 my-[50px] w-[90%] h-[auto] mx-[50px] flex justify-between items-center p-3'>
        <div className='py-[20px] space-y-5'>
            <h1 className='font-bold text-3xl'>Collections</h1>
            <p className='text-xl'>You Can Explore And Shop Many Different Collection <br /> From Various Brands Here.</p>
            {/* <a href="">
                <img src="./assets/white-shopping.png" alt="" />
            </a> */}
            <button className='border text-white bg-slate-800 p-[8px] flex'><img src="./src/assets/white-shopping.png" alt="" />Shop Now</button>
        </div>
        <img className='w-[300px] h-[400px]' src="./src/assets/image-product.png" alt="" />
    </div>
   
    </div>
    </>
  )
}

export default Header
