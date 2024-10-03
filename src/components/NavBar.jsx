import { useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import PdfFileEs from "../assets/ES-DeniseAguirreMartinez-CV.pdf";
import PdfFileEn from "../assets/EN-DeniseAguirreMartinez-CV.pdf";
import WordFileEn from "../assets/EN-DeniseAguirreMartinez-CV.docx";
import WordFileEs from "../assets/ES-DeniseAguirreMartinez-CV.docx";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { ArrowDropDownSharp } from "@mui/icons-material";
import LanguageSelector from "../LanguageSelector";
import { useTranslation } from "react-i18next";
import DarkModeToggle from "./DarkModeToggle";
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
export default function NavBar() {
  const options = ["docx", "pdf"];
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navBarItems = t("navBar", { returnObjects: true });

  const handleDownload = () => {
    const link = document.createElement("a");
    const currentLanguage = i18n.language;
    const pdfFile = currentLanguage === "en" ? PdfFileEn : PdfFileEs;
    const wordFile = currentLanguage === "en" ? WordFileEn : WordFileEs;
    link.href = options[selectedIndex] === "docx" ? wordFile : pdfFile;
    link.download = `DeniseAguirreMartinez_${currentLanguage}.${options[selectedIndex]}`;
    link.click();
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <div id="home" className="bg-white dark:bg-[#131313]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a
              href="#home"
              className="-m-1.5 p-1.5 border-2 border-gray-900 dark:border-white hover:text-indigo-600 "
            >
              <span className="sr-only">Denise Aguirre</span>
              <h1 className="p-2 font-bold text-2xl dark:text-white dark:hover:text-green-500">
                Den_{" "}
              </h1>
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navBarItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-green-500"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <LanguageSelector />
          </div>
          <div className="align-self-end flex">
            <div className="mr-4">
              <DarkModeToggle />
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="-m-1.5 p-1.5 border-2 border-gray-900 dark:border-white"
              >
                <span className="sr-only">Denise Aguirre</span>
                <h1 className="p-2 font-bold text-2xl dark:text-white">Den_</h1>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 ">
                <div className="space-y-2 py-6">
                  {navBarItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-green-500"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:from-[#80ffb3] dark:to-[#9089fc]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Denise Aguirre
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
              {t("home.description")}
            </p>
            <div className="mt-2 flex items-center text-sm text-gray-500 justify-center dark:text-white">
              <MapPinIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400 dark:text-white"
                aria-hidden="true"
              />
              Buenos Aires, Argentina.
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div>
                <ButtonGroup
                  variant="outlined"
                  ref={anchorRef}
                  aria-label="Download cv file"
                >
                  <Button onClick={handleDownload}>
                    {t("home.download") + " "}
                    {options[selectedIndex]}
                  </Button>
                  <Button
                    size="small"
                    aria-controls={open ? "split-button-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                  >
                    <ArrowDropDownSharp />
                  </Button>
                </ButtonGroup>
                <Popper
                  sx={{ zIndex: 1 }}
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom"
                            ? "center top"
                            : "center bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList id="split-button-menu" autoFocusItem>
                            {options.map((option, index) => (
                              <MenuItem
                                key={option}
                                disabled={index === 2}
                                selected={index === selectedIndex}
                                onClick={(event) =>
                                  handleMenuItemClick(event, index)
                                }
                              >
                                {t("home.download") + " "}
                                {option}
                              </MenuItem>
                            ))}
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
              <a
                href="#about"
                rel="noreferrer"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 dark:text-white dark:hover:text-green-500"
              >
                {t("home.learn")} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] dark:from-[#80ffb3] dark:to-[#9089fc]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
