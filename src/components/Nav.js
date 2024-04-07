import styles from './Nav.module.css'
import { FaChevronLeft } from 'react-icons/fa'
import logo from '../logo.svg';

function Nav () {

return(
    <nav className={styles.ContainerNav}>
        <a href="/aa"><FaChevronLeft/></a>
        <img src={logo} alt=""/>
        <p>1/3</p>
    </nav>
)
}

export default Nav