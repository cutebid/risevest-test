import React from "react";
import Image from "next/image";

const StartSaving = () => {
  return (
    <div className="xl:px-20 pt-20 pb-10 hidden md:block">
      <div className="flex flex-row-reverse items-center justify-between px-20">
        <div className="w-full lg:w-[65%]">
          <div className="w-4/5 lg:w-3/5 ml-auto">
            <h4 className="text-lg font-medium">The Rise App</h4>
            <div className="text-2xl lg:text-[40px] -[48px] font-semibold my-4 ">
              Save for your <span className=" text-[#696ef9]">future</span>
            </div>
            <p className="text-base">
              With Rise, you achieve your financial goals faster. Save for
              school, your home, vacations, your children’s future and more.
            </p>
            <button className="bg-teal px-8 py-3 rounded-md text-white text-base font-bold mt-8 button">
              Start Saving
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[35%]">
          <Image
            src="/savings-image.png"
            alt="phone"
            width={316}
            height={508}
            objectFit="cover"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default StartSaving;
