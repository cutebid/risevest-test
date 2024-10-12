import { arrow_forward } from "@/utils/svg";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface ChooseInvestmentProps {
  flexDirection?: string; 
  title: string;
  imgSrc: string;
  info: string;
  mobileTitle?:string
}

const ChooseInvestment: React.FC<ChooseInvestmentProps> = ({ flexDirection, title, info, imgSrc, mobileTitle }) => {
  const marginClass = flexDirection === "flex-row" ? "xl:mr-12" : "xl:ml-12";
  const marginTextClass = flexDirection === "flex-row" ? "pr-0" : "xl:pl-20";
  const widthClass = flexDirection === "flex-row" ? "md:w-3/4" : "w-full";

  return (
    <div className="px-8 xl:px-28">
      <div className={`flex flex-col-reverse  items-center  justify-between ${flexDirection}`}>
        <div className={`md:w-1/2  ${marginTextClass} text-center md:text-start`}>
          <h1 className="text-xl md:text-[32px] font-semibold hidden md:block">{title}</h1>
          <h1 className="text-xl md:text-[32px] font-semibold block md:hidden">{mobileTitle}</h1>
          <p className={`text-base font-medium  mt-2 ${widthClass}`}>
            {info}
          </p>
          <span className="font-medium text-lg text-teal  items-center  gap-x-2 mt-4 cursor-pointer hover:translate-x-1.5 transition-all duration-75 ease-in hidden md:flex">
            Start Investing Now {arrow_forward}
          </span>
        </div>
        <div className="">
          <motion.div
            initial={{ x: flexDirection === "flex-row" ? -100 : 100}}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Image
              src={imgSrc}
              alt="image"
              width={480}
              height={460}
              className={`w-[280px] h-[268px] md:w-[480px] md:h-[460px] ${marginClass} object-cover`}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChooseInvestment;
