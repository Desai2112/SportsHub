/* eslint-disable react/prop-types */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { AiOutlineUser, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from 'react-hot-toast';

const PlayerSignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(e.target.files[0]);
    }
  };

  const handleUploadImages = async () => {
    if (!profilePic) return null;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", profilePic);
    formData.append("upload_preset", "SportsHub"); // Your Cloudinary preset

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dgvslio7u/image/upload",
        formData
      );
      setUploading(false);
      return response.data.secure_url; // Return the uploaded image URL
    } catch (error) {
      toast.error("Error uploading image.");
      setUploading(false);
      return null;
    }
  };

  const handleFormSubmit = async (data) => {
    try {
      let uploadedImageUrl = null;
      if (profilePic) {
        uploadedImageUrl = await handleUploadImages();
      }

      const requestBody = {
        name: data.name,
        email: data.email,
        password: data.password,
        mobileNo: data.mobileNo,
        role: "User",
        profileUrl: uploadedImageUrl || "https://example.com/default-pic.jpg", // Set a default URL or use the uploaded image URL
      };

      const response = await axios.post(
        "http://localhost:5000/auth/signup",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        toast.success("Signup successful!");
        navigate("/user");
      } else {
        toast.error(response.data.message || "Signup failed.");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <div className="text-center mb-4">
          <AiOutlineUser size={48} className="text-green-600" />
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Full Name"
            className={`w-full px-4 py-2 border rounded-lg ${
              errors.name ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 transition-all duration-300 ${
              errors.name ? "focus:ring-red-500" : "focus:ring-green-500"
            }`}
            {...register("name", { required: "Full name is required" })}
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div className="relative">
          <input
            type="email"
            placeholder="Email"
            className={`w-full px-4 py-2 border rounded-lg ${
              errors.email ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 transition-all duration-300 ${
              errors.email ? "focus:ring-red-500" : "focus:ring-green-500"
            }`}
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="relative">
          <input
            type="tel"
            placeholder="Phone Number"
            className={`w-full px-4 py-2 border rounded-lg ${
              errors.mobileNo ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 transition-all duration-300 ${
              errors.mobileNo ? "focus:ring-red-500" : "focus:ring-green-500"
            }`}
            {...register("mobileNo", { required: "Phone number is required" })}
          />
          {errors.mobileNo && (
            <p className="mt-2 text-sm text-red-600">
              {errors.mobileNo.message}
            </p>
          )}
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={`w-full px-4 py-2 border rounded-lg ${
              errors.password ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 transition-all duration-300 ${
              errors.password ? "focus:ring-red-500" : "focus:ring-green-500"
            }`}
            {...register("password", { required: "Password is required" })}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-4 focus:outline-none"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <AiFillEyeInvisible className="h-5 w-5 text-gray-500" />
            ) : (
              <AiFillEye className="h-5 w-5 text-gray-500" />
            )}
          </button>
          {errors.password && (
            <p className="mt-2 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className={`w-full px-4 py-2 border rounded-lg ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 transition-all duration-300 ${
              errors.confirmPassword
                ? "focus:ring-red-500"
                : "focus:ring-green-500"
            }`}
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-4 focus:outline-none"
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? (
              <AiFillEyeInvisible className="h-5 w-5 text-gray-500" />
            ) : (
              <AiFillEye className="h-5 w-5 text-gray-500" />
            )}
          </button>
          {errors.confirmPassword && (
            <p className="mt-2 text-sm text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div className="relative">
          <label
            htmlFor="file-upload"
            className="flex items-center px-4 py-2 border rounded-lg cursor-pointer bg-white text-gray-700 focus:outline-none focus:ring-2 border-gray-300 focus:ring-green-500"
          >
            <span>Upload Profile Picture</span>
            <input
              id="file-upload"
              type="file"
              className="sr-only"
              onChange={handleImageChange}
              accept="image/*"
            />
          </label>
          {profilePic && (
            <p className="mt-2 text-sm text-green-600">
              {profilePic.name} selected
            </p>
          )}
        </div>

        <motion.button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Sign Up"}
        </motion.button>
      </form>
    </>
  );
};

export default PlayerSignUp;
