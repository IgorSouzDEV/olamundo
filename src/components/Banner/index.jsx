import styles from './Banner.module.css';
import circuloColorido from '../../assets/circulo_colorido.png';

function Banner(){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, mundo!</h1>
                <p className={styles.paragrafo}>Boas vindas ao meu espaço pessoal!</p>
                <p className={styles.paragrafo}>Eu sou o Igor de Souza Aguiar, desenvolvedor front-end e estudante. Estou em busca de uma primeira oportunidade de trabalho na área de desenvolvimento front-end.</p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden="true"></img>
                <img className={styles.minhaFoto} src="https://github.com/igorsouzdev.png" alt="Foto do Igor de Souza Aguiar"></img>
            </div>
        </div>
    )
}

export default Banner;