import "./App.css";
import Multiselect from "./components/Multiselect";
import { OptionProps } from "./types";

function App() {
  const options: OptionProps[] = [
    {
      text: "First",
      id: 1,
    },
    {
      text: "Second",
      id: 2,
    },
    {
      text: "Third",
      id: 3,
    },
    {
      text: "Fourth",
      id: 4,
    },
  ];
  return (
    <div className="App">
      <div className="appContainer">
        <h1>Multiselect</h1>
        <Multiselect options={options} placeholder="Selecione" />
      </div>
    </div>
  );
}

export default App;
