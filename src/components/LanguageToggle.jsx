import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
const LanguageToggle = ({ changeLanguage }) => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? "es" : "en";
    setIsEnglish(!isEnglish);
    changeLanguage(newLanguage);
  };

  useEffect(() => {
    setIsEnglish(i18n.language === "en");
  }, [i18n.language]);

  return (
    <div className="flex items-center">
      <div
        className={`flex items-center cursor-pointer w-[80px] h-[40px] lg:w-[60px] lg:h-[32px] rounded-full p-2 transition-colors ${
          isEnglish ? "bg-indigo-600" : "bg-green-600"
        }`}
        onClick={toggleLanguage}
      >
        <div
          className={`flex items-center justify-center w-1/2 h-full rounded-full transition-transform ${
            isEnglish
              ? "transform translate-x-full bg-indigo-600"
              : "bg-green-600"
          }`}
        >
          <img
            src={
              isEnglish
                ? "https://api.iconify.design/flag:gb-1x1.svg"
                : "https://api.iconify.design/flag:es-1x1.svg"
            }
            alt={isEnglish ? "EN" : "ES"}
            className="w-6 h-6 rounded-full"
          />
        </div>
      </div>
      <div>
        <span className={"ml-4 text-lg font-bold text-black"}>
          {isEnglish ? "EN" : "ES"}
        </span>
      </div>
    </div>
  );
};

LanguageToggle.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
};

export default LanguageToggle;
