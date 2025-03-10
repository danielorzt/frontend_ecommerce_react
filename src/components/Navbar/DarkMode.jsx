import React, { useEffect, useState } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    // Aplicar el tema al cargar
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setTheme("dark");
        }
    }, []);

    // Aplicar cambios al cambiar de tema
    useEffect(() => {
        const element = document.documentElement;
        localStorage.setItem("theme", theme);
        if (theme === "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div className="relative">
            <img
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                src={LightButton}
                alt="Light Mode"
                className={`w-12 cursor-pointer absolute right-0 z-10 ${
                    theme === "dark" ? "opacity-0" : "opacity-100"
                } transition-all duration-300`}
            />

            <img
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                src={DarkButton}
                alt="Dark Mode"
                className={`w-12 cursor-pointer ${
                    theme === "dark" ? "opacity-100" : "opacity-0"
                } transition-all duration-300`}
            />
        </div>
    );
};

export default DarkMode;
