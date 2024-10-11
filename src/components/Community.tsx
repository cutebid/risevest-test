import React from "react";
import Image from "next/image";

const Community = () => {
  return (
    <section className="px-8 xl:px-20  pb-10">
      <div className="flex  items-center justify-between flex-col-reverse md:flex-row  ">
        <div className="md:w-1/2 text-center md:text-start mt-10 md:mt-0 ">
          <h1 className="text-3xl lg:text-[40px] font-semibold">
            Join The Rise Community
          </h1>
          <p className="text-base mt-2 mb-6 lg:my-6 hidden lg:block">
            If you want to go far, go together. Our Telegram community surrounds
            you with others who can help you along your financial journey with
            tips, support, advice and learning. It's completely free and open to
            new and seasoned investors.
          </p>
          <p className="text-base mt-2 mb-6 lg;my-6 block lg:hidden">
          If you want to go far, go together.
          </p>
          <button className="bg-teal_3 px-8 py-3 rounded-md text-base font-bold button">
            Join our Community
          </button>
        </div>
        <div className=" md:w-2/5">
          <Image
            src="/group.png"
            alt="phone"
            width={432}
            height={386}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Community;
