import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const SportsComponent = () => {
  const sportsData = [
    { id: 1, name: 'Cricket', imageUrl: 'https://media.hudle.in/photos/49731' },
    { id: 2, name: 'Volleyball', imageUrl: 'https://res.cloudinary.com/dgvslio7u/image/upload/c_fill,h_600,w_800/v1720934315/uymp3dmedewoiaelbrcn.jpg' },
    { id: 3, name: 'Football', imageUrl: 'https://res.cloudinary.com/dgvslio7u/image/upload/c_fill,h_600,w_800/v1720934325/qbdnovyzo3cn6ouex3wp.jpg' },
    { id: 4, name: 'Tennis', imageUrl: 'https://res.cloudinary.com/dgvslio7u/image/upload/c_fill,h_600,w_800/v1720934339/yyq70m5rhh53bhwkqoio.jpg' },
    { id: 5, name: 'Basketball', imageUrl: 'https://res.cloudinary.com/dgvslio7u/image/upload/c_fill,h_600,w_800/v1720934341/nmjn9ipwvwp5ula35ehs.jpg' },
    { id: 6, name: 'Badminton', imageUrl: 'https://res.cloudinary.com/dgvslio7u/image/upload/c_fill,h_600,w_800/v1720934304/taumvl6ikk2xvzdzffd7.jpg' },
    { id: 7, name: 'Hockey', imageUrl: 'https://res.cloudinary.com/dgvslio7u/image/upload/v1720949234/hhjt6hvv2eqds51o4eut.jpg' },
    { id: 8, name: 'Kabaddi', imageUrl: 'https://res.cloudinary.com/dgvslio7u/image/upload/v1721025300/ht4cckxcre31a9r3eysf.jpg' },
    { id: 9, name: 'Swimming', imageUrl: 'https://res.cloudinary.com/dgvslio7u/image/upload/c_fill,h_600,w_800/v1720935748/gupu2uuoekerocozqtvy.jpg' },
    { id: 10, name: 'Table Tennis', imageUrl: 'https://res.cloudinary.com/dgvslio7u/image/upload/c_fill,h_600,w_800/v1720935710/hbeckuuacaibr3bbzcgd.jpg' },
  ];

  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const moveContainer = () => {
      controls.start({
        x: '-10%',
        transition: { duration: 2, ease: 'easeInOut' },
      }).then(() => {
        controls.set({ x: 0 });
        const container = containerRef.current;
        if (container) {
          container.appendChild(container.firstElementChild);
        }
        setTimeout(() => {
          controls.start({ x: '-10%', transition: { duration: 2, ease: 'easeInOut' } });
        }, 0);
      });
    };

    const interval = setInterval(moveContainer, 1950);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div className="container w-full mx-auto px-0 pt-8"> {/* Removed px-4 for full width */}
      <h1 className="text-3xl font-bold mt-8 mb-4 pb-5 text-center">Sports Component</h1>
      <div className="relative overflow-hidden width-screen bg-gray-100 pb-20">
        <motion.div
          ref={containerRef}
          className="flex items-center space-x-4 overflow-hidden"
          style={{ width: `${sportsData.length * 100}%` }}
          animate={controls}
        >
          {sportsData.map((sport) => (
            <motion.div
              key={sport.id}
              className="w-64 text-center"
              whileHover={{ scale: 1.05 }} // Add a hover effect
            >
              <div className="relative w-64 h-64 rounded-lg overflow-hidden">
                <img
                  src={sport.imageUrl}
                  alt={sport.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <p className="mt-2">{sport.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SportsComponent;
