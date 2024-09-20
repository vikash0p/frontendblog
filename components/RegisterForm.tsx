"use client";
import { ToastError, ToastSuccess } from "@/utils/React_Toastify";
import axios from "axios";
import { section } from "framer-motion/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Importing the icons

interface RegisterFormData {
  name: string;
  email: string;
  work: string;
  phone: number;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    work: "",
    phone: 0,
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false); // For password toggle
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // For confirm password toggle

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "number" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await axios.post(
        "https://backendblog-eta.vercel.app/auth/register",
        {
          name: formData.name,
          email: formData.email,
          work: formData.work,
          phone: formData.phone,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }
      );
      if (res.status === 201) {
        ToastSuccess(res.data.message);
        router.refresh();
        router.push("/login");
      }
    } catch (error: any) {
      console.log("🚀 ~ file: RegisterForm.tsx:49 ~ error:", error);
      ToastError(error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className=" w-full md:w-1/2 lg:w-1/4 mx-auto m-4 p-6 bg-gray-900 shadow-md rounded-md">
        <h2 className="text-lg font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white">
              Name <span className="text-red-600">*</span> {/* Required star */}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md text-black"
              required
              aria-required="true"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white">
              Email <span className="text-red-600">*</span>{" "}
              {/* Required star */}
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
          <div className="mb-4">
            <label htmlFor="work" className="block text-white">
              Work <span className="text-red-600">*</span> {/* Required star */}
            </label>
            <input
              type="text"
              id="work"
              name="work"
              value={formData.work}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md text-black"
              required
              aria-required="true"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-white">
              Phone <span className="text-red-600">*</span>{" "}
              {/* Required star */}
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md text-black"
              required
              aria-required="true"
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-white">
              Password <span className="text-red-600">*</span>{" "}
              {/* Required star */}
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
              className="absolute right-2 top-10 text-black"
              aria-label={showPassword ? "Hide password" : "Show password"} // Accessibility label
            >
              {showPassword ? <FiEyeOff size={24} /> : <FiEye size={24} />}
            </button>
          </div>
          <div className="mb-4 relative">
            <label htmlFor="confirmPassword" className="block text-white">
              Confirm Password <span className="text-red-600">*</span>{" "}
              {/* Required star */}
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"} // Toggle between text and password for confirm password
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md text-black"
              required
              aria-required="true"
              aria-label="Confirm password field"
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-2 top-10 text-black "
              aria-label={
                showConfirmPassword
                  ? "Hide confirm password"
                  : "Show confirm password"
              } // Accessibility label
            >
              {showConfirmPassword ? (
                <FiEyeOff size={24} />
              ) : (
                <FiEye size={24} />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
