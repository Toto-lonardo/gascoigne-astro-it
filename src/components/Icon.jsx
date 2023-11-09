import { useEffect, useState } from "react";
import { easeIn, motion } from "framer-motion";
export const Icon = (props) => {
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
    <motion.div
      className="flex flex-col justify-center items-center"
      initial={{ y: 250, opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "200px", amount: "all" }}
      transition={{ duration: 0.3, delay: props.delay, ease: "easeIn" }}
    >
      <div className="">{props.image}</div>
      <p className="text-lg text-center text-red-900 font-bold uppercase m-1">
        {props.imagename}
      </p>
    </motion.div>
  );
};
