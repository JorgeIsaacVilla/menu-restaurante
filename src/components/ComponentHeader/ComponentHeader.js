import React, { useState } from "react";
import "./ComponentHeader.css";
import { ComponentMenu } from "./ComponentMenu/ComponentMenu";

function ComponentHeader() {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () =>{
        setMenuVisible(!menuVisible);
    };

    return(
        <>
            {menuVisible && <ComponentMenu />}
            <div className="component-header">
                <div className="logo-restaurante"></div>
                <div className="menu-hamburguesa" onClick={toggleMenu}></div>
            </div>
        </>
    );
}

export {ComponentHeader};