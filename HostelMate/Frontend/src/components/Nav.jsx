import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Explore from "./Explore";
import Signin from "@/explore/Signin";
import { toast } from "sonner";

const Nav = ({setLoading}) => {

  const navigate=useNavigate()

  const cities=[
    "https://asset-cdn.stanzaliving.com/stanza-living/image/upload/f_auto,q_auto/v1582114421/NewWebsite/cities/delhi.png",
    "https://asset-cdn.stanzaliving.com/stanza-living/image/upload/f_auto,q_auto/v1637904076/Website/CMS-Uploads/gadbjhmexjzadryrckds.png",
    "https://asset-cdn.stanzaliving.com/stanza-living/image/upload/f_auto,q_auto/v1582114421/NewWebsite/cities/pune.png",
  ]

  const [isOpen, setIsOpen] = useState(false);
  const [openDialogue, setOpenDialogue] = useState(false)
  const dropdownRef = useRef(null);

  const handleClick = () => setIsOpen(!isOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const [showSignin, setShowSignin]=useState(true)

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setShowSignin(false);
    }
  });

  const OnSearch =() => {
    toast('You have been successfully Signed-in') 
    return;}

  const signIn=()=>{
    setOpenDialogue(true);
  }

  const signOut=()=>{
    localStorage.removeItem("user")
    setShowSignin(true)
    toast('You have been successfully Signed-out')
    navigate('/')
  }

  return (
    <div>
      <nav className="fixed top-0 nav w-[85%] left-[7vw] mt-2 md:w-[85%] md:left-27 md:mt-3 z-300">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between -mb-2">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="./img/US1.png" className="h-30 md:ml-10 md:mt-1" alt="Flowbite Logo" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span> */}
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center mr-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5 mb-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
          </button>
          <div
            className="hidden w-full mb-2 md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-10 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 w-full">
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={handleClick}
                  className="block py-2 px-3 text-black rounded-sm md:bg-transparent hover:text-[#0D9488] md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Explore Residences
                </button>

                {isOpen && (
                  <div className="absolute top-0 right-4 md:top-10 md:-right-50 z-50">
                    <Explore 
                      city={cities} 
                      setLoading={setLoading}
                    />
                  </div>
                )}
              </li>
              <li>
                  <ul
                    className="text-md"
                  >
                    <li>
                      <Link
                        to="/about"
                        className="block px-3 text-black rounded-sm md:bg-transparent hover:text-[#0D9488] md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                  </li>

              {showSignin ? (
                <li className="relative">
                <button
                  onClick={signIn}
                  className="block py-2 px-3 text-black rounded-sm md:bg-transparent hover:text-[#0D9488] md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Sign In
                </button>
              </li>
              ): (
                <li className="relative">
                <button
                  onClick={signOut}
                  className="block hover:text-red-700 py-2 px-3 text-black rounded-sm md:bg-transparent md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Sign Out
                </button>
              </li>
            )}
            </ul>
          </div>
            <Signin
              open={openDialogue}
              onClose={() => setOpenDialogue(false)}
              onLoginSuccess={() => {
                setShowSignin(false);
                OnSearch();
              }}
            />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
