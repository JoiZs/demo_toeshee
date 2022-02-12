/* eslint-disable @next/next/no-img-element */
import { Fragment, useContext, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  HiMenu,
  HiRefresh,
  HiX,
  HiChevronDown,
  HiOutlineChip,
} from "react-icons/hi";
import { IoMdDoneAll, IoMdMoon, IoMdSunny } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { RiCoinFill, RiServiceFill, RiSpaceShipFill } from "react-icons/ri";
import { BiNetworkChart } from "react-icons/bi";
import { GoGraph } from "react-icons/go";
import { GiCamelHead } from "react-icons/gi";
import gsap from "gsap";
import DarkMode from "./darkmode";
import { Darkcontext } from "../context/darkCtx";
import Link from "next/link";

const menus = [
  {
    name: "Commerce",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "commerce",
    icon: HiRefresh,
  },
  {
    name: "Coin",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "coin",
    icon: RiCoinFill,
  },
  {
    name: "Blockchain",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "blockchain",
    icon: BiNetworkChart,
  },
  {
    name: "NFT",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "nft",
    icon: GiCamelHead,
  },
  {
    name: "Art",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "art",
    icon: FaPaintBrush,
  },
];

const resources = [
  {
    name: "Space",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "space",
    icon: RiSpaceShipFill,
  },
  {
    name: "Tech",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "tech",
    icon: HiOutlineChip,
  },
  {
    name: "Pay",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "pay",
    icon: MdPayment,
  },
  {
    name: "CaaS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "caas",
    icon: RiServiceFill,
  },
  {
    name: "CRM",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "crm",
    icon: GoGraph,
  },
  {
    name: "Experience",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "experience",
    icon: IoMdDoneAll,
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isDark, setIsDark] = useContext(Darkcontext);

  useEffect(() => {
    gsap.to("#navFade", { opacity: 1, delay: 2, translateY: 0 });
  });

  return (
    <div
      id="navFade"
      className="fixed w-full -translate-y-8 opacity-0 z-50 bg-slate-100 dark:bg-slate-800 shadow"
    >
      <Popover className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start items-center lg:w-0 lg:flex-1">
              <Link href="/" passHref>
                <div className="cursor-pointer">
                  <span className="sr-only">Toeshee</span>
                  <img src="./assets/logo.svg" className="lg:h-9 h-6" alt="" />
                </div>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden ">
              <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset ">
                <span className="sr-only">Open menu</span>
                <HiMenu className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group
              as="nav"
              className="hidden md:flex space-x-10 md:items-center"
            >
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        //   open ? "" : "",
                        "group  rounded-md inline-flex items-center text-base font-medium hover: focus:outline-none"
                      )}
                    >
                      <span>Discover</span>
                      <HiChevronDown
                        className={classNames(
                          open ? "text-gray-600" : "",
                          "ml-2 h-5 w-5 group-hover:"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg bg-slate-200 dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6  px-5 py-6 sm:gap-8 sm:p-8">
                            {menus.map((item) => (
                              <div
                                key={item.name}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 "
                              >
                                <Link passHref href={item.href}>
                                  <div className="flex flex-row items-center cursor-pointer">
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-red-500 dark:text-red-400"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium ">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm ">
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <div className="text-base font-medium">
                <Link href="store">Store</Link>
              </div>
              <div className="text-base font-medium">
                <Link href="exchange">Exchange</Link>
              </div>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "" : "",
                        "group  rounded-md inline-flex items-center text-base font-medium hover: focus:outline-none "
                      )}
                    >
                      <span>More</span>
                      <HiChevronDown
                        className={classNames(
                          open ? "text-gray-600" : "",
                          "ml-2 h-5 w-5 group-hover:"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                        <div className="rounded-lg shadow-lg bg-slate-200 dark:bg-slate-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6  px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                              <div
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                                key={item.name}
                              >
                                <Link href={item.href} passHref>
                                  <div className="flex flex-row items-center cursor-pointer">
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-red-500 dark:text-red-400"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium ">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm ">
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <DarkMode>
                {({ isDark, setIsDark }) => (
                  <div
                    className="text-xl hover:brightness-75 cursor-pointer mr-4"
                    onClick={async (e) => {
                      if (isDark) {
                        document.documentElement.classList.remove("dark");
                      } else {
                        document.documentElement.classList.add("dark");
                      }

                      new Promise(() =>
                        sessionStorage.setItem(
                          "colorMode",
                          `${isDark ? "light" : "dark"}`
                        )
                      );
                      setIsDark(!isDark);

                      gsap.fromTo(
                        e.currentTarget,
                        { opacity: 0, translateY: 10, rotation: 90 },
                        { opacity: 1, translateY: 0, rotation: 0 }
                      );
                    }}
                  >
                    {isDark ? <IoMdMoon /> : <IoMdSunny />}
                  </div>
                )}
              </DarkMode>
              <div className="whitespace-nowrap text-base font-medium  px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600">
                <Link href="wallet" passHref>
                  Wallet
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute  top-0 backdrop-blur-sm inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg bg-slate-300 dark:bg-slate-800 dark:bg-opacity-30 bg-opacity-30 ring-1 ring-black ring-opacity-5  divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div></div>
                  <div className="-mr-2">
                    <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset ">
                      <span className="sr-only">Close menu</span>
                      <HiX className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <div
                      onClick={async (e) => {
                        gsap.fromTo(
                          e.currentTarget,
                          { opacity: 0, translateX: 10 },
                          { opacity: 1, translateX: 0 }
                        );
                        new Promise(() =>
                          sessionStorage.setItem(
                            "colorMode",
                            `${isDark ? "light" : "dark"}`
                          )
                        );
                        setIsDark(!isDark);
                      }}
                      className="text-lg"
                    >
                      {isDark ? (
                        <span className="flex flex-row items-center">
                          <IoMdMoon className="mr-3" />
                          Dark Mode
                        </span>
                      ) : (
                        <span className="flex flex-row items-center">
                          <IoMdSunny className="mr-3" />
                          Light Mode
                        </span>
                      )}
                    </div>
                    {menus.map((item) => (
                      <div
                        key={item.name}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-slate-50 dark:hover:bg-slate-600"
                      >
                        <Link passHref href={item.href}>
                          <div className="flex flex-row items-center">
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-red-500 dark:text-red-400"
                              aria-hidden="true"
                            />
                            <span className="ml-3 text-base font-medium ">
                              {item.name}
                            </span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <div className="text-base font-medium">
                    <Link href="store">Store</Link>
                  </div>

                  <div className="text-base font-medium">
                    <Link href="exchange" passHref>
                      Exchange
                    </Link>
                  </div>

                  {resources.map((item) => (
                    <div key={item.name} className="text-base font-medium">
                      <Link href={item.href} passHref>
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700">
                  <Link href="wallet">Wallet</Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
