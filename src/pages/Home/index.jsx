import React, { useState, useEffect } from "react";
import axios from "axios";

export function Home() {
  const [dados, setDados] = useState("");
  const [imagemAluno, setImageAluno] = useState("");
  const [nameAluno, setNameAluno] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("/api/users/1")
  //     .then((response) => setDados(response.data))
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/api/users/1");
      setDados(response.data);
      setImageAluno(response.data.card.foto);
      setNameAluno(response.data.nome);
    };
    getData();
  }, []);

  console.log(dados);

  return (
    <div className="font-poppins min-h-screen bg-loginBackground bg-cover flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <div className="bg-[#FCFCFC] w-[28.6rem] h-[37.8rem] flex flex-col items-center justify-center shadow-lg rounded-lg">
        <div className="relative w-full">
          <svg className="w-full h-[157px]">
            <path d="M77 0L-45 157L-45 0L77 0Z" fill="#1A82EC" />
            <path d="M254 157L77 0L254 0V157Z" fill="#003368" />
            <path d="M-45 156L77 -1V156H-45Z" fill="#1E4488" />
            <path d="M77 -1L254 156L77 156L77 -1Z" fill="#004D9B" />
            <path d="M431 156L553 -1V156H431Z" fill="#1A82EC" />
            <path d="M254 -1L431 156L254 156L254 -1Z" fill="#003368" />
            <path d="M553 -1L431 156V-1L553 -1Z" fill="#1E4488" />
            <path d="M431 156L254 -1L431 -1L431 156Z" fill="#004D9B" />
          </svg>
          <img
            src={imagemAluno}
            alt="profile"
            className=" w-[8.5rem] h-[8.5rem] rounded-full object-cover border-8 border-[#004D9B] "
          />
          <p className=" text-white text-lg ">
            {nameAluno}
          </p>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}
