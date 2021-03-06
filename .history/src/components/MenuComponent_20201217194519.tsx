import React from 'react'

import Link from "next/link"
import Image from 'next/image'
import { NavBar, OptionsNavbar } from './styleds/Navbar.Styled'
const Logo =
  "https://static.wixstatic.com/media/f55eb9_75da84b90d074eb492e51266a5110559~mv2.png/v1/fill/w_284,h_87,al_c,q_85,usm_0.66_1.00_0.01/logo_02.webp";

import Burger from './BurgerComp';


export default function MenuComponent() {
  return (
    <NavBar>
        <img id="Logo" src={Logo} alt="logo" />
        <OptionsNavbar>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/showroom">Showroom</Link>
          </li>
          <li>
            <Link href="/Preventiva">Mecanica Preventiva</Link>
          </li>
          <li>
            <Link href="#">Catalogo</Link>
          </li>
        </OptionsNavbar>
        <Burger />
      </NavBar>
  )
}
