import React from "react";
import DownloadButton from "./DownloadButton";

function Hero() {
  return (
    <>
      <div className="w-fit flex sm:flex-row flex-col h-screen">
        {/* <div className="">
          <img
            className="h-screen"
            src="./public/images/dencompu.jpeg"
            alt="Denise_Aguirre"
          />
        </div> */}
        <div className="justify-center align-start flex flex-col text-start">
          <h1>Denise Aguirre</h1>
          <p>Desarrolladora Full Stack MERN</p>
          <DownloadButton />
        </div>
      </div>
    </>
  );
}

export default Hero;
