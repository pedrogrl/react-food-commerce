import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"

import Snacks from "../../../components/Snacks"

function Desserts() {
  const data = [
    {
      id: 1,
      snack: 'dessert',
      name: 'Ice Cream Cone',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas est voluptatibus praesentium adipisci.',
      price: 4.5,
      image: 'https://i.imgur.com/YGmeoCm.jpg',
    },
    {
      id: 2,
      snack: 'dessert',
      name: 'Chocolate with sprinkles',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas est voluptatibus praesentium adipisci.',
      price: 6,
      image: 'https://i.imgur.com/osAHOLe.jpg',
    },
    {
      id: 3,
      snack: 'dessert',
      name: 'Flakes',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas est voluptatibus praesentium adipisci.',
      price: 7,
      image: 'https://i.imgur.com/qgnFLiy.jpg',
    },
  ]

  return (
    <>
      <Head title='Desserts' />
      <SnackTitle>Desserts</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}

export default Desserts