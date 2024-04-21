'use client'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
<div className='pt-12'>
  {/*Footer container*/}
  <footer className="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-gray-800 dark:text-white ">
    <div className="container p-6">
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        <div className="mb-6 lg:mb-0">
          <Image alt='Images' src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" width={250} height={200} className="w-full rounded-md shadow-lg" />
        </div>
        <div className="mb-6 lg:mb-0">
          <Image alt='Images' src="https://tecdn.b-cdn.net/img/new/fluid/city/111.webp" width={250} height={200} className="w-full rounded-md shadow-lg" />
        </div>
        <div className="mb-6 lg:mb-0">
          <Image alt='Images' src="https://tecdn.b-cdn.net/img/new/fluid/city/112.webp" width={250} height={200} className="w-full rounded-md shadow-lg" />
        </div>
        <div className="mb-6 lg:mb-0">
          <Image alt='Images' src="https://tecdn.b-cdn.net/img/new/fluid/city/114.webp" width={250} height={200} className="w-full rounded-md shadow-lg" />
        </div>
        <div className="mb-6 lg:mb-0">
          <Image alt='Images' src="https://tecdn.b-cdn.net/img/new/fluid/city/115.webp" width={250} height={200} className="w-full rounded-md shadow-lg" />
        </div>
        <div className="mb-6 lg:mb-0">
          <Image alt='Images' src="https://tecdn.b-cdn.net/img/new/fluid/city/116.webp" width={250} height={200} className="w-full rounded-md shadow-lg" />
        </div>
      </div>
    </div>
    {/*Copyright section*/}
    <div className="w-full bg-black/5 p-4 text-center">
      © 2024 Copyright:
      <a href="https://tw-elements.com/">Vikash Pandat</a>
    </div>
  </footer>
</div>

  )
}

export default Footer
