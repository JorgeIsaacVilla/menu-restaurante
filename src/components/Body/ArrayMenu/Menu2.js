import React from "react";
import "./Menu.css";
import imagen1 from "./imgMenu2/img1.jpg";
import imagen2 from "./imgMenu2/img2.jpg";
import imagen3 from "./imgMenu2/img3.jpg";
import imagen4 from "./imgMenu2/img4.jpg";
import imagen5 from "./imgMenu2/img5.jpg";

function Menu2({sectionId}){
    const menuItem =[
    {pos:1,
    image:imagen1,
    food:"Hamburguesa Rodeo",
    price:23000,
    ingredients:"Pan | Tomate | Pollo | Queso | Cebolla | Salsa"},

    {pos:2,
    image:imagen2,
    food:"Hamburguesa Mexicana",
    price:18000,
    ingredients:"Pan | Tomate | Pollo | Queso | Cebolla | Salsa"},

    {pos:3,
    image:imagen3,
    food:"Hamburguesa Asada",
    price:21900,
    ingredients:"Carne a la parrilla | Papas | Gaseosa | Queso Costeño"},

    {pos:4,
    image:imagen4,
    food:"Hamburguesa Ranchera",
    price:28000,
    ingredients:"Tomate | Pollo | Queso | Cebolla | Carne de Búfalo"},

    {pos:5,
    image:imagen5,
    food:"Hamburguesa Jumbo",
    price:42000,
    ingredients:"Tomate | Tocineta | Queso | Chicharrón | Carne de Búfalo"},
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>Hamburguesa</h2>
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
export { Menu2 };