import styles from './Post.module.css';
import { Link } from 'react-router-dom';
import BotaoPrincipal from '../BotaoPrincipal';

function PostCard({post}){
    const {id, titulo} = post;

    return (
        <Link to={`/posts/${post.id}`} className={styles.link}>
            <div className={styles.post}>
                <img 
                className={styles.capa} 
                src={`/src/assets/posts/${id}/capa.png`} 
                alt='Imagem da capa do post'
                loading='lazy'
                />
                <h2 className={styles.titulo}>{titulo}</h2>
                <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>
        </Link>
    )
}

export default PostCard;