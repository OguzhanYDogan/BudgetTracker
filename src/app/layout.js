"use client";

import { useEffect, useState } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from 'react-redux';
import store from './store/store';
import Footer from "./components/Footer";
import Header from "./components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode'u kontrol et
  useEffect(() => {
    // Tarayıcıdaki dark mode tercihlerini kontrol et
    const userPreferredDarkMode = localStorage.getItem("darkMode") === "true";
    if (userPreferredDarkMode) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Dark mode durumunu değiştiren fonksiyon
  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newDarkMode = !prev;
      localStorage.setItem("darkMode", newDarkMode);
      if (newDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newDarkMode;
    });
  };

  return (
    <html lang="en">
      <body className="bg-slate-50 dark:bg-[#1d232a] text-slate-900 dark:text-[#c0c7d4] transition-colors duration-500">
        <Header />
        <Provider store={store}>
          {/* Dark Mode Toggle Button */}
          <button onClick={toggleDarkMode}
            className="fixed top-4 right-4 p-2 h-12 w-12 rounded-lg  bg-[#f2f2f2] dark:bg-[#232931] hover:bg-gray-200 dark:hover:bg-[#131921]">
            <svg className="fill-current block dark:hidden" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg className="fill-current hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          </button>
          {children}
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
