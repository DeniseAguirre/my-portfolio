import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CertificationsGrid from "../components/CertificationsGrid";

export default function Index() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.location.href = "http://localhost:5173/#";
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
        Swipe up
      </button>
    </>
  );
}
