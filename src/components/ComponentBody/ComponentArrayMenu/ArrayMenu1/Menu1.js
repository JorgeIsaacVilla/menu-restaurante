import React from "react";
import "./Menu.css";
import imagen1 from "./imageMenu1/imagen1.png";
import imagen2 from "./imageMenu1/imagen2.jpg";
import imagen3 from "./imageMenu1/imagen3.jpg";
import imagen4 from "./imageMenu1/imagen4.jpg";
import imagen5 from "./imageMenu1/imagen5.jpg";

function Menu1() {

    const menuItem =[

        {pos:1,
        image: imagen1,
        food:"pizza1",
        price:25000,
        ingredients:"tomate, queso, pollo"},

        {pos:2,
        image:imagen2,
        food:"pizza2",
        price:17000,
        ingredients:"tomate, queso, pollo"},

        {pos:3,
        image:imagen3,
        food:"pizza3",
        price:17000,
        ingredients:"tomate, queso, pollo"},

        {pos:4,
        image:imagen4,
        food:"pizza4",
        price:17000,
        ingredients:"tomate, queso, pollo"},

        {pos:5,
        image:imagen5,
        food:"pizza5",
        price:17000,
        ingredients:"tomate, queso, pollo"},

    ];

    return(
     <>
        <h2 className="tittle-item">Pizzas</h2>
        <ul>
            {menuItem.map((item)=>
                <li key={item.pos}>
                    <div className="item-contend">
                        <img src = {item.image} />
                        <div>
                            <h3 className="tittle-food"> {item.food} </h3>
                            <p className="ingredients"> {item.ingredients} </p>
                        </div>
                    </div>
                    <p className="price"> <strong>${item.price}</strong> </p>
                </li>
            )}
        </ul>
     </>   
    )
}
export { Menu1 };