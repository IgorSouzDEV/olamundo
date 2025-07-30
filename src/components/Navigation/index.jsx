import NavigationLink from '../NavigationLink';
import styles from './Menu.module.css';

function Menu() {
    return (
        <nav className={styles.navegacao}>
            <NavigationLink to="/">Inicio</NavigationLink>
            <NavigationLink to="/sobre-mim">Sobre mim</NavigationLink>
        </nav>
    )
}

export default Menu;