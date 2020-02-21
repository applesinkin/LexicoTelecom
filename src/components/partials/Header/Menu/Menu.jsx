import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Menu.module.scss";

const Menu = props => {
    return (
        <ul className={s.menu}>
            <li className={s.menu__item}>
                <NavLink activeClassName={s.active} className={s.menu__link} to="/data">Data</NavLink>
            </li>
            <li className={s.menu__item}>
                <NavLink activeClassName={s.active} className={s.menu__link} to="/settings">Settings</NavLink>
            </li>
            <li className={s.menu__item}>
                <NavLink activeClassName={s.active} className={s.menu__link} to="/changes">Changes</NavLink>
            </li>
        </ul>
    )
};

export default Menu;