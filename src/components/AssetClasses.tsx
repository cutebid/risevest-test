import { arrow_forward } from "@/utils/svg";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const AssetClasses = () => {
  const assets = [
    {
      id: 1,
      title: "Stocks",
      imgSrc: "/ellipse3.png",
      bgColor: "bg-orange_4",
      linkText: "Learn how Stocks work ",
      info: "We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with equity portfolio of power stocks.",
    },
    {
      id: 2,
      title: "Real Estate",
      imgSrc: "/ellipse2.png",
      bgColor: "bg-indigo_4",
      linkText: "Learn how Real Estate work",
      info: "Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.",
    },
    {
      id: 3,
      title: "Fixed Income",
      imgSrc: "/ellipse1.png",
      bgColor: "bg-teal_4",
      linkText: " Learn how Fixed Income work",
      info: "A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns. ",
    },
  ];

  return (
    <div className="mt-12 medium:mt-0">
      <div className="text-center">
        <h1 className="font-semibold text-3xl md:text-[40px]">Asset Classes</h1>
        <p className="text-base font-medium mt-1">
          It’s your money, choose where you invest it
        </p>
      </div>
      <div className="flex justify-between flex-col medium:flex-row px-8 xl:px-28 mt-10">
        {assets.map(({ id, linkText, title, info, imgSrc, bgColor }) => (
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            key={id}
            className="relative flex flex-col items-center text-center border-2 border-[#919FB533] rounded-md w-full medium:w-[30%] pb-4  mb-10 medium:mb-0 image-hover"
          >
            <div
              className={`h-36 w-full rounded-tr-2xl rounded-tl-2xl ${bgColor}`}
            ></div>
            <h4 className="mt-24 text-2xl font-semibold text-tint_black">
              {title}
            </h4>
            <p className="text-base text-tint_black mt-6 mb-4 px-2">{info}</p>
            <div className="text-base text-tint_black mb-6">
              <div>
                <span className="opacity-60">Historical returns: </span> 4% per
                annum
              </div>
              <div>
                <span className="opacity-60">Risk Level:</span> Medium
              </div>
            </div>
            <div className="mt-auto">
              <span className="font-semibold text-base   text-teal flex items-center gap-x-2 cursor-pointer hover:translate-x-1.5 transition-all duration-75 ease-in">
                <Link href="#">{linkText}</Link> {arrow_forward}
              </span>
            </div>
            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center image-container">
              <img
                src={imgSrc}
                alt="images"
                className="w-[85px] h-[85px] rounded-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AssetClasses;
