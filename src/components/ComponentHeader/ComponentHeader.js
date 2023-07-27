import React, { useState } from "react";
import "./ComponentHeader.css";
import { Menu } from "./Menu/Menu";

function ComponentHeader() {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () =>{
        setMenuVisible(!menuVisible);
    };

    return(
        <>
            {menuVisible && <Menu />}
            <div className="component-header">
                <div className="logo-restaurante"></div>
                <div className="menu-hamburguesa" onClick={toggleMenu}></div>
            </div>
        </>
    );
}

export {ComponentHeader};