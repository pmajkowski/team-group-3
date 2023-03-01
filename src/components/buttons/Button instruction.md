używamy go jak przycisk tylko z dużych liter <Button><Button>
jeżeli button ma mieć tekst to wpisujemy go dokładnie tak jak w normalnym przycisku <Button>tekst<Button>
do tego możemy dodać kilka rzeczy do niego takich jak: typ,funkcję onClick. w ten sposób<Button type={"submit"} onClick={funkcja onClick}><Button>
można dodawać do niego klasy które mają tylko i wyłącznie wartość true/false (dla tych co nie wiedzą w reactie false jest jak nie ma z góry nic podane a true jest jak jest podane) np:<Button primary><Button> i to nam daje przycisk z klasą primary, jeżeli potrzebujecie nowej klasy musicie zaktualizować komponent i dopisać klasę w pliku .css
