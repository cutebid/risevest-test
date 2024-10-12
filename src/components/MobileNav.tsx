import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/router";
import { navLinks } from "@/static/data";

interface MobileNavProps {
  setShowMenu: (show: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ setShowMenu }) => {
  const router = useRouter();

  const handleLinks = (link: string) => {
    router.push(link);
    setShowMenu(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className=" block bg-white lg:hidden w-screen pb-8 px-4"
    >
      <div>
        <ul className=" flex flex-col">
          {navLinks.map(({ id, textLink, link }) => (
            <li
              onClick={() => handleLinks(link)}
              className="py-4 text-base hover:text-teal  border-b-4 border-neutral-50 cursor-pointer"
              key={id}
            >
              {textLink}
            </li>
          ))}
        </ul>
      </div>
     
    </motion.div>
  );
};

export default MobileNav;
