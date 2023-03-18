import React, { useRef, useState } from "react";
import { firestore } from "../../firebase";
import "firebase/firestore";
import { addDoc, collection } from "@firebase/firestore";

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

function QuestionForm(): JSX.Element {
  //------------błędnie chciałem useState do tego wykorzystać - lepiej useRef------------//
  // interface FormData {
  //   name: string;
  //   phone: string;
  //   email: string;
  //   message: string;
  // }
  // const [formData, setFormData] = useState<FormData>({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   message: "",
  // });
  //tworze handler do złapania eventa i przypisania set danych z inputów
  // const handleChange = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   event.preventDefault();
  //   const { name, value } = event.target;
  //   setFormData((formData) => ({ ...formData, [name]: value }));
  // };

  //------------teraz dobrze :)---------------------------//
  //useRef - zwraca obiekt
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);
  const messagesCollection = collection(firestore, "messages");

  const [error, setError] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // zapobiegamy domyślnej akcji formularza (wysłania danych)
    // tworzymy obiekt z danymi do zapisania w Firebase
    let messageData = {
      email: emailRef.current?.value,
      message: messageRef.current?.value,
      name: nameRef.current?.value,
      phone: phoneRef.current?.value,
    };
    console.log(messageData.email);

    try {
      await addDoc(messagesCollection, messageData);
      nameRef.current!.value = "";
      phoneRef.current!.value = "";
      emailRef.current!.value = "";
      messageRef.current!.value = "";
      setError("");
      console.log(
        "Question added to the base. We answear as soon as possible. Document written with id"
      );
    } catch (error) {
      setError("Something went wrong. Please try again later.");
      console.log("Error adding document: ", error);
    }
  };

  return (
    <>
      <Container>
        <Title>Any questions?</Title>
        <Instruction>
          Please fill-out form below. We will contact with you!
        </Instruction>
        <form onSubmit={handleSubmit}>
          <NamePhone>
            <Input
              name="name"
              type="text"
              placeholder="Name"
              ref={nameRef}
            ></Input>
            <Input
              name="phone"
              type="text"
              placeholder="Phone"
              ref={phoneRef}
            ></Input>
          </NamePhone>
          <Email>
            <Input
              name="email"
              type="email"
              placeholder="email"
              ref={emailRef}
            ></Input>
          </Email>
          <Message>
            <Input
              name="message"
              type="text"
              placeholder="Message"
              ref={messageRef}
            ></Input>
          </Message>
          <Button type={"submit"} primary>
            Prześlij
          </Button>
          {/* <button type="submit">sdfafdsadsfa</button> */}
        </form>
      </Container>
    </>
  );
}

export default QuestionForm;
