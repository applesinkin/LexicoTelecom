import React from "react";
import s from "./Header.module.scss";
import Menu from "./Menu/Menu";

const Header = props => {
    return (
        <header className={`app__header ${s.header}`}>
            <div className="app__width">
                <nav><Menu/></nav>
            </div>
        </header>
    )
};

export default Header;