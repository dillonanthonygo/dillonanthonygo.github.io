const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal website built with React and Vite to showcase experience, projects, and contact information.",
    tech: ["React", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/",
    demoUrl: "#",
  },
  {
    title: "Task Tracker App",
    description:
      "A full-stack task management app with CRUD features, filtering, and status tracking for day-to-day productivity.",
    tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/",
    demoUrl: "#",
  },
  {
    title: "Data Dashboard",
    description:
      "An interactive dashboard that visualizes key metrics with charts and sortable tables for fast analysis.",
    tech: ["React", "Chart.js", "REST APIs"],
    githubUrl: "https://github.com/",
    demoUrl: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-24 flex items-center scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-slate-200/90 bg-white/85 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-blue-300/60 hover:shadow-blue-500/10"
            >
              <h3 className="text-xl font-semibold mb-3 text-slate-800">{project.title}</h3>
              <p className="text-slate-600 mb-5 text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={`${project.title}-${item}`}
                    className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  GitHub
                </a>
                <a
                  href={project.demoUrl}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
