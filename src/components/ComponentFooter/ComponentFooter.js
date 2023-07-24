import React, { useState } from "react";
import { ComponentScannerQR } from "./ComponentScannerQR/ComponentScannerQR";
import "./ComponentFooter.css"

function ComponentFooter() {

    const [scannerQrVisible, setScannerQrVisible] = useState(false);
    const toggleScannerQr = () =>{
        setScannerQrVisible(!scannerQrVisible)
    };

    return(
        <>
            {scannerQrVisible && <ComponentScannerQR />}
            <div className="component-footer">
                <div className="whatsapp"></div>
                <div className="qr" onClick={toggleScannerQr}></div>
                <div className="game"></div>
            </div>
        </>
    )
}

export {ComponentFooter};