import React from "react";
import "./Menu.css";
import imagen1 from "./imageMenu2/imagen1.jpg";
import imagen2 from "./imageMenu2/imagen2.jpg";
import imagen3 from "./imageMenu2/imagen3.jpg";
import imagen4 from "./imageMenu2/imagen4.jpg";
import imagen5 from "./imageMenu2/imagen5.jpg";

function Menu2(){
    const menuItem =[
    {pos:1,
    image:imagen1,
    food:"Hamburqueza Rodeo",
    price:23000,
    ingredients:"Pan | Tomate | Pollo | Quezo | Cebolla | Salsa"},

    {pos:2,
    image:imagen2,
    food:"Hamburqueza Mexicana",
    price:18000,
    ingredients:"Pan | Tomate | Pollo | Quezo | Cebolla | Salsa"},

    {pos:3,
    image:imagen3,
    food:"Hamburqueza Asada",
    price:21900,
    ingredients:"Carne a la parrilla | Papas | Gaseosa | Quezo Costeño"},

    {pos:4,
    image:imagen4,
    food:"Hamburqueza Ranchera",
    price:28000,
    ingredients:"Tomate | Pollo | Quezo | Cebolla | Carne de bufalo"},

    {pos:5,
    image:imagen5,
    food:"Hamburqueza Jumbo",
    price:42000,
    ingredients:"Tomate | Tocineta | Quezo | Chicharron | Carne de bufalo"},
    ]
    return(
        <>
            <h2 className="tittle-item">Hamburguesa</h2>
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
                    <p className="price"> ${item.price} </p>
                </li>
                )}
            </ul>
        </>
    )
};
export { Menu2 };