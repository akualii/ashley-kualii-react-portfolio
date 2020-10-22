import React from "react";
import profilePicture from "../../../static/assets/images/bio/Code3.png";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>
      <div className="right-column">
        This will be the section that you add your personal info and other
        professional items.
      </div>
    </div>
  );
}
