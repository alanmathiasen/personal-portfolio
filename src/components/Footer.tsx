import React from 'react';
import Link from 'next/link';
import { links, social } from '@/constants';
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router';
import useLang from '@/hooks/useLang';

const Footer = () => {
  const { t } = useLang();
  return (
    <div className="flex flex-col md:flex-row w-9/12 items-center md:justify-between m-auto">
      <div className="md:order-2  ">
        <FormattedMessage id="footer.description" />
      </div>
      <div className="flex gap-20 mt-8">
        <div className="flex flex-col">
          {links.map((link, idx) => (
            <Link legacyBehavior href={link.to} key={idx} scroll={false}>
              <a className=" my-2 hover:text-accent">{link.text[t as keyof typeof link.text]}</a>
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
          {social.map((link, idx) => (
            <div className="flex items-center gap-2 hover:text-accent cursor-pointer" key={idx}>
              {link.icon}
              <a className="my-2">{link.text}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
