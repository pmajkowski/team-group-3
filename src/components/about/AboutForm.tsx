import "./AboutForm.css";
import Button from "../buttons/Button";
import trainImg from "./../../img/train.jpeg";
import trainImg_1 from "./../../img/train_2.jpeg";
import trainImg_2 from "./../../img/train_3.jpeg";

function AboutForm() {
  return (
    <div className="about">
      <div className="container">
        <div className="gallery">
          <h2 className="h2_side">Our Projects</h2>
          <img src={trainImg} alt="Train on the track" />
          <img src={trainImg_1} alt="Dirty locomotive" />
          <img src={trainImg_2} alt="Fast Train" />
        </div>
        <div className="content">
          <div className="header_about">
            <h1 className="h1_about">ABOUT TRAIN SHOP LTD</h1>
          </div>
          <div className="h2_about">
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sunt
              necessitatibus expedita commodi iste quaerat recusandae laudantium
              provident, sequi alias! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Repudiandae distinctio, incidunt cumque dicta
              iure, quia officiis suscipit sapiente perspiciatis, ipsum rem
              magni accusantium!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutForm;
