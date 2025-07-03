import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t border-gray-300'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='flex flex-col md:flex-row my-10 gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col text-gray-600 gap-12 md:w-1/2 justify-center'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae consequatur accusantium quos sint nam, ipsa asperiores, quae quod esse, ut eligendi! Tempore ratione maxime dignissimos veritatis suscipit enim aperiam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, esse itaque nobis culpa rem, iure ratione in delectus vitae harum incidunt doloremque aliquid vero perspiciatis inventore. Hic pariatur vitae obcaecati!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis commodi quaerat optio et doloremque non deleniti odit, cum accusantium quasi, sapiente eaque omnis excepturi, vitae laboriosam quo repellat quidem fugiat!</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-12 flex flex-col gap-5 '>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, autem cupiditate consectetur aliquid deserunt aperiam exercitationem enim? Qui, voluptatum. Amet explicabo dolores magni quos corrupti earum itaque? Harum, dolores perferendis!</p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-12 flex flex-col gap-5 '>
          <b>Convience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, autem cupiditate consectetur aliquid deserunt aperiam exercitationem enim? Qui, voluptatum. Amet explicabo dolores magni quos corrupti earum itaque? Harum, dolores perferendis!</p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-12 flex flex-col gap-5 '>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, autem cupiditate consectetur aliquid deserunt aperiam exercitationem enim? Qui, voluptatum. Amet explicabo dolores magni quos corrupti earum itaque? Harum, dolores perferendis!</p>
        </div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About