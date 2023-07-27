import React, { useState } from "react";
import "./ScannerQR.css"

import imageNequi from "./imgScannerQR/icoNequi.svg"
import imageBancolombia from "./imgScannerQR/icoBancolombia.svg"
import imagenWeb from "./imgScannerQR/icoWeb.svg"

import imgQrNequi from "./imgScannerQR/imgQrNequi.PNG"
import imgQrBancolombia from "./imgScannerQR/imgQrBancolombia.PNG"
import imgQrWeb from "./imgScannerQR/imgQrWeb.PNG"

function ScannerQR() {

    const [scannerQrVisible, setScannerQrVisible] = useState(true);
    const toggleScannerQr = () => {
        setScannerQrVisible(!scannerQrVisible);
    }

    const codeItem = [

        {imagenApp:imageNequi,
         nameAPP:"Nequi",
         QrApp:imgQrNequi},

         {imagenApp:imageBancolombia,
         nameAPP:"Bancolombia",
         QrApp:imgQrBancolombia},

         {imagenApp:imagenWeb,
         nameAPP:"Web",
         QrApp:imgQrWeb},

    ];
    
    return(
        <>
        {scannerQrVisible &&(
            <div className="component-scanner-qr">

                <div className="component-header-footer">
                    <div className="logo-restaurante"></div>
                    <div className="menu-closed" onClick={toggleScannerQr}></div>
                </div>

                <div className="tittle-footer">
                    <h2>Escanea el QR</h2>
                    <p>Recuerda que una vez que efectúes el pago, debes hacer una captura y enviar el comprobante por Whatsapp.</p>
                </div>

                <div className="scroll-arra-qr"> 

                    <ul className="ul-conten-array-qr">
                        {codeItem.map((appItem)=>
                        <div key={appItem.nameAPP}>
                            <div className="contend-array-footer">
                                <img src={appItem.imagenApp} />
                                <h3> {appItem.nameAPP} </h3>
                            </div>
                            <div className="contend-code-qr">
                                <img className="code-qr" src= {appItem.QrApp} />
                            </div>
                        </div>
                        )}
                    </ul>

                </div>

                <div className="footer-component-menu">
                    <div className="line" style={{marginBottom:"16px"}}></div>
                    <a href="https://jorgeisaacvilla.github.io/my_portafolio/" >Realizado por Jorge Isaac Villa López | Portfolio.com</a>         
                </div>

            </div>
        )}
        </>
    )
}
export { ScannerQR };