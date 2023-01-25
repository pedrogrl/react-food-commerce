import { Container } from './styles'
import { FiPlus } from 'react-icons/fi'

import { currencyFormat } from '../../helpers/currencyFormat'

interface SnacksProps {
  snacks: {
    id: number,
    snack?: string,
    name: string,
    description:string,
    price: number,
    image: string,
  }[]
}

function Snacks({ snacks }: SnacksProps) {
  return (
    <Container>
      {snacks.map((snack) => (
        <div key={snack.id} className='snack'>
          <h2>{snack.name}</h2>
          <img src={snack.image} alt={snack.name} />
          <p>{snack.description}</p>
          <div>
            <b>{currencyFormat(snack.price)}</b>
            <button>
              <FiPlus />
            </button>
          </div>
        </div>
      ))}
    </Container>
  )
}

export default Snacks
