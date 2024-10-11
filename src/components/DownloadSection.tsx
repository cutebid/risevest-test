import React from "react";
import Image from "next/image";
import { apple_icon, playstore_icon } from "@/utils/svg";
import { motion } from "framer-motion";

const DownloadSection = () => {
  const downloadDetails = [
    {
      id: 1,
      icon: apple_icon,
      name: "App Store",
    },
    {
      id: 2,
      icon: playstore_icon,
      name: "Google Play",
    },
  ];
  return (
    <div className="bg-teal_4 rounded-[50px] mx-4 xl:mx-20 h-[600px] md:h-auto mt-10">
      <div className="flex items-center justify-between px-4 flex-col md:flex-row xl:px-20 pt-10">
        <div className="text-center md:text-start md:w-1/2">
          <p className="text-teal text-base font-medium">
          Download The Rise App
          </p>
          <h1 className="text-[32px] font-semibold my-4 ">
          Join our 100,000 users investing and setting long term goals!
          </h1>
          <p className="text-base font-medium"> Dollar investments that help you grow.</p>
          <div className=" flex gap-x-4 justify-center lg:justify-start my-10 ">
            {downloadDetails.map(({ id, icon, name }) => (
              <div
                key={id}
                
                className="flex justify-center sm:justify-start w-1/2 sm:w-auto bg-black text-white items-center gap-x-2 py-2 px-0 sm:px-6 rounded-[10px] cursor-pointer"
              >
                <span>{icon}</span>
                <div className="text-[10px] md:text-xs flex flex-col">
                  Download on the
                  <span className=" text-xs md:text-sm font-bold">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <motion.div  initial={{ y:100}}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }} className="w-4/5 md:w-[30%]">
          <Image
            src="/phone2.png"
            alt="phone"
            width={226}
            height={461}
            className="w-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default DownloadSection;
