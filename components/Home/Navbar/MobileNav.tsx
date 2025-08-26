"use client";
import React from 'react';
import { NavLinks } from '@/constants/constant';
import Link from "next/link";
import { CgClose } from 'react-icons/cg';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "-translate-x-full";

  return (
    <div>
      {/* overlay */}
      {showNav && (
        <div
          onClick={closeNav}
          className="fixed inset-0 transition-opacity duration-500 z-[1002] bg-black opacity-70 w-full h-screen"
        ></div>
      )}

      {/* navlinks */}
      <div
        className={`text-white fixed justify-center flex flex-col h-full transform transition-transform duration-500 delay-100 w-[80%] sm:w-[60%] bg-blue-950 space-y-6 z-[1050] ${navOpen}`}
      >
        {NavLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                {link.Label}
              </p>
            </Link>
          );
        })}

        {/* close icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNav;
