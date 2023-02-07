import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

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
