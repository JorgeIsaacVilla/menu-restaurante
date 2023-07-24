import React from "react";
import "./ComponentBody.css";
import { ComponentSlider } from "./ComponentSliderCategory/ComponentSlider";
import { Menu1 } from "./ComponentArrayMenu/ArrayMenu1/Menu1";
import { Menu2 } from "./ComponentArrayMenu/ArrayMenu1/Menu2";
import { Menu3 } from "./ComponentArrayMenu/ArrayMenu1/Menu3";
import { Menu4 } from "./ComponentArrayMenu/ArrayMenu1/Menu4";
import { Menu5 } from "./ComponentArrayMenu/ArrayMenu1/Menu5";

function ComponentBody() {

        return(
            <>
                <ComponentSlider/>
                <div className="component-body">
                    <Menu1 />
                    <Menu2 />
                    <Menu3 />
                    <Menu4 />
                    <Menu5 />
                </div>
            </>
        )
}

export { ComponentBody };