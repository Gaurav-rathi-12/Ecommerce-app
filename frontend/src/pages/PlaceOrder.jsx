import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod')
  const {navigate} = useContext(ShopContext)


  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt5 sm:pt-14 min-h-[80vh] border-t border-gray-300 '>
      {/* left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px] '>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input className='border  border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' name="" id="" />
          <input className='border  border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' name="" id="" />
        </div>
          <input className='border  border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email adress' name="" id="" />
          <input className='border  border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' name="" id="" />
        <div className='flex gap-3'>
          <input className='border  border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' name="" id="" />
          <input className='border  border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' name="" id="" />
        </div>
        <div className='flex gap-3'>
          <input className='border  border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' name="" id="" />
          <input className='border  border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country ' name="" id="" />
        </div>
          <input className='border  border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' name="" id="" />

      </div>

      {/* Right side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>

        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* payment method selection */}
          <div className='flex gap-3 flex-col lg:flex-row'>

          <div className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'>
            <p onClick={()=> setMethod('stripe')} className={`${method === 'stripe' ? 'bg-green-400':''} min-w-3.5 h-3.5 border border-gray-400 rounded-full`} ></p>
            <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
          </div>
          <div className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'>
            <p onClick={()=> setMethod('razorpay')} className={`${method === 'razorpay' ? 'bg-green-400':''} min-w-3.5 h-3.5 border border-gray-400 rounded-full`} ></p>
            <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
          </div>
          <div className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'>
            <p onClick={()=> setMethod('cod')} className={`${method === 'cod' ? 'bg-green-400':''} min-w-3.5 h-3.5 border border-gray-400 rounded-full`} ></p>
            <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={()=> navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm cursor-pointer'>PLACE ORDER</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder