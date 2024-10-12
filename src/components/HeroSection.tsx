import React from 'react'
import Image from 'next/image';
import { downloadDetails, partners } from "../static/data";

const HeroSection = () => {
  return (
    <section className="relative">
    <div className="flex items-center lg:justify-between px-4 xl:px-20 flex-col lg:flex-row">
      <div className=" w-full md:w-3/4 mx-auto text-center lg:text-start lg:w-1/2">
        <h1 className="text-teal text-3xl  md:text-5xl xl:text-6xl font-semibold">
          Dollar investments that help you grow
        </h1>
        <p className="text-base text-tint_black font-medium mt-4 mb-8 md:w-3/4 mx-auto lg:mx-0">
          We put your money in high quality assets that help you build
          wealth and achieve your financial goals.
        </p>
        <div className="flex gap-x-4 justify-center lg:justify-start mb-10 lg:mb-0">
          {downloadDetails.map(({ id, icon, name }) => (
            <div
              key={id}
              className="flex justify-center sm:justify-start w-2/5 sm:w-auto bg-black text-white items-center gap-x-2 py-2 px-0 sm:px-6 rounded-[10px] cursor-pointer"
            >
              <span>{icon}</span>
              <div className="text-[10px] md:text-xs flex flex-col">
                Download on the
                <span className="text-xs md:text-sm font-bold">{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/5 mr-40 hidden lg:block">
        <Image
          src="/phone.png"
          alt="phone"
          width={226}
          height={461}
          className="w-full  object-cover"
        />
      </div>
      <div className=" w-4/5 sm:w-2/5  block lg:hidden">
        <Image
          src="/phone-mobile.png"
          alt="phone"
          width={226}
          height={393}
          className="w-full object-cover"
        />
      </div>
      <div className="w-8 h-8 rounded-full bg-teal_3 absolute left-0 top-0 sm:top-0 sm:left-28 animate-bounceUpDown -z-50"></div>
      <div className="w-8 h-8 rounded-full bg-teal_3 absolute bottom-1/2 right-12 sm:left-[60%] sm:bottom-40 animate-bounceLeftRight -z-50">
      </div>
      <div className="w-14 h-14 rounded-full bg-teal_3 absolute right-0 -top-10 sm:left-[52%] -z-50 animate-bounceDiagonal"></div>
      <div className="w-14 h-14 rounded-full bg-teal_3 absolute bottom-[60%] left-8 sm:bottom-32 sm:left-60 animate-bounceCenter -z-50"></div>
      <div className="w-14 h-14 rounded-full bg-teal_3 absolute bottom-56 right-72 sm:bottom-40 sm:right-48 animate-bounceInPlace -z-50">5</div>
    </div>
    <p className="text-lg font-bold text-[#7B8DA8] block sm:hidden px-4 mt-10">
      We are supported by
    </p>
    <div className="flex items-center sm:justify-center mt-2 sm:mt-10 gap-x-2  px-4 sm:px-0 partners">
      {partners.map(({ width, height, imgSrc, id }) => (
        <img
          key={id}
          src={imgSrc}
          alt="investors"
          style={{ width: width, height: height }}
        />
      ))}
    </div>
  </section>
  )
}

export default HeroSection