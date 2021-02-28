import React from "react";
import logo from "../../images/stechs.png";
import "../../styles/components/Home.css";

export const HomeScreen = () => {
    return (
        <div>
            <div className="container home__main">
                <h1>Stechs Vendors</h1>
                <hr />
                <img src={logo} alt="Logo" className="home__image" />
            </div>
        </div>
    );
};
