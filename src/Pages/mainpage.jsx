import React from "react";
import Header1 from "../Components/header_1";
import ButtonPrimary from "../Components/buttonPrimary";
import img_paparoy from "../paparoy.jpg";
import img_alaturca from "../alaturca.jpg";
import Card from "../Components/card";
import { useQuery } from "react-query";

function MainPage() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(process.env.REACT_APP_SERVER_IP + "restaurant").then((res) => res.json())
  );
  let listen = [];

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  for (let index = 0; index < data.length; index++) {
    listen.push(<Card name={data[index].name} bild={img_paparoy} href={"/liste/" + data[index].id} />);
  }

  return (
    <div>
      <Header1 />
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">{listen}</div>
    </div>
  );
}

export default MainPage;
