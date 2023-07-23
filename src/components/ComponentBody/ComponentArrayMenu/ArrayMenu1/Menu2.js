import React from "react";
import "./Menu.css"

function Menu2(){
    const menuItem =[
    {
        pos:1,
        image:"",
        food:"Hamburqueza1",
        price:18000,
        ingredients:"pan, tomate, pollo, quezo, cebolla, salsa"
    }
    ]
    return(
        <>
            <h2 className="tittle-item">Hamburguesa</h2>
            <ul>
                {menuItem.map((item)=>
                <li key= {item.pos} >
                    <div className="item-contend">
                        <img src="" />
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