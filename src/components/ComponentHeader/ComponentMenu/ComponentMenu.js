import React, { useState } from "react";
import "./ComponentMenu.css";
import instagram from "./imageComponentMenu/icoInstagram.svg";
import faceboock from "./imageComponentMenu/icoFacebook.svg";
import twitter from "./imageComponentMenu/icoTwitter.svg";
import tiktok from "./imageComponentMenu/icoTwitter.svg";
import domicilio from "./imageComponentMenu/icoDomicilio.svg";

function ComponentMenu() {

    const [menuVisible, setMenuVisible] = useState(true);

    const toggleMenu = () =>{
        setMenuVisible(!menuVisible);
    };
    
    const redesItem=[
        {redSocial:"instagram",
         imageRedSocial:instagram,
         userRedSocial:"Plate.fork",
         linkRedSocial:"https://jorgeisaacvilla.github.io/my_portafolio/"},

         {redSocial:"faceboock",
         imageRedSocial:faceboock,
         userRedSocial:"Plate&fork",
         linkRedSocial:"https://jorgeisaacvilla.github.io/my_portafolio/"},

         {redSocial:"twitter",
         imageRedSocial:twitter,
         userRedSocial:"Plate_fork",
         linkRedSocial:"https://jorgeisaacvilla.github.io/my_portafolio/"},

         {redSocial:"tiktok",
         imageRedSocial:tiktok,
         userRedSocial:"@Platefork",
         linkRedSocial:"https://jorgeisaacvilla.github.io/my_portafolio/"},
    ];

    return(
        <>
        {menuVisible && (
            <div className="component-menu">

                <div>
                    <div className="component-header-menu">
                        <div className="logo-restaurante"></div>
                        <div className="menu-closed" onClick={toggleMenu}></div>
                    </div>
                    <h2 className="tittle-redes-social">Síguenos</h2>
                    <ul>
                        {redesItem.map((redes)=>
                        <li className="item-redes" key={redes.redSocial}>
                            <a href={redes.linkRedSocial} >
                                <img src={redes.imageRedSocial} />
                                <p> {redes.userRedSocial} </p>
                            </a>
                        </li>
                        )}
                    </ul>
                    <div className="line"></div>
                    <div className="domicilio">
                        <div className="image-domicilio">
                            <img src={domicilio} />
                        </div>
                        <div>
                            <h2 className="h2-image-domicilio">¡Envío a domicilio gratis!</h2>
                            <p className="p-image-domicilio">Domicilios gratuitos en toda Barranquilla y Soledad.</p>
                        </div>
                    </div>
                </div>

                <div className="footer-component-menu">
                    <div className="line" style={{marginBottom:"16px"}}></div>
                    <a href="https://jorgeisaacvilla.github.io/my_portafolio/" >Realizado por Jorge Isaac Villa López | Portfolio.com</a>         
                </div>

            </div>
        )}
        </>
    );
    
}
export { ComponentMenu };