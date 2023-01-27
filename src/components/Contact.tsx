import { social } from '@/constants';
import React, { ReactElement } from 'react';
// import { IconType } from 'react-icons';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

interface ISocialLinkProps {
  icon: ReactElement;
  link?: string;
  text: string;
  styles: string;
}
const SocialLink = ({ icon, link, text, styles }: ISocialLinkProps) => (
  <div className={`flex flex-col md:flex-row md:text-xl gap-2 md:items-end  ${styles}`}>
    <div className="flex gap-2 text-2xl items-center">
      {icon}
      <span>{text}:</span>
    </div>
    <a
      href={text === 'Email' ? `mailto:${link}` : link}
      className="hover:text-theme "
      target="_blank"
      rel="noreferrer"
    >
      {link}{' '}
    </a>
  </div>
);

const Contact = () => (
  <div className="mb-32">
    <div id="contact" className="h-1 mb-20" />

    <h2 className="text-4xl text-left mb-6">Contact</h2>
    <div>
      {social.map((link, idx) => (
        <SocialLink icon={link.icon} link={link.link} text={link.text} key={idx} styles="mb-10" />
      ))}
    </div>
  </div>
);

export default Contact;
