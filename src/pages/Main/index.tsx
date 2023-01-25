import { Outlet } from 'react-router-dom'

import Sidebar from '../../components/Sidebar'

import { Container } from './styles'
import LogoImg from '../../assets/logo.svg'

export default function Main() {
  return (
    <Container>
      <Sidebar />

      <section>
        <img src={LogoImg} alt="logo" />
        <Outlet />
      </section>
    </Container>
  )
}
