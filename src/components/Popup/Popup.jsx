import React from 'react';
import {IoMdCloseCircleOutline} from "react-icons/io";

const Popup = ({orderPopup, setOrderPopup}) => {
    return <div>
        <div className="h-screen w-screen fixed-top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadown-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-md">
                {/* Header section */}
                <div>
                    <h1>Order Now</h1>

                <div>
                    <IoMdCloseCircleOutline/>
                </div>
                </div>
                {/* Form section */}

            </div>
        </div>
    </div>

};

export default Popup;