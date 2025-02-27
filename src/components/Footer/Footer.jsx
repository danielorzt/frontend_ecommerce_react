import React from "react";
import { FaLocationArrow, FaMobileAlt, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const Footer = () => {
    return (
        <div className="dark:bg-gray-950">
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    {/* Company details */}
                    <div className="py-8 px-4">
                        <a
                            href="#"
                            className="text-primary font-[Lobster] tracking-wider text-2xl uppercase sm:text-3xl"
                        >
                            Barber Music & Spa
                        </a>
                        <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
                            Disfruta de una experiencia única en nuestro spa musical, donde el relax y la música se combinan para tu bienestar.
                        </p>
                        <p className="text-gray-500 mt-4">Hecho con ❤️ por Daniel Ortiz</p>
                        <a
                            href="https://www.youtube.com/watch?v=KDorKy-13ak"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"
                        >
                            Visita nuestro YouTube
                        </a>
                    </div>

                    {/* Footer Links */}
                    <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold sm:text-left mb-3">Enlaces Importantes</h1>
                            <ul>
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a
                                            href={data.link}
                                            className="text-gray-600 dark:text-gray-400 hover:text-black duration-300 hover:dark:text-white duration-300"
                                        >
                                            {data.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold sm:text-left mb-3">Enlaces Rápidos</h1>
                            <ul>
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a
                                            href={data.link}
                                            className="text-gray-600 dark:text-gray-400 hover:text-black duration-300 hover:dark:text-white duration-300"
                                        >
                                            {data.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="py-8 px-4 col-span-2 sm:col-auto">
                            <h1 className="text-xl font-bold sm:text-left mb-3">Contáctanos</h1>
                            <div className="flex items-center gap-3">
                                <FaLocationArrow />
                                <p>Duitama, Colombia</p>
                            </div>
                            <div className="flex items-center gap-3 mt-2">
                                <FaMobileAlt />
                                <p>+57 322 754 5050</p>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="py-8 px-4 col-span-2 sm:col-auto">
                            <h1 className="text-xl font-bold sm:text-left mb-3">Síguenos</h1>
                            <div className="flex gap-4">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                                   className="text-gray-600 dark:text-gray-400 hover:text-blue-500 duration-300">
                                    <FaFacebookF size={20} />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                                   className="text-gray-600 dark:text-gray-400 hover:text-blue-400 duration-300">
                                    <FaTwitter size={20} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                                   className="text-gray-600 dark:text-gray-400 hover:text-pink-500 duration-300">
                                    <FaInstagram size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
