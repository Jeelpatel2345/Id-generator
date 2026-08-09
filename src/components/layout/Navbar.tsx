import logo from "../../assets/logo.png";
const Navbar = () => {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="HH Goa"
                        className="h-10 w-10 object-contain"
                    />

                    <span className="text-xl font-bold text-white">
                        HH Goa 2026
                    </span>
                </div>

                <nav className="hidden gap-10 text-slate-300 md:flex">
                    <a href="#">Home</a>
                    <a href="#">Features</a>
                    <a href="#">Generator</a>
                </nav>

                <button className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700">
                    Get Started
                </button>

            </div>
        </header>
    );
};

export default Navbar;