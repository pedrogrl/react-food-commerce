import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"

import Snacks from "../../../components/Snacks"

function Pizzas() {
  const data = [
    {
      id: 1,
      snack: 'pizza',
      name: 'Pepperoni',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas est voluptatibus praesentium adipisci.',
      price: 25,
      image: 'https://i.imgur.com/5rjJGkV.jpg',
    },
    {
      id: 2,
      snack: 'pizza',
      name: 'Portuguesa',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas est voluptatibus praesentium adipisci.',
      price: 28.5,
      image: 'https://i.imgur.com/WCoyGoI.png',
    },
  ]

  return (
    <>
      <Head title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}

export default Pizzas