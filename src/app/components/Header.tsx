"use client";

import React, { useEffect, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import profilephoto from "/public/profile's photo.jpeg";
import darkmodephoto from "/public/darkmode.svg";
import "../globals.css";
import PopoverHeader from "./Popover";
import { TicketIcon, TvIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const actrizItems = [
  {
    name: "En escena",
    href: "/actriz/en-escena",
    icon: VideoCameraIcon,
  },
  {
    name: "Teatro",
    href: "/actriz/teatro",
    icon: TicketIcon,
  },
  {
    name: "Cine Television",
    href: "/actriz/cine-television",
    icon: TvIcon,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  type Theme = "dark" | "light";
  const [darkMode, setDarkMode] = useState<Theme>("light");

  const handleDark = async () => {
    darkMode == "light" ? setDarkMode("dark") : setDarkMode("light");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode);
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-20 shadow-lg">
      <nav
        className="sticky mx-auto flex max-w-7xl items-center justify-between py-2 px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
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
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link href="/book" className="text-sm font-semibold leading-6">
            Book
          </Link>
          <PopoverHeader
            props={{
              name: "Actriz",
              items: actrizItems,
            }}
          />
          <Link href="/modelo" className="text-sm font-semibold leading-6">
            Modelo
          </Link>
          <Link href="/contacto" className="text-sm font-semibold leading-6">
            Contacto
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={handleDark}
          >
            <Image src={darkmodephoto} height={24} width={24} alt="dark mode" />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Teatros
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...actrizItems].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Redes Sociales
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Sobre mí
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
