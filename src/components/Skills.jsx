import { Chip, Stack } from "@mui/material";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiTrello,
  SiPostman,
  SiFigma,
  SiRedux,
  SiBootstrap,
  SiTailwindcss,
  SiAxios,
  SiMongoose,
  SiGithub,
  SiPostgresql,
  SiTypescript,
  SiClickup,
  SiNestjs,
  SiNextdotjs,
  SiCypress,
  SiJest,
} from "react-icons/si";
function Skills() {
  return (
    <div id="skills" className="py-8 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center m-4">
        Skills
      </h1>
      <div className="flex flex-col justify-center">
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          mt={2}
        >
          <Chip icon={<SiHtml5 />} label="HTML" />
          <Chip icon={<SiCss3 />} label="CSS" />
          <Chip icon={<SiJavascript />} label="JavaScript" />
          <Chip icon={<SiReact />} label="React.js" />
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          mt={2}
        >
          <Chip icon={<SiMongodb />} label="MongoDB" />
          <Chip icon={<SiNodedotjs />} label="Node.js" />
          <Chip icon={<SiExpress />} label="Express" />
          <Chip icon={<SiRedux />} label="Redux" />
          <Chip icon={<SiNestjs />} label="NestJS" />
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          mt={2}
        >
          <Chip icon={<SiBootstrap />} label="Bootstrap" />
          <Chip icon={<SiTailwindcss />} label="Tailwind" />
          <Chip icon={<SiAxios />} label="Axios" />
          <Chip icon={<SiMongoose />} label="Mongoose" />
          <Chip icon={<SiGithub />} label="GitHub" />
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          mt={2}
        >
          <Chip icon={<SiTrello />} label="Trello" />
          <Chip icon={<SiPostman />} label="Postman" />
          <Chip icon={<SiFigma />} label="Figma" />
          <Chip icon={<SiPostgresql />} label="PostgreSQL" />
          <Chip icon={<SiTypescript />} label="Typescript" />
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          mt={2}
        >
          <Chip icon={<SiClickup />} label="ClickUp" />

          <Chip icon={<SiNextdotjs />} label="NextJs" />
          <Chip icon={<SiCypress />} label="Cypress" />
          <Chip icon={<SiJest />} label="Jest" />
        </Stack>
      </div>
    </div>
  );
}

export default Skills;
