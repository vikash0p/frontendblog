'use client'
import React from 'react'
import {BlogDocument} from '@/utils/interface'
import HowToCard from './HowToCard'
import BlogData from './BlogData'

interface latestPostChildrenProps {

  value: BlogDocument[]
}
const LatestPosts:React.FC<latestPostChildrenProps> = ({value}) => {
  return (
    <div>
      <div className="text-center">
        <p className="text-xs uppercase font-semibold text-red-700">art blog</p>
        <h2 className="text-4xl font-mono">Latest Posts</h2>
        <p className="w-1/2 m-auto">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium dolor em que laud antium, totam rem.
        </p>
      </div>
      <div>
        {value?.length <= 0 && !value && value === undefined ? (
          <div>
            <h1 className="text-3xl uppercase font-bold text-center py-5">
              no blog found
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl gap-3 m-auto px-2  pt-5 ">
            {value?.slice(1, 9).map((value) => {
              return <BlogData value={value} key={value._id} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default LatestPosts
