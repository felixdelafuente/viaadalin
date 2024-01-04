import { HeaderSection } from "./HeaderSection";
import { AboutSection } from "./AboutSection";
import { BackgroundSection } from "./BackgroundSection";
import { BlogsSection } from "./BlogsSection";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <>
      <HeaderSection />
      <AboutSection />
      <BackgroundSection />
      <BlogsSection />
      <Footer />
    </>
  );
};
