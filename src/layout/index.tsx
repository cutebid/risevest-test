import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";


interface Props {
  children: ReactNode;
}
const LandingLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
        <Header/>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default LandingLayout;
