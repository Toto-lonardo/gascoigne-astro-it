import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { animate, motion } from "framer-motion";

const menu = [
  { href: "", label: "Home" },
  { href: "menu", label: "Menu" },
  { href: "about", label: "About" },
  { href: "Contacts", label: "Contact" },
];

export const Menu = () => {
  const [toggled, setToggle] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
  return (
    <>
      <div className="flex flex-row items-center justify-end xl:justify-around w-full ">
        <nav className="">
          {!isDesktop && toggled && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="fixed flex flex-col gap-4 items-center justify-center text-3xl text-white bg-red-900 h-full w-full bottom-0 left-0 z-30"
            >
              {menu.map((voce) => {
                return (
                  <motion.li
                    initial={{ x: 250, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    key={voce.href}
                  >
                    <a href={voce.href}>{voce.label}</a>
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
          {isDesktop && (
            <ul className="flex flex-col md:flex-row gap-4 items-center justify-center text-2xl text-white mr-2">
              {menu.map((voce) => {
                return (
                  <li key={voce.href}>
                    <a href={voce.href}>{voce.label}</a>
                  </li>
                );
              })}
            </ul>
          )}
        </nav>
        {!isDesktop && (
          <button
            className="block space-y-1.5 z-50 mr-4 xl:mr-0 "
            onClick={() => setToggle(!toggled)}
          >
            <motion.span
              animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
              className="block h-0.5 w-8 bg-white "
            ></motion.span>
            <motion.span
              animate={{ width: toggled ? 0 : 32 }}
              className="block h-0.5  w-8 bg-white"
            ></motion.span>
            <motion.span
              animate={{ rotateZ: toggled ? -45 : 0, y: toggled ? -8 : 0 }}
              className="block h-0.5 w-8 bg-white"
            ></motion.span>
          </button>
        )}
      </div>
    </>
  );
};
