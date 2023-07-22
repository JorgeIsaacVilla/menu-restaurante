import React from "react";
import "./ComponentBody.css";
import { ComponentSlider } from "./ComponentSliderCategory/ComponentSlider";
import { Menu1 } from "./ComponentArrayMenu/ArrayMenu1/Menu1";

function ComponentBody() {


        return(
            <>
                <ComponentSlider />
                <div className="component-body">
                    <Menu1 />
                </div>
            </>
        )
}

export { ComponentBody };