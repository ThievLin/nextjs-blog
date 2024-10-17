"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faChevronDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    const initialTheme =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? "dark"
        : "light";
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    setCurrentTheme(initialTheme);
  }, []);

  const toggleTheme = (theme: string) => {
    localStorage.theme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
    setCurrentTheme(theme);
  };

  const menuItems = [
    { label: "ទំព័រដើម", href: "/" },
    {
      label: "អំពីយើង",
      dropdown: [
        { label: "អំពី គ.រ.ឌ", href: "/about-d-g-c" },
        { label: "រចនាសម្ព័ន្ធ", href: "/structure" },
      ],
    },
    {
      label: "បណ្តំុឯកសារ",
      dropdown: [
        { label: "ព្រះរាជក្រឹត្យ", href: "/" },
        { label: "អនុក្រឹត្យ", href: "/" },
        { label: "គោលនយោបាយ", href: "/" },
        { label: "សេចក្តីសម្រេច", href: "/" },
        { label: "វីដេអូ", href: "/" },
      ],
    },
    { label: "ព័ត៌មាន និងព្រឹត្តិការណ៍", href: "/" },
    { label: "គម្រោង", href: "/" },
  ];

  return (
    <header className="noto-serif-khmer flex items-center justify-between p-4 md:p-6 text-black dark:text-gray-200 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30">
      <a href="/" aria-label="Go to homepage" className="flex items-center">
        <img
          src={currentTheme === "dark" 
            ? "https://dgc.gov.kh/static/logo/dgc-logo-white.svg" 
            : "https://dgc.gov.kh/static/logo/dgc-logo.svg"}
          alt="logo"
          className="mr-2 h-[56px] md:h-[74px]"
        />
      </a>

      {/* Mobile Menu */}
      <div className="flex items-center lg:hidden space-x-2">
        <img
          src="https://dgc.gov.kh/static/images/en.svg"
          alt="English flag"
          className="h-5 w-5"
        />
        <button onClick={() => toggleTheme(currentTheme === "dark" ? "light" : "dark")}>
          <FontAwesomeIcon
            icon={currentTheme === "dark" ? faSun : faMoon}
            className="h-5 w-5"
          />
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-95 z-20 flex flex-col items-center space-y-4 text-lg font-semibold text-white transition-transform"
          onClick={() => setMenuOpen(false)}
        >
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <a
                href={item.href}
                className="px-2 py-1 md:px-4 md:py-2 lg:text-lg cursor-pointer"
              >
                {item.label}
                {item.dropdown && (
                  <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3 inline-block ml-1" />
                )}
              </a>
              {item.dropdown && (
                <div className="absolute left-0 w-48 mt-1 bg-white dark:bg-gray-700 shadow-lg rounded-sm opacity-0 group-hover:opacity-100 hidden group-hover:block transition-opacity duration-200">
                  {item.dropdown.map((subItem, idx) => (
                    <a
                      key={idx}
                      href={subItem.href}
                      className="block px-4 py-2 text-black dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer transition-colors duration-200"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Desktop Menu */}
      <nav className="hidden py-6 lg:flex items-center space-x-2 font-semibold">
        {menuItems.map((item, index) => (
          <div key={index} className="relative group">
            <a
              href={item.href}
              className="px-2 py-1 md:px-4 md:py-2 text-xs md:text-md lg:text-lg cursor-pointer transition-colors duration-200 hover:text-blue-500 dark:hover:text-blue-300"
            >
              {item.label}
              {item.dropdown && (
                <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3 inline-block ml-1" />
              )}
            </a>
            {item.dropdown && (
              <div className="absolute left-0 w-48 mt-1 bg-white dark:bg-gray-700 text-lg shadow-lg rounded-sm opacity-0 group-hover:opacity-100 hidden group-hover:block transition-opacity duration-200">
                {item.dropdown.map((subItem, idx) => (
                  <a
                    key={idx}
                    href={subItem.href}
                    className="block px-4 py-2 text-black dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer transition-colors duration-200"
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="flex items-center space-x-3">
          <img
            src="https://dgc.gov.kh/static/images/en.svg"
            alt="English flag"
            className="h-5 w-5"
          />
          <button onClick={() => toggleTheme(currentTheme === "dark" ? "light" : "dark")}>
            <FontAwesomeIcon icon={currentTheme === "dark" ? faSun : faMoon} className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
