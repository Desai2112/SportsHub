import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  const onSubmit = async () => {
    try {
      setDisabled(true);
      alert('Form submission was successful!'); // Replace with your preferred notification method
    } catch (e) {
      console.error(e);
      alert('Uh oh. Something went wrong.'); // Replace with your preferred notification method
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="contact-form-key"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className=" text-gray-900 bg-gray-800 py-8"
      >
        <div className="container mx-auto">
          <h1 className="text-3xl text-center mb-8 font-bold text-gray-100">Get in Touch</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-200 shadow-lg rounded-lg p-6"
            >
              <h2 className="text-2xl text-center mb-6 font-semibold text-gray-900">Contact Info</h2>
              <div className="text-center">
                <p className="text-lg"><strong>Address:</strong> 1234 Street Name, City, Country</p>
                <p className="text-lg"><strong>Phone:</strong> (123) 456-7890</p>
                <p className="text-lg"><strong>Email:</strong> contact@example.com</p>
                <div className="flex justify-center mt-4">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 mr-4">
                    <FaFacebook size="2em" />
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-sky-500 mr-4">
                    <FaTwitter size="2em" />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-rose-400 mr-4">
                    <FaInstagram size="2em" />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-700">
                    <FaLinkedin size="2em" />
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-200 shadow-lg rounded-lg p-6"
            >
              <h2 className="text-2xl text-center font-semibold mb-6 text-gray-900">Contact Us</h2>
              <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.input
                    type="text"
                    {...register('name', {
                      required: 'Please enter your name',
                      maxLength: {
                        value: 30,
                        message: 'Please use 30 characters or less',
                      },
                    })}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="form-input bg-gray-100 border-gray-400 border-2 px-4 py-2 rounded-md w-full"
                    placeholder="Name"
                  />
                  {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                  <motion.input
                    type="email"
                    {...register('email', {
                      required: 'Please enter a valid email address',
                      pattern: {
                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: 'Invalid email address',
                      },
                    })}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="form-input bg-gray-100 border-gray-400 border-2 px-4 py-2 rounded-md w-full"
                    placeholder="Email address"
                  />
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                <motion.input
                  type="text"
                  {...register('subject', {
                    required: 'Please enter a subject',
                    maxLength: {
                      value: 75,
                      message: 'Subject cannot exceed 75 characters',
                    },
                  })}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="form-input bg-gray-100 border-gray-400 border-2 px-4 py-2 rounded-md mt-4 w-full"
                  placeholder="Subject"
                />
                {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
                <motion.textarea
                  rows={3}
                  {...register('message', {
                    required: 'Please enter a message',
                  })}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="form-input bg-gray-100 border-gray-400 border-2 px-4 py-2 rounded-md mt-4 w-full"
                  placeholder="Message"
                />
                {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-700 text-gray-100 py-2 px-4 mt-4 rounded-md w-full hover:bg-gray-900"
                  disabled={disabled}
                  type="submit"
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactForm;
