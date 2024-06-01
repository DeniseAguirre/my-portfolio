import { useTranslation } from "react-i18next";
export default function Contact() {
  const { t } = useTranslation();
  const contact = t("contact", { returnObjects: true });

  return (
    <div
      id="contact"
      className="bg-gray-800 flex  dark:bg-[url('https://i.postimg.cc/7P2h6gNg/pexels-therato-3374208.jpg')] dark:bg-cover dark:bg-start dark:bg-no-repeat"
    >
      <div className="px-6 dark:bg-black dark:rounded-md dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-md dark:bg-opacity-10 lg:px-24 py-8 sm:py-16">
        <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl m-4 text-center ">
          {contact.title}
        </h1>
        <div className="flex flex-col m-4">
          <p className="text-lg leading-8 text-white mb-4">{contact.intro}</p>
          <div className="flex flex-col text-lg leading-8 text-white">
            <div className="items-center mb-2">
              <a
                href={contact.calendlyUrl}
                className="flex font-bold dark:hover:text-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  style={{ marginRight: "10px" }}
                >
                  <path
                    fill="currentColor"
                    d="M17 10H7v2h10zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V8h14zm-5-5H7v2h7z"
                  />
                </svg>
                {contact.bookMeeting}
              </a>
            </div>
            <div className="flex items-center mb-2">
              <a
                className="font-bold flex dark:hover:text-green-500"
                href={contact.emailUrl}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  style={{ marginRight: "10px" }}
                >
                  <path
                    fill="currentColor"
                    d="m4.01 6.03l7.51 3.22l-7.52-1zm7.5 8.72L4 17.97v-2.22zM2.01 3L2 10l15 2l-15 2l.01 7L23 12z"
                  />
                </svg>
                {contact.email}
              </a>
            </div>
            <div className="flex items-center mb-2">
              <a
                className="font-bold flex dark:hover:text-green-500"
                href="tel:+5491126580740"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  style={{ marginRight: "10px" }}
                >
                  <path
                    fill="currentColor"
                    d="M15 12h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3m4 0h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7m1 3.5c-1.25 0-2.45-.2-3.57-.57c-.1-.03-.21-.05-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1M5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79M19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45z"
                  />
                </svg>
                {contact.call}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
