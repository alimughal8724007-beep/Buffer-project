import React from 'react'
import { ArrowRight } from 'lucide-react'

const Section5 = () => {
  return (
    <div>
      <div className='bg-[#222929] h-160 rounded-4xl ml-10 mr-10 py-30 px-15 grid-cols-2 grid'>
        <div>
          <h3 className='text-sm text-green-300 tracking-wider'>MCP · API · AGENTS</h3>
          <h1 className='text-4xl font-bold text-white mt-2'>Plan and Post from <br/>your AI assistant</h1>
           <p className='text-m text-white leading-5 mt-4'> Connect Buffer to Claude or ChatGPT and manage your whole workflow from a conversation. Pull your performance data, plan content around what’s working, and send content straight to your queue. </p>
            <div className='flex'>
            <p className='text-m mt-8 font-bold text-white'>Ask: </p>
            <p className='text-m text-white mt-8 ml-1  '> “What were my top posts this month?” Your AI pulls real numbers from Buffer.</p>
           </div>
        <div className='flex'>
        <p className='text-m text-white mt-2 font-bold'>Plan:</p>
        <p className='text-m text-white mt-2 ml-1'>Turn what’s working into next week’s content ideas.</p>
        </div>
        <div className='flex'>
        <p className='text-m text-white mt-2 font-bold'>Post:</p>
        <p className='text-m text-white mt-2 ml-1'>Content lands in your Buffer queue, ready to post.</p>
        </div>
        <div className='flex gap-5 mt-10'>
       <button className='h-5 w-45 py-6  text-m font-medium  flex items-center text-green-950 justify-center bg-[#B0EC9C] rounded-2xl'>Learn More<ArrowRight size={25} className='ml-6 mt-2' /></button>
       <div className='h-2 w-65 px-4 py-6 text-m font-medium border-amber-50 border-2 flex items-center text-white justify-center rounded-2xl'>Read Documentation <ArrowRight size={25} className='ml-6 mt-2' /></div>
        </div>
        </div>
       <div className='h-120 w-120 bg-gray-200  rounded-4xl'>
            <img  className='h-full w-full object-cover' src='https://cdn.prod.website-files.com/5e1452b8eb497cb0d999c76f/6916eae0665b28c721280532_Images%20(36).webp'></img>
        </div>
      </div>
    </div>
  )
}
export default Section5