import { FormattedMessage } from 'react-intl';
import ParticlesContainer from './ParticlesContainer';

const Hero = () => (
  <div className="flex flex-wrap m-auto md:w-9/12 justify-center md:justify-start md:py-24 relative overflow-hidden md:h-[70vh] h-[50vh]">
    <div id="home"></div>

    <ParticlesContainer styles="absolute z-[1] h-full w-full md:w-[60%] top-0 md:left-[40%]" />
    <div className="self-center z-[2]">
      <div className=" text-center md:text-left md:w-[60%]">
        <div className="font-bold text-5xl md:text-6xl lg:text-6xl mb-2">
          <FormattedMessage id="home.hero.title1" />
        </div>

        <div className="font-bold text-2xl md:text-3xl lg:text-3xl mb-2">
          <FormattedMessage id="home.hero.title2" />
        </div>
        <div className="text-xl">
          <FormattedMessage id="home.hero.description" />
        </div>
      </div>
      <div className="w-full flex justify-center md:justify-start">
        <a href="#projects">
          <button className="px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3 rounded">
            <div></div>
            <br /> <FormattedMessage id="home.hero.button" />
            <span></span>
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default Hero;
