const HeroPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-hero-bg bg-cover bg-center bg-no-repeat">
      <div className="flex-grow flex items-center justify-center px-4 relative">
        <div className="text-center text-white relative">
          <div className="relative inline-block">
            <h1 className="relative text-4xl md:text-6xl bg-neutral-800 bg-opacity-75 font-bold mb-8 animate-fade-in p-2 rounded">
              Welcome to{" "}
              <span className="text-[#D6DF22] animate-bounce">SPORTS HUB</span>{" "}
              Platform
            </h1>
            <div className="absolute inset-0 bg-blue-800 bg-opacity-50 filter blur-md -z-10"></div>
          </div>
          <p className="text-emerald-700 bg-slate-300 bg-opacity-75 font-semibold mb-8 animate-fade-in p-2 rounded">
            Book sports grounds easily with our intuitive platform. Get started
            today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
