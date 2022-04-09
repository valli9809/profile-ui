import React from "react";
import Name from "./name";
import Rankings from "./rankings";
import About from "./about";

function content() {
  return (
    <div className="content">
      <div className="content-components">
        <Name/>
        <Rankings/>
        <About/>
      </div>
    </div>
  );
}

export default content;
