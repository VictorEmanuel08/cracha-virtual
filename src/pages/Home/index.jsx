import seloRocket from "../../assets/build.svg";
import iconGithub from "../../assets/github.svg";
import iconYoutube from "../../assets/youtube.svg";
import iconInstagram from "../../assets/instagram.svg";
import iconFacebook from "../../assets/facebook.svg";
import iconTwitter from "../../assets/twitter.svg";

export function Home() {
  return (
    <div id="container" classNameName="w-screen h-screen bg-black text-white">
      <div id="avatar" className="">
        <span>
          <img src={seloRocket} alt="Selo Rocketseat" />
        </span>
        <img
          id="userAvatar"
          src="https://progsoft.net/images/placekitten-icon-68d5c7a460d9d7bbc75d3ccb171ae2ccdea39408.jpg"
          alt="Foto do usuário"
        />
      </div>

      <h1 id="userName">Victor Emanuel</h1>
      <p id="UserId">020202</p>

      {/* Texto */}
      <a id="userLink" href="https://github.com/" target="_blank">
        <img src={iconGithub} alt="ícone Github" />
        <span id="userLogin">VictorEmanuel</span>
        {/* texto que não é parágrafo */}
      </a>
      {/* a = atribuição será feita
            href = atributo -> referencia - linkar
            "(conteudi=o) = valor do atributo" */}

      <p id="UserBio">"Um aluno focado em aprender programação Web</p>

      <ul id="socialLinks">
        <li id="youtube">
          <a href="https://www.youtube.com/" target="_blank">
            <img src={iconYoutube} alt="ícone youtube" />
          </a>
        </li>
        <li id="instagram">
          <a href="https://www.instagram.com/" target="_blank">
            <img src={iconInstagram} alt="icone instagram" />
          </a>
        </li>
        <li id="facebook">
          <a href="https://pt-br.facebook.com/" target="_blank">
            <img src={iconFacebook} alt="icone facebook" />
          </a>
        </li>
        <li id="twitter">
          <a href="https://twitter.com/" target="_blank" rel="noopener">
            <img src={iconTwitter} alt="icone twitter" />
          </a>
        </li>
      </ul>
    </div>
  );
}
