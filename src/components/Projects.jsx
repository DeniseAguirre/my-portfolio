import projects from "../data/projects.json";
import VideoCard from "./VideoCard";

export default function Projects() {
  const sortedProjects = projects.sort((a, b) => {
    return new Date(b.datetime) - new Date(a.datetime);
  });

  return (
    <div id="projects" className="py-8 sm:py-16">
      <div className="mx-auto max-w-2xl ">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-8">
          Projects
        </h2>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <VideoCard />
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {sortedProjects.map((project) => (
            <article
              key={project.id}
              className="flex max-w-xl flex-col items-start justify-between border border-gray-200 p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={project.datetime} className="text-gray-500">
                  {project.date}
                </time>

                <a
                  href={project.category.href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {project.category.title}
                </a>
              </div>

              <div className="group relative">
                <img
                  className="object-contain w-full my-4 h-48 rounded-lg bg-gray-50"
                  src={project.image}
                  alt=""
                />
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={project.href} target="_blank" rel="noreferrer">
                    <span className="absolute inset-0" />
                    {project.title}
                  </a>
                </h3>

                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={project.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a
                      href={project.author.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="absolute inset-0" />
                      {project.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{project.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
