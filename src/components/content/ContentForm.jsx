import React from "react";
import "./ContentForm.css";
import videoBg from "./../../movies/train.mp4";

const ContentForm = () => {
  return (
    <div className="main_container">
      <div className="container_tiles">
        <div>
          <video src={videoBg} autoPlay muted loop />
        </div>
      </div>
      <div className="search">
        <h1>bla</h1>
        <div className="rentals">bla bla</div>
      </div>
    </div>
  );
};

export default ContentForm;
