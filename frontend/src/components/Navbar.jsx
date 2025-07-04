import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [visible , setVisible] = useState(false)
    const {setShowSearch ,getCartCount} = useContext(ShopContext)

  return (
    <div className='flex justify-between items-center py-5 font-medium'>
        <NavLink to='/' className='active-false' ><img src={assets.logo} className='w-36' alt="" /></NavLink>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className='flex justify-center items-center gap-1 flex-col'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/collection' className='flex justify-center items-center gap-1 flex-col'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/about' className='flex justify-center items-center gap-1 flex-col'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/contact' className='flex justify-center items-center gap-1 flex-col'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

            <div className='group relative'>
                <Link to={'/login'} > <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" /></Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded '>
                        <p className='cursor-pointer hover:text-black' >My Profile</p>
                        <p className='cursor-pointer hover:text-black' >Orders</p>
                        <p className='cursor-pointer hover:text-black' >Logout</p>
                    </div>

                </div>
            </div>
            <Link to='/cart' className='relative' >
                <img src={assets.cart_icon} className='w-5 min-w-5 ' alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ' >{getCartCount()}</p>
            </Link>
            <img onClick={()=> setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>

        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? 'w-full': 'w-0'}`} >
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=> setVisible(false)} className='flex cursor-pointer items-center gap-4 p-3'>
                    <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                    <p>Back</p>
                </div>
                <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border border-gray-200' to='/' >HOME</NavLink>
                <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border border-gray-200' to='/collection' >COLLECTION</NavLink>
                <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border border-gray-200' to='/about' >ABOUT</NavLink>
                <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border border-gray-200' to='/contact' >CONTACT</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar