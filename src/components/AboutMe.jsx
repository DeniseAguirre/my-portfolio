import InsigniaMindhub from "../assets/bootcamp-desarrollador-web-full-stack-mern-mobile-apps.png";
import { useTranslation } from "react-i18next";
export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <div id="about" className="py-8 sm:py-16 dark:bg-[#131313]">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center">
        {t("aboutMe.title")}
      </h1>
      <div className="flex flex-col items-center p-8">
        <div className="mb-8 relative">
          <img
            src="https://i.postimg.cc/3wvqjxwv/IMG-4432.jpg"
            alt="profile"
            className="w-32 h-32 rounded-full border-2 border-purple-600 dark:border-green-500"
          />
          <a href="https://www.credly.com/badges/63a93c65-32bb-497f-84ef-72e2365cc131/linked_in_profile">
            <img
              src={InsigniaMindhub}
              alt="Insignia Mindhub"
              className="h-32 absolute top-10 left-20 object-contain"
            />
          </a>
        </div>
        <div className="md:w-1/2 text-start text-md leading-8 text-gray-600 dark:text-white">
          <p className="mb-4">{t("aboutMe.education")}</p>
          <p className="mb-4">{t("aboutMe.experience")}</p>{" "}
          <p className="mb-4"> {t("aboutMe.skills")}</p>{" "}
          <p className="mb-4">{t("aboutMe.certifications")}</p>
        </div>
      </div>
    </div>
  );
}
