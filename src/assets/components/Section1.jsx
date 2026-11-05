import React from 'react'

const Section1 = () => {
  return (
    <div>
      <div className='flex flex-col items-center text-center m-15 relative h-screen'>
      <h1 className='font-bold text-7xl '>Your social media<br/> workspace</h1>
      <p className='text-xl mt-12 mb-10'>Works with every platform you post to,<br/> and plugs into your favorite tools</p>
      <img className='absolute top-10 left-40 h-14 w-18 animate-float hover:scale-75 transition-transform duration-300 cursor-pointer animate-float [animation-delay:1s]'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27MjHMSVXMBbZl7ZWI0dE6-YKD2fHAH-1pFFyu8E1rQ&s=10' alt='twitter'/>
      <img className='absolute bottom-20 left-10 h-12 w-14 animate-float hover:scale-75 transition-transform duration-300 cursor-pointer animate-float [animation-delay:1s'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxsnBk1dBFXLeDo9XwYG8J0Mp-QuLzJytvbxtfudyn5w&s=10' alt='insta' />
      <img className='absolute top-40 left-10 h-20 w-20 animate-float hover:scale-75 transition-transform duration-300 cursor-pointer animate-float [animation-delay:1s'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_sjpfsy_52HEd0FfXthdEKpzktkMYUdJJsy6vcft5ZA&s=10' alt='youtube' />
      <img className='absolute top-90 left-30 h-16 w-18 animate-float hover:scale-75 transition-transform duration-300 cursor-pointer animate-float [animation-delay:1s'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO5u8diAp95so8JT9_Nfx-Nz9KeuifheIOsDIzt200eg&s=10'alt='thread' />
      <img className='absolute bottom-10 right-60 h-14 w-16 animate-float hover:scale-75 transition-transform duration-300 cursor-pointer animate-float [animation-delay:1s 'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRojxVbLsjvkxKtnz49QqeRqQiFkh4CejljLDsvpSzVcA&s=10' alt='facebook' />
      <img className='absolute top-10 right-40 h-14 w-14 animate-float hover:scale-75 transition-transform duration-300 cursor-pointer animate-float [animation-delay:1s'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQev98sSTS7YOMYw9I_IoUa0XlnI3zXnH_JNiXPXmWJfQ&s=10' alt='whatsapp' />
      <img className='absolute top-40 right-10 h-16 w-18 animate-float hover:scale-75 transition-transform duration-300 cursor-pointer animate-float [animation-delay:1s'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBBpn4snpTRIUzg_X9WKLKLDQ3YvIX24KWH7fQE2v2JA&s=10' alt='linkedIn'/>
      <img className='absolute top-90 right-40 h-14 w-16 animate-float hover:scale-75 transition-transform duration-300 cursor-pointer animate-float [animation-delay:1s'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeh75NYSLMaeQWo_77P8vwOoKqD22brCY7ShsU9kZQ8Q&s=10'alt='pinterest' />
      <img className='absolute bottom-40 right-10 h-12 w-14 animate-float hover:scale-75 transition-transform duration-300 cursor-pointer animate-float [animation-delay:1s'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIGitQ3eUFhYmx0o8BMipgHWqK1o-rOwu9fPh3sSSqaA&s=10' alt='claude'/>
      <img className='absolute bottom-10 left-80 h-12 w-12 animate-float hover:scale-75 transition-transform duration-300 cursor-pointer animate-float [animation-delay:1s 'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzOcl2rYegX8QdnZwLmjf4e20XvWROXNijlhm5BlC3bg&s=10' alt='tiktok' />
      <img className='absolute top-50 right-70 h-14 w-16 animate-float hover:scale-75 transition-transform duration-300 cursor-pointer animate-float [animation-delay:1s 'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ40FsMqxzFIZbISrpTS0GBagUpB4Ls68PxzQoaB0XmA&s=10' alt='chatgpt' />
      <img className='absolute top-50 left-70 h-12 w-18 animate-float hover:scale-75 transition-transform duration-300 cursor-pointer animate-float [animation-delay:1s'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrTIEwTkqRG9bluO77dOVyOPVTfwUUeUbBvKTD7faKA&s=10' alt='snapchat' />
      <img className='absolute bottom-10 right-165 h-14 w-22 animate-float hover:scale-75 transition-transform duration-300 cursor-pointer animate-float [animation-delay:1s'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqfIFC2jd-G9ae2GvRP2QdHEpxUH6GMYSu70NljhJc6w&s=10' alt='twit'/>

      <div className="h-18 w-159 border rounded-full flex justify-between items-center px-2">
        <input
          type="email"
          placeholder="Enter your email..."
          className="h-16 w-80 bg-transparent focus:border-black rounded-full text-xl border-transparent border-2 outline-none px-5"
        />
        <button className="flex items-center h-16 w-60 bg-[#B0EC9C] text-black rounded-full p-5 text-xl cursor-pointer">
          Get started for free
          <span className="">→</span>
        </button>
      </div>
      <p className='text-gray-600 mt-2 text-sm'>By entering your email,you agree to recieve emails from Buffer.</p>
      </div>
      <div className="flex items-center gap-6 max-w-[1800px] mx-auto">
       <div className="flex-1 h-px bg-gray-300" />
       <p className='text-gray-600 text-xl flex justify-center text-center'>321,678574,789 creators, brands, and agencies using Buffer</p>
       <div className="flex-1 h-px bg-gray-300" />
       </div>

      <div>
        <div className='overflow-hidden mt-10'>

    <div className='marquee flex w-max'>

    <img className='h-12 w-32 object-contain mr-16 grayscale opacity-60' src='/cococola.png' alt=''/>
    <img className='h-12 w-32 object-contain mr-16 grayscale opacity-60' src='/GucciLogo.png' alt=''/>
    <img className='h-12 w-36 object-contain mr-16 grayscale opacity-60' src='/kfclogo.png' alt=''/>
    <img className='h-12 w-32 object-contain mr-16 grayscale opacity-60' src='/puma.png' alt=''/>
    <img className='h-12 w-32 object-contain mr-16 grayscale opacity-70' src='/netflix.png' alt=''/>
    <img className='h-12 w-32 object-contain mr-16 grayscale opacity-60' src='/nike.png' alt=''/>
    <img className='h-12 w-32 object-contain mr-16 grayscale opacity-60' src='/ysl.png' alt=''/>
    <img className='h-12 w-32 object-contain mr-16 grayscale opacity-60' src='/durexx.png' alt=''/>
    <img className='h-12 w-32 object-contain mr-16 grayscale opacity-60' src='/starbuck.png' alt=''/>
    <img className='h-12 w-32 object-contain mr-16 grayscale opacity-60' src='/mac.png' alt=''/>
    <img className='h-12 w-32 object-contain mr-16 grayscale opacity-60' src='/lays.png' alt=''/>
    <img className='h-12 w-32 object-contain mr-16 grayscale opacity-60' src='/rolex.png' alt=''/>
    <img className='h-12 w-32 object-contain mr-16 grayscale opacity-60' src='/adidas.png' alt=''/>
    <img className='h-12 w-32 object-contain mr-16 grayscale opacity-60' src='/bmw.logo.jpg' alt=''/>
    <img className='h-12 w-32 object-contain mr-16 grayscale opacity-60' src='/porsche.png' alt=''/>
    <img className='h-12 w-32 object-contain mr-16 grayscale opacity-60' src='/chanel.png' alt=''/>
    <img className='h-12 w-32 object-contain mr-16 grayscale opacity-60' src='/vice.png' alt=''/>


    </div>


    </div>
       
      </div>
      
    </div>
  )
}

export default Section1
