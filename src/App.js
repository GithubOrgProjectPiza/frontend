import Eingabefeld from "./Components/eingabefeld";
import "../node_modules/font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <Eingabefeld label="Name" isPassword={false} placeholder="&#xf007;" />
      <p className="from-green-50">tets</p>
    </div>
  );
}

export default App;
