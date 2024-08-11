"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

function Navbar() {
  const [isSignedIn, setIsSignedIn] = useState(true);

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

  const handleNav = () => {};

  return (
    <section className="p-4 bg-white flex justify-between items-center lg:px-20 lg:py-6">
      {/* LOGO */}
      <div>
        <h1>InvestED</h1>
      </div>

      {/* NAVLINKS */}
      <div>
        {/* DESKTOP NAVBAR */}
        <nav className="hidden lg:block">
          {isSignedIn ? (
            <div className="flex gap-x-8">
              <ul className="flex gap-x-7">
                {loggedInItems?.map((item) => (
                  <Link  href={item.path} key={item.name}>
                    {item.name}
                  </Link>
                ))}
              </ul>
              <button type="button">Logout</button>
            </div>
          ) : (
            <>
              <button>SignIn</button>
              <button>SignUp</button>
            </>
          )}
        </nav>

        {/* MOBILE NAVBAR */}
        <div onClick={handleNav} className="block md:hidden">
          <MenuIcon className="text-black" size={30} />
        </div>

        {/* MOBILE NAVLINKS */}
      </div>
    </section>
  );
}

export default Navbar;
