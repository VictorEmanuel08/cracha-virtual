import React, { useState } from "react";
import Logo from "../../assets/logoGETICOM.png";
import { useNavigate } from "react-router-dom";
// import backgroundImgNew from "../../assets/backgroundGETICOM.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Login() {
  const navigate = useNavigate();

  const [mat, setMat] = useState("");
  const [password, setPassword] = useState("");

  const notify = () => {
    toast.info("Bem-Vindo!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  function handleSubmit() {
    notify();
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  }


  return (
    <div className="w-full h-screen">
      {/* <div className="w-full h-screen grid grid-cols-1 sm:grid-cols-2">
        <div className="hidden sm:block">
          <img
            className="w-full h-screen object-cover"
            src={backgroundImgNew}
            alt="background"
          />
        </div>
      </div> */}
      <div className="w-full h-screen bg-loginBackground bg-cover flex flex-col justify-center">
        <div className="max-w-[400px] w-full mx-auto bg-[#4263EB] rounded-lg p-8">
          <div className="w-full flex justify-center items-center my-2 bg-white rounded-lg ">
            <img src={Logo} alt={"Logo"} className="px-10" />
          </div>
          <div className="flex flex-col py-1">
            <label htmlFor="mat" className="text-zinc-200">
              Id
            </label>
            <input
              className="border p-2 rounded outline-none text-zinc-700"
              id="mat"
              type="text"
              name="mat"
              value={mat}
              onChange={(e) => setMat(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-3">
            <label htmlFor="password" className="text-zinc-200">
              Senha
            </label>
            <input
              className="border p-2 rounded outline-none text-zinc-700"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-start items-center py-1">
            <p className="text-white">
              <input className="rounded-md" type="checkbox" /> Manter conectado
            </p>
          </div>
          {mat.length === 0 || password.length === 0 ? (
            <button
              disabled={true}
              className="bg-[#18C4B3] w-full my-2 py-2 rounded-md text-white hover:bg-[#16b1a1] cursor-not-allowed transform transition-all duration-300 hover:scale-110"
            >
              Entrar
            </button>
          ) : (
            <div>
              <button
                onClick={handleSubmit}
                className="bg-[#18C4B3] w-full my-2 py-2 rounded-md text-white hover:bg-[#16b1a1] transform transition-all duration-300 hover:scale-110"
              >
                Entrar
              </button>
              <ToastContainer />
            </div>
          )}
          <div className="flex flex-col items-center justify-center mt-3">
            <button className="w-3/5 flex items-center justify-center bg-white hover:bg-[#87CEFA] rounded-lg my-2 py-1 text-black font-semibold hover:text-white transform transition-all duration-300 hover:scale-110">
              <a href="/create">Não possuo cadastro</a>
            </button>
            <button className="w-3/5 flex items-center justify-center bg-white hover:bg-[#87CEFA] rounded-lg mt-2 py-1 text-black font-semibold hover:text-white transform transition-all duration-300 hover:scale-110  ">
              <a href="/">Esqueci minha senha</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
