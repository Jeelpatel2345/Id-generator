import logo from "../../assets/logo.png";

const BuilderHeader = () => {
    return (
        <div
            className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                px-6
                py-5
            "
        >
            {/* Brand */}

            <div className="flex items-center gap-3">

                <img
                    src={logo}
                    alt="Hacker House"
                    className="h-10 w-10 rounded-lg object-cover"
                />

                <div>
                    <h3 className="text-sm font-bold tracking-wide text-white">
                        HH GOA 2026
                    </h3>

                    <p className="text-[10px] text-slate-400">
                        Builder Identity
                    </p>
                </div>

            </div>


            {/* Level */}

            <div
                className="
                    rounded-full
                    border
                    border-[#39FF14]/20
                    bg-[#39FF14]/10
                    px-3
                    py-1
                "
            >
                <span
                    className="
                        text-[10px]
                        font-bold
                        tracking-wider
                        text-[#39FF14]
                    "
                >
                    LEVEL 07
                </span>
            </div>

        </div>
    );
};

export default BuilderHeader;