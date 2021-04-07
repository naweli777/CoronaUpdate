import React from "react";
import "../MainFace/MainImage.css";

const face = () => {
  return (
    <>
      <img
        className="FaceImage"
        src={require("../Images/CroppedCode.gif")}
        alt="the gif"
      />
    </>
  );
};
export default face;
