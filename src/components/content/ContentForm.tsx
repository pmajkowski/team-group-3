import "./ContentForm.css";
import trainImg from "./../../img/train.jpeg";
import trainImg_1 from "./../../img/train_2.jpeg";
import trainImg_2 from "./../../img/train_3.jpeg";
import trainImg_3 from "./../../img/train_4.jpg";

function ContentForm() {
  return (
    <div className="container_tiles">
      <div className="tile">
        <img src={trainImg} alt="Train on the track" />
        <div className="h2_tile">1st train</div>
      </div>
      <div className="tile">
        <img src={trainImg_1} alt="Dirty locomotive" />
        <div className="h2_tile">2nd train</div>
      </div>
      <div className="tile">
        <img src={trainImg_2} alt="Fast Train" />
        <div className="h2_tile">3rd train</div>
      </div>
      <div className="tile">
        <img src={trainImg_3} alt="London Train with no colors" />
        <div className="h2_tile">3rd train</div>
      </div>
    </div>
  );
}

export default ContentForm;
