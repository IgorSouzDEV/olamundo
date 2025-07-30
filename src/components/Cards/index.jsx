import styles from './Cards.module.css';
import posts from '../../json/posts.json';
import Post from '../PostCard';

function Cards() {
    return (
        <div>
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cards;