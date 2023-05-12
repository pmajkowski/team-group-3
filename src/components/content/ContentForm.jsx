import React from "react";
import "./ContentForm.css";
import videoBg from "./../../movies/train.mp4";

const ContentForm = () => {
  return (
    <div className="container_tiles">
      <video src={videoBg} autoPlay muted loop />
    </div>
  );
};

export default ContentForm;
