import { useState } from "react"
import { NavLink } from "react-router-dom"

import { Container } from "./styles"

import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaIcon } from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'
import MenuImg from '../../assets/menu.svg'


function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Container menuOpened={menuOpen}>
      <button onClick={() => setMenuOpen(!menuOpen)}>
        <img src={MenuImg} alt="toggle menu button" />
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <BurgerIcon />
              <span>Burgers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/pizzas">
              <PizzaIcon />
              <span>Pizzas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/drinks">
              <SodaIcon />
              <span>Drinks</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/desserts">
              <IceCreamIcon />
              <span>Desserts</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

export default Sidebar
