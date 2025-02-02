"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import profilephoto from "/public/profile's photo.jpeg";
import "../globals.css";
import PopoverHeader from "./Popover";
import Link from "next/link";
import indexItems from "../assets/indexItems.json";

interface IndexItems {
  name: string;
  href: string;
  icon?: string;
  items?: IndexItems[];
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [canOpen, setCanOpen] = useState(false);

  // Setea estados segun la resolucion de la pantalla para manejar el dialog
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const mediaQuerymd = window.matchMedia("(max-width: 1024px)");

    mediaQuerymd && setCanOpen(true);

    const handleChange = (e: any) => {
      if (e.matches) {
        setMobileMenuOpen(false);
        setCanOpen(false);
      }
    };

    const handleChangemd = (e: any) => {
      if (e.matches) {
        setCanOpen(true);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    mediaQuerymd.addEventListener("change", handleChangemd);
    // Limpia el listener al desmontar el componente
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      mediaQuerymd.removeEventListener("change", handleChangemd);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [mobileMenuOpen]);

  return (
    <header className="flex flex-col w-screen items-center justify-between">
      <nav
        className="sticky w-screen top-0 z-21 shadow-lg mx-auto flex items-center justify-between py-2 px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Eva Bonald</span>
            <Image
              className="h-auto w-auto rounded-full"
              src={profilephoto}
              height={80}
              alt="eva bonald profile's photo"
              quality={100}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">
              {mobileMenuOpen ? "Close main menu" : "Open main menu"}
            </span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {indexItems.map((item, index) => (
            <div key={index}>
              {item.items && item.items.length > 0 ? (
                <PopoverHeader
                  props={{
                    name: item.name,
                    items: item.items,
                  }}
                />
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-semibold leading-6"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </Popover.Group>
        <span className="hidden lg:flex w-[75px]"></span>
      </nav>
      {canOpen && (
        <MobileDialog
          className={`${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        />
      )}
    </header>
  );
};

const MobileDialog = ({ className }: any) => {
  return (
    <div
      className={`absolute z-20 top-22 h-screen w-full bg-white transition-all duration-300 ease-in-out ${className}`}
    >
      <ul className="text-xl font-semibold flex flex-col gap-y-2 p-4 m-4 divide-y divide-gray-200">
        {indexItems.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-gray-500 border-bottom py-4"
          >
            {item.items && item.items.length > 0 ? (
              item.items.map((subitem, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-gray-500 border-bottom py-4"
                >
                  <Link href={subitem.href}>{subitem.name}</Link>
                </li>
              ))
            ) : (
              <Link href={item.href}>{item.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Header;
