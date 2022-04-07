import React from "react";
import "../styles/contactinfo.scss";

const contactinfo = () => {
  return (
    <div className="info">
      <div className="ContactInfo">
        <p>CONTACT INFORMATION</p>
      </div>
      <div className="Phone">
        Phone:
        <div className="Number">+1 123 456 7890</div>
      </div>
      <div className="Address">Address: </div>
      <div className="Add2">525 E 68th Street</div>
      <div className="Add2">New York, NY 10051-78-156-187-60</div>
      <div className="email">Email: </div>
      <div className="id"> hello@jermeyrose.com </div>
      <div className="website">Website: </div>
      <div className="wname">www.jermeyrose.com </div>
      <div className="BasicInfo">BASIC INFORMATION</div>
      <div className="Birthday"> Birthday: June 5, 1992 </div>
      <div className="Gender"> Gender: Male </div>
    </div>
  );
};

export default contactinfo;
