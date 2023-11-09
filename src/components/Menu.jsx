import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { easeIn, motion } from "framer-motion";

export const Menu = (props) => {
  const [toggled, setToggle] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // This forces a rerender, so the date is rendered
    // the second time but not the first
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <>
      <div className="flex flex-row items-center justify-end xl:justify-around mx-2 ">
        <nav className="">
          {!isDesktop && toggled && (
            <ul className="fixed flex flex-col gap-4 items-center justify-center text-3xl text-white bg-red-900 h-full w-full bottom-0 left-0 z-30">
              <motion.li
                initial={{ x: 250, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0, ease: "easeIn" }}
                className="flex flex-col gap-4"
              >
                <a>{props.home}</a>
              </motion.li>
              <motion.li
                initial={{ x: 250, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeIn" }}
                className="flex flex-col gap-4"
              >
                <a>{props.menu}</a>
              </motion.li>
              <motion.li
                initial={{ x: 250, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
                className="flex flex-col gap-4"
              >
                <a>{props.about}</a>
              </motion.li>
              <motion.li
                initial={{ x: 250, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3, ease: "easeIn" }}
                className="flex flex-col gap-4"
              >
                <a>{props.contact}</a>
              </motion.li>
            </ul>
          )}
          {isDesktop && (
            <ul className="flex flex-col md:flex-row gap-4 items-center justify-center text-2xl text-white mr-2">
              <li className="flex gap-4">
                <a>{props.home}</a>
              </li>
              <li className="flex gap-4">
                <a>{props.menu}</a>
              </li>
              <li className="flex gap-4">
                <a>{props.about}</a>
              </li>
              <li className="flex gap-4">
                <a>{props.contact}</a>
              </li>
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
