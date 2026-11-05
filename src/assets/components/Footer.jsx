import React from 'react'
import { ChevronDown, Globe } from 'lucide-react'

const Footer = () => {
  return (
    <div className='bg-[#0b2a22] text-white rounded-t-2xl px-10 py-16'>

      {/* 1. Links ke 6 columns */}
      <div className='grid grid-cols-6 gap-6'>

        <div>
          <h3 className='text-green-300 font-semibold mb-4'>Product</h3>
          <ul className='space-y-3 text-sm'>
            <li>Create</li>
            <li>Publish</li>
            <li>Insights</li>
            <li>Community</li>
            <li>Collaborate</li>
            <li>AI Assistant</li>
            <li>Start Page</li>
            <li>Content Planner</li>
            <li>Social Media Calendar</li>
            <li>Social Media MCP</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div>
          <h3 className='text-green-300 font-semibold mb-4'>Channels</h3>
          <ul className='space-y-3 text-sm'>
            <li>Bluesky</li>
            <li>Facebook</li>
            <li>Google Business Profile</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Mastodon</li>
            <li>Pinterest</li>
            <li>Substack <span className='bg-green-100 text-black text-xs px-2 py-1 rounded ml-1'>New</span></li>
            <li>Threads</li>
            <li>TikTok</li>
            <li>X</li>
            <li>YouTube</li>
          </ul>
        </div>

        <div>
          <h3 className='text-green-300 font-semibold mb-4'>Apps & integrations</h3>
          <ul className='space-y-3 text-sm'>
            <li>Integrations</li>
            <li>Browser Extension</li>
            <li>iOS App</li>
            <li>Android App</li>
            <li>Buffer API</li>
            <li>Developer Docs</li>
          </ul>
        </div>

        <div>
          <h3 className='text-green-300 font-semibold mb-4'>Made for</h3>
          <ul className='space-y-3 text-sm'>
            <li>Agencies</li>
            <li>Creators</li>
            <li>Developers</li>
            <li>Higher Education</li>
            <li>Nonprofits</li>
            <li>Small Business</li>
            <li>Startups</li>
          </ul>
        </div>

        <div>
          <h3 className='text-green-300 font-semibold mb-4'>Resources & support</h3>
          <ul className='space-y-3 text-sm'>
            <li>Blog</li>
            <li>Case Studies</li>
            <li>Template Library</li>
            <li>Resource Library</li>
            <li>Our Community</li>
            <li>Social Media Terms Glossary</li>
            <li>Help Center</li>
            <li>Changelog</li>
            <li>Request a Feature</li>
            <li>Status</li>
          </ul>
        </div>

        <div>
          <h3 className='text-green-300 font-semibold mb-4'>Company</h3>
          <ul className='space-y-3 text-sm'>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Partner Program</li>
            <li>Open Hub</li>
            <li>Transparent Metrics</li>
            <li>Transparent Pricing</li>
            <li>Transparent Salaries</li>
            <li>Product Roadmap</li>
          </ul>
        </div>

      </div>

      {/* 2. Free tools wali line (upar neeche border) */}
      <div className='border-t border-b border-gray-600 py-5 mt-16'>
        <div className='flex items-center gap-2 text-green-300 font-semibold'>
          Free tools and social media data <ChevronDown size={16} />
        </div>
        <p className='text-sm mt-1'>Benchmarks, best times to post, and tools you can use right now.</p>
      </div>

      {/* 3. Neeche: logo left, social + copyright right */}
      <div className='flex items-end justify-between mt-16'>

        <h1 className='text-7xl font-bold text-green-300'>Buffer</h1>

        <div className='flex flex-col items-end gap-5'>
          <div className='flex items-center gap-2 text-green-300'>
            <Globe size={18} /> English <ChevronDown size={16} />
          </div>

          <p className='text-sm'>Copyright ©2026 Buffer | Privacy | Terms | Security | Legal | Sitemap</p>
        </div>

      </div>

    </div>
  )
}

export default Footer