import { ReactElement } from "react";
import LandingLayout from "@/layout";
import { apple_icon, playstore_icon } from "@/utils/svg";
import Image from "next/image";
import ChooseInvestment from "@/components/ChooseInvestment";
import AssetClasses from "@/components/AssetClasses";
import StartSaving from "@/components/StartSaving";
import Regulation from "@/components/Regulation";
import Beneficiaries from "@/components/Beneficiaries";
import Community from "@/components/Community";
import DownloadSection from "@/components/DownloadSection";

const HomePage = () => {
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
  const partners = [
    {
      id: 1,
      imgSrc: "/download3.png",
      width: "81px",
      height: "38px",
    },
    {
      id: 1,
      imgSrc: "/download4.png",
      width: "178px",
      height: "80px",
    },
    {
      id: 1,
      imgSrc: "/download2.png",
      width: "124px",
      height: "60px",
    },
    {
      id: 1,
      imgSrc: "/download1.png",
      width: "42px",
      height: "43px",
    },
  ];
  return (
    <main className="relative  overflow-hidden pt-36">
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
          <div className="w-8 h-8 rounded-full bg-teal_3 absolute top-0 left-28 animate-bounceUpDown"></div>
          <div className="w-8 h-8 rounded-full bg-teal_3 absolute left-[60%] bottom-40 animate-bounceLeftRight"></div>
          <div className="w-14 h-14 rounded-full bg-teal_3 absolute -top-10 left-[52%] z-50 animate-bounceDiagonal"></div>
          <div className="w-14 h-14 rounded-full bg-teal_3 absolute bottom-32 left-60 animate-bounceCenter"></div>
          <div className="w-14 h-14 rounded-full bg-teal_3 absolute bottom-40 right-48 animate-bounceInPlace"></div>
        </div>
        <p className="text-lg font-bold text-[#7B8DA8] block sm:hidden px-4 mt-10">We are supported by</p>
        <div className="flex items-center sm:justify-center mt-2 sm:mt-10 gap-x-2 overflow-auto px-4 sm:px-0">
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
      <section className="mt-5 lg:mt-0">
        <ChooseInvestment
          title="Invest your money in dollars"
          mobileTitle="Superior Performance"
          info=" By holding your investments in a stable currency, your money grows more over time and retains its value better."
          imgSrc="/file1.png"
          flexDirection="md:flex-row"
        />
        <ChooseInvestment
          title="Choose what's best for you"
          mobileTitle="Personalization"
          info="Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place. "
          imgSrc="/file2.png"
          flexDirection="md:flex-row-reverse"
        />
        <ChooseInvestment
          title="Set goals and reach them"
          mobileTitle="Diversification"
          info="You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them. "
          imgSrc="/file3.png"
          flexDirection="md:flex-row"
        />
        <ChooseInvestment
          title="We remember so you dont have to"
          mobileTitle="Diversification"
          info="Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule. "
          imgSrc="/file4.png"
          flexDirection="md:flex-row-reverse"
        />
      </section>
      <section>
        <AssetClasses />
      </section>
      <section>
        <StartSaving />
      </section>
      <section>
        <Regulation />
      </section>
      <section>
        <Beneficiaries />
      </section>
      <section>
        <Community />
      </section>
      <section>
        <DownloadSection />
      </section>
    </main>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default HomePage;
