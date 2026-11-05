import React from 'react'
import { ArrowRight } from 'lucide-react'

const Section3 = () => {
  return (
    <div>
        <h1 className='text-5xl  font-bold text-center'>....and so much more!</h1>
      <div
        className='grid grid-cols-4 gap-6 px-10 py-10'
      >

        {/* CARD 1 - COLLABORATE (pink) */}
        <div className='border border-gray-200 h-100 rounded-2xl hover:scale-75 transition-transform duration-300 cursor-pointer'>
          <div className='rounded-2xl m-2 mb-3 bg-[#F4B8AB] h-50'>
            <img
              className='h-50 w-60 p-1 absolute hover:scale-75 transition-transform duration-300 cursor-pointer'
              src='https://buffer.com/cdn-cgi/image/width=1200,quality=75,format=auto/img/feature-pages/ai-assistant/ai-assistant-demo.webp'
              alt=''
            />
          </div>
           <h1 className='text-xl font-semibold mt-3 ml-4'>Collaborate</h1>
                <p className='mt-5 ml-4 text-base text-gray-700'>Manage, edit, and approve <br/> social media posts from your team.</p>
                <button className='text-black ml-4 text-m  mt-10 flex items-center hover:text-green-600 underline-offset-4'>Learn More <ArrowRight size={20} className='mt-1 ml-2'/> </button>
            </div>

        {/* CARD 2 - MOBILE APP (lavender) */}
        <div className='border border-gray-200 h-100 rounded-2xl hover:scale-75 transition-transform duration-300 cursor-pointer'>
          <div className='rounded-2xl m-2 mb-3 bg-[#D4C2FF] h-50'>
            <img
              className='h-50 w-60 p-1 absolute hover:scale-75 transition-transform duration-300 cursor-pointer'
              src='https://buffer.com/cdn-cgi/image/width=1200,quality=75,format=auto/img/feature-pages/ai-assistant/ai-assistant-demo.webp'
              alt=''
            />
          </div>
           <h1 className='text-xl font-semibold mt-3 ml-4'>Mobile App</h1>
                <p className='mt-5 ml-4 text-base text-gray-700'>Manage your social media<br/> accounts from anywhere.</p>
                <button className='text-black ml-4 text-m  mt-10 flex items-center hover:text-green-600 underline-offset-4'>Learn More <ArrowRight size={20} className='mt-1 ml-2'/> </button>
            </div>

        {/* CARD 3 - START PAGE (orange) */}
        <div className='border border-gray-200 h-100 rounded-2xl hover:scale-75 transition-transform duration-300 cursor-pointer'>
          <div className='rounded-2xl m-2 mb-3 bg-[#FFBB8A] h-50'>
            <img
              className='h-50 w-60 p-1 absolute hover:scale-75 transition-transform duration-300 cursor-pointer'
              src='https://buffer.com/cdn-cgi/image/width=1200,quality=75,format=auto/img/feature-pages/ai-assistant/ai-assistant-demo.webp'
              alt=''
            />
          </div>
           <h1 className='text-xl font-semibold mt-3 ml-4'>Start Page</h1>
                <p className='mt-5 ml-4 text-base text-gray-700'>Get a quick overview of your social media performance.</p>
                <button className='text-black ml-4 text-m  mt-10 flex items-center hover:text-green-600 underline-offset-4'>Learn More <ArrowRight size={20} className='mt-1 ml-2'/> </button>
            </div>
        {/* CARD 4 - AI ASSISTANT (teal) */}
        <div className='border border-gray-200 h-100 rounded-2xl hover:scale-75 transition-transform duration-300 cursor-pointer'>
          <div className='rounded-2xl m-2 mb-3 bg-[#9FEAE2] h-50'>
            <img
              className='h-50 w-60 p-1 absolute hover:scale-75 transition-transform duration-300 cursor-pointer'
              src='https://buffer.com/cdn-cgi/image/width=1200,quality=75,format=auto/img/feature-pages/ai-assistant/ai-assistant-demo.webp'
              alt=''
            />
          </div>
           <h1 className='text-xl font-semibold mt-3 ml-4'>AI Assistant</h1>
                <p className='mt-5 ml-4 text-base text-gray-700'>Get AI-powered suggestions for your social media posts.</p>
                <button className='text-black ml-4 text-m  mt-10 flex items-center hover:text-green-600 underline-offset-4'>Learn More <ArrowRight size={20} className='mt-1 ml-2'/> </button>
            </div>

      </div>
    </div>
  )
}

export default Section3