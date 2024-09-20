import { fetchBlogById } from "@/utils/FetchBlogData";
import { BlogDocument } from "@/utils/interface";
import Image from "next/image";

export default async function BlogId({ params }: { params: { id: string } }) {
  const data: BlogDocument = await fetchBlogById(params.id);
  // console.log("🚀 ~ file: BlogId.tsx:7 ~ data:", data);

  return (
    <div className="max-w-7xl m-auto grid grid-cols-1 lg:grid-cols-2 justify-around gap-5 py-12">
      <div className="">
        <div className="relative max-w-sm md:max-w-md overflow-x-hidden h-96">
          <Image
            src={data.img}
            alt={data._id}
            className="object-cover w-full h-full object-center"
            fill
          />
        </div>
      </div>
      <div className="space-y-3">
        <h2 className="text-3xl uppercase font-bold">{data.title} </h2>
        <h2 className="text-2xl ">{data.des} </h2>
        <h2>
          Author : <span className="font-bold">{data.author} </span>{" "}
        </h2>
      </div>
    </div>
  );
}
