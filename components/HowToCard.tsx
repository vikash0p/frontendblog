import Image from 'next/image'
import React from 'react'
import{BlogDocument}from '@/utils/interface'
interface howToCardChildrenProps{
    value:BlogDocument
}

const HowToCard :React.FC<howToCardChildrenProps>= ({value}) => {
    console.log("🚀 ~ file: HowToCard.tsx:9 ~ value:", value.createdAt);
    const date= new Date(value.createdAt);
    const hours= date.getMinutes();
    console.log("🚀 ~ file: HowToCard.tsx:12 ~ hours:", hours);

  return (
    <div>

<div  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
  <Image className="object-cover w-full rounded-t-lg h-52  md:w-48 md:rounded-none md:rounded-s-lg" src={value.img} width={181} height={214}  alt={value._id} />
  <div className="flex flex-col justify-between p-4 leading-normal">
    <p className='text-red-500'>{ "how to"} </p>
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{value.title}</h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{value.des} </p>
  </div>
</div>


    </div>
  )
}

export default HowToCard
