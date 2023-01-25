import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"

import Snacks from "../../../components/Snacks"

function Drinks() {
  const data = [
    {
      id: 1,
      snack: 'drink',
      name: 'Coca-Cola',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas est voluptatibus praesentium adipisci.',
      price: 12,
      image: 'https://i.imgur.com/Lg3aKhf.jpg',
    },
    {
      id: 2,
      snack: 'drink',
      name: 'Guaraná Antarctica',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas est voluptatibus praesentium adipisci.',
      price: 6.5,
      image: 'https://i.imgur.com/hOBrOIm.jpg',
    },
    {
      id: 3,
      snack: 'drink',
      name: 'Pineapple juice',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas est voluptatibus praesentium adipisci.',
      price: 8,
      image: 'https://i.imgur.com/VV9qTMh.jpg',
    },
  ]

  return (
    <>
      <Head title='Drinks' />
      <SnackTitle>Drinks</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}

export default Drinks