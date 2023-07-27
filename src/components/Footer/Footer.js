import React, { useState } from "react";
import { ScannerQR } from "./ScannerQR/ScannerQR";
import "./Footer.css"
import { Game } from "./Game/Game";

function Footer() {

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
            {gameVisible && <Game />}
            {scannerQrVisible && <ScannerQR />}
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

export {Footer};