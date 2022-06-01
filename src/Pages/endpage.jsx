import React from "react";
import ButtonSecondary from "../Components/buttonSecondary";
import HeaderBig from "../Components/header_big";
import Ueberschrift2 from "../Components/ueberschrift2";
import { Link } from "react-router-dom";

function EndPage() {
  return (
    <div class="h-screen overflow-hidden">
      <div>
        <HeaderBig name=" " />
      </div>
      <div class="flex justify-center content-center items-center h-full w-full">
        <div class="bg-primary h-1/2 w-1/2 p-10 lg:w-1/3 rounded-3xl flex justify-center items-center flex-col">
          <Ueberschrift2 name="Vielen Dank!" />
          <Ueberschrift2 name="Deine Bestellung wurde erfolgreich aufgegeben." />
          <div class="p-5"></div>
          <Link to="/">
            <ButtonSecondary name="Zur Startseite" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EndPage;
