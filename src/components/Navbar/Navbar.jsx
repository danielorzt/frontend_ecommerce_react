import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "../../components/Navbar/DarkMode.jsx";
import {FaCaretDown} from "react-icons/fa";

const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Shop",
        link: "/#shop",
    },
    {
        id: 3,
        name: "About",
        link: "/about",
    },
    {
        id: 4,
        name: "Blogs",
        link: "/#blog",
    }
];

const DropdownLinks = [
    {
        id: 1,
        name: "Training Products",
        link: "/#",
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#",
    },
    {
        id: 3,
        name: "Top rated",
        link: "/#",
    },
]

const Navbar = ({handleOrderPopup}) => {
    return (
        <div className="bg-white duration-200 relative z-40 dark:bg-gray-800 dark:text-white ">
            <div className="py-4">
                <div className="container flex justify-between items-center">
                    {/* Logo and links section */}
                    <div className="flex items-center gap-4">
                        <a href="#"
                           className="text-primary font-[Lobster] tracking-wider text-2xl uppercase sm:text-3xl">
                            Barber music & spa
                        </a>


                        {/* Menu items */}
                        <div className="hidden sm:block">
                            <ul className="flex items-center gap-4">
                                {MenuLinks.map((data) => (
                                    <li key={data.id}>
                                        <a href={data.link}
                                           className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                                            {data.name}
                                        </a>
                                    </li>

                                ))}
                                {/*Dropdown*/}
                                <div className="relative cursor-pointer group">
                                    <div
                                        className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2 duration-200">
                                        Quick Links
                                        <FaCaretDown className="group-hover:rotate-180 duration-300"/>
                                    </div>
                                    {/* Dropdown list */}
                                    <div
                                        className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900">
                                        <ul className="space-y-2 text-center">
                                            {DropdownLinks.map((data) => (
                                                <li key={data.id} className="rounded-lg">
                                                    <a
                                                        className="block px-4 py-2 text-gray-500 rounded-lg transition-all duration-300
                        hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white"
                                                        href={data.link}
                                                    >
                                                        {data.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    {/* Navbar Right section */}
                    <div className="flex justify-between items-center gap-4">
                        {/* Search bar section */}
                        <div className="relative group hidden sm:block">
                            {/* Ícono de búsqueda visible siempre */}
                            <IoMdSearch
                                className="text-2xl text-gray-700 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 left-2
        group-hover:text-primary transition-all duration-300"
                            />

                            {/* Input que solo se muestra al hacer hover */}
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-0 opacity-0 px-4 py-2 pl-10 border border-gray-300 rounded-lg
        focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white
        group-hover:w-48 group-hover:opacity-100 transition-all duration-300"
                            />
                        </div>

                        {/* Order-button section */}
                        <button className="relative p-3" onClick={handleOrderPopup}>
                            <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400"/>
                            <div
                                className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs ">
                               4
                            </div>
                        </button>
                        {/* Dark mode section */}
                        <div>
                            <DarkMode/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;