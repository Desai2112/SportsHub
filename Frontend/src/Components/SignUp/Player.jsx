/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { AiOutlineUser, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const PlayerSignUp = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [file, setFile] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="text-center mb-4">
        <AiOutlineUser size={48} className="text-green-600" />
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Full Name"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
            errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
          }`}
          {...register('name', { required: 'Full name is required' })}
        />
        {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
      </div>
      <div className="relative">
        <input
          type="email"
          placeholder="Email"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
            errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
          }`}
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
      </div>
      <div className="relative">
        <input
          type="tel"
          placeholder="Phone Number"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
            errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
          }`}
          {...register('phone', { required: 'Phone number is required' })}
        />
        {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>}
      </div>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
            errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
          }`}
          {...register('password', { required: 'Password is required' })}
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
        {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>}
      </div>
      <div className="relative">
        <input
          type="file"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 border-gray-300 focus:ring-green-500"
          onChange={handleFileChange}
        />
      </div>
      <motion.button
        type="submit"
        className="w-full py-2 px-4 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Sign Up
      </motion.button>
    </form>
  );
};

export default PlayerSignUp;
