import logo from "../../assets/logo.png";

const BuilderHeader = () => {
    return (
        <div className="flex items-center justify-between gap-2 sm:gap-4">

            {/* BRAND */}

            <div className="flex min-w-0 items-center gap-3">

                <img
                    src={logo}
                    alt="Hacker House"
                    className="
                        h-10
                        w-10
                        shrink-0
                        rounded-lg
                        object-cover
                        sm:h-11
                        sm:w-11
                    "
                />

                <div className="min-w-0 text-left">

                    <h3
                        className="
                            truncate
                            text-xs
                            font-bold
                            tracking-wide
                            text-white
                            sm:text-base
                        "
                    >
                        HH GOA 2026
                    </h3>

                    <p className="text-[10px] text-slate-400 sm:text-xs">
                        Builder Identity
                    </p>

                </div>

            </div>


            {/* LEVEL */}

            <div
                className="
                    shrink-0
                    rounded-full
                    border
                    border-[#39FF14]/20
                    bg-[#39FF14]/10
                    px-2
                    py-1.5
                    sm:px-4
                    sm:py-2
                "
            >
                <span
                    className="
                        text-[9px]
                        font-bold
                        tracking-wider
                        text-[#39FF14]
                        sm:text-[10px]
                    "
                >
                    LEVEL 07
                </span>
            </div>

        </div>
    );
};

export default BuilderHeader;
