import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface IProps {
  srcImg: StaticImageData;
}

const TechnologyList = ({ technologies }: { technologies: string[] }) => (
  <div className="flex mb-3">
    {technologies.map((tech, idx) => (
      <div className="px-2 py-1 mr-2 bg-theme rounded " key={idx}>
        {tech}
      </div>
    ))}
  </div>
);

const Project = ({ srcImg }: IProps) => (
  <div className="flex flex-col lg:flex-row mb-10 align-center">
    <div className="lg:max-w-lg relative grow=1z">
      <a href="https://educaprevisional.com.ar" target="_blank" rel="noreferrer">
        <Image src={srcImg} alt="" className="hover:opacity-[80%] duration-200" />
      </a>
    </div>
    <div className="lg:ml-4 md:ml-0 flex flex-col justify-between">
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
      <div>
        <TechnologyList technologies={['MongoDB', 'ExpressJS', 'React', 'Node']} />
        <a
          href="https://educaprevisional.com.ar"
          className="hover:text-theme flex items-center"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              fill-rule="evenodd"
              d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
              clip-rule="evenodd"
            />
          </svg>

          <span>Live site</span>
        </a>
      </div>
    </div>
  </div>
);

export default Project;
