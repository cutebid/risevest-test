import { ReactElement } from "react";
import LandingLayout from "@/layout";
import ChooseInvestment from "@/components/ChooseInvestment";
import AssetClasses from "@/components/AssetClasses";
import StartSaving from "@/components/StartSaving";
import Regulation from "@/components/Regulation";
import Beneficiaries from "@/components/Beneficiaries";
import Community from "@/components/Community";
import DownloadSection from "@/components/DownloadSection";
import { investmentData } from "../static/data";
import HeroSection from "@/components/HeroSection";

const HomePage = () => {
  return (
    <main className="relative  overflow-hidden pt-36">
      <HeroSection />
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
