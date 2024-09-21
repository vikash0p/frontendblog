import Image from 'next/image';
import React from 'react'
import { BlogDocument } from "@/utils/interface";

interface blogProps {
  value: BlogDocument;
}
const BlogCardImage  = async ({value}:blogProps) => {

  return (
    <Image
      className="rounded-t-lg w-full h-full object-cover object-center"
      src={value.img}
      alt={value._id}
      fill
      quality={75}

      sizes="(min-width: 1280px) 306px, (min-width: 1040px) calc(21.82vw + 107px), (min-width: 420px) 382px, calc(84vw + 46px)"
    />
  );
}

export default BlogCardImage
