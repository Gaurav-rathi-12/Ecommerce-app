import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Orders = () => {
  const {products,currency} = useContext(ShopContext)
  return (
    <div className='border-t border-gray-300 pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'}/>
      </div>
      <div>
        {
          products.slice(1,4).map((item,index)=>(
            <div className='py-4 border-b border-t border-gray-300 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                <div>
                  <p className='sm:text-base font-medium'>{item.name} </p>
                <div className='flex items-center text-base gap-3 mt-2'>
                  <p className='text-lg'>{currency}{item.price} </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className='mt-2'>Date: <span className='text-gray-700'>28 , jul 2024</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex gap-2 items-center'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm sm:text-base'>Ready to ship</p>
                </div>
                <button className='border border-gray-300 text-sm py-2 px-4 font-medium rounded-sm'>Track Order</button>
              </div>

            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default Orders