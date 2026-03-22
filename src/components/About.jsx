export const About = () => {

    return <section id="about" className="min-h-screen flex items-center justify-center py-24 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 w-full">
            <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent text-center">
                About Me
            </h2>
            <div className="rounded-2xl border border-slate-200/90 bg-white/80 p-8 shadow-lg shadow-slate-200/60 backdrop-blur-sm transition-all hover:border-slate-300">
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Something about yourself...
                </p>

            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-slate-200/90 bg-white/70 p-6 shadow-md shadow-slate-200/40 backdrop-blur-sm transition-all hover:border-blue-200">
                    <h3 className="text-xl font-bold mb-4 text-slate-800"> Frontend Skills </h3>
                    <div className="flex flex-wrap gap-2">

                    </div>

                </div>
            </div>
        </div>
    </section>
};