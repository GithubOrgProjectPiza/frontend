import React from "react";
import Header1 from "../Components/header_1";
import ButtonPrimary from "./buttonPrimary";
import img_paparoy from "../paparoy.jpg";
import img_alaturca from "../alaturca.jpg";
import Card from "./card";
import { useQuery } from "react-query";

function MainPage() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("http://10.10.2.132:3000/restaurant").then((res) => res.json())
  );
  let listen = [];

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  for (let index = 0; index < data.length; index++) {
    console.log(data);
    listen.push(<Card name={data[index].name} bild={img_paparoy} domain={data[index].domain} />);
  }

  return (
    <div>
      <Header1 />
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">{listen}</div>
    </div>
  );
}

export default MainPage;