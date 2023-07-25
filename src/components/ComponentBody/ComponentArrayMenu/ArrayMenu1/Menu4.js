import React from "react";
import "./Menu.css";
import imagen1 from "./imageMenu4/imagen1.jpg";
import imagen2 from "./imageMenu4/imagen2.jpg";
import imagen3 from "./imageMenu4/imagen3.jpg";
import imagen4 from "./imageMenu4/imagen4.jpg";
import imagen5 from "./imageMenu4/imagen5.jpg";

function Menu4({sectionId}){
    const menuItem =[
    {pos:1,
    image:imagen1,
    food:"Jugo De Naranja",
    price:9000,
    ingredients:""},

    {pos:2,
    image:imagen2,
    food:"Jugo De Mora",
    price:9000,
    ingredients:""},

    {pos:3,
    image:imagen3,
    food:"Jugo De Mango",
    price:7000,
    ingredients:""},

    {pos:4,
    image:imagen4,
    food:"Limonada",
    price:9000,
    ingredients:""},

    {pos:5,
    image:imagen5,
    food:"Jugo De Uva",
    price:12000,
    ingredients:""},
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>Bebidas</h2>
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
export { Menu4 };