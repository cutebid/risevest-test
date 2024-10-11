import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { down_arrow, menu_icon} from "@/utils/svg";

import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import MobileNav from "./MobileNav";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter()
  const navLinks = [
    { id: 1, textLink: "Home", link: "/", arrow: false },
    { id: 2, textLink: "Products", link: "#", arrow: true },
    { id: 3, textLink: "Investment Club", link: "#", arrow: false },
    { id: 4, textLink: "Blog", link: "#",  arrow: false },
    { id: 5, textLink: "About Us", link: "#",  arrow: false },
    { id: 6, textLink: "FAQs", link: "#",  arrow: false },
  ];
  
  return (
    <div className="relative">
      <nav className=" navbar px-4 xl:px-28 flex-between">
        <div>
          <Link href={"/"}>
            <Image src="/logo.png" alt="logo" width={54} height={18} className="object-cover"/>
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex-between">
            {navLinks.map(({ id, textLink, link, arrow }) => (
              <li
              onClick={() => router.push(link)}
                className={`flex items-center text-teal gap-x-1 text-sm mx-4  xl:text-base link cursor-pointer navlink ${router.pathname === link  && 'font-bold active'}`}
                key={id}
              >
                {textLink} <span> {arrow && down_arrow}</span>
              </li>
            ))}
          </ul>
        </div>
      
        <div className=" lg:hidden" onClick={() => setShowMenu(!showMenu)}>
          {menu_icon}
        </div>
        <div className="absolute left-0 top-20">
        <AnimatePresence>{showMenu && <MobileNav  setShowMenu={setShowMenu} />}</AnimatePresence>
      </div>
      </nav>
    
    </div>
  );
};

export default Header;
