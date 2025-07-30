import PostModelo from "../../components/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import styles from './SobreMim.module.css';
import fotoSobreMim from '../../assets/sobre_mim_foto.jpg';


function SobreMim() {
  return (
    <main>
      <PostModelo
        fotoCapa={fotoCapa}
        titulo="Sobre Mim">
          <h3 className={styles.subtitulo}>
            Olá, eu sou o Igor!
          </h3>
          <img src={fotoSobreMim} alt="Foto do Igor de Souza Aguiar" className={styles.fotoSobreMim} loading="lazy"/>
          <p className={styles.paragrafo}>
            Oi, tudo bem? Eu sou o Igor, um estudante de Sistemas de Informação pelo Centro Universitário IBMR e apaixonado por tecnologia.
          </p>
          <p className={styles.paragrafo}>
            Minha jornada na programação começou no curso de Técnologo em Análise e Desenvolvimento de Sistemas, pelo Instituto Augusto Motta (Unisuam), onde tive a oportunidade de aprender diversas linguagens e ferramentas. Desde então, tenho me dedicado a aprimorar minhas habilidades e expandir meu conhecimento na área.
          </p>
          <p className={styles.paragrafo}>
            Atualmente, estou focado em me especializar em React, uma biblioteca JavaScript que tem revolucionado a forma como construímos interfaces de usuário. Estou sempre em busca de novos desafios e oportunidades para aplicar o que aprendo em projetos práticos.
          </p>
          <p className={styles.paragrafo}>
            Além de programação, tenho interesse em áreas como desenvolvimento web, design de interfaces e experiência do usuário. Acredito que a combinação dessas habilidades é essencial para criar aplicações que sejam não apenas funcionais, mas também agradáveis de usar.
          </p>
          <p className={styles.paragrafo}>
            Sou um entusiasta da tecnologia e estou sempre atualizado com as últimas tendências e inovações do setor. Gosto de participar de comunidades online, ler blogs e assistir a vídeos sobre desenvolvimento para me manter informado e inspirado.
          </p>
          <p className={styles.paragrafo}>
            Além disso, tenho interesse em explorar outras áreas da tecnologia, como inteligência artificial e desenvolvimento de aplicativos móveis. Acredito que a tecnologia tem o poder de transformar vidas e estou animado para fazer parte dessa transformação.
          </p>
          <p className={styles.paragrafo}>
            Estou sempre aberto a aprender e colaborar com outros profissionais da área. Se você tiver alguma dica, sugestão ou quiser trocar ideias sobre tecnologia, sinta-se à vontade para entrar em contato!
          </p>
        </PostModelo>
    </main>
  );
}   

export default SobreMim;