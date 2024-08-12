"use client";

import { useState } from "react";
import { CircleX, MenuIcon } from "lucide-react";
import Link from "next/link";

function Navbar() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const loggedInItems = [
    {
      name: "Modules",
      path: "/learning-modules",
    },
    {
      name: "Tracker",
      path: "/expense-tracker",
    },
    {
      name: "Goals",
      path: "/goal-based-recommendations",
    },
    {
      name: "InvestMania",
      path: "/investmania",
    },
  ];

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <section>
      <div className="flex justify-between py-6 px-4 lg:px-20 bg-slate-200">
        {/* LOGO */}
        <Link href={"/"} className="font-medium">
          <h1>InvestED</h1>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden lg:flex lg:gap-x-5">
          <ul className="flex gap-x-5">
            {isSignedIn ? (
              loggedInItems.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))
            ) : (
              <>
                <li>About Us</li>
                <li>How we Work</li>
                <li>Sign In</li>
                <li>Sign Up</li>
              </>
            )}
            {/* LOGOUT BUTTON */}
            {isSignedIn && <button>Logout</button>}
          </ul>
        </nav>
        {/* HAMBURGER ICON */}
        <div onClick={handleNav} className="block lg:hidden">
          {!isNavOpen ? (
            <MenuIcon onClick={handleNav} />
          ) : (
            <CircleX onClick={handleNav} />
          )}
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <nav
        className={`fixed flex justify-center font-semibold text-3xl w-[100%] h-[100%] lg:hidden ${
          isNavOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col pt-20 items-center bg-slate-200 w-full gap-y-7">
          {isSignedIn ? (
            loggedInItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))
          ) : (
            <>
              <li>About Us</li>
              <li>How we Work</li>
              <li>Sign In</li>
              <li>Sign Up</li>
            </>
          )}
          {/* LOGOUT BUTTON */}
          {isSignedIn && <button>Logout</button>}
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
