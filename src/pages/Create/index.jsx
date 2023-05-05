import logo from "../../assets/logoGETICOM.png";
import React, { useState } from "react";

export function Create() {
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
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

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
            <img
              src={logo}
              alt="Logo da empresa"
              className="mx-auto w-3/5 w-auto"
            />
            <h2 className="my-6 text-center text-xl font-semibold text-[#4263EB]">
              CRIE SEU CADASTRO
            </h2>
          </div>

          <form className="space-y-4">
            {/* NOME */}
            <div>
              <label
                for="name"
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
                for="email"
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
                for="password"
                className="block text-sm font-medium text-gray-700"
              >
                Senha
              </label>
              <div className="mt-1">
                <div className="flex flex-row">
                  <input
                    id="password"
                    name="password"
                    // type="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="********"
                    value={password}
                    onChange={handlePasswordChange}
                    // onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 px-3 py-1 text-sm font-medium text-gray-700 cursor-pointer"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        class="feather feather-eye"
                      >
                        <path d="M22.191 11.336c-1.601-3.325-4.722-5.336-8.191-5.336s-6.59 2.011-8.191 5.336a.999.999 0 0 0 0 1.328c1.601 3.325 4.722 5.336 8.191 5.336s6.59-2.011 8.191-5.336a.999.999 0 0 0 0-1.328zm-8.191 3.664a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        <path d="M12 8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        class="feather feather-eye-off"
                      >
                        <path d="M22.191 11.336c-1.601-3.325-4.722-5.336-8.191-5.336s-6.59 2.011-8.191 5.336a.999.999 0 0 0 0 1.328c1.601 3.325 4.722 5.336 8.191 5.336s6.59-2.011 8.191-5.336a.999.999 0 0 0 0-1.328zm-8.191 3.664a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        <path d="M19.541 16.458c-2.757 2.369-6.401 3.755-10.341 3.755-7.18 0-13-5.82-13-13 0-3.94 1.386-7.584 3.755-10.341l1.414 1.414c-1.982 1.982-3.169 4.703-3.169 7.672 0 6.074 4.926 11 11 11 2.969 0 5.69-1.187 7.672-3.169l1.414 1.414z" />
                        <path d="M12 8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* CELULAR */}
            <div>
              <label
                for="celular"
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
                  pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
                  onChange={(e) => setCelular(e.target.value)}
                  placeholder="11 99999-9999"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* LINKEDIN */}
            <div>
              <label
                for="urlLinkedin"
                className="block text-sm font-medium text-gray-700"
              >
                Linkedin
              </label>
              <div className="mt-1">
                <input
                  id="urlLinkedin"
                  name="urlLinkedin"
                  type="url"
                  required
                  placeholder="linkedin.com/in/seuLinkedin"
                  onChange={(e) => setUrlLinkedin(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* GITHUB */}
            <div>
              <label
                for="urlGithub"
                className="block text-sm font-medium text-gray-700"
              >
                Github
              </label>
              <div className="mt-1">
                <input
                  id="urlGithub"
                  name="urlGithub"
                  type="url"
                  required
                  placeholder="github.com/seuGithub"
                  onChange={(e) => setUrlGithub(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* ESTADO */}
            <div>
              <label
                for="estado"
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

            {/* <label for="estado">Estado</label>
            <select id="estado" name="estado">
              <option value="SP">SP</option>
              <option value="RJ">RJ</option>
              <option value="PB">PB</option>
            </select> */}

            {/* UNIVERSIDADE */}
            <div>
              <label
                for="universidade"
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
                for="curso"
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
                for="bio"
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

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
