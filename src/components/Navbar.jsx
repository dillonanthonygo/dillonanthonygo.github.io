export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(255,219,220,.8)] backdrop-blue-lg border-b border-black/10 shadow-lg">
            <div className="max-2-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-black"> logo </a>
                </div>
            </div>
        </nav>
    );
}