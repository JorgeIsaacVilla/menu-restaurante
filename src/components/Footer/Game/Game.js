import React, { useState } from "react";
import "./Game.css";

import tetris from "./imgGame/tetris.png";
import snake from "./imgGame/snake.png";
import dino from "./imgGame/dino.png"
import pacman from "./imgGame/pacman.png"

function Game() {

    const [gameVisible, setGameVisible] = useState(true);
    const toggleGame = () =>{
        setGameVisible(!gameVisible);
    };

    const gamesITem =[

        {url:"https://jorgeisaacvilla.github.io/gamesHtml/PacmanHTML/index.html",
         imageGame:pacman,
         nameGame:"pacman",
        },

        {url:"https://jorgeisaacvilla.github.io/gamesHtml/TetrisHTML//index.html",
         imageGame:tetris,
         nameGame:"Tetris",
        },

        {url:"https://jorgeisaacvilla.github.io/gamesHtml/TetrisHTML//index.html",
         imageGame:snake,
         nameGame:"Snake",
        },

        {url:"https://jorgeisaacvilla.github.io/gamesHtml/FlappyDinoHTML/index.html",
         imageGame:dino,
         nameGame:"dino",
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
export { Game }