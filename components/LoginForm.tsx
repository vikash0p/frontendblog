"use client";
import { ToastError, ToastSuccess } from "@/utils/React_Toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await axios.post("https://backendblog-eta.vercel.app/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      console.log("🚀 ~ file: LoginForm.tsx:34 ~ res:", res);

      if (res.status === 200) {
        // alert(res.data.message);
        ToastSuccess(res.data.message);
        router.refresh();
        router.push("/user");
        // localStorage.setItem("token",res.data.token);
      }
    } catch (error: any) {
      console.log("🚀 ~ file: LoginForm.tsx:44 ~ error:", error);
      ToastError(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto m-4 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
