import InsigniaMindhub from "../assets/bootcamp-desarrollador-web-full-stack-mern-mobile-apps.png";

export default function AboutMe() {
  return (
    <div id="about" className="py-8 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
        About me
      </h1>
      <div className="flex flex-col items-center p-8">
        <div className="mb-8 relative">
          <img
            src="https://i.postimg.cc/3wvqjxwv/IMG-4432.jpg"
            alt="profile"
            className="w-32 h-32 rounded-full border-2 border-purple-600"
          />
          <a href="https://www.credly.com/badges/63a93c65-32bb-497f-84ef-72e2365cc131/linked_in_profile">
            <img
              src={InsigniaMindhub}
              alt="Insignia Mindhub"
              className="h-32 absolute top-10 left-20 object-contain"
            />
          </a>
        </div>
        <div className="md:w-1/2 text-start text-md leading-8 text-gray-600">
          <p className="mb-4">
            Software developer with experience in web and mobile application
            development.{" "}
            <p>
              I completed a University Technician in Electronic Commerce at the
              National University of José Clemente Paz (UNPAZ) and a MERN Full
              Stack Web Development Bootcamp at MindHub LA.
            </p>
          </p>
          <p className="mb-4">
            I have worked in various technical roles, including as Technical
            Assistant at UNPAZ and Software Developer at Bigger. During my time
            at MindHub, I worked on projects including an e-commerce mobile app
            and a web app for uploading and reading manga.{" "}
          </p>{" "}
          <p className="mb-4">
            {" "}
            I possess a variety of technical skills including Stack MERN,
            Node.js, Bootstrap, Agile, Css3, React.js, JavaScript and React
            Native. I also have experience in marketing, having worked as a
            Marketing Assistant at Gardenlife SA.
          </p>{" "}
          <p className="mb-4">
            {" "}
            I am certified in Cybersecurity by Delta Protect and have several
            other certifications in software development and digital marketing.
            I am always looking for opportunities to learn and grow in my field.
            Don&apos;t hesitate to get in touch if you think we could work
            together!
          </p>
        </div>
      </div>
    </div>
  );
}
