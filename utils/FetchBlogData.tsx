import axios from "axios";
import { ToastError, ToastSuccess } from "./React_Toastify";
const url: string = "https://backendblog-eta.vercel.app/blog";
export const fetchBlogData = async () => {
  try {
    const res = await axios.get(`${url}/getBlog`);
    // await new Promise((resolve)=> setTimeout(resolve, 9000))
    return res.data.data;
  } catch (error: any) {
    console.log(
      "🚀 ~ file: FetchBlogData.tsx:fetchBlogData ~ error:",
      error.message
    );
  }
};

export const fetchBlogById = async (id: string) => {
  try {
    const res = await axios.get(`${url}/getBlog/${id}`);
    return res.data.data;
  } catch (error: any) {
    console.log(
      "🚀 ~ file: FetchBlogData.tsx:fetchBlogData ~ error:",
      error.message
    );
  }
};

export const PostBlog = async(title:string,des:string,img:string,tags:string, author:string) => {
    try {
        const res = await axios.post(`${url}/create`,{
            title, des, img, tags,author

        });
        const data= await res.data;
        if(data.success===true){
            ToastSuccess(data.message);

        }
        console.log("🚀 ~ file: FetchBlogData.tsx:35 ~ data:", data);
        return data;

    } catch (error) {
    console.log("🚀 ~ file: FetchBlogData.tsx:37 ~ error:", error);
    ToastError(error.message)

    }
};
