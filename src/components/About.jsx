const frontendSkills = ["React", "JavaScript", "HTML & CSS", "Tailwind CSS", "Vite"];
const otherSkills = ["Git", "GitHub", "REST APIs", "Agile"];

export const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen scroll-mt-20 items-center justify-center py-24"
    >
      <div className="mx-auto w-full max-w-3xl px-4">
        <h2 className="mb-10 text-center text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
          About Me
        </h2>

        {/* Intro — single readable block */}
        <div className="mb-8 rounded-2xl border border-slate-200/90 bg-white/85 p-7 shadow-md shadow-slate-200/50 backdrop-blur-sm sm:p-8">
          <p className="text-[15px] leading-relaxed text-slate-700 sm:text-base">
            I&apos;m a recent graduate from the{" "}
            <span className="font-medium text-slate-800">University of California, Los Angeles</span>{" "}
            Master&apos;s program, focused on building reliable, user-friendly software. I enjoy
            turning ideas into clean interfaces and well-structured code.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            I&apos;m actively looking for a{" "}
            <span className="text-slate-600">Software Engineering</span> role where I can learn from
            a strong team and contribute to products people use every day.
          </p>
        </div>

        {/* Skills — compact pills in two small panels */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          <div className="rounded-xl border border-slate-200/90 bg-white/70 p-4 shadow-sm backdrop-blur-sm sm:p-5">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {frontendSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50/90 px-2 py-0.5 text-[11px] font-medium text-slate-700 shadow-[0_1px_0_rgba(15,23,42,0.04)] sm:text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200/90 bg-white/70 p-4 shadow-sm backdrop-blur-sm sm:p-5">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Tools & more
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {otherSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50/90 px-2 py-0.5 text-[11px] font-medium text-slate-700 shadow-[0_1px_0_rgba(15,23,42,0.04)] sm:text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
