import styles from "./NaoEncontrada.module.css";
import erro404 from "../../assets/erro_404.png";
import BotaoPrincipal from "../../components/BotaoPrincipal";
import { useNavigate } from "react-router-dom";

function NaoEncontrada() {
    const navegar = useNavigate();

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}> 404 </span>
                <h1 className={styles.titulo}>
                    Ops! Página não encontrada.
                </h1>
                <p className={styles.paragrafo}>
                    O conteúdo que você procurava pode ter sido removido ou foi digitado errado.
                </p>
                <p className={styles.paragrafo}>
                    Navegue pelo menu ou volte para a página inicial.
                </p>
                <div className={styles.botaoContainer} onClick={() => navegar("/")}>
                    <BotaoPrincipal tamanho="lg" href="/">Voltar para o inicio</BotaoPrincipal>
                </div>

                <img className={styles.imagemCachorro} src={erro404} alt="Imagem de página não encontrada" />
            </div>
            <div className={styles.espacoEmBranco}>

            </div>
        </>
    );
}

export default NaoEncontrada;