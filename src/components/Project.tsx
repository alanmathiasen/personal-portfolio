import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { FormattedMessage } from 'react-intl';

interface IProps {
  srcImg: StaticImageData;
}

const TechnologyList = ({ technologies }: { technologies: string[] }) => (
  <div className="flex mb-3 flex-wrap gap-2">
    {technologies.map((tech, idx) => (
      <div className="px-2 py-1 bg-theme rounded cursor-default" key={idx}>
        {tech}
      </div>
    ))}
  </div>
);

const Project = ({ srcImg }: IProps) => (
  <div className="sm: max-w-[100%] flex flex-col lg:flex-row mb-10 align-center">
    <div className="lg:max-w-lg relative">
      <a href="https://educaprevisional.com.ar" target="_blank" rel="noreferrer">
        <Image
          src={srcImg}
          alt="preview of educa previsional website"
          className="hover:opacity-[80%] duration-200"
        />
      </a>
    </div>
    <div className="lg:ml-4 mt-4 lg:mt-0 flex flex-col justify-between">
      <div>
        <h2 className="font-medium leading-tight text-2xl mt-0 mb-2 ">
          {' '}
          <FormattedMessage id="projects.educaprevisional.title" />
        </h2>
        <p>
          <FormattedMessage id="projects.educaprevisional.description" />
        </p>
      </div>
      <div className="mt-4">
        <TechnologyList technologies={['MongoDB', 'ExpressJS', 'React', 'NodeJS']} />
        <a
          href="https://educaprevisional.com.ar"
          className="hover:text-theme flex items-center"
          target="_blank"
          rel="noreferrer"
        >
          <BiLinkExternal className="mr-2" />
          <span>
            {' '}
            <FormattedMessage id="projects.live" />
          </span>
        </a>
      </div>
    </div>
  </div>
);

export default Project;
