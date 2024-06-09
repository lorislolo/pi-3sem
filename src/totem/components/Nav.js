import styles from './Nav.module.css'
import { FaChevronLeft } from 'react-icons/fa'
import logo from '../img/parque.png'
import useAuthStore from '../../auth/lib/storeAuth'

// dps muda o botao de sair pra algum lugar melhor
function Nav(props) {
  const logout = useAuthStore((s) => s.logout)
  return (
    <nav className={styles.ContainerNav}>
      <a href="/">
        <FaChevronLeft />
      </a>
      <img src={logo} alt="" />
      <p>{props.numero}</p>
      <button onClick={logout}>Sair</button>
    </nav>
  )
}

export default Nav
