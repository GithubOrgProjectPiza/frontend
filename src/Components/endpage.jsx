import React from "react";
import ButtonSecondary from "./buttonSecondary";
import HeaderBig from "./header_big";
import Ueberschrift2 from "./ueberschrift2";

function EndPage() {
  return (
    <div class="md:h-screen overflow-hidden">
      <div>
        <HeaderBig name=" " />
      </div>
      <div class="flex justify-center content-center items-center h-full w-full">
        <div class="md:bg-primary h-1/2 w-1/2 p-10 lg:w-1/3 rounded-3xl flex justify-center items-center flex-col sm:bg-white">
          <Ueberschrift2 name="Vielen Dank!" />
          <Ueberschrift2 name="Deine Bestellung wurde erfolgreich aufgegeben." />
          <div class="p-5"></div>
          <ButtonSecondary name="Zur Startseite" />
        </div>
      </div>
    </div>
  );
}

export default EndPage;
