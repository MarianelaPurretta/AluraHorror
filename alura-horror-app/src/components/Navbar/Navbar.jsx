import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">VideoPlatform</div>
            <div className="buttons">
                <button onClick={() => console.log("Ir al Home")}>Home</button>
                <button onClick={() => console.log("Agregar Video")}>Agregar Video</button>
            </div>
        </nav>
    );
};

export default Navbar;
