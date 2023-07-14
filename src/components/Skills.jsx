import React from "react";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiMongodb, SiNodedotjs, SiExpress, SiTrello, SiPostman, SiFigma, SiRedux, SiBootstrap, SiTailwindcss, SiAxios, SiMongoose, SiGithub } from "react-icons/si";

function Skills() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen">
        <h1 className="m-10 text-3xl">Tecnologías</h1>
        <div className="grid grid-cols-4 gap-10 place-items-center">
          <div className="skill-item text-center">
            <SiHtml5 title="HTML 5"/>
            <tool-tip role="tooltip">
              HTML 5
            </tool-tip>
          </div>
          <div className="skill-item">
            <SiCss3 title="CSS 3"/>
          </div>
          <div className="skill-item">
            <SiJavascript title="JavaScript"/>
          </div>
          <div className="skill-item">
            <SiReact title="React.js"/>
          </div>
          <div className="skill-item">
            <SiMongodb title="MongoDB"/>
          </div>
          <div className="skill-item">
            <SiNodedotjs title="Node.js"/>
          </div>
          <div className="skill-item">
            <SiExpress title="Express"/>
          </div>
          <div className="skill-item">
            <SiTrello title="Trello"/>
          </div>
          <div className="skill-item">
            <SiPostman title="Postman"/>
          </div>
          <div className="skill-item">
            <SiFigma title="Figma"/>
          </div>
          <div className="skill-item">
            <SiRedux title="Redux"/>
          </div>
          <div className="skill-item">
            <SiBootstrap title="Bootstrap"/>
          </div>
          <div className="skill-item">
            <SiTailwindcss title="Tailwind"/>
          </div>
          <div className="skill-item">
            <SiAxios title="Axios"/>
          </div>
          <div className="skill-item">
            <SiMongoose title="Mongoose"/>
          </div>
          <div className="skill-item">
            <SiGithub title="GitHub"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
