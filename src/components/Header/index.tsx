"use client";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { motion } from "framer-motion";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();
  console.log(sticky, "sticky");

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center py-5 ${
          sticky
            ? "fixed z-[9999] bg-white shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
            : "absolute bg-white shadow-none transition dark:bg-dark"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-1"
                } `}
              >
                <div className="left-logo flex">
                  <Image
                    src="/images/logo/azuki-brand.png"
                    alt="logo"
                    width={80}
                    height={30}
                    className="logo-img dark:hidden"
                  />

                  <Image
                    src="/images/myro_img/azuki_logotext.svg"
                    alt="logo"
                    width={80}
                    height={30}
                    className="logo-text dark:hidden"
                  />

                  <Image
                    src="/images/logo/azuki-brand.png"
                    alt="logo"
                    width={80}
                    height={30}
                    className="logo-img hidden  dark:block"
                  />

                  <Image
                    src="/images/myro_img/azuki_logotext.svg"
                    alt="logo"
                    width={80}
                    height={30}
                    className="logo-text hidden dark:block"
                  />
                </div>
              </Link>
            </div>
            <div className="flex w-full items-center justify-end px-4">
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[7px] rotate-45" : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0 " : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[-8px] -rotate-45" : " "
                  }`}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {menuData.map((menuItem, index) => (
                    // text bold
                    <li key={index} className="group relative">
                      {menuItem.path ? (
                        <Link
                          href={menuItem.path}
                          className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                            usePathName === menuItem.path
                              ? "text-primary dark:text-white"
                              : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          }`}
                        >
                          <span
                            className={`${
                              usePathName === menuItem.path
                                ? "font-semibold dark:text-white"
                                : "font-semibold dark:text-white/70 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </span>
                        </Link>
                      ) : (
                        <>
                          <p
                            onClick={() => handleSubmenu(index)}
                            className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                          >
                            {menuItem.title}
                            <span className="pl-3">
                              <svg width="25" height="24" viewBox="0 0 25 24">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </p>
                          <div
                            className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                              openIndex === index ? "block" : "hidden"
                            }`}
                          >
                            {menuItem.submenu.map((submenuItem, index) => (
                              <Link
                                href={submenuItem.path}
                                key={index}
                                className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                  <li className="group relative">
                    <motion.div
                      className="flex items-center justify-center py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <button className="btn-nav gradi_border gradi_border-full">
                        <span
                          className="relative z-10"
                          onClick={() => setIsModalOpen(true)}
                        >
                          Connect Wallet
                        </span>
                      </button>
                    </motion.div>
                  </li>

                  <li className="dark:border-t dark:border-dark dark:border-opacity-10 lg:hidden">
                    <div className="flex items-center justify-between py-4">
                      {/* <Link
                          href="/signin"
                          className="rounded-md px-4 py-2 text-base font-medium text-dark hover:bg-gray-100 hover:text-primary hover:shadow-lg hover:ring-1 hover:ring-primary hover:ring-opacity-20 dark:border-dark dark:border-opacity-10 dark:text-white dark:hover:border-primary dark:hover:border-opacity-100 dark:hover:bg-dark dark:hover:text-primary dark:hover:shadow-lg dark:hover:ring-1 dark:hover:ring-primary dark:hover:ring-opacity-20"
                        >
                          Sign In
                        </Link> */}
                      <div>
                        <ThemeToggler />
                      </div>
                    </div>
                  </li>
                  <li className=" lg:block">
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <ThemeToggler />
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`modal fixed inset-0 z-50 bg-black bg-opacity-50 duration-300 ${
          isModalOpen ? "visible" : "invisible"
        }`}
      >
        {/* close icon */}

        <div className="modal-content absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-dark p-8">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute right-4 top-4"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L19 19M19 1L1 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex items-center justify-center">
            <h2 className="text-2xl font-semibold text-white">
              Connect Wallet
            </h2>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/images/myro_img/dog_img.png"
                alt="logo"
                width={200}
                height={60}
                className="home-img"
              />
            </div>
            <div className="flex items-center space-x-4">
              {/* <div className="flex items-center space-x-4"> */}
              <Image
                src="/images/brands/WalletConnect-logo1.svg"
                alt="logo"
                width={50}
                height={50}
                className="home-img"
              />
              <Image
                src="/images/brands/WalletConnect-logo1.svg"
                alt="logo"
                width={50}
                height={50}
                className="home-img"
              />
              {/* </div> */}
              {/* <div className="flex items-center space-x-4"> */}
              <Image
                src="/images/brands/WalletConnect-logo1.svg"
                alt="logo"
                width={50}
                height={50}
                className="home-img"
              />
              <Image
                src="/images/brands/WalletConnect-logo1.svg"
                alt="logo"
                width={50}
                height={50}
                className="home-img"
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
