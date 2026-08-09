import useGenerator from "../../hooks/useGenerator";

import BuilderHeader from "./BuilderHeader";
import BuilderProfile from "./BuilderProfile";
import BuilderFooter from "./BuilderFooter";

const BuilderCard = () => {
    const { data } = useGenerator();

    return (
        <div
            id="builder-card"
            className="
                relative
                w-full
                max-w-sm
                overflow-hidden
                rounded-3xl
                border
                border-[#39FF14]/30
                bg-[#0A0F1A]
                shadow-[0_0_45px_rgba(57,255,20,0.10)]
            "
        >

            {/* TOP GLOW */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0
                    h-32
                    w-64
                    -translate-x-1/2
                    rounded-full
                    bg-[#39FF14]/10
                    blur-3xl
                "
            />


            {/* HEADER */}

            <div className="relative z-10">
                <BuilderHeader />
            </div>


            {/* DIVIDER */}

            <div className="mx-6 h-px bg-white/10" />


            {/* PROFILE */}

            <div className="relative z-10 py-8">
                <BuilderProfile />
            </div>


            {/* BUILDER INFORMATION */}

            <div className="relative z-10 px-6 pb-8 text-center">

                <h2 className="text-2xl font-bold tracking-tight text-white">
                    {data.name || "Your Name"}
                </h2>

                <p className="mt-2 text-sm font-semibold tracking-wide text-[#39FF14]">
                    {data.role || "Builder"}
                </p>

                <p className="mt-2 text-sm text-slate-400">
                    {data.username || "@username"}
                </p>

            </div>


            {/* STATUS */}

            <div className="flex items-center justify-center pb-6">

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-[#39FF14]/30
                        bg-[#39FF14]/5
                        px-4
                        py-2
                    "
                >

                    <span
                        className="
                            h-2
                            w-2
                            rounded-full
                            bg-[#39FF14]
                            shadow-[0_0_10px_rgba(57,255,20,0.8)]
                        "
                    />

                    <span
                        className="
                            text-[10px]
                            font-bold
                            tracking-[0.25em]
                            text-[#39FF14]
                        "
                    >
                        BUILDING
                    </span>

                </div>

            </div>


            {/* FOOTER */}

            <div className="border-t border-white/10">
                <BuilderFooter />
            </div>

        </div>
    );
};

export default BuilderCard;