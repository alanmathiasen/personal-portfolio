import useLang from '@/hooks/useLang';
import Image from 'next/image';
import Link from 'next/link';
import React, { createRef, useRef, useState, Fragment } from 'react';
import { createPopper } from '@popperjs/core';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import spainIcon from '../../public/spain.png';
import ukIcon from '../../public/uk.png';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const LangSwitcher = () => {
  const { locale, locales } = useLang();
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center w-full justify-center rounded-md px-2 py-1 text-sm font-medium text-white shadow-sm hover:bg-theme focus:outline-none focus:ring-2 focus:ring-theme ">
          {locale === 'es' ? (
            <Image src={spainIcon} alt="spain flag" width="32" height="32" />
          ) : (
            <Image src={ukIcon} alt="uk flag" width="32" height="32" />
          )}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-0 w-28 origin-top-right rounded-md bg-gray-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/"
                  locale={'en'}
                  className={classNames(
                    active ? 'bg-theme' : '',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm gap-1 text-white',
                  )}
                >
                  <Image src={ukIcon} alt="uk flag" width="32" height="32" />
                  English
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/"
                  locale={'es'}
                  className={classNames(
                    active ? 'bg-theme' : '',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm gap-1 text-white',
                  )}
                >
                  <Image src={spainIcon} alt="spain flag" width="32" height="32" />
                  Español
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
  // <div>
  //
  //   {/* {[...locales!].sort().map((loc) => (
  //     <Link key={loc} href="/" locale={loc} className="hover:text-theme">
  //       {loc}
  //     </Link>
  //   ))} */}
  // </div>
  // );
};

export default LangSwitcher;
