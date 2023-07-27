import React from "react";
import "./Body.css";
import { Slider } from "./SliderCategory/Slider";
import { Menu1 } from "./ArrayMenu/Menu1";
import { Menu2 } from "./ArrayMenu/Menu2";
import { Menu3 } from "./ArrayMenu/Menu3";
import { Menu4 } from "./ArrayMenu/Menu4";
import { Menu5 } from "./ArrayMenu/Menu5";

function Body() {

  return (
    <>
      <Slider 
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

export { Body };
