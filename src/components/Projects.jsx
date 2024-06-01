import VideoCard from "./VideoCard";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const projects = t("projects.cards", { returnObjects: true });
  const sortedProjects = projects.sort((a, b) => {
    return new Date(b.datetime) - new Date(a.datetime);
  });

  return (
    <div id="projects" className="py-8 sm:py-16 dark:bg-[#131313]">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-8 dark:text-white lg:pb-8">
          {t("projects.title")}
        </h2>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <VideoCard />
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-neutral-800 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {sortedProjects.map((project) => (
            <article
              key={project.id}
              className="flex max-w-xl flex-col items-start justify-between border border-gray-200 p-8 rounded-lg shadow-lg dark:border-none dark:bg-[#1F1E24] dark:shadow-md dark:shadow-black"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time
                  dateTime={project.datetime}
                  className="text-gray-500 dark:text-white"
                >
                  {project.date}
                </time>

                <a
                  href={project.category.href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-200 dark:bg-gray-700 dark:shadow-sm dark:shadow-black"
                  style={{ fontSize: "0.75rem" }}
                >
                  {project.category.title}
                </a>
              </div>

              <div className="group relative">
                <img
                  className="object-cover w-full my-4 h-48 rounded-lg "
                  src={project.image}
                  alt=""
                />
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-white dark:hover:text-green-500">
                  <a href={project.href} target="_blank" rel="noreferrer">
                    <span className="absolute inset-0" />
                    {project.title}
                  </a>
                </h3>

                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-white">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
