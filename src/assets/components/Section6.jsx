import React from 'react'
import { ArrowRight } from 'lucide-react'
const Section6 = () => {
  return (
    <div>
      <div className='flex items-center justify-between gap-15 px-10 py-16 mt-15'>
        <div className='flex-1'>
        <h3 className='text-m tracking-wider text-gray-600'>CUSTOMER SUPPORT</h3>
        <h1 className='text-5xl font-semibold text-black mt-3'>
          Human support,<br/>worldwide
        </h1>
        <p className='mt-6 text-lg text-gray-700'>
          Our global Customer Advocacy team is spread across time zones to make sure help is always nearby. Whether you have a quick question, need technical support, or just want to connect, we’re here for you — no bots, just real people who care.
        </p>

        <div className='flex gap-3 mt-6'>
          <button className='bg-[#C6EEB9] border px-5 py-2 rounded-full'>Visit the Help Center</button>
          <button className='border px-5 py-2 rounded-full'>Join Discord</button>
        </div>

        <p className='mt-8 text-lg text-gray-700'>
         We prioritize customer connection as a company and you could end up speaking with a teammate in any role at Buffer, from Marketers to Engineers.
        </p>
        <a href='#' className='underline mt-3 inline-flex items-center gap-2'>
          Learn more about our global team <ArrowRight size={18} />
        </a>
      </div>

      {/* Right: image */}
      <div className='flex-1'>
        <img src='https://buffer.com/cdn-cgi/image/width=1920,quality=75,format=auto/img/homepage/customer-support-team.webp' alt='team' className='w-full rounded-3xl' />
      </div>
        </div>
       <div className='flex items-end justify-between gap-10 px-10 py-16'>
          <div>
            <h3 className='text-sm tracking-wider text-gray-600'>RESOURCES</h3>
            <h1 className='text-5xl font-semibold text-black mt-3 max-w-xl'>
              Fuel your social media success
            </h1>
          </div>
          <p className='text-lg text-gray-700'>
            Everything you need to level up your social strategy—in one place.
          </p>
        </div>
    </div>
  )
}

export default Section6
