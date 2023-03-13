import React, { useState, useRef } from "react";
import Button from "../../components/buttons/Button";
import {
  Container,
  Title,
  Instruction,
  NamePhone,
  Email,
  Message,
  Input,
} from "./QuestionFormStyled";

import { firestore } from "../../firebase";
import "firebase/firestore";
import { addDoc, collection } from "@firebase/firestore";
//Add collection for messages

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

function QuestionForm(): JSX.Element {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
//tworze handler do złapania eventa i przypisania set danych z inputów
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };


  const testRef = useRef<HTMLInputElement>(null);
  const ref = collection(firestore, "messages");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // zapobiegamy domyślnej akcji formularza (wysłania danych)
    event.preventDefault();
     // tworzymy obiekt z danymi do zapisania w Firebase
    let data = {
      dataName: testRef.current?.value,
    };

    try {
      await addDoc(ref, formData);
      setFormData({ name: "", phone: "", email: "", message: "" });
      alert(
        "Question added to the base. We answear as soon as possible. Document written with id"
      );
    } catch (event) {
      alert("Something was wrong. Resend onece again your question.");
    }
  };

  return (
    <Container>
      <Title>Any questions?</Title>
      <Instruction>
        Please fill-out form below. We will contact with you!
      </Instruction>
      <form onSubmit={handleSubmit}>
        <NamePhone>
          <Input
            name="name"
            value={formData.name}
            type="text"
            placeholder="Name"
            onChange={handleChange}
          ></Input>
          <Input
            name="phone"
            value={formData.phone}
            type="text"
            placeholder="Phone"
            onChange={handleChange}
          ></Input>
        </NamePhone>
        <Email>
          <Input
            name="email"
            value={formData.email}
            type="email"
            placeholder="email"
            onChange={handleChange}
          ></Input>
        </Email>
        <Message>
          <Input
            name="message"
            value={formData.message}
            type="text"
            placeholder="Message"
            onChange={handleChange}
          ></Input>
        </Message>
        <Button type="submit" primary={true}>
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default QuestionForm;
