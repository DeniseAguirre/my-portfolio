import { useTranslation } from "react-i18next";
import LanguageToggle from "./components/LanguageToggle";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  console.log(i18n.language);
  return (
    <div className="w-80px lg:px-8">
      <LanguageToggle changeLanguage={changeLanguage} />
    </div>
  );
};

export default LanguageSelector;
