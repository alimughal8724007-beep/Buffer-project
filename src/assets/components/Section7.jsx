import React from 'react'
import { ArrowRight } from 'lucide-react'

const Section7 = () => {
  return (
         <div className='grid grid-cols-3 grid-rows-[230px_200px_400px] gap-5 mx-10 my-10'>

  {/* 1. Purple: col 1, row 1-2 */}
  <div className='col-start-1 row-start-1 row-span-2 rounded-3xl border border-gray-200 shadow-md p-2 bg-white'>
    <div className='h-full rounded-2xl bg-[#D4C2FF] p-3 flex flex-col overflow-hidden'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-medium'>Free Marketing Tools</h1>
        <ArrowRight size={28} />
      </div>
      <p className='text-lg mt-3 text-gray-700'>A collection of free tools to help you grow your social media presence.</p>
      <img className='mt-auto pt-4 w-full hover:scale-95 transition-transform duration-300' src="https://buffer.com/cdn-cgi/image/width=828,quality=75,format=auto/img/homepage/free-marketing-tools-large.webp" alt="" />
    </div>
  </div>

  {/* 2. Glossary: col 2-3, row 1 */}
  <div className='col-start-2 col-span-2 row-start-1 rounded-3xl border border-gray-200 shadow-md p-2 bg-white'>
    <div className='h-full rounded-2xl bg-[#9FEAE2] p-6 flex gap-4 overflow-hidden'>
      <div className='flex-1'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-medium'>Social Media Glossary</h1>
          <ArrowRight size={28} />
        </div>
        <p className='text-lg mt-3 text-gray-700'>A glossary of the most popular terms to help you make sense of all the social media lingo.</p>
      </div>
      <img className='flex-1 object-cover hover:scale-95 transition-transform duration-300' src="https://buffer.com/cdn-cgi/image/width=828,quality=75,format=auto/img/homepage/social-media-glossary-large.webp" alt="" />
    </div>
  </div>

  {/* 3. Pink: col 1, row 3 */}
  <div className='col-start-1 row-start-3 rounded-3xl border border-gray-200 shadow-md p-2 bg-white'>
    <div className='h-full rounded-2xl bg-[#FFB7AD] p-6 flex flex-col overflow-hidden'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-medium'>Social Media Marketing 101</h1>
        <ArrowRight size={28} />
      </div>
      <p className='text-lg mt-3 text-gray-700'>Your go-to guide for mastering social media marketing strategies.</p>
      <img className='mt-auto pt-4 w-full hover:scale-95 transition-transform duration-300' src="https://buffer.com/cdn-cgi/image/width=828,quality=75,format=auto/img/homepage/social-media-marketing-101-large.webp" alt="" />
    </div>
  </div>

  {/* 4. Best Time: col 2, row 2-3 */}
  <div className='col-start-2 row-start-2 row-span-2 rounded-3xl border border-gray-200 shadow-md p-2 bg-white'>
    <div className='h-full rounded-2xl bg-[#F3BDFF] p-6 flex flex-col overflow-hidden'>
      <img className='w-full hover:scale-95 transition-transform duration-300' src="https://buffer.com/cdn-cgi/image/width=640,quality=75,format=auto/img/homepage/best-time-to-post-large.webp" alt="" />
      <div className='mt-auto'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-medium'>Best Time to Post</h1>
          <ArrowRight size={28} />
        </div>
        <p className='text-lg mt-2 text-gray-700'>Discover the best times to post on social media to maximize your engagement.</p>
      </div>
    </div>
  </div>

  {/* 5. Resources (naya): col 3, row 2-3 */}
  <div className='col-start-3 row-start-2 row-span-2 rounded-3xl border border-gray-200 shadow-md p-2 bg-white'>
    <div className='h-full rounded-2xl bg-[#FFD88A] p-6 flex flex-col overflow-hidden'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-medium'>Social Media Resources</h1>
        <ArrowRight size={28} />
      </div>
      <p className='text-lg mt-3 text-gray-700'>A collection of articles and interviews packed with tips, stories, and insights to level up your social media marketing game.</p>
      <img className='mt-auto pt-4 w-full hover:scale-95 transition-transform duration-300' src="https://buffer.com/cdn-cgi/image/width=828,quality=75,format=auto/img/homepage/social-media-resources-large.webp" alt="" />
    </div>
  </div>

</div>
  )
}

export default Section7
