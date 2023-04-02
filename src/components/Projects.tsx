// import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import educaPic from '../../public/educa-previsional.png';
import twitterPic from '../../public/twitter-clone.png';
import Project from './Project';

const Projects = () => (
  <div className="mt-[-54px] pt-54">
    <div id="projects" className="h-1 mb-20" />

    <h2 className="text-4xl text-left mb-2 text-theme-light">
      {' '}
      <FormattedMessage id="projects.title" />
    </h2>
    <div className="mt-8 flex flex-wrap flex-col justify-around gap-y-6 ">
      <Project
        srcImg={educaPic}
        title="projects.educaprevisional.title"
        description="projects.educaprevisional.description"
        technologies={['React', 'NodeJS', 'MongoDB', 'Express', 'TypeScript']}
        liveSite="https://educaprevisional.com.ar"
      />
      <Project
        srcImg={twitterPic}
        title="projects.twitter-clone.title"
        description="projects.twitter-clone.description"
        technologies={['React', 'Firebase']}
        github="https://github.com/alanmathiasen/tweeter-clone"
        liveSite="https://twitter-clone-alanmathiasen.vercel.app/"
      />
      {/* <Project srcImg={educaPic} />
      <Project srcImg={educaPic} /> */}
    </div>
  </div>
);

export default Projects;
