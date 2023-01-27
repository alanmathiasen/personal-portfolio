import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

export const links = [
  {
    to: '#about',
    text: 'About',
  },
  {
    to: '#projects',
    text: 'Projects',
  },
  {
    to: '#contact',
    text: 'Contact',
  },
];

export const social = [
  {
    icon: <BsGithub />,
    text: 'Linkedin',
    link: 'https://www.linkedin.com/in/alan-mathiasen-8041a1203',
  },
  {
    icon: <BsLinkedin />,
    text: 'Github',
    link: 'https://www.github.com/alanmathiasen',
  },
  {
    icon: <GrMail />,
    text: 'Email',
    link: 'alanemathiasen@gmail.com',
  },
];
