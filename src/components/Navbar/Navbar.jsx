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

const Navbar = () => {
    return (
        <div className="bg-white duration-200 relative z-40 dark:bg-pri dark:text-white ">
            <div className="py-4">
                <div className="container flex justify-between items-center">
                    {/* Logo and links section */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-primary font-semibold tracking-wider text-2xl uppercase sm:text-3xl">
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
                                    <div className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2 duration-200">
                                        Quick Links
                                        <FaCaretDown className="group-hover:rotate-180 duration-300" />
                                    </div>
                                {/*Dropdown list*/}
                                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900">
                                    <ul className="space-y-2 ">
                                        {DropdownLinks.map((data,index) => (
                                                <li key={data.id}>
                                                    <a
                                                        className="text-gray-500 hover:text-black dark:hover:text-white duration-200 hover:bg-primary/20"
                                                        href={data.link}>
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
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            />
                            <IoMdSearch className="text-xl text-gray-700 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
                        </div>
                        {/* Order-button section */}
                        <button className="relative p-3">
                            <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400"/>
                            <div
                            className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs ">

                            </div>
                        </button>
                        {/* Dark mode section */}
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;