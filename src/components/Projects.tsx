// import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import { PROJECTS } from '../constants';
import Project from './Project';

const Projects = () => (
  <div className="mt-[-54px] pt-54">
    <div id="projects" className="h-1 mb-20" />

    <h2 className="text-4xl text-left mb-2 text-theme-light">
      {' '}
      <FormattedMessage id="projects.title" />
    </h2>
    <div className="mt-8 flex flex-wrap flex-col justify-around gap-y-6 ">
      {PROJECTS.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </div>
  </div>
);

export default Projects;
