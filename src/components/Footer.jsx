import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const footer = t("footer", { returnObjects: true });
  const navBar = t("navBar", { returnObjects: true });
  return (
    <div className="w-full bg-white p-8">
      <div className="flex flex-col justify-center lg:flex-row flex-wrap items-center gap-y-6 gap-x-12 bg-white text-center lg:justify-between">
        <div className="flex lg:w-1/4">
          <a
            href="#home"
            className="-m-1.5 p-1.5 border-2 border-gray-900 hover:text-indigo-600"
          >
            <span className="sr-only">Denise Aguirre</span>
            <h1 className="p-2 font-bold text-2xl">Den_</h1>
          </a>
        </div>

        <div className="flex items-center justify-center space-x-8 lg:w-1/4">
          <div>
            <a href={footer.whatsappUrl} target="_blank" rel="noreferrer">
              <SiWhatsapp className="w-8 h-8 cursor-pointer hover:text-green-600" />
            </a>
          </div>
          <div>
            <a href={footer.emailUrl} target="_blank" rel="noreferrer">
              <SiGmail className="w-8 h-8 cursor-pointer hover:text-red-600" />
            </a>
          </div>
          <div>
            <a href={footer.linkedinUrl} target="_blank" rel="noreferrer">
              <SiLinkedin className="w-8 h-8 cursor-pointer hover:text-blue-500" />
            </a>
          </div>
          <div>
            <a href={footer.githubUrl} target="_blank" rel="noreferrer">
              <SiGithub className="w-8 h-8 cursor-pointer hover:text-black" />
            </a>
          </div>
        </div>
        <div className="lg:w-1/4">
          <ul className="flex items-center gap-y-2 gap-x-8 flex-col lg:items-end">
            {navBar.map((item) => (
              <li key={item.name + item.href}>
                <a
                  key={item.name + "footer"}
                  href={item.href}
                  className="text-md font-semibold leading-6 text-gray-900 cursor-pointer footer-link"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <p className="text-center font-normal">{footer.rightsReserved}</p>
      <p className="text-center font-normal">{footer.madeWithLove}</p>
    </div>
  );
}
