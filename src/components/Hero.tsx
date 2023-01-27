import ParticlesContainer from './ParticlesContainer';

const Hero = () => (
  <div className="flex flex-wrap m-auto md:w-9/12 justify-center md:justify-start md:py-24 relative overflow-hidden">
    <div id="home"></div>

    <ParticlesContainer styles="absolute z-[1] h-full w-full md:w-[60%] top-0 md:left-[40%]" />
    <div className=" z-[2]">
      <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">
        Building
        <br /> beautiful web experiences.
      </h1>
      <div className="w-full flex justify-center md:justify-start">
        <a href="#projects">
          <button className="px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3">
            <div></div>
            <span>View my work.</span>
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default Hero;
