import React from 'react'
import { ArrowRight } from 'lucide-react'

const Section8 = () => {
  return (
    <div className='px-10 py-16'>

      {/* Upar wali row: text left, button right */}
      <div className='flex items-start justify-between gap-10'>
        <div className='max-w-3xl'>
          <h3 className='text-sm tracking-wider text-gray-600'>ABOUT US</h3>
          <h1 className='text-5xl font-semibold mt-3'>We are an open company</h1>
          <p className='mt-6 text-lg text-gray-700'>
            Since 2013, we've shared Buffer's finances, team salaries, and other key metrics openly. Our commitment to transparency is rooted in our belief that it fosters trust, keeps us accountable, and helps drive positive change within our industry.
          </p>
        </div>

        <button className='flex items-center gap-2 border border-gray-400 rounded-full px-6 py-3 mt-16 '>
          Open dashboard <ArrowRight size={20} />
        </button>
      </div>

      {/* Neeche 4 cards */}
      <div className='grid grid-cols-4 gap-5 mt-14'>

        <div className='border border-gray-200 shadow-md rounded-3xl p-6 h-45 flex flex-col justify-between'>
          <div>
            <h3 className='font-semibold text-lg'>MAU</h3>
            <p className='text-gray-600'>Monthly active users</p>
          </div>
          <h2 className='text-4xl font-semibold'>319,612</h2>
        </div>

        <div className='border border-gray-200 shadow-md rounded-3xl p-6 h-45 flex flex-col justify-between'>
          <div>
            <h3 className='font-semibold text-lg'>Total customers</h3>
            <p className='text-gray-600'>Total customers</p>
          </div>
          <h2 className='text-4xl font-semibold'>85,347</h2>
        </div>

        <div className='border border-gray-200 shadow-md rounded-3xl p-6 h-45 flex flex-col justify-between'>
          <div>
            <h3 className='font-semibold text-lg'>Teammates</h3>
            <p className='text-gray-600'>Across 15 countries</p>
          </div>
          <h2 className='text-4xl font-semibold'>73</h2>
        </div>

        <div className='border border-gray-200 shadow-md rounded-3xl p-6 h-45 flex flex-col justify-between'>
          <div>
            <h3 className='font-semibold text-lg'>ARR</h3>
            <p className='text-gray-600'>Annual recurring revenue</p>
          </div>
          <h2 className='text-4xl font-semibold'>$28.0M</h2>
        </div>

      </div>
      <div className='mt-30 border border-gray-200 shadow-md rounded-2xl p-3'>
        <div className='bg-[#B0EC9C] rounded-2xl py-20 px-6 flex flex-col items-center text-center'>
          <h1 className='text-6xl font-semibold text-emerald-950 max-w-3xl'>
            Grow your social presence with confidence
          </h1>

          <button className='mt-10 flex items-center gap-2 bg-emerald-950 text-white rounded-full px-8 py-4 text-lg font-medium'>
            Get started for free <ArrowRight size={20} />
          </button>

          <p className='mt-6 text-emerald-950'>No credit card needed. Free forever.</p>
        </div>
      </div>
    </div>
  )
}

export default Section8