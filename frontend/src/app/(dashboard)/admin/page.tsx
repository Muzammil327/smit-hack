import React from 'react'

export default function page() {
  return (
    <div className="p-4 sm:ml-64 bg-red-400 h-[400px]">
      <div className='mt-4 mb-20 b'>
        <h1 className='text-xl font-semibold text-slate-200'>Dashboard</h1>
        <div className='flex gap-4 relative'>
          <div className='relative top-[9px] left-[44px]'>
            <svg className="icon icon-tabler icon-tabler-search" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" stroke="none" /><circle cx="10" cy="10" r="7" /><line x1="21" x2="15" y1="21" y2="15" /></svg>
          </div>
          <input type="search" name="" id=""
            placeholder='Search Here ...'
            className='bg-white rounded pl-10 pr-4 w-60 shadow h-10' />
          <div className='h-10 w-10 rounded-full bg-white '>

          </div>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        <div className="bg-white py-10 px-6 rounded b">
          <div className='flex flex-col'>
            <span className='text-base text-slate-500'>Total Student</span>
            <span className='text-2xl text-black'>350,897</span>
          </div>
          <div className='bg-emerald-500 c h-12 w-12 rounded-full'></div>
        </div>
        <div className="bg-white py-10 px-6 rounded b">
          <div className='flex flex-col'>
            <span className='text-base text-slate-500'>Online Student</span>
            <span className='text-2xl text-black'>350,897</span>
          </div>
          <div className='bg-rose-500 c h-12 w-12 rounded-full'></div>
        </div>
        <div className="bg-white py-10 px-6 rounded b">
          <div className='flex flex-col'>
            <span className='text-base text-slate-500'>Total Course</span>
            <span className='text-2xl text-black'>350,897</span>
          </div>
          <div className='bg-red-500 c h-12 w-12 rounded-full'></div>
        </div>
      </div>




    </div>
  )
}
