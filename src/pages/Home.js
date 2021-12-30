import React from "react";
import NavBar from "../components/NavBar";
import Upload from "../components/Upload";
import "../styles/Home.scss";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <div className="content">
        <Upload />
      </div>
    </div>
  );
}

export default Home;
