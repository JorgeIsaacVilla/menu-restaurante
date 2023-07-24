import React from "react";
import "./Menu.css";
import imagen1 from "./imageMenu3/imagen1.jpg";
import imagen2 from "./imageMenu3/imagen2.jpg";
import imagen3 from "./imageMenu3/imagen3.jpg";
import imagen4 from "./imageMenu3/imagen4.jpg";
import imagen5 from "./imageMenu3/imagen5.jpg";

function Menu3(){
    const menuItem =[
    {pos:1,
    image:imagen1,
    food:"Asado1",
    price:18000,
    ingredients:"pan, tomate, pollo, quezo, cebolla, salsa"},

    {pos:2,
    image:imagen2,
    food:"Asado2",
    price:18000,
    ingredients:"pan, tomate, pollo, quezo, cebolla, salsa"},

    {pos:3,
    image:imagen3,
    food:"Asado3",
    price:18000,
    ingredients:"pan, tomate, pollo, quezo, cebolla, salsa"},

    {pos:4,
    image:imagen4,
    food:"Asado4",
    price:18000,
    ingredients:"pan, tomate, pollo, quezo, cebolla, salsa"},

    {pos:5,
    image:imagen5,
    food:"Asado5",
    price:18000,
    ingredients:"pan, tomate, pollo, quezo, cebolla, salsa"},
    ]
    return(
        <>
            <h2 className="tittle-item">Asados</h2>
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
export { Menu3 };