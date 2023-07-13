import React from "react";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiMongodb, SiNodedotjs, SiExpress, SiTrello, SiPostman, SiFigma, SiRedux, SiBootstrap, SiTailwindcss, SiAxios, SiMongoose, SiGithub } from "react-icons/si";

function Skills() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen">
        <h2>Tecnologías</h2>
        <div className="flex">
          <div className="skill-item">
            <SiHtml5 />
          </div>
          <div className="skill-item">
            <SiCss3 />
          </div>
          <div className="skill-item">
            <SiJavascript/>
          </div>
          <div className="skill-item">
            <SiReact/>
          </div>
          <div className="skill-item">
            <SiMongodb/>
          </div>
          <div className="skill-item">
            <SiNodedotjs/>
          </div>
          <div className="skill-item">
            <SiExpress/>
          </div>
          <div className="skill-item">
            <SiTrello/>
          </div>
          <div className="skill-item">
            <SiPostman/>
          </div>
          <div className="skill-item">
            <SiFigma/>
          </div>
          <div className="skill-item">
            <SiRedux/>
          </div>
          <div className="skill-item">
            <SiBootstrap/>
          </div>
          <div className="skill-item">
            <SiTailwindcss/>
          </div>
          <div className="skill-item">
            <SiAxios/>
          </div>
          <div className="skill-item">
            <SiMongoose/>
          </div>
          <div className="skill-item">
            <SiGithub/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
