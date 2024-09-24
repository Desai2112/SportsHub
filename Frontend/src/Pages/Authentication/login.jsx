/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, data,{
      withCredentials:true,
    })
      .then((response) => {
        console.log(response.data.userDetails.role);
        if(response.data.userDetails.role=="User")
        {
          window.location.href = '/user';
        }
        else if(response.data.userDetails.role=="Manager")
        {
          window.location.href = '/manager';
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sport-bg bg-cover bg-center">
      <motion.div
        className="bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl w-80"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-2 text-gray-700" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
              }`}
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="relative">
            <label className="block mb-2 text-gray-700" htmlFor="password">Password</label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
              }`}
              {...register('password', { required: 'Password is required' })}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-4 pt-8 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <AiFillEyeInvisible className="h-5 w-5 text-gray-500" />
              ) : (
                <AiFillEye className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {errors.password && (
              <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>
          <motion.button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <button
          className="w-full py-2 px-4 flex items-center justify-center border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <FcGoogle className="mr-2" size={24} />
          Login with Google
        </button>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don't have an account? <Link to="/register" className="text-green-600 hover:underline">Sign Up</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
