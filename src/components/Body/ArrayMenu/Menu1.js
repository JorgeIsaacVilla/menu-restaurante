import React from "react";
import "./Menu.css";
import imagen1 from "./imgMenu1/img1.jpg";
import imagen2 from "./imgMenu1/img2.jpg";
import imagen3 from "./imgMenu1/img3.jpg";
import imagen4 from "./imgMenu1/img4.jpg";
import imagen5 from "./imgMenu1/img5.jpg";

function Menu1({sectionId}) {

    const menuItem =[
        {pos:1,
        image: imagen1,
        food:"Pizza De Queso Azul",
        price:52000,
        ingredients:"Salmón | Tomates"},

        {pos:2,
        image:imagen2,
        food:"Pizza Colombiana",
        price:48600,
        ingredients:"Salsa | Queso | Chorizo | Maíz"},

        {pos:3,
        image:imagen3,
        food:"Pizza Mixta",
        price:47800,
        ingredients:"Carnes | Vegetales | Salame | Cábano | Cebolla | Pimientón"},

        {pos:4,
        image:imagen4,
        food:"Pizza Perro",
        price:17000,
        ingredients:"Pollo | Jamón | Queso | Pimentón | Salchichas"},

        {pos:5,
        image:imagen5,
        food:"Pizza Megicana",
        price:14000,
        ingredients:"Tomate | Queso | Pollo | Salchichón Picante"},
    ];

    return(
     <div >
        <h2 className="tittle-item" id={sectionId}>Pizzas</h2>
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
     </div>   
    )
}
export { Menu1 };