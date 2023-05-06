import logo from "../../assets/logoGETICOM.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export function Create() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [celular, setCelular] = useState("");
  const [urlLinkedin, setUrlLinkedin] = useState("");
  const [urlGithub, setUrlGithub] = useState("");
  const [estado, setEstado] = useState("");
  const [universidade, setUniversidade] = useState("");
  const [curso, setCurso] = useState("");
  const [bio, setBio] = useState("");
  const [imagemAluno, setImageAluno] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

  async function createCadastro() {
    try {
      // await app.post("/cadastro", {
      //   name: name
      // });
      notify();
      setTimeout(() => {
        // navigate(-1);
      }, 2000);
    } catch {
      alert("Ocorreu um erro. Tente novamente.");
    }
  }

  return (
    // <div className="w-full h-screen bg-loginBackground bg-cover flex items-center justify-center">
    //   <div className="w-3/5 h-4/5 bg-[#F5F5F5] flex flex-col items-center rounded-lg">
    //     <div className="flex flex-col py-4">
    //       <img src={logo} className="" />
    //     </div>

    //     <div className="">
    //       <strong className="text-[#4263EB]">CRIE SEU CADASTRO</strong>
    //     </div>
    //     <div className="flex flex-col items-start">
    //       <div className="flex flex-col">
    //         <h3>NOME</h3>
    //         <input type="email" />
    //       </div>
    //       <div className="flex flex-col">
    //         <h3>E-MAIL</h3>
    //         <input type="email" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="font-poppins min-h-screen bg-loginBackground bg-cover flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="relative flex flex-row items-center justify-center ">
              <button onClick={backPage} className="absolute left-6 bg-indigo-600 rounded-lg hover:bg-[#18C4B3] transform transition-all duration-200 hover:scale-110">
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

            {/* ESTADO */}
            <div>
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
            </div>

            {/* <label htmlFor="estado">Estado</label>
            <select id="estado" name="estado">
              <option value="SP">SP</option>
              <option value="RJ">RJ</option>
              <option value="PB">PB</option>
            </select> */}

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
                Foto
              </label>
              <div className="mt-1">
                <input
                  id="image"
                  type="file"
                  name="image"
                  accept="image/png, image/jpeg"
                  required
                  // placeholder="Escreva sobre você..."
                  onChange={(e) => setImageAluno(e.target.value)}
                  // className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

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
