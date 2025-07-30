import { useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import PostModelo from "../../components/PostModelo";
import ReactMarkdown from "react-markdown";
import "./Post.css";
import NãoEncontrada from "../NaoEncontrada";

function Post() {
    const params = useParams();

    const post = posts.find((post) => {
        return post.id === Number(params.id);
    })

    if (!post) {
        return <NãoEncontrada />;
    }

    return (
        <PostModelo
            fotoCapa={`/src/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>
        </PostModelo>
    )
}

export default Post;