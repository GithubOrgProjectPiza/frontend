import logo from "./logo.svg";
import ButtonPrimary from "./Components/buttonPrimary";
import ButtonSecondary from "./Components/buttonSecondary";
import './App.css';
import p_logo_dark from './pizza_logo_dark.png'
import p_logo_light from './pizza_logo_light.png'
import Header1 from "./Components/header_1";
import test from "./Components/test";
import Card from "./Components/card";
import img_paparoy from './paparoy.jpg';
import img_alaturca from './alaturca.jpg';

function App() {
  return (
    <div className="App">
      <Header1 />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <Card name="Papa Roy" bild={img_paparoy} />
        <Card name="A la Turca" bild={img_alaturca} />
        <Card name="Pizza Olive"/>
      </div>
  </div>
  );
}

export default App;
