import React from "react";
import "./ComponentBody.css";
import { ComponentSlider } from "./SliderCategory/ComponentSlider";
import { Menu1 } from "./ArrayMenu/ArrayMenu1/Menu1";
import { Menu2 } from "./ArrayMenu/ArrayMenu1/Menu2";
import { Menu3 } from "./ArrayMenu/ArrayMenu1/Menu3";
import { Menu4 } from "./ArrayMenu/ArrayMenu1/Menu4";
import { Menu5 } from "./ArrayMenu/ArrayMenu1/Menu5";

function ComponentBody() {

  return (
    <>
      <ComponentSlider 
      targetSection1="section1" 
      targetSection2="section2" 
      targetSection3="section3" 
      targetSection4="section4" 
      targetSection5="section5"
      />
      <div className="component-body">
        <Menu1 sectionId="section1" />
        <Menu2 sectionId="section2"/>
        <Menu3 sectionId="section3"/>
        <Menu4 sectionId="section4"/>
        <Menu5 sectionId="section5"/>
      </div>
    </>
  );
}

export { ComponentBody };
