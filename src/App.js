import Eingabefeld from "./Components/eingabefeld";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Liste from "./Components/liste";

function App() {
  return (
    <div className="App">
      <Eingabefeld label="Name" isPassword={false} placeholder="&#xf007;" />
      <p className="from-green-50">tets</p>
      <br></br>
      <Liste gericht="Pizza" price="€20.00" />
    </div>
  );
}

export default App;
