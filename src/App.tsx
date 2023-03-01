import React, { useRef, FormEvent } from "react"; 
import { firestore } from "./firebase" 
import { addDoc, collection } from "@firebase/firestore"
import "./App.module.css";

function App(): JSX.Element { 
  const testRef = useRef<HTMLInputElement>(null);
  const ref = collection(firestore, "test");
  // tworzymy referencję do kolekcji w Firebase

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    // zapobiegamy domyślnej akcji formularza (wysłania danych)
    let data = {
      dataName: testRef.current?.value
      // tworzymy obiekt z danymi do zapisania w Firebase
    }

    try {
      await addDoc(ref, data); 
    } catch (e) {
      console.log(e); 
    }
    // zapisujemy dane w Firebase / wyświetlamy błędy w konsoli
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" ref={testRef} />
        <button type="submit">submit to database</button>
      </form>
    </div>
  );
}

export default App;
