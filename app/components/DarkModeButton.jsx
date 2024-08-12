"use client"
import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeButton = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const selectedTheme = localStorage.getItem("theme");
        const html = document.documentElement;
        if (selectedTheme) {
            html.classList.add(selectedTheme);
            setDarkMode(selectedTheme === "dark" ? true : false);
        } else {
            html.classList.remove("dark");
            setDarkMode(false);
        }
    }, [darkMode]);

    const handleDarkMode = (e) => {
        e.stopPropagation();
        setDarkMode(!darkMode);
        const html = document.documentElement;
        if (!darkMode) {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <button
            className="fixed p-4 md:top-4 top-2 left-5 dark:bg-yellow-50 dark:text-neutral-700 text-neutral-100 bg-slate-700 rounded-full flex items-center justify-center z-50"
            onClick={handleDarkMode}
        >
            {darkMode ? <FaSun size={30} className="text-yellow-400 mobile--icon" /> : <FaMoon size={30} className="mobile--icon" />}
        </button>
    );
};

export default DarkModeButton;
