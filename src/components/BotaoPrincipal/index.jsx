import styles from './BotaoPrincipal.module.css';

function BotaoPrincipal({ children, tamanho }) {
    return (
        <button className={`
            ${styles.botaoPrincipal}
            ${styles[tamanho || 'md']}
        `}>
            {children}
        </button>
    );
}

export default BotaoPrincipal;