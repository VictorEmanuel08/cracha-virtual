import seloRocket from "../../assets/build.svg";
import iconGithub from "../../assets/github.svg";
import iconYoutube from "../../assets/youtube.svg";
import iconInstagram from "../../assets/instagram.svg";
import iconFacebook from "../../assets/facebook.svg";
import iconTwitter from "../../assets/twitter.svg";
import React, { useState } from "react";

export function Home() {
  // return (
  //   <div id="container" classNameName="w-screen h-screen bg-black text-white">
  //     <div id="avatar" className="">
  //       <span>
  //         <img src={seloRocket} alt="Selo Rocketseat" />
  //       </span>
  //       <img
  //         id="userAvatar"
  //         src="https://progsoft.net/images/placekitten-icon-68d5c7a460d9d7bbc75d3ccb171ae2ccdea39408.jpg"
  //         alt="Foto do usuário"
  //       />
  //     </div>

  //     <h1 id="userName">Victor Emanuel</h1>
  //     <p id="UserId">020202</p>

  //     {/* Texto */}
  //     <a id="userLink" href="https://github.com/" target="_blank">
  //       <img src={iconGithub} alt="ícone Github" />
  //       <span id="userLogin">VictorEmanuel</span>
  //       {/* texto que não é parágrafo */}
  //     </a>
  //     {/* a = atribuição será feita
  //           href = atributo -> referencia - linkar
  //           "(conteudi=o) = valor do atributo" */}

  //     <p id="UserBio">"Um aluno focado em aprender programação Web</p>

  //     <ul id="socialLinks">
  //       <li id="youtube">
  //         <a href="https://www.youtube.com/" target="_blank">
  //           <img src={iconYoutube} alt="ícone youtube" />
  //         </a>
  //       </li>
  //       <li id="instagram">
  //         <a href="https://www.instagram.com/" target="_blank">
  //           <img src={iconInstagram} alt="icone instagram" />
  //         </a>
  //       </li>
  //       <li id="facebook">
  //         <a href="https://pt-br.facebook.com/" target="_blank">
  //           <img src={iconFacebook} alt="icone facebook" />
  //         </a>
  //       </li>
  //       <li id="twitter">
  //         <a href="https://twitter.com/" target="_blank" rel="noopener">
  //           <img src={iconTwitter} alt="icone twitter" />
  //         </a>
  //       </li>
  //     </ul>
  //   </div>
  // );

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <label htmlFor="password" className="block font-medium text-gray-700">
        Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 px-3 py-1 text-sm font-medium text-gray-700 cursor-pointer"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}
