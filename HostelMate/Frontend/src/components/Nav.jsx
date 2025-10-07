import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Explore from "./Explore";
import Signin from "@/explore/Signin";
import { toast } from "sonner";

const Nav = ({ setLoading }) => {
  const navigate = useNavigate();

  const cities = [
    "https://asset-cdn.stanzaliving.com/stanza-living/image/upload/f_auto,q_auto/v1582114421/NewWebsite/cities/delhi.png",
    "https://asset-cdn.stanzaliving.com/stanza-living/image/upload/f_auto,q_auto/v1637904076/Website/CMS-Uploads/gadbjhmexjzadryrckds.png",
    "https://asset-cdn.stanzaliving.com/stanza-living/image/upload/f_auto,q_auto/v1582114421/NewWebsite/cities/pune.png",
  ];

  const [mobileOpen, setMobileOpen] = useState(false); // Mobile menu toggle
  const [exploreOpen, setExploreOpen] = useState(false); // Explore dropdown
  const [openDialogue, setOpenDialogue] = useState(false);
  const [showSignin, setShowSignin] = useState(true);
  const dropdownRef = useRef(null);

  // Close Explore dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setExploreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Check if user is signed in
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setShowSignin(false);
  }, []);

  const OnSearch = () => {
    toast("You have been successfully Signed-in");
  };

  const signIn = () => setOpenDialogue(true);

  const signOut = () => {
    localStorage.removeItem("user");
    setShowSignin(true);
    toast("You have been successfully Signed-out");
    navigate("/");
  };

  return (
    <nav className="fixed top-0 w-[85%] left-[7vw] mt-2 md:mt-3 md:w-[85%] rounded-lg backdrop-blur-md shadow-[0_4px_30px_-1px_rgba(0,0,0,0.3)] z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between -mb-2">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="./img/US1.png"
            className="h-30 md:ml-10 md:mt-1"
            alt="UniStays Logo"
          />
        </Link>

        {/* Hamburger button */}
        <button
          type="button"
          className="inline-flex items-center md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 mr-4"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Menu */}
        <div
          className={`${
            mobileOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:items-center mr-8`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 font-medium p-4 md:p-0 mt-4 md:mt-0">
            {/* Explore Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setExploreOpen(!exploreOpen)}
                className="block py-2 px-3 text-black rounded-sm hover:text-teal-600 md:bg-transparent md:p-0"
              >
                Explore Residences
              </button>
              {exploreOpen && (
                <div className="absolute top-10 left-0 z-50 bg-white shadow-lg rounded-md p-4">
                  <Explore city={cities} setLoading={setLoading} />
                </div>
              )}
            </li>

            {/* About */}
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-black rounded-sm hover:text-teal-600 md:bg-transparent md:p-0"
              >
                About Us
              </Link>
            </li>

            {/* Sign In / Sign Out */}
            {showSignin ? (
              <li>
                <button
                  onClick={signIn}
                  className="block py-2 px-3 text-black rounded-sm hover:text-teal-600 md:bg-transparent md:p-0"
                >
                  Sign In
                </button>
              </li>
            ) : (
              <li>
                <button
                  onClick={signOut}
                  className="block py-2 px-3 text-black rounded-sm hover:text-red-700 md:bg-transparent md:p-0"
                >
                  Sign Out
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Signin Dialog */}
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
  );
};

export default Nav;
