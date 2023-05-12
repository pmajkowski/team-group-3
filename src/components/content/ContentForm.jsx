import React from "react";
import "./ContentForm.css";
import videoBg from "./../../movies/train2.mp4";

const ContentForm = () => {
  return (
    // <div className="container_tiles">
    //   <div className="tile">
    //     <img src={trainImg} alt="Train on the track" />
    //     <div className="h2_tile">1st train</div>
    //   </div>
    // </div>
    <div className="container_tiles">
      <video src={videoBg} autoPlay muted loop />
    </div>
  );
};

export default ContentForm;
