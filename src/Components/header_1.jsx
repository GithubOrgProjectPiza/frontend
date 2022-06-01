import React from "react";
import p_logo_dark from "../pizza_logo_dark.png";
import p_logo_light from "../pizza_logo_light.png";
import ButtonSecondary from "./buttonSecondary";
import ShoppingCart from "../shopping_cart.svg";
import { Link } from "react-router-dom";
function Header1() {
  return (
    <div class="bg-primary h-14 w-full p-2 flex justify-between items-center">
      <img src={p_logo_light} alt="Logo" class="h-10"></img>

      <div class="flex justify-center items-center">
        <Link to="/anmeldung">
          <ButtonSecondary name="Abmelden" />
        </Link>

        <Link to="/warenkorb">
          <img src={ShoppingCart} class="h-7"></img>
        </Link>
      </div>
    </div>
  );
}

export default Header1;
