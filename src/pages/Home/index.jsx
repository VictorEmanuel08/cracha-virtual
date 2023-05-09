import React from "react";
// import logo from "../../assets/logoGETICOM.png";

export function Home() {
  return (
    <div className="font-poppins min-h-screen bg-loginBackground bg-cover flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <div class="relative bg-[#FCFCFC] w-[507px] h-[653px] flex flex-col items-center justify-center shadow-lg rounded-lg">
        <svg class="absolute top-0 left-0 w-full h-full">
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
          src="https://via.placeholder.com/150"
          alt="profile"
          class="absolute -top-[90px] w-[185px] h-[185px] rounded-full object-cover border-4 border-#004D9B "
        />
        <p class="text-lg font-semibold mt-8">Hello world</p>
      </div>
    </div>
  );
}
