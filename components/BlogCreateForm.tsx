'use client'
import { PostBlog } from "@/utils/FetchBlogData";
import { error } from "console";
import React, { useState } from "react";

interface BlogPost {
  title: string;
  description: string;
  imageUrl: string;
  tags: string;
  author: string;
}

const BlogCreateForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [tags, setTags] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit =(event: React.FormEvent) => {
    event.preventDefault();

    const newBlogPost: BlogPost = {
      title,
      description,
      imageUrl,
      tags,
      author,
    };
    PostBlog(title, description, imageUrl,tags,author).then((data) => {
    console.log("🚀 ~ file: BlogCreateForm.tsx:32 ~ data:", data.message);

    }).catch((error)=>console.log(error))
    console.log(newBlogPost);
    setTitle("");
    setDescription("");
    setImageUrl("");
    setTags("");
    setAuthor("");
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="description" className="block font-medium">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="imageUrl" className="block font-medium">
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="tags" className="block font-medium">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="author" className="block font-medium">
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Create Blog Post
        </button>
      </form>
    </div>
  );
};

export default BlogCreateForm;
