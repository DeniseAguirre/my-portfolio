import {
  SiAxios,
  SiBootstrap,
  SiClickup,
  SiCss3,
  SiCypress,
  SiExpress,
  SiFigma,
  SiGithub,
  SiGoogledrive,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMongoose,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  return (
    <div
      id="skills"
      className="py-8 mx-4 sm:py-16 lg:px-36 lg:mx-0 bg-[url('https://i.postimg.cc/029nW5nN/pexels-stywo-1054218.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-8">
          {t("skills.title")}
        </h2>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 text-white ">
        <div className="relative p-8 m-4 lg:m-0">
          <div className="absolute inset-0 h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-8 text-center">
              {t("skills.card1.title")}
            </h2>
            <div>
              <ul className="grid grid-cols-3 gap-8 lg:grid-cols-4">
                <li className="flex flex-col items-center text-xs text-center">
                  <SiHtml5 size={32} className="mb-2" /> HTML
                </li>
                <li className="flex flex-col items-center text-xs text-center">
                  <SiCss3 size={32} className="mb-2" /> CSS
                </li>
                <li className="flex flex-col items-center text-xs text-center">
                  <SiJavascript size={32} className="mb-2" /> JavaScript
                </li>
                <li className="flex flex-col items-center text-xs text-center">
                  <SiReact size={32} className="mb-2" /> React
                </li>
                <li className="flex flex-col items-center text-xs text-center">
                  <SiRedux size={32} className="mb-2" /> Redux
                </li>
                <li className="flex flex-col items-center text-xs text-center">
                  <SiBootstrap size={32} className="mb-2" /> Bootstrap
                </li>
                <li className="flex flex-col items-center text-xs text-center">
                  <SiTailwindcss size={32} className="mb-2" /> Tailwind
                </li>
                <li className="flex flex-col items-center text-xs text-center">
                  <SiNextdotjs size={32} className="mb-2" /> Next
                </li>
                <li className="flex flex-col items-center text-xs text-center">
                  <SiMongodb size={32} className="mb-2" /> Mongo DB
                </li>
                <li className="flex flex-col items-center text-xs text-center">
                  <SiNodedotjs size={32} className="mb-2" /> Node
                </li>
                <li className="flex flex-col items-center text-xs text-center">
                  <SiExpress size={32} className="mb-2" /> Express
                </li>
                <li className="flex flex-col items-center text-xs text-center">
                  <SiNestjs size={32} className="mb-2" /> Nest
                </li>
                <li className="flex flex-col items-center text-xs text-center">
                  <SiMongoose size={32} className="mb-2" /> Mongoose
                </li>
                <li className="flex flex-col items-center text-xs text-center">
                  <SiPostgresql size={32} className="mb-2" /> PostgreSQL
                </li>
                <li className="flex flex-col items-center text-xs text-center">
                  <SiTypescript size={32} className="mb-2" /> Typescript
                </li>
                <li className="flex flex-col items-center text-xs text-center">
                  <SiAxios size={32} className="mb-2" /> Axios
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="relative p-8 m-4 lg:m-0">
            <div className="absolute inset-0 h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-8 text-center">
                {t("skills.card2.title")}
              </h2>
              <div>
                <ul className="grid grid-cols-3 gap-4 lg:grid-cols-4">
                  <li className="flex flex-col items-center text-xs text-center">
                    <SiCypress size={32} className="mb-2" /> Cypress
                  </li>
                  <li className="flex flex-col items-center text-xs text-center">
                    <SiJest size={32} className="mb-2" /> Jest
                  </li>
                  <li className="flex flex-col items-center text-xs text-center">
                    <SiPostman size={32} className="mb-2" /> Postman
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative p-8 m-4 lg:m-0">
            <div className="absolute inset-0 h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10"></div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-8 text-center">
                {t("skills.card3.title")}
              </h2>
              <div>
                <ul className="grid grid-cols-3 gap-4 lg:grid-cols-4">
                  <li className="flex flex-col items-center text-xs text-center">
                    <SiGithub size={32} className="mb-2" /> GitHub
                  </li>
                  <li className="flex flex-col items-center text-xs text-center">
                    <SiTrello size={32} className="mb-2" /> Trello
                  </li>
                  <li className="flex flex-col items-center text-xs text-center">
                    <SiFigma size={32} className="mb-2" /> Figma
                  </li>
                  <li className="flex flex-col items-center text-xs text-center">
                    <SiClickup size={32} className="mb-2" /> ClickUp
                  </li>
                  <li className="flex flex-col items-center text-xs text-center">
                    <SiGoogledrive size={32} className="mb-2" /> Google Drive
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
