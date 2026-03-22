export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative scroll-mt-20 pt-16">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-blue-400/20 blur-[100px]" />
                <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-sky-300/25 blur-[80px]" />
            </div>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-700 to-sky-500 bg-clip-text text-transparent leading-tight">
                    Hi, I'm Dillon Go!
                </h1>
                <p className="text-slate-600 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
                    Welcome to my online portfolio. I am a recent graduate from the Masters Program at the University of California, Los Angeles and I am actively seeking an 
                    opportunity in a Software Engineering role.
                </p>
                <div className="mx-auto flex w-full max-w-xl flex-col gap-4 sm:max-w-2xl sm:flex-row sm:justify-stretch sm:gap-4">
                    <a href="#projects" className="flex-1 rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500 sm:min-w-0">
                        View Projects
                    </a>
                    <a href="#contact" className="flex-1 rounded-lg border border-slate-300 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-blue-400/60 hover:bg-white sm:min-w-0">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}