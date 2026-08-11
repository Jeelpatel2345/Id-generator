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
                        h-12
                        w-12
                        shrink-0
                        rounded-xl
                        border
                        border-[#39FF14]/25
                        bg-[#08733A]
                        p-1
                        object-contain
                        sm:h-12
                        sm:w-12
                    "
                    decoding="sync"
                    draggable={false}
                />

                <div className="min-w-0 text-left">

                    <h3
                        className="
                            text-xs
                            font-bold
                            leading-normal
                            tracking-wide
                            text-white
                            whitespace-nowrap
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
                    px-2.5
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
