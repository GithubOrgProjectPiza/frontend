import React from "react";
import Header1 from "../Components/header_1";
import ButtonPrimary from "./buttonPrimary";
import img_paparoy from "../paparoy.jpg";
import img_alaturca from "../alaturca.jpg";
import Card from "./card";

function MainPage() {
  return (
    <div class="overflow-hidden">
      <Header1 />
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <Card name="Papa Roy" bild={img_paparoy} />
        <Card name="A la Turca" bild={img_alaturca} />
        <Card name="Pizza Olive" bild={img_paparoy} />
      </div>
    </div>
  );
}

export default MainPage;
