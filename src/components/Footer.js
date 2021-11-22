import React from "react";

const Footer = () => {
  const date = new Date().getUTCFullYear();
  return (
    <div className="container -text-center">
      <div className="row">
        <div className="col-md-12 text-center" style={{ overflow: "hidden" }}>
          {date} , All Right Reserved... made with love from Femi Obadimu
        </div>
      </div>
    </div>
  );
};

export default Footer;
