import React from "react";
import "../styles/UploadSide.scss";
import brain from "../assets/images/brain3bg.png";

function UploadSide() {
  return (
    <div className="uploadSide">
      <h1>Where the Brains meet the Machines</h1>
      <div>
        <h3>Get your brain MRI scanned and check the possibility of tumor</h3>
      </div>
      <img src={brain} alt="brainpicture"></img>
    </div>
  );
}

export default UploadSide;
