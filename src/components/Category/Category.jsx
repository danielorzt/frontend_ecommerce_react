import React from 'react';
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../Shared/Button.jsx";

const Category = () =>{
    return (
    <div className="py-8">
     <div className="cotainer">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {/*first col*/}
             <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70">
                 <div>
                     <div>
                         <p>Enjoy</p>
                         <p>With</p>
                         <p>Earphone</p>
                         <Button
                             text="Browse"
                             bgColor={"bg-primary"}
                             textColor={"text-white"}
                         />

                     </div>
                 </div>
             </div>
             {/*second col*/}
             {/*third col*/}
         </div>
     </div>
    </div>
)};

export default Category;