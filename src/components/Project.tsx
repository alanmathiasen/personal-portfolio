import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';

interface IProps {
  srcImg: StaticImageData;
}

const TechnologyList = ({ technologies }: { technologies: string[] }) => (
  <div className="flex mb-3">
    {technologies.map((tech, idx) => (
      <div className="px-2 py-1 mr-2 bg-theme rounded cursor-default" key={idx}>
        {tech}
      </div>
    ))}
  </div>
);

const Project = ({ srcImg }: IProps) => (
  <div className="flex flex-col lg:flex-row mb-10 align-center">
    <div className="lg:max-w-lg relative">
      <a href="https://educaprevisional.com.ar" target="_blank" rel="noreferrer">
        <Image src={srcImg} alt="" className="hover:opacity-[80%] duration-200" />
      </a>
    </div>
    <div className="lg:ml-4 mt-4 lg:mt-0 flex flex-col justify-between">
      <div>
        <h2 className="font-medium leading-tight text-2xl mt-0 mb-2 ">Educa previsional</h2>
        <p>
          Course platform for a law firm. The website is designed to provide online legal training
          courses to the clients. The platform is built using the MERN stack (MongoDB, Express.js,
          React.js, and Node.js) and is designed to be intuitive and user-friendly. <br />
          It includes a CMS, a payment gateway with MercadoPago, a restful API, Vimeo integration,
          and more...
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
          <span>Live site</span>
        </a>
      </div>
    </div>
  </div>
);

export default Project;
