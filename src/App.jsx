import React from 'react';
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx"
import Category from "./components/Category/Category.jsx";


function App() {
    return (
        <div>
            <Navbar/>
            <Hero />
            <Category />
        </div>
    );
}

export default App;