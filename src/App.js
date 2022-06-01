import logo from "./logo.svg";
import ButtonPrimary from "./Components/buttonPrimary";
import ButtonSecondary from "./Components/buttonSecondary";
import p_logo_dark from "./pizza_logo_dark.png";
import p_logo_light from "./pizza_logo_light.png";
import Header1 from "./Components/header_1";
import test from "./Components/test";
import Card from "./Components/card";
import img_paparoy from "./paparoy.jpg";
import img_alaturca from "./alaturca.jpg";
import Eingabefeld from "./Components/eingabefeld";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Liste from "./Components/liste";
import Anmeldepage from "./Pages/anmeldepage";
import Registrierung from "./Pages/registrierung";
import Warenkorb from "./Pages/warenkorb";
import Listenansicht from "./Pages/listenansicht";
import "./App.css";
import EndPage from "./Pages/endpage";
import MainPage from "./Pages/mainpage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="endpage" element={<EndPage />} />
        <Route path="liste" element={<Listenansicht />} />
        <Route path="registrierung" element={<Registrierung />} />
        <Route path="anmeldung" element={<Anmeldepage />} />
        <Route path="warenkorb" element={<Warenkorb />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
