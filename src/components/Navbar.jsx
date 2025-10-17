import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(255,219,220,.8)] backdrop-blue-lg border-b border-black/10 shadow-lg">
            <div className="max-2-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-black"> logo </a>
                
                {/* Mobile */}
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>

                {/* Desktop */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-black-300 hove:text-black transtion-colors"> Home </a>
                    <a href="#about" className="text-black-300 hove:text-black transtion-colors"> About </a>
                    <a href="#projects" className="text-black-300 hove:text-black transtion-colors"> Projects </a>
                    <a href="#contact" className="text-black-300 hove:text-black transtion-colors"> Contact </a>
                </div>
                </div>
            </div>
        </nav>
    );
}