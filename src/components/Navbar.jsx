import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 z-40 w-full border-b border-slate-200/90 bg-white/80 shadow-sm shadow-slate-200/50 backdrop-blur-md">
            <div className="mx-auto flex h-16 w-full max-w-none items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-14">
                <a href="#home" className="font-mono text-xl font-bold tracking-tight text-slate-800 transition-colors hover:text-blue-600 shrink-0"> DG </a>

                {/* Mobile */}
                <div className="relative z-40 flex h-5 w-7 shrink-0 cursor-pointer items-center justify-end text-slate-600 transition-colors hover:text-blue-600 md:hidden" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Open menu">
                    &#9776;
                </div>

                {/* Desktop — sits at the right edge of the full-width banner */}
                <div className="hidden md:flex items-center gap-8 lg:gap-10">
                    <a href="#home" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"> Home </a>
                    <a href="#about" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"> About </a>
                    <a href="#projects" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"> Projects </a>
                    <a href="#contact" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"> Contact </a>
                </div>
            </div>
        </nav>
    );
}