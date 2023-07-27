import React from "react";
import "./Menu.css";
import imagen1 from "./imgMenu5/img1.jpg";
import imagen2 from "./imgMenu5/img2.jpg";
import imagen3 from "./imgMenu5/img3.jpg";
import imagen4 from "./imgMenu5/img4.jpg";
import imagen5 from "./imgMenu5/img5.jpg";

function Menu5({sectionId}){
    const menuItem =[
    {pos:1,
    image:imagen1,
    food:"Postre Home",
    price:10900,
    ingredients:"Ceresa | Leche | Crema condensada"},

    {pos:2,
    image:imagen2,
    food:"Postre Napolitano",
    price:11000,
    ingredients:"Pan | Ceresa"},

    {pos:3,
    image:imagen3,
    food:"Postre Cazcanues",
    price:8000,
    ingredients:"Choclate | Arequipe | Galleta | Frutos secos"},

    {pos:4,
    image:imagen4,
    food:"Postre Casero",
    price:7000,
    ingredients:"Leche | Galletas | Arequipe"},

    {pos:5,
    image:imagen5,
    food:"Conos De Helado",
    price:4000,
    ingredients:"Galleta | (Elige tus sabores favoritos) | Chispas de Chocolate"},
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>Postres</h2>
            <ul>
                {menuItem.map((item)=>
                <li key= {item.pos} >
                    <div className="item-contend">
                        <img src={item.image} />
                        <div>
                            <h3 
                             className="tittle-food">
                                {item.food}</h3>
                                <p className="ingredients">
                                    {item.ingredients}
                                </p>
                        </div>
                    </div>
                    <p className="price"> <strong>${item.price}</strong> </p>
                </li>
                )}
            </ul>
        </>
    )
};
export { Menu5 };