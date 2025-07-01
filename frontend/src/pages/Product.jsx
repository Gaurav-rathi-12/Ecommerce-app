import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {
  const {productId} = useParams()
  // console.log(productId);
  const {products,currency,addToCart} = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () =>{
    products.map((item)=>{
      if(item._id === productId){
        setProductData(item)
        // console.log(item);
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData()
  },[productId, products])

  return productData? (
    <div className='border-t-2 border-gray-300 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row '>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full '>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=> setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ' />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

          <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} className='w-3 5' alt="" />
              <img src={assets.star_icon} className='w-3 5' alt="" />
              <img src={assets.star_icon} className='w-3 5' alt="" />
              <img src={assets.star_icon} className='w-3 5' alt="" />
              <img src={assets.star_dull_icon} className='w-3 5' alt="" />
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price} </p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description} </p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item,index)=>(
                  <button onClick={()=> setSize(item)} className={`${(item === size)? 'border-orange-500':'' } cursor-pointer border py-2 px-4 bg-gray-100`} key={index}>{item}</button>
                ))}

              </div>
            </div>
            <button onClick={()=> addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5 text-gray-300'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original Product</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return & exchange policy within 7 days.</p>
            </div>
          </div>
      </div>
                {/* discription */}
          <div className='mt-20'>
            <div className='flex '>
              <b className='border border-gray-300 py-3 px-5 '>Description</b>
              <div className='border border-gray-300 py-3 px-5 '>Reviews(122)</div>
            </div>
            <div className='flex flex-col gap-4 border text-gray-500 text-sm border-gray-300 p-6'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, sapiente quaerat voluptates tempore obcaecati, quis unde error aperiam, fugiat eum illum animi consequuntur quos quae saepe delectus rerum? Eius, debitis.
                Amet tempore corporis rerum sed ad quia eos, doloremque cumque totam quibusdam voluptatem esse consequuntur a distinctio ullam eum, accusantium temporibus. Commodi facilis error nam enim voluptatibus! Ipsum, quo labore?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe exercitationem qui nostrum magnam deserunt mollitia maiores obcaecati? Fugit quisquam voluptatem cupiditate, ab optio amet facilis, eos rem mollitia officiis labore.</p>
            </div>
          </div>
          <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ): <div className='opacity-0'></div>
}

export default Product