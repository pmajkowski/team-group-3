import React, { useRef, FormEvent } from "react";
import { firestore } from "../../firebase";
import { addDoc, collection } from "@firebase/firestore";
import Button from "../../components/buttons/Button";

import QuestionForm from "../../components/Questions/QuestionForm";
import Maps from "../../components/Maps/Maps";
import AboutForm from "../../components/about/AboutForm";
import NavigationList from "../../components/Navigation/NavigationList";
import UserNavigationList from "../../components/UserNavigation/UserNavigationList";
import ContentForm from "../../components/content/ContentForm";

function HomePage(): JSX.Element {
  const testRef = useRef<HTMLInputElement>(null);
  const ref = collection(firestore, "test");
  // tworzymy referencję do kolekcji w Firebase

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // zapobiegamy domyślnej akcji formularza (wysłania danych)
    let data = {
      dataName: testRef.current?.value,
      // tworzymy obiekt z danymi do zapisania w Firebase
    };

    try {
      await addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
    // zapisujemy dane w Firebase / wyświetlamy błędy w konsoli
  };

  return (
    <div className="App">
      <UserNavigationList />
      <NavigationList />
      <QuestionForm></QuestionForm>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={testRef} />
        <Button type={"submit"} primary>
          submit to database
        </Button>
        <ContentForm></ContentForm>
        <AboutForm></AboutForm>
      </form>
      <Maps></Maps>
    </div>
  );
}

export default HomePage;
