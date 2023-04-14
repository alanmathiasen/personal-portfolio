import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

import educaPic from '../public/educa-previsional.png';
import twitterPic from '../public/twitter-clone.png';
import backend from '../public/backend-e_commerce.png';

export const links = [
  {
    to: '#about',
    text: { es: 'Sobre mi', en: 'About' },
  },
  {
    to: '#projects',
    text: { es: 'Proyectos', en: 'Projects' },
  },
  {
    to: '#contact',
    text: { es: 'Contacto', en: 'Contact' },
  },
];

export const social = [
  {
    icon: <BsLinkedin />,
    text: 'Linkedin',
    link: 'https://www.linkedin.com/in/alan-mathiasen-8041a1203',
  },
  {
    icon: <BsGithub />,
    text: 'Github',
    link: 'https://www.github.com/alanmathiasen',
  },
  {
    icon: <GrMail />,
    text: 'Email',
    link: 'alanemathiasen@gmail.com',
  },
];

export const PROJECTS = [
  {
    img: educaPic,
    title: 'projects.educaprevisional.title',
    description: 'projects.educaprevisional.description',
    technologies: ['React', 'NodeJS', 'MongoDB', 'Express', 'TypeScript'],
    liveSite: 'https://educaprevisional.com.ar',
  },
  {
    img: twitterPic,
    title: 'projects.twitter-clone.title',
    description: 'projects.twitter-clone.description',
    technologies: ['React', 'Firebase'],
    github: 'https://github.com/alanmathiasen/tweeter-clone',
    liveSite: 'https://twitter-clone-alanmathiasen.vercel.app/',
  },
  {
    img: backend,
    title: 'projects.coderhouse.title',
    description: 'projects.coderhouse.description',
    technologies: ['Express', 'MongoDB', 'SocketIO'],
    github: 'https://github.com/alanmathiasen/proyecto-final-coder',
  },
];
