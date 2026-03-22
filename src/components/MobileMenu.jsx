export const MobileMenu = ({menuOpen, setMenuOpen}) => {


    return (
        <div className={`fixed top-0 left-0 z-50 flex w-full flex-col items-center justify-center bg-slate-100/95 backdrop-blur-lg transition-all duration-300 ease-in-out
        
        ${menuOpen 
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
        `}>
            <button onClick={() => setMenuOpen(false)} 
            className="absolute top-6 right-6 cursor-pointer text-3xl text-slate-500 transition-colors hover:text-blue-600 focus:outline-none"
            aria-label="Close Menu">
                &times;
            </button>
            <a href="#home" 
            onClick={() => setMenuOpen(false)}
            className={`my-4 transform text-2xl font-semibold text-slate-800 transition-transform duration-300 hover:text-blue-600
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}> 
            Home </a>
            <a href="#about" 
            onClick={() => setMenuOpen(false)}
            className={`my-4 transform text-2xl font-semibold text-slate-800 transition-transform duration-300 hover:text-blue-600
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}> 
            About </a>
            <a href="#projects" 
            onClick={() => setMenuOpen(false)}
            className={`my-4 transform text-2xl font-semibold text-slate-800 transition-transform duration-300 hover:text-blue-600
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}> 
            Projects </a>
            <a href="#contact" 
            onClick={() => setMenuOpen(false)}
            className={`my-4 transform text-2xl font-semibold text-slate-800 transition-transform duration-300 hover:text-blue-600
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}> 
            Contact </a>
        </div>
    );
}