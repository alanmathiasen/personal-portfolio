import useLang from '@/hooks/useLang';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { links } from '../constants';
import LangSwitcher from './LangSwitcher';

interface MobileNavbarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const MobileNavbar = ({ open, setOpen }: MobileNavbarProps) => {
  const { t } = useLang();

  const handleOpenMobileNavbar = () => {
    setTimeout(() => {
      setOpen(!open);
      console.log(open);
    }, 1);
  };
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen transform 
            ${open ? '-translate-x-0' : '-translate-x-full'}
            transition-transform duration-300 ease-in-out filter drop-shadow-md bg-body`}
    >
      <div className="flex items-center justify-center  filter drop-shadow-md  h-20">
        {' '}
        {/* logo container */}
        <Link
          className="text-lg"
          href="/"
          onClick={() => {
            scrollToTop();
            handleOpenMobileNavbar();
          }}
          scroll={false}
        >
          Alan Mathiasen
        </Link>
      </div>
      <div className="flex flex-col ml-4">
        {links.map((link, idx) => (
          <Link legacyBehavior href={link.to} key={idx} scroll={false}>
            <a className=" my-6 hover:text-accent" onClick={handleOpenMobileNavbar}>
              {link.text[t as keyof typeof link.text]}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isTop, setIsTop] = useState(false);
  const { t, locales } = useLang();
  console.log(locales);
  useEffect(() => {
    window.onscroll = () => (window.pageYOffset === 0 ? setIsTop(true) : setIsTop(false));
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <>
      <div
        className={` flex items-center filter h-20 bg-body sticky top-0 w-full border-b transition z-40 ${
          !isTop ? 'border-transparent bg-body/90' : 'border-transparent'
        } `}
      >
        <nav className={'flex items-center w-full w-11/12 md:w-9/12 mx-auto'}>
          <div className="w-full flex justify-between items-center">
            <div
              className="z-50 flex relative w-8 h-6 flex-col justify-between items-start md:hidden"
              onClick={() => setOpen(!open)}
            >
              {/* hamburger button */}
              <span
                className={`h-1 w-full bg-white rounded-sm transform transition duration-300 ease-in-out ${
                  open ? 'rotate-45 translate-y-2.5' : ''
                }`}
              />
              <span
                className={`h-1 w-full bg-white rounded-sm transition-all duration-300 ease-in-out ${
                  open ? 'w-0' : 'w-[80%]'
                }`}
              />
              <span
                className={`h-1 w-full bg-white rounded-sm transform transition duration-300 ease-in-out ${
                  open ? '-rotate-45 -translate-y-2.5' : ''
                }`}
              />
            </div>
            <div className="flex items-center">
              <Link
                className="hover:text-accent text-xl transition"
                href=""
                onClick={scrollToTop}
                scroll={false}
              >
                Alan Mathiasen
              </Link>
            </div>
            <div className="flex ">
              <div className="hidden md:flex items-center">
                {links.map((link, idx) => (
                  <Link legacyBehavior href={link.to} key={idx} scroll={false}>
                    <a className={'mx-4 hover:text-accent transition'}>
                      {link.text[t as keyof typeof link.text]}
                    </a>
                  </Link>
                ))}
              </div>
              {/* {!open && } */}
              <LangSwitcher />
            </div>
          </div>
          <MobileNavbar open={open} setOpen={setOpen} />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
