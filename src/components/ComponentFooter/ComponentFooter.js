import React, { useState } from "react";
import { ComponentScannerQR } from "./ComponentScannerQR/ComponentScannerQR";
import "./ComponentFooter.css"
import { ComponentGame } from "./ComponentGame/ComponentGame";

function ComponentFooter() {

    const phoneNumber = "3218828546";
    const message = "Hola! Te envío el comprobante"

    const [scannerQrVisible, setScannerQrVisible] = useState(false);
    const toggleScannerQr = () =>{
        setScannerQrVisible(!scannerQrVisible);
    };

    const [gameVisible, setGameVisible] = useState(false);
    const toggleGame = () =>{
        setGameVisible(!gameVisible);
    };

    return(
        <>
            {gameVisible && <ComponentGame />}
            {scannerQrVisible && <ComponentScannerQR />}
            <div className="component-footer">
            <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp"></a>
                <div className="qr" onClick={toggleScannerQr}></div>
                <div className="game" onClick={toggleGame}></div>
            </div>
        </>
    )
}

export {ComponentFooter};