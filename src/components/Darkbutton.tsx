import React from "react";
const DarkMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "theme-light";
  const darkTheme = "theme-dark";
  let theme: string | null = "";

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e: React.SyntheticEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement;
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      target.classList.remove(clickedClass);
      localStorage.setItem("theme", "theme-light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      target.classList.add(clickedClass);
      localStorage.setItem("theme", "theme-dark");
      theme = darkTheme;
    }
  };

  return (
    <span
      className={`pointer p-2 text-center ms-3 menu-icon chat-active-btn ${
        theme === "dark" ? clickedClass : ""
      }`}
      onClick={switchTheme}
    >
      <i className="feather-moon font-xl text-current"></i>
    </span>
  );
};

export default DarkMode;
