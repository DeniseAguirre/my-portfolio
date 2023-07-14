import React from "react";
import DownloadButton from "./DownloadButton";

function Hero() {
  return (
    <>
      <div className="w-screen flex sm:flex-row flex-col h-screen justify-evenly">
        <div className="flex justify-center items-center">
          <img
            className="h-[50%] w-auto rounded-full border-4 border-[#A5AC8C]"
            src="https://i.postimg.cc/8Ph92TDz/perfil.jpg"
            alt="Denise_Aguirre"
          />
        </div>
        <div className="justify-center flex flex-col text-start gap-3">
          <h1 className="text-5xl">DENISE AGUIRRE</h1>
          <p>Desarrolladora Full Stack MERN</p>
          <DownloadButton />
        </div>
        
      </div>
    </>
  );
}

export default Hero;
