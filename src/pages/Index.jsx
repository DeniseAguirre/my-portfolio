import Skills from "../components/Skills";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Index() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <NavBar />
      <AboutMe />
      <Skills />
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
