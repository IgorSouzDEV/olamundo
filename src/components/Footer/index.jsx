import styles from './Footer.module.css';
import MarcaRegistrada from '../../assets/marca_registrada.svg';

function Footer() {
    return (
        <footer className={styles.rodape}>
            <p>Desenvolvido por <a href="https://github.com/igorsouzdev" target="_blank">Igor de Souza Aguiar</a></p>
            <img src={MarcaRegistrada} alt="Marca registrada" />
        </footer>
    )
}

export default Footer