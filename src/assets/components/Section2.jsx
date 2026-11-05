const Section2 = () => {
  return (
    <div>
      <div className='grid grid-cols-2 mt-5 gap-6 px-10 py-10'>
      {/* CARD 1 - PURPLE (Publish) */}
        <div className='group cursor-pointer rounded-3xl border border-gray-200 bg-gray-50 p-3 transition duration-300 hover:-translate-y-1 hover:shadow-xl'>
          <div className='h-72 overflow-hidden rounded-2xl bg-[#F3BDFF] pl-10 pt-10'>
            <img
              className='h-full w-full origin-top-left rounded-tl-2xl object-cover shadow-lg transition duration-500 group-hover:scale-105'
              src='https://buffer.com/cdn-cgi/image/width=3840,quality=75,format=auto/img/homepage/publish-composer.webp'
              alt=''
            />
          </div>
          <div className='px-5 pb-5 pt-6'>
            <h3 className='text-2xl font-bold text-gray-900'>
              Publish on every channel
            </h3>
            <p className='mt-3 leading-relaxed text-gray-600'>
              Schedule your content to the most popular platforms including
              Facebook, Instagram, TikTok, LinkedIn and more.
            </p>
            <a
              href='#'
              className='mt-6 inline-block font-medium text-gray-900 underline underline-offset-4 transition group-hover:translate-x-1'
            >
              Learn more →
            </a>
          </div>
        </div>

        {/* CARD 2 - GREEN (Create) */}
        <div className='group cursor-pointer rounded-3xl border border-gray-200 bg-gray-50 p-3 transition duration-300 hover:-translate-y-1 hover:shadow-xl'>
          <div className='h-72 overflow-hidden rounded-2xl bg-[#B0EC9C] pl-10 pt-10'>
            <img
              className='h-full w-full origin-top-left rounded-tl-2xl object-cover shadow-lg transition duration-500 group-hover:scale-105'
              src='https://buffer.com/cdn-cgi/image/width=3840,quality=75,format=auto/img/homepage/publish-composer.webp'
              alt=''
            />
          </div>
          <div className='px-5 pb-5 pt-6'>
            <h3 className='text-2xl font-bold text-gray-900'>
              Create better content
            </h3>
            <p className='mt-3 leading-relaxed text-gray-600'>
              Whether you are working solo or with a team, you get all the
              tools to create, organize and repurpose your content.
            </p>
            <a
              href='#'
              className='mt-6 inline-block font-medium text-gray-900 underline underline-offset-4 transition group-hover:translate-x-1'
            >
              Learn more →
            </a>
          </div>
        </div>

        {/* CARD 3 - ORANGE (Engage) */}
        <div className='group cursor-pointer rounded-3xl border border-gray-200 bg-gray-50 p-3 transition duration-300 hover:-translate-y-1 hover:shadow-xl'>
          <div className='h-72 overflow-hidden rounded-2xl bg-[#FFD88A] pl-10 pt-10'>
            <img
              className='h-full w-full origin-top-left rounded-tl-2xl object-cover shadow-lg transition duration-500 group-hover:scale-105'
              src='https://buffer.com/cdn-cgi/image/width=3840,quality=75,format=auto/img/homepage/publish-composer.webp'
              alt=''
            />
          </div>
          <div className='px-5 pb-5 pt-6'>
            <h3 className='text-2xl font-bold text-gray-900'>
              Engage with your audience
            </h3>
            <p className='mt-3 leading-relaxed text-gray-600'>
              Reply to comments from one place and keep every conversation
              going without jumping between apps.
            </p>
            <a
              href='#'
              className='mt-6 inline-block font-medium text-gray-900 underline underline-offset-4 transition group-hover:translate-x-1'
            >
              Learn more →
            </a>
          </div>
        </div>

        {/* CARD 4 - BLUE (Analyze) */}
        <div className='group cursor-pointer rounded-3xl border border-gray-200 bg-gray-50 p-3 transition duration-300 hover:-translate-y-1 hover:shadow-xl'>
          <div className='h-72 overflow-hidden rounded-2xl bg-[#ADDAFF] pl-10 pt-10'>
            <img
              className='h-full w-full origin-top-left rounded-tl-2xl object-cover shadow-lg transition duration-500 group-hover:scale-105'
              src='https://buffer.com/cdn-cgi/image/width=3840,quality=75,format=auto/img/homepage/publish-composer.webp'
              alt=''
            />
          </div>
          <div className='px-5 pb-5 pt-6'>
            <h3 className='text-2xl font-bold text-gray-900'>
              Analyze what works
            </h3>
            <p className='mt-3 leading-relaxed text-gray-600'>
              See your top posts and results across all channels, then do more
              of what your audience likes.
            </p>
            <a
              href='#'
              className='mt-6 inline-block font-medium text-gray-900 underline underline-offset-4 transition group-hover:translate-x-1'
            >
              Learn more →
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Section2