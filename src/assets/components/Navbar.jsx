import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between px-7'>
     <div className='flex items-center gap-39'>
      <img className='h-18' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfWadPzUDCDNl7AYG8GQegiiEqkY_505R7C724231ykg&s=10'></img>
      <ul className='flex gap-10'>
        <li><a href='#'>Features</a></li>
        <li><a href='#'>Integrations</a></li>
        <li><a href='#'>Made for</a></li>
        <li><a href='#'>Resources</a></li>
        <li><a href='#'>Pricing</a></li>
      </ul>
      </div>

      <div className='flex items-center gap-9'>
        <button className='px-6 py-3 border-gray border rounded-full cursor-pointer'>Log In</button>
        <button className='px-6 py-3 bg-[#B0EC9C] rounded-full cursor-pointer'>Get Started for free</button>
      </div>
     </nav>
     <div className='flex items-center justify-center gap-8 bg-[linear-gradient(90deg,rgba(2,0,36,1)_52%,rgba(30,71,49,1)_71%,rgba(0,0,0,1)_100%)] text-white py-6'>

      <div className='relative w-48 h-px shadow bg-[#99CD89]'>
      <span className='dot-move absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#B0EC9C]'></span>
      </div>
      
      <h3 className='font-mono font-bold leading-4'>Buffer<br/>Commit</h3>
      <p><b>Join Buffer's first Build Contest.</b> October 28 - November 13</p>
      <button className='px-3 py-1 rounded-md bg-[#99CD89] text-[#1a4d2e]  text-sm font-medium'>Register</button>

      <div className='relative w-48 h-px bg-[#99CD89]'>
      <span className='dot-move absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#99CD89]'></span>
      </div>
     </div>
    </div>
  )
}

export default Navbar
