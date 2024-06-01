import { Html, Head, Main, NextScript } from "next/document";

function setInitialColorMode() {
  const colorMode = window.localStorage.getItem("theme");
  if (colorMode) {
    document.documentElement.style.setProperty(
      "--initial-color-mode",
      colorMode
    );
    if (colorMode === "dark") {
      document.documentElement.classList.add("dark");
    }
  } else {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }
  }
}

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${setInitialColorMode.toString()})()`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
