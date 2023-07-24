import React, { useState } from "react";
import "./ComponentScannerQR.css"

import imageNequi from "./imageScannerQR/icoNequi.svg"
import imageBancolombia from "./imageScannerQR/icoBancolombia.svg"
import imagenWeb from "./imageScannerQR/icoWeb.svg"

import imageQrNequi from "./imageScannerQR/imageQrNequi.PNG"
import imageQrBancolombia from "./imageScannerQR/imageQrBancolombia.PNG"
import imageQrWeb from "./imageScannerQR/imageQrWeb.PNG"

function ComponentScannerQR() {

    const [scannerQrVisible, setScannerQrVisible] = useState(true);
    const toggleScannerQr = () => {
        setScannerQrVisible(!scannerQrVisible);
    }

    const codeItem = [

        {imagenApp:imageNequi,
         nameAPP:"Nequi",
         QrApp:imageQrNequi},

         {imagenApp:imageBancolombia,
         nameAPP:"Bancolombia",
         QrApp:imageQrBancolombia},

         {imagenApp:imagenWeb,
         nameAPP:"Web",
         QrApp:imageQrWeb},

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
export { ComponentScannerQR };