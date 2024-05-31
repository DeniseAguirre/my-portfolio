import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CertificationsGrid from "../components/CertificationsGrid";
import { useTranslation } from "react-i18next";

export default function Index() {
  const { t } = useTranslation();
  const swipeUp = t("buttons.swipeUp", { returnObjects: true });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.location.hash = "#home";
  };

  return (
    <>
      <NavBar />
      <AboutMe />
      <Skills />
      <CertificationsGrid />
      <Projects />
      <Contact />
      <Footer />

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg text-sm"
      >
        <div className="flex items-center space-x-4 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496"
            />
          </svg>
          {swipeUp}
        </div>
      </button>
    </>
  );
}
