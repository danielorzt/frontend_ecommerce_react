import React, { useEffect } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
    // Obtener el tema del localStorage o usar "light" por defecto
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement; //access to html
    console.log(element);

    //set theme to localStrorage and html element
    React.useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === "dark") {
            element.classList.add("dark");
            element.classList.add("dark");
        } else {
            element.classList.remove("light");
            element.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div className="relative">
            {/* Botón de modo claro */}
            <img
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                src={LightButton}
                alt="Light Mode"
                className={`w-12 cursor-pointer absolute right-0 z-10 ${
                    theme === "dark" ? "opacity-0" : "opacity-100"
                } transition-all duration-300`}
            />

            {/* Botón de modo oscuro */}
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
