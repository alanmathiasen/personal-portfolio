import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { links } from '../constants';

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
            <a className=" my-6 hover:text-theme" onClick={handleOpenMobileNavbar}>
              {link.text}
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

  useEffect(() => {
    window.onscroll = () => (window.pageYOffset === 0 ? setIsTop(true) : setIsTop(false));
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div
      className={`flex items-center filter h-20 bg-body sticky top-0 w-full border-b transition z-50 ${
        !isTop ? 'border-transparent bg-body/90' : 'border-transparent'
      } `}
    >
      <nav className={'flex items-center w-9/12 mx-auto '}>
        <MobileNavbar open={open} setOpen={setOpen} />
        <div className="w-6/12 flex items-center">
          <Link
            className="hover:text-theme text-lg transition"
            href=""
            onClick={scrollToTop}
            scroll={false}
          >
            Alan Mathiasen
          </Link>
        </div>
        <div className="w-6/12 flex justify-end items-center">
          <div
            className="z-50 flex relative w-8 h-6 flex-col justify-between items-center md:hidden"
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
                open ? 'w-0' : 'w-full'
              }`}
            />
            <span
              className={`h-1 w-full bg-white rounded-sm transform transition duration-300 ease-in-out ${
                open ? '-rotate-45 -translate-y-2.5' : ''
              }`}
            />
          </div>

          <div className="hidden md:flex">
            {links.map((link, idx) => (
              <Link legacyBehavior href={link.to} key={idx} scroll={false}>
                <a className={'mx-4 hover:text-theme transition'}>{link.text}</a>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
