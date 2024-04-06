"use client";
import Image from "next/image";
// import Link from "next/link";
import { Link } from "react-scroll";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { motion } from "framer-motion";
import { NETWORKID } from "@/constants/contextConstants";
import { useAccountContext } from "@/contexts";
import { getAccounts, openZelcore } from "../../utils/zelcore";
import { useWalletConnectClient } from "@/contexts/WalletConnectContext";
import { useEckoWallletClient } from "@/contexts/EckoWalletContext";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import userService from "@/services/user.service";
import { getBalance } from "@/utils/api/pact";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { session, connect, disconnect, isInitializing, accounts } =
    useWalletConnectClient();
  const { eckoWalletConnect, eckoSuccessWalletAddress, eckoAccounts } =
    useEckoWallletClient();
  const account = useAccountContext();
  const [open, setOpen] = useState(false);
  const [openZelcoreModal, setOpenZelcoreModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [address, setAddress] = useState<string>("");
  const [successWalletAddress, setSuccessWalletAddress] = useState<string>("");
  const [zelcoreAccounts, setZelcoreAccounts] = useState<[string] | []>([]);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [approved, setApproved] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [balance, setBalance] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openChainModal, setOpenChainModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleConnect = () => {
    connect();
    handleClose();
  };

  const checkUser = async (address: string) => {
    const user = await userService.getUser(
      address.length > 0 ? address : "null",
    );
    if (user?.data?.status === "success") {
      localStorage.setItem("token", user.data.token);
      localStorage.setItem("address", user.data.data.walletAddress);
      setSuccessWalletAddress(user.data.data.walletAddress);
      setOpenRegisterModal(false);
      setIsModalOpen(false);
    } else {
      setOpenRegisterModal(true);
    }
  };

  const getBalanceLocal = async (address: string) => {
    const balance = await getBalance(address);
    console.log(balance, "balance");
    setBalance(balance || 0);
    // return balance;
  };
  console.log(balance, "balance");

  useEffect(() => {
    const address = localStorage.getItem("address");
    if (address?.length > 0) {
      checkUser(address);
      getBalanceLocal(address);
    }
  }, []);

  const registerUser = async () => {
    const user: any = await userService.register({
      walletAddress: successWalletAddress,
      email: email,
      name: firstName,
    });
    if (user?.data?.status === "success") {
      toast.success("User Registered Successfully");
      localStorage.setItem("token", user.data.token);
      setOpenRegisterModal(false);
      setIsModalOpen(false);
      localStorage.setItem("address", successWalletAddress);
    } else {
      toast.error(user.data.message);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // setLoading(true);
    await registerUser();
  };

  const getAccountsFromWallet = async () => {
    openZelcore();
    const getAccountsResponse = await getAccounts();
    if (getAccountsResponse.status === "success") {
      setSuccessWalletAddress(getAccountsResponse.data);
      setApproved(true);
      setZelcoreAccounts(getAccountsResponse.data);
      setOpen(false);
      setOpenZelcoreModal(true);
      // toast.success("Zelcore Wallet Connected Successfully");
    } else {
      /* walletError(); */
    }
  };


  const handleZelcoreOpen = async () => {
    getAccountsFromWallet();
  };

  const onEckoWalletConnect = async () => {
    setLoading(true);
    setIsModalOpen(false);
    const response = await eckoWalletConnect();
    if (response?.status === "success") {
      setSuccessWalletAddress(response.account.account);
      setOpen(false);
      toast.success("Ecko Wallet Connected Successfully");
      setLoading(false);
      checkUser(response.account.account);
    }
  };


  const handleConnectChainweaver = async () => {
    const data = await account.setVerifiedAccount(address);
    if (data?.status === "success") {
      setSuccessWalletAddress(data.data.account);
      setOpen(false);
      setOpenChainModal(false);
      checkUser(data.data.account);
      toast.success("Chainweaver Connected Successfully");
    }
  };

  const modalOpen = () => {
    setOpenChainModal(true);
  };

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

  useEffect(() => {
    // 'kadena:mainnet01:a1a5cc2c40ce6e96906426314998cd1c639f6a24ea96dc512d369d2e6dcb170a'

    if (accounts?.length > 0) {
      setSuccessWalletAddress(`k:${accounts[0]?.split(":")[2]}`);
      localStorage.setItem("accountType", "walletconnect");
      checkUser(`k:${accounts[0]?.split(":")[2]}`);
    }
  }, [accounts]);

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
              {/* <Link
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
              </Link> */}
              <Link
                to="home"
                smooth={true}
                duration={500}
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-1"
                } `}
              >
                <div className="left-logo flex cursor-pointer items-center">
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
                        // <Link
                        //   href={menuItem.path}
                        //   className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                        //     usePathName === menuItem.path
                        //       ? "text-primary dark:text-white"
                        //       : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        //   }`}
                        // >
                        //   <span
                        //     className={`${
                        //       usePathName === menuItem.path
                        //         ? "font-semibold dark:text-white"
                        //         : "font-semibold dark:text-white/70 dark:hover:text-white"
                        //     }`}
                        //   >
                        //     {menuItem.title}
                        //   </span>
                        // </Link>
                        <Link
                          to={menuItem.path}
                          smooth={true}
                          duration={500}
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
                              // <Link
                              //   href={submenuItem.path}
                              //   key={index}
                              //   className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                              // >
                              //   {submenuItem.title}
                              // </Link>
                              <Link
                                to={submenuItem.path}
                                smooth={true}
                                duration={500}
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
                      {successWalletAddress.length === 0 ? (
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="btn-nav gradi_border gradi_border-full"
                        >
                          <span
                            className="relative z-10"
                            onClick={() => setIsModalOpen(true)}
                          >
                            Connect Wallet
                          </span>
                        </button>
                      ) : (
                        <div className="relative z-10">
                          <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="btn-nav gradi_border gradi_border-full"
                          >
                            <span className="relative z-10">
                              {`${successWalletAddress.slice(0, 6)}...${successWalletAddress.slice(
                                -4,
                              )}` || "Connect Wallet"}
                            </span>
                            {/* <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 9L10 13L14 9"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg> */}
                          </button>
                          <div
                            className={`absolute right-1 top-full z-20 mt-1 w-[150px] rounded border border-body-color bg-white shadow-lg transition-all duration-300 dark:border-dark dark:border-opacity-10 dark:bg-dark dark:shadow-dark

                             ${dropdownOpen ? "block" : "hidden"}`}
                          >
                            {/* //balance */}
                            <div className="px-4 py-2 text-dark dark:text-white dark:border-dark dark:border-opacity-10 dark:text-white">
                              Balance: {balance}
                            </div>



                            <button
                              onClick={() => {
                                if (
                                  localStorage.getItem("accountType") ===
                                  "walletconnect"
                                ) {
                                  disconnect();
                                }
                                localStorage.removeItem("accountType");
                                localStorage.removeItem("token");
                                localStorage.removeItem("address");

                                setSuccessWalletAddress("");
                                setDropdownOpen(false);
                              }}
                              className="block w-full px-4 py-2 text-left text-dark hover:bg-gray-100 dark:border-dark dark:border-opacity-10 dark:text-white dark:hover:bg-dark dark:hover:text-primary dark:hover:shadow-lg dark:hover:ring-1 dark:hover:ring-primary dark:hover:ring-opacity-20"
                            >
                              Disconnect
                            </button>
                          </div>
                        </div>
                      )}
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
                  <li className="hidden lg:block">
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
            {/* <div className="flex items-center"> */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 700,
                damping: 50,
              }}
            >
              <Image
                src="/images/myro_img/dog_img.png"
                alt="logo"
                width={200}
                height={60}
                className="home-img"
              />
            </motion.div>
            {/* </div> */}
            <div className="flex items-center space-x-4">
              {/* <div className="flex items-center space-x-4"> */}
              <button onClick={handleConnect} className="">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 50,
                  }}
                >
                  <Image
                    src="/images/brands/WalletConnect-logo1.svg"
                    alt="logo"
                    width={50}
                    height={50}
                    className="home-img"
                  />
                </motion.div>
              </button>
              <button onClick={modalOpen} className="">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 50,
                  }}
                >
                  <Image
                    src="/images/wallet/chainweaver.png"
                    alt="logo"
                    width={40}
                    height={40}
                    className="home-img"
                  />
                </motion.div>
              </button>
              {/* </div> */}
              {/* <div className="flex items-center space-x-4"> */}
              <button onClick={onEckoWalletConnect} className="">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 50,
                  }}
                >
                  <Image
                    src="/images/wallet/eckowallet1.svg"
                    alt="logo"
                    width={50}
                    height={50}
                    className="home-img"
                  />
                </motion.div>
              </button>
              <button
                onClick={() => {
                  getAccountsFromWallet();
                  // setOpenZelcoreModal(true)
                }}
                className=""
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 50,
                  }}
                >
                  <Image
                    src="/images/wallet/zelcore-logo.svg"
                    alt="logo"
                    width={50}
                    height={50}
                    className="home-img"
                  />
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modal fixed inset-0 z-50 bg-black bg-opacity-50 duration-300 ${
          openChainModal ? "visible" : "invisible"
        }`}
      >
        {/* close icon */}
        <div className="modal-content absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-dark p-8">
          <button
            onClick={() => setOpenChainModal(false)}
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <input
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    outline: "none",
                    height: "50px",
                  }}
                  type="text"
                  placeholder="Enter your address"
                  className="input-field"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <button
                  onClick={handleConnectChainweaver}
                  className="btn-nav gradi_border gradi_border-full"
                >
                  <span className="relative z-10">Connect</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modal fixed inset-0 z-50 bg-black bg-opacity-50 duration-300 ${
          openRegisterModal ? "visible" : "invisible"
        }`}
      >
        {/* close icon */}
        <div className="modal-content absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-dark p-8">
          <button
            onClick={() => setOpenRegisterModal(false)}
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
          <div className="w-full px-4">
            <div className="mx-auto max-w-[500px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
              <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Create your account
              </h3>
              <p className="mb-11 text-center text-base font-medium text-body-color"></p>
              <form>
                <div className="mb-8">
                  <label
                    htmlFor="first_name"
                    className="mb-3 block text-sm text-dark dark:text-white"
                  >
                    {" "}
                    First Name{" "}
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Enter your First Name"
                    value={firstName}
                    onChange={(e) => {
                      //email validation
                      const re = /^[a-zA-Z\s]*$/;
                      if (re.test(e.target.value)) {
                        setFirstName(e.target.value);
                      }
                    }}
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-sm text-dark dark:text-white"
                  >
                    {" "}
                    Email{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email"
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>

                <div className="mb-6">
                  <button
                    className="btn-nav gradi_border gradi_border-full"
                    onClick={handleSubmit}
                  >
                    <span className="relative z-10">Sign up</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* modal with drop down input field with select option */}
      <div
        className={`modal fixed inset-0 z-50 bg-black bg-opacity-50 duration-300 ${
          openZelcoreModal ? "visible" : "invisible"
        }`}
      >
        <div className="modal-content absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-dark p-8">
          <button
            onClick={() => setOpenZelcoreModal(false)}
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
            <h2 className="text-2xl font-semibold text-white">Wallets</h2>
          </div>

          <div className="relative mt-6">
            <div
              className="flex items-center justify-between rounded-md bg-[#2C303B] px-4 py-3 text-white"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {selectedAccount
                ? `k:${selectedAccount.split(":")[2]}`
                : "Select Wallet"}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 10L12 15L17 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {dropdownOpen && (
              <div className="absolute left-0 right-0 z-10 mt-2 max-h-60 overflow-auto rounded-md bg-[#2C303B] py-2 shadow-lg">
                {zelcoreAccounts.map((account, index) => (
                  <div
                    key={index}
                    className="cursor-pointer px-4 py-3 text-white hover:bg-[#3B3F4B]"
                    onClick={() => {
                      setSelectedAccount(account);
                      setDropdownOpen(false);
                    }}
                  >
                    {`k:${account.split(":")[2]}`}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6">
            <button
              className="btn-nav gradi_border gradi_border-full"
              onClick={handleZelcoreOpen}
            >
              <span className="relative z-10">Connect Zelcore</span>
            </button>
          </div>
        </div>
      </div>

      {/* Loader */}
      {loading && (
        <div
          className={`modal fixed inset-0 z-50 bg-black bg-opacity-50 duration-300 `}
        >
          <div className="modal-content absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-transparent p-8">
            <div className="flex items-center justify-center">
              <ThreeDots />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

{
  /* <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Create your account
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                </p>
                <form>
                  <div className="mb-8">
                    <label
                      htmlFor="first_name"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      First Name{" "}
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      placeholder="Enter your First Name"
                      value={firstName}
                      onChange={(e) => {
                        //email validation
                        const re = /^[a-zA-Z\s]*$/;
                        if (re.test(e.target.value)) {
                          setFirstName(e.target.value);
                        }
                      }}
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Email{" "}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your Email"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Your Password{" "}
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your Password"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                 
               
                
                  <div className="mb-6">
                    <button
                      className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                      onClick={handleSubmit}
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              
              </div>
            </div> */
}

export default Header;
