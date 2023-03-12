import React, { useRef, FormEvent } from "react";
import { firestore } from "../../firebase";
import { addDoc, collection } from "@firebase/firestore";
import Button from "../../components/buttons/Button";

import QuestionForm from "../../components/Questions/QuestionForm";
import AboutForm from "../../components/about/AboutForm";
import NavigationList from "../../components/Navigation/NavigationList";
import UserNavigationList from "../../components/UserNavigation/UserNavigationList";

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
			<form onSubmit={handleSubmit}>
				<input type="text" ref={testRef} />
				<Button type={"submit"} primary>
					submit to database
				</Button>
				<QuestionForm></QuestionForm>
				<AboutForm></AboutForm>
			</form>
		</div>
	);
}

export default HomePage;
