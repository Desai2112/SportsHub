// import React from 'react';

const HeroPage = () => {
  return (
    <header className="relative w-full h-screen">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative h-full w-full overflow-hidden">
          <img
            src="https://res.cloudinary.com/dgvslio7u/image/upload/v1723104659/riz9b6dfllknb6agc2na.jpg"
            alt="Sports Hub Hero"
            className="h-full w-full object-cover blur-xs"
          />
        </div>
      </div>
      <div className="relative z-10 flex h-screen flex-col items-center justify-center bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.5)] px-4 text-center text-primary-foreground">
        <h1 className="text-4xl font-bold text-slate-100 tracking-tight sm:text-5xl lg:text-6xl">
          Book Your Sports Experience
        </h1>
        <p className="mt-3 text-lg text-slate-100 sm:mt-5 sm:text-xl lg:text-2xl">
          Discover and book the best sports facilities in your area.
        </p>
        <div className="mt-5 sm:mt-8">
          <a
            className="inline-flex items-center rounded-lg bg-[#77848b] px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform transform hover:scale-105 hover:bg-[#4787d3] focus:outline-none focus:ring-2 focus:ring-[#77848b] focus:ring-offset-2"
            href="#"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeroPage;
