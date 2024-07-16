/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion } from 'framer-motion';
import PlayerSignUp from '../../Components/SignUp/Player';
import ManagerSignUp from '../../Components/SignUp/Manager';

const SignUp = () => {
  const [role, setRole] = useState('player');
  const [submittedData, setSubmittedData] = useState(null);

  const handleRoleChange = (newRole) => {
    setRole(newRole);
  };

  const handleSubmit = (data) => {
    setSubmittedData(data);
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sport-bg bg-cover bg-center p-4">
      <motion.div
        className="bg-white bg-opacity-90 p-6 rounded-lg shadow-2xl w-full max-w-3xl flex"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-1/2 flex flex-col items-center justify-center p-4">
          <img src={'https://res.cloudinary.com/dgvslio7u/image/upload/v1720845639/tofmmxz1oj8lvexsqaet.png'} alt="Company Logo" className="w-auto h-20 mb-2" />
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Sign Up</h2>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center p-4">
          <div className="flex justify-center mb-4 relative">
            <motion.button
              className={`px-3 py-1 rounded-l-lg ${role === 'player' ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleRoleChange('player')}
              whileTap={{ scale: 0.95 }}
            >
              Player
            </motion.button>
            <motion.button
              className={`px-3 py-1 rounded-r-lg ${role === 'manager' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleRoleChange('manager')}
              whileTap={{ scale: 0.95 }}
            >
              Manager
            </motion.button>
            <motion.div
              className={`absolute top-0 left-0 h-full bg-green-600 rounded-lg pointer-events-none transition-all duration-300 ease-in-out`}
              style={{
                width: '50%',
                transform: role === 'player' ? 'translateX(0%)' : 'translateX(100%)',
              }}
            />
          </div>
          <motion.div
            key={role}
            initial={{ x: role === 'player' ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: role === 'player' ? 100 : -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {role === 'player' ? (
              <PlayerSignUp onSubmit={handleSubmit} />
            ) : (
              <ManagerSignUp onSubmit={handleSubmit} />
            )}
          </motion.div>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-500">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <button
            className="w-full py-2 px-4 flex items-center justify-center border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sign Up with Google
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
