import React from "react";
import NavBar from "../components/NavBar";
import Result from "../components/Result";
import Upload from "../components/Upload";
import UploadSide from "../components/UploadSide";
import "../styles/Home.scss";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <div className="content">
        <Upload />
        <UploadSide />
      </div>
      <Result />
    </div>
  );
}

export default Home;
