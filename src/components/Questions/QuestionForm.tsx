import "./QuestionForm.css";
import Button from "../buttons/Button";

function QuestionForm() {
  return (
    <div className="questions">
      <h1>Any questions?</h1>
      <h2>Please fill-out form below. We will contact with you!</h2>
      <form>
        <div className="name">
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Phone"></input>
        </div>
        <div className="email">
          <input type="email" placeholder="email"></input>
        </div>
        <div>
          <input type="text" placeholder="Message"></input>
        </div>
      </form>
      <Button>Submit</Button>
    </div>
  );
}

export default QuestionForm;
