"use client";
import { ToastError, ToastSuccess } from "@/utils/React_Toastify";
import axios from "axios";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Importing the icons
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
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

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
        ToastSuccess(res.data.message);
        router.refresh();
        router.push("/user");
      }
    } catch (error: any) {
      console.log("🚀 ~ file: LoginForm.tsx:44 ~ error:", error);
      ToastError(error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="w-full md:w-1/2 lg:w-1/4 mx-auto m-4 p-6 bg-gray-900 shadow-md rounded-md">
        <h2 className="text-lg font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block">
              Email <span className="text-red-700 text-xl">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md text-black"
              required
              aria-required="true"
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block">
              Password <span className="text-red-700 text-xl">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"} // Toggle between text and password
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md text-black"
              required
              aria-required="true"
              aria-label="Password field"
              
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-10 text-black hover:text-gray-700"
              aria-label={showPassword ? "Hide password" : "Show password"} // Accessibility label
            >
              {showPassword ? <FiEyeOff size={24} /> : <FiEye size={24} />}
            </button>
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
