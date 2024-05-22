import { SiGmail, SiWhatsapp, SiLinkedin, SiGithub } from "react-icons/si";

export default function Contact() {
  const whatsappURL = "https://wa.me/5491126580740";
  const emailURL = "mailto:deniseaguirre.m@gmail.com";
  const linkedinURL = "https://www.linkedin.com/in/denise-aguirre-m/";
  const githubURL = "https://github.com/DeniseAguirre";

  return (
    <div
      id="contact"
      className="p-4 relative isolate px-6 pt-14 lg:px-8 py-8 sm:py-16"
    >
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="m-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center m-4">
          Contact
        </h1>
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg leading-8 text-gray-600 text-center mb-4">
            I am always looking for new opportunities. If you want to know more,
            you can contact me.
          </p>
          <div className="flex flex-col text-lg leading-8 text-gray-600">
            <p className="font-bold">
              Email:{" "}
              <a className="font-normal" href={emailURL}>
                deniseaguirre.m@gmail.com
              </a>
            </p>
            <p className="font-bold">
              Phone:{" "}
              <a className="font-normal" href="tel:+5491126580740">
                +54 9 11 2658 0740
              </a>
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-8 mt-8">
          <div>
            <a href={whatsappURL} target="_blank" rel="noreferrer">
              <SiWhatsapp className="w-8 h-8 cursor-pointer hover:text-green-600" />
            </a>
          </div>
          <div>
            <a href={emailURL} target="_blank" rel="noreferrer">
              <SiGmail className="w-8 h-8 cursor-pointer hover:text-red-600" />
            </a>
          </div>
          <div>
            <a href={linkedinURL} target="_blank" rel="noreferrer">
              <SiLinkedin className="w-8 h-8 cursor-pointer hover:text-blue-500" />
            </a>
          </div>
          <div>
            <a href={githubURL} target="_blank" rel="noreferrer">
              <SiGithub className="w-8 h-8 cursor-pointer hover:text-black" />
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
