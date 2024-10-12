import { ReactElement } from "react";
import LandingLayout from "@/layout";
import ChooseInvestment from "@/components/ChooseInvestment";
import AssetClasses from "@/components/AssetClasses";
import StartSaving from "@/components/StartSaving";
import Regulation from "@/components/Regulation";
import Beneficiaries from "@/components/Beneficiaries";
import Community from "@/components/Community";
import DownloadSection from "@/components/DownloadSection";

import HeroSection from "@/components/HeroSection";

const HomePage = () => {

   const investmentData = [
    {
      title: "Invest your money in dollars",
      mobileTitle: "Superior Performance",
      info: "By holding your investments in a stable currency, your money grows more over time and retains its value better.",
      imgSrc: "/file1.png",
      flexDirection: "md:flex-row",
    },
    {
      title: "Choose what's best for you",
      mobileTitle: "Personalization",
      info: "Unlike other platforms, Rise lets you pick between stocks, US real estate, and fixed income, according to your risk appetite.",
      imgSrc: "/file2.png",
      flexDirection: "md:flex-row-reverse",
    },
    {
      title: "Set goals and reach them",
      mobileTitle: "Diversification",
      info: "You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets.",
      imgSrc: "/file3.png",
      flexDirection: "md:flex-row",
    },
    {
      title: "We remember so you don’t have to",
      mobileTitle: "Consistency",
      info: "Our Auto-invest feature makes it easy to stay consistent. Set a funding amount and Rise will automatically fund your investment.",
      imgSrc: "/file4.png",
      flexDirection: "md:flex-row-reverse",
    },
  ];
  
  return (
    <main className="relative  overflow-hidden pt-36">
     <HeroSection/>
      <section className="mt-5 lg:mt-0">
        {investmentData.map((investment, index) => (
          <ChooseInvestment key={index} {...investment} />
        ))}
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
