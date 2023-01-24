import { useState } from "react"

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
            <a href="#" className="active">
              <BurgerIcon />
              <span>Burgers</span>
            </a>
          </li>
          <li>
            <a href="#">
              <PizzaIcon />
              <span>Pizzas</span>
            </a>
          </li>
          <li>
            <a href="#">
              <SodaIcon />
              <span>Drinks</span>
            </a>
          </li>
          <li>
            <a href="#">
              <IceCreamIcon />
              <span>Desserts</span>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

export default Sidebar
