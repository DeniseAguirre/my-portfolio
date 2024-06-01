import { Card, CardMedia } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function VideoCard() {
  const { t } = useTranslation();
  const project = t("projects.videoCard", { returnObjects: true });

  return (
    <div className="pb-8 lg:pb-0  m-4 grid lg:grid-cols-2 dark:bg-[#1F1E24] dark:shadow-md dark:shadow-black lg:rounded-2xl">
      <Card className="dark:bg-[#131313]">
        <CardMedia
          component="iframe"
          title="Presentation MindTech App"
          src={project.video}
          style={{ height: 600 }}
          className="lg:rounded-tl-2xl lg:rounded-bl-2xl"
        />
      </Card>

      <div className="mx-8 max-w-2xl">
        <div className="flex items-center gap-x-4 text-xs my-8">
          <time
            dateTime={project.datetime}
            className="text-gray-500 dark:text-white"
          >
            {project.date}
          </time>

          <a
            href="#"
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-200 dark:bg-gray-700 dark:shadow-sm dark:shadow-black"
          >
            {project.category.title}
          </a>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl dark:text-white">
          {project.title}
        </h2>
        <p className="mt-2 text-md leading-8 text-gray-600 dark:text-white">
          {project.description}
        </p>
        <div className="mt-6 flex items-center gap-x-4">
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-green-600 dark:hover:bg-green-500"
          >
            {project.button} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
