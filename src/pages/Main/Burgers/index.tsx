import { Head } from "../../../components/Head";
import { SnackTitle } from "../../../components/SnackTitle";

import Snacks from "../../../components/Snacks";

function Burgers() {
  const data = [
    {
      id: 1,
      snack: 'burger',
      name: 'Mega',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas est voluptatibus praesentium adipisci.',
      price: 25.5,
      image: 'https://i.imgur.com/upjIUnG.jpg',
    },
    {
      id: 2,
      snack: 'burger',
      name: 'Extra bacon',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas est voluptatibus praesentium adipisci.',
      price: 23.5,
      image: 'https://i.imgur.com/B4J04AJ.jpg',
    },
  ]

  return (
    <>
      <Head title="Burgers" />
      <SnackTitle>Burgers</SnackTitle>
      <Snacks snacks={data} />
    </>
  )
}

export default Burgers