'use client'
import { useState, FormEvent } from "react";

const NewsletterForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("Name:", name);
    // console.log("Email:", email);
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-4">
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 "
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 "
          required
        />
      </div>
      <button
        type="submit"
        className="bg-gray-800 text-white py-2 px-4  w-full hover:bg-gray-800"
      >
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;
