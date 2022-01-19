import { React, useState } from "react";
import NavBar from "../components/NavBar";
import Result from "../components/Result";
import Upload from "../components/Upload";
import UploadSide from "../components/UploadSide";
import "../styles/Home.scss";

function Home() {
  const [prob, setprob] = useState(null);

  return (
    <div className="home">
      <NavBar />
      <div className="content">
        <Upload prob={prob} setprob={setprob} />
        <UploadSide />
      </div>
      <Result prob={prob} setprob={setprob} />
    </div>
  );
}

export default Home;
