import React from "react";
import "./header.scss";



function header() {
  return (
    <div>
      <div className="main">
      <div className="text">
          <div className="main2">
          <h1>Kodecolor</h1>
          </div>
          
          <div className="links">
              <a href="/"> Find People </a>
              <a href="/"> Messages</a>
              <a href="/"> Contacts </a>
          </div>
          </div>
           <div className="logo">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQsIp8ZGwv7VO65OxTgGGYpJ4Ig9yPs4Lw_IBhX3o9iVWO014_j"
             width="40"
            height="40"
          />
        </div>
        </div>
        </div>
    
      
      
  );
}

export default header;
