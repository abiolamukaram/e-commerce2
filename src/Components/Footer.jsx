import React from 'react'

const Footer = () => {
  return (
    <>
      <div className=''>
        <div className='flex justify-between py-14 px-32'>
            <div>
                <img className='pb-3' src="./src/assets/logo.png" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit, sed do eiusmod tempor incididunt ut labore et <br />dolore magna aliqua.</p>
                <div>
                    
                </div>
            </div>
            <div>
                <h1 className='font-bold text-xl pb-2'>CATALOG</h1>
                <ul className='space-y-2'>
                    <li>Necklace</li>
                    <li>Hoodies</li>
                    <li>Jewelry Box</li>
                    <li>T-Shirt</li>
                    <li>Jacket</li>
                </ul>
            </div>
            <div>
            <h1 className='font-bold text-xl pb-2'>ABOUT US</h1>
                <ul className='space-y-2'>
                    <li>Our Producers</li>
                    <li>Site Map</li>
                    <li>FAQ</li>
                    <li>About Us</li>
                    <li>Terms and Conditions</li>
                </ul>
            </div>
            <div>
            <h1 className='font-bold text-xl pb-2'>CUSTOMER SERVICES</h1>
                <ul className='space-y-2'>
                    <li>Contact Us</li>
                    <li>Track Your Order</li>
                    <li>Product Care and Repair</li>
                    <li>Book A Appointment</li>
                    <li>Shipping and Returns</li>
                </ul>
            </div>
        </div>
        <div className='bg-blue-950 flex justify-between text-white px-28'>
            <p>© 2022 Coral , Inc.</p>
            <div></div>
            <button>Scroll To Top</button>
        </div>
      </div>
    </>
  )
}

export default Footer
