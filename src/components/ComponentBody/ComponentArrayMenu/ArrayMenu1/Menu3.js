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
    food:"Solomo De Res",
    price:55000,
    ingredients:"Carne de res | Yuca | Salsa Tartara"},

    {pos:2,
    image:imagen2,
    food:"Cañon De Cerdo",
    price:50000,
    ingredients:"Carne de cerdo | Yuca | Salsa Tartar"},

    {pos:3,
    image:imagen3,
    food:"Churrasco",
    price:56000,
    ingredients:"Carne de res| Papa fritas| Salsa chimichurry"},

    {pos:4,
    image:imagen4,
    food:"Punta 350gr.",
    price:56000,
    ingredients:"Carne de res| Papa | Salsa chimichurry"},

    {pos:5,
    image:imagen5,
    food:"Carne De Bufalo",
    price:72000,
    ingredients:"Carne de bufalo| Papa fritas| Salsa chimichurry"},
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