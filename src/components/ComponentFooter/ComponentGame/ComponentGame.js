import React, { useState } from "react";
import "./ComponentGame.css";

import tetris from "./imageGame/tetris.png";
import snake from "./imageGame/snake.png";
import dino from "./imageGame/dino.png"
import pacman from "./imageGame/pacman.png"

function ComponentGame() {

    const [gameVisible, setGameVisible] = useState(true);
    const toggleGame = () =>{
        setGameVisible(!gameVisible);
    };

    const gamesITem =[
        {url:"",
         imageGame:tetris,
         nameGame:"Tetris",
        },

        {url:"",
         imageGame:snake,
         nameGame:"Snake",
        },

        {url:"",
         imageGame:dino,
         nameGame:"dino",
        },

        {url:"",
         imageGame:pacman,
         nameGame:"pacman",
        },
      
    ];

    return(
        <>
        {gameVisible &&(
            <div className="component-game">
                <div>
                    <div className="component-header-footer">
                        <div className="logo-restaurante"></div>
                        <div className="menu-closed" onClick={toggleGame}></div>
                    </div>

                    <div className="contend-games">
                        <h2>¡Juega </h2>
                        <h2>mientras esperas!</h2>
                        <div className="scroll-game">
                            <ul>
                                {gamesITem.map((game)=>
                                <div className="games" key={game.imageGame}>
                                    <a href={game.url}>
                                        <img src={game.imageGame} />
                                        <h3> {game.nameGame} </h3>
                                    </a>
                                </div>
                                )}
                            </ul>
                        </div>
                    </div>
                    
                </div>

                <div className="footer-component-menu">
                    <div className="line" style={{marginBottom:"16px"}}></div>
                    <a href="https://jorgeisaacvilla.github.io/my_portafolio/" >Realizado por Jorge Isaac Villa López | Portfolio.com</a>         
                </div>
            </div>
        )}
        </>
    );
}
export { ComponentGame }