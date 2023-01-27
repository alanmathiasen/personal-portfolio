// import Image from 'next/image';
import educaPic from '../../public/educa-previsional.png';
import Project from './Project';

const Projects = () => (
  <div className="mt-[-54px] pt-54">
    <div id="projects" className="h-1 mb-20" />

    <h2 className="text-4xl text-left mb-2">Projects</h2>
    <div className="mt-8 flex flex-wrap flex-col justify-around ">
      <Project srcImg={educaPic} />
      <Project srcImg={educaPic} />
      <Project srcImg={educaPic} />
    </div>
  </div>
);

export default Projects;
