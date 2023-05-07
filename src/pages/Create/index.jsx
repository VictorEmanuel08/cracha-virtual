import logo from "../../assets/logoGETICOM.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import { Estados } from "../../components/Estados";
import { app } from "../../api/app";

export function Create() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [celular, setCelular] = useState("");
  const [urlLinkedin, setUrlLinkedin] = useState("");
  const [urlGithub, setUrlGithub] = useState("");
  const [urlInstagram, setUrlInstagram] = useState("");
  // const [estado, setEstado] = useState("");
  // const [cidade, setCidade] = useState("");
  const [universidade, setUniversidade] = useState("");
  const [curso, setCurso] = useState("");
  const [areaAluno, setAreaAluno] = useState("");
  const [bio, setBio] = useState("");
  const [imagemAluno, setImageAluno] = useState("");
  const [corCrachaAluno, setCorCrachaAluno] = useState("#FFFFFF");
  const [corFonte, setCorFonte] = useState("#000000");
  const [cardAluno, setCardAluno] = useState({
    id: 1,
    cor_fundo: corCrachaAluno,
    cor_texto: corFonte,
    fonte: "Arial",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [dados, setDados] = useState("");

  function backPage() {
    navigate(-1);
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const notify = () => {
    toast.success("Cadastro criado!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    axios
      .get("/api/busca/001")
      .then((response) => setDados(response.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(dados);

  // async function createCadastro() {
  //   try {
  //     await axios.post("/api/cadastro/${user_id}", {
  //       id: 11,
  //       nfc_id: "0011",
  //       nome: name,
  //       email: email,
  //       celular: celular,
  //       bio: bio,
  //       linkedin: urlLinkedin,
  //       github: urlGithub,
  //       instagram: urlInstagram,
  //       area_profissional: areaAluno,
  //       curso: curso,
  //       universidade: universidade,
  //       card: cardAluno,
  //     });
  //     // notify();
  //     console.log("ok");
  //     alert("sucess!.");
  //   } catch {
  //     alert("Ocorreu um erro. Tente novamente.");
  //   }
  // }

  const createCadastro = async e => {
    e.preventDefault();
    try {
      const result = await axios.post("/api/cadastro/001", {
        id: 11,
        nfc_id: "0011",
        nome: name,
        email: email,
        celular: celular,
        bio: bio,
        linkedin: urlLinkedin,
        github: urlGithub,
        instagram: urlInstagram,
        area_profissional: areaAluno,
        curso: curso,
        universidade: universidade,
        card: cardAluno,
      });
      notify();
      console.log(result);
      alert("sucess!");
      navigate(-1)
    } catch (error){
      alert("Ocorreu um erro. Tente novamente.");
      console.log(error)
    }
  }

  // function handleSaveEstado(state){
  //   setEstado(state)
  // }
  // function handleSaveCidade(city){
  //   setCidade(city)
  // }

  function handleChangeColorBack(event) {
    const cor = event.target.value;
    setCorCrachaAluno(cor);
    cardAluno.cor_fundo = corCrachaAluno;
  }
  function handleChangeColorText(event) {
    const cor = event.target.value;
    setCorFonte(cor);
    cardAluno.cor_texto = corFonte;
  }

  const teste = {
    id: 0,
    nfc_id: "",
    nome: name,
    email: email,
    senha: password,
    celular: celular,
    bio: bio,
    image: imagemAluno,
    linkedin: urlLinkedin,
    github: urlGithub,
    instagram: areaAluno,
    area_profissional: urlInstagram,
    curso: curso,
    universidade: universidade,
    card: cardAluno,
  };
  // console.log(teste);

  return (
    <div className="font-poppins min-h-screen bg-loginBackground bg-cover flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="relative flex flex-row items-center justify-center ">
              <button
                onClick={backPage}
                className="absolute left-6 bg-indigo-600 rounded-lg hover:bg-[#18C4B3] transform transition-all duration-200 hover:scale-110"
              >
                <ArrowBackIcon className="text-white" />
              </button>
              <h2 className="text-center text-2xl font-semibold text-[#4263EB]">
                CRIE SEU CADASTRO
              </h2>
            </div>

            <img
              src={logo}
              alt="Logo da empresa"
              className="mt-3 mb-5 mx-auto w-3/5 w-auto cursor-pointer transform transition-all duration-200 hover:scale-105"
              onClick={backPage}
            />
          </div>

          <form className="space-y-4">
            {/* NOME */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome completo
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Seu Nome da Silva"
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* E-MAIL */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seuemail@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* SENHA */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Senha
              </label>
              <div className="mt-1">
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    // type="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 px-3 py-1 text-sm font-medium text-gray-700 cursor-pointer"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </button>
                </div>
              </div>
            </div>

            {/* CELULAR */}
            <div>
              <label
                htmlFor="celular"
                className="block text-sm font-medium text-gray-700"
              >
                Celular
              </label>
              <div className="mt-1">
                <input
                  id="celular"
                  name="celular"
                  type="cel"
                  required
                  // pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
                  onChange={(e) => setCelular(e.target.value)}
                  placeholder="11 99999-9999"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* LINKEDIN */}
            <div>
              <label
                htmlFor="urlLinkedin"
                className="block text-sm font-medium text-gray-700"
              >
                Linkedin
              </label>
              <div className="mt-1">
                <input
                  id="urlLinkedin"
                  name="urlLinkedin"
                  type="url"
                  // required
                  placeholder="linkedin.com/in/seuLinkedin"
                  onChange={(e) => setUrlLinkedin(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* GITHUB */}
            <div>
              <label
                htmlFor="urlGithub"
                className="block text-sm font-medium text-gray-700"
              >
                Github
              </label>
              <div className="mt-1">
                <input
                  id="urlGithub"
                  name="urlGithub"
                  type="url"
                  // required
                  placeholder="github.com/seuGithub"
                  onChange={(e) => setUrlGithub(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* INSTAGRAM */}
            <div>
              <label
                htmlFor="urlInstagram"
                className="block text-sm font-medium text-gray-700"
              >
                Instagram
              </label>
              <div className="mt-1">
                <input
                  id="urlInstagram"
                  name="urlInstagram"
                  type="url"
                  // required
                  placeholder="instagram.com/seuInstagram"
                  onChange={(e) => setUrlInstagram(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* ESTADO */}
            {/* <div>
              <label
                htmlFor="estado"
                className="block text-sm font-medium text-gray-700"
              >
                Estado
              </label>
              <div className="mt-1">
                <input
                  id="estado"
                  name="estado"
                  type="text"
                  maxLength={2}
                  required
                  placeholder="Seu estado (Sigla)"
                  onChange={(e) => setEstado(e.target.value)}
                  className="uppercase appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div> */}
            {/* <Estados saveEstado={handleSaveEstado} saveCidade={handleSaveCidade}/> */}

            {/* UNIVERSIDADE */}
            <div>
              <label
                htmlFor="universidade"
                className="block text-sm font-medium text-gray-700"
              >
                Universidade
              </label>
              <div className="mt-1">
                <input
                  id="universidade"
                  name="universidade"
                  type="text"
                  required
                  placeholder="Sua universidade"
                  onChange={(e) => setUniversidade(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* CURSO */}
            <div>
              <label
                htmlFor="curso"
                className="block text-sm font-medium text-gray-700"
              >
                Curso
              </label>
              <div className="mt-1">
                <input
                  id="curso"
                  name="curso"
                  type="text"
                  required
                  placeholder="Seu curso"
                  onChange={(e) => setCurso(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* ÁREA PROFISSIONAL */}
            <div>
              <label
                htmlFor="areaProfissional"
                className="block text-sm font-medium text-gray-700"
              >
                Área profissional
              </label>
              <div className="mt-1">
                <input
                  id="areaProfissional"
                  name="areaProfissional"
                  type="text"
                  required
                  placeholder="Sua área"
                  onChange={(e) => setAreaAluno(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* BIO */}
            <div>
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700"
              >
                Bio
              </label>
              <div className="mt-1">
                <textarea
                  id="bio"
                  name="bio"
                  type="text"
                  required
                  placeholder="Escreva sobre você..."
                  onChange={(e) => setBio(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* IMAGE */}
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Envie uma foto sua
              </label>
              <div className="mt-1">
                <input
                  id="image"
                  type="file"
                  name="image"
                  accept="image/png, image/jpeg, image/jpg"
                  required
                  onChange={(e) => setImageAluno(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* COR CRACHÁ */}
            <div>
              <label
                htmlFor="corCracha"
                className="block text-sm font-medium text-gray-700"
              >
                Selecione a cor do seu crachá
              </label>
              <div className="mt-1">
                <input
                  id="corCracha"
                  type="color"
                  name="corCracha"
                  value={corCrachaAluno}
                  required
                  onChange={handleChangeColorBack}
                  // className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* COR FONTE */}
            <div>
              <label
                htmlFor="corFonte"
                className="block text-sm font-medium text-gray-700"
              >
                Selecione a cor da fonte do seu crachá
              </label>
              <div className="mt-1">
                <input
                  id="corFonte"
                  type="color"
                  name="corFonte"
                  value={corFonte}
                  required
                  onChange={handleChangeColorText}
                  // className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* EXEMPLO */}
            <div
              style={{ backgroundColor: corCrachaAluno, color: corFonte }}
              className="w-full h-8 rounded-full flex items-center justify-center"
            >
              <p>EXEMPLO DE COMO FICARÁ NO CRACHÁ</p>
            </div>

            {/* BOTÃO CADASTRAR */}
            <div>
              <button
                type="submit"
                onClick={createCadastro}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-all duration-200 hover:scale-105"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
