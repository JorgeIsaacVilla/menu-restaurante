import React from "react";
import "./Menu.css";
import imagen1 from "./imageMenu1/imagen1.jpg";
import imagen2 from "./imageMenu1/imagen2.jpg";
import imagen3 from "./imageMenu1/imagen3.jpg";
import imagen4 from "./imageMenu1/imagen4.jpg";
import imagen5 from "./imageMenu1/imagen5.jpg";

function Menu1() {

    const menuItem =[
        {pos:1,
        image: imagen1,
        food:"Pizza De Queso Azul",
        price:52000,
        ingredients:"salmón | Tomates"},

        {pos:2,
        image:imagen2,
        food:"Pizza Colombiana",
        price:48600,
        ingredients:"Salsa | Queso | chorizo | maís"},

        {pos:3,
        image:imagen3,
        food:"Pizza Mixta",
        price:47800,
        ingredients:"Carnes | Vegetales | Salami | Cábano | Cebolla | Pimientón"},

        {pos:4,
        image:imagen4,
        food:"Pizza Perro",
        price:17000,
        ingredients:"Pollo | Jamon | Quezo | Pimienton | Salchicas"},

        {pos:5,
        image:imagen5,
        food:"Pizza Megicana",
        price:14000,
        ingredients:"Tomate | Queso | Pollo | Salchicon Picante"},
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