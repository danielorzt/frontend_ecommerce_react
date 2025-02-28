import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Button from "../Shared/Button.jsx"; // Asegúrate de importar el componente Button si es externo

const Popup = ({ orderPopup, setOrderPopup }) => {
    if (!orderPopup) return null; // Evita renderizar si no está activo

    return (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[300px] p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-md relative">
                {/* Header section */}
                <div className="flex justify-between items-center border-b pb-2">
                    <h1 className="text-lg font-semibold">Order Now</h1>
                    <button
                        onClick={() => setOrderPopup(false)}
                        className="text-red-500 hover:text-red-700 duration-200"
                    >
                        <IoMdCloseCircleOutline size={24} />
                    </button>
                </div>

                {/* Form section */}
                <div className="mt-4 flex flex-col gap-3">
                    <input
                        type="text"
                        placeholder="Name"
                        className="border border-gray-300 dark:border-gray-700 p-2 rounded-md w-full"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="border border-gray-300 dark:border-gray-700 p-2 rounded-md w-full"
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        className="border border-gray-300 dark:border-gray-700 p-2 rounded-md w-full"
                    />
                    <div className="flex justify-center mt-4">
                        <Button text="Order Now" bgColor="bg-primary" textColor="text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
