export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-black to-pink-400 bg-clip-text text-transparent leading-right">
                    Hi, I'm Dillon Go!
                </h1>
                <p className="text-black-400 text-lg mb-8 max-w-lg mx-auto">
                    Welcome to my online portfolio. I am a recent graduate from the Masters Program at the University of California, Los Angeles and I am actively seeking an 
                    opportunity in a Software Engineering role.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-pink-200 text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(249, 180, 244, 0.4)]">
                        View Projects
                    </a>
                    <a href="#Contact" className="border border-pink-200/50 text-black py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(249, 180, 244, 0.4)] hover:bg-pink-pink-500/50">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}