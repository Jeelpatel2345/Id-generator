import useGenerator from "../../hooks/useGenerator";

import BuilderHeader from "./BuilderHeader";
import BuilderProfile from "./BuilderProfile";
import BuilderFooter from "./BuilderFooter";

const BuilderCard = () => {
    const { data, isGenerated } = useGenerator();

    return (
        <div
            id="builder-card"
            className="
                w-full
                mx-auto
                flex
                max-w-[390px]
                aspect-[4/5]
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-[#0B6E75]/25
                bg-[#07131A]
                shadow-[0_20px_60px_rgba(18,59,69,0.15)]
                relative
            "
        >

            {isGenerated && (
                <>
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(11,110,117,0.16),transparent_30%),radial-gradient(circle_at_100%_100%,rgba(246,201,69,0.22),transparent_32%)]" />
                    <div className="pointer-events-none absolute -right-16 top-24 h-40 w-40 rounded-full border border-[#0B6E75]/15" />
                    <div className="pointer-events-none absolute -left-20 bottom-16 h-36 w-36 rounded-full border border-[#F6C945]/25" />
                </>
            )}

            {/* HEADER */}

            <div className="relative z-10 border-b border-white/10 px-4 py-4 sm:px-6 sm:py-5">
                <BuilderHeader />
            </div>


            {/* PROFILE PHOTO */}

            <div className="relative z-10 px-4 pt-5 sm:px-6 sm:pt-6">
                <BuilderProfile />
            </div>


            {/* BUILDER INFORMATION */}

            <div className="relative z-10 px-4 pb-5 pt-4 text-center sm:px-6 sm:pb-6">

                <h2
                    className="
                        break-words
                        text-xl
                        font-bold
                        leading-tight
                        text-white
                        sm:text-2xl
                    "
                >
                    {data.name || "Your Name"}
                </h2>

                <p
                    className="
                        mt-1
                        text-base
                        font-medium
                        text-[#39FF14]
                        sm:text-lg
                    "
                >
                    {data.role}
                </p>

                <p
                    className="
                        mt-2
                        break-all
                        text-sm
                        text-slate-400
                        sm:text-base
                    "
                >
                    {data.username || "@username"}
                </p>

                <div className="mt-4 flex justify-center gap-6 text-left">
                    <div><p className="text-[9px] tracking-[0.16em] text-slate-500">BUILDER ID</p><p className="mt-1 text-xs font-bold text-white">{data.builderId}</p></div>
                    <div><p className="text-[9px] tracking-[0.16em] text-slate-500">EVENT</p><p className="mt-1 text-xs font-bold text-white">HH GOA 2026</p></div>
                </div>


                {/* STATUS */}

                {!isGenerated && <div className="mt-3 flex justify-center">

                    <div
                        className="
                            inline-flex
                            items-center
                            gap-3
                            rounded-full
                            border
                            border-[#39FF14]/30
                            bg-[#39FF14]/10
                            px-6
                            py-2
                        "
                    >

                        <span
                            className="
                                h-2.5
                                w-2.5
                                rounded-full
                                bg-[#39FF14]
                                shadow-[0_0_10px_rgba(57,255,20,0.8)]
                            "
                        />

                        <span
                            className="
                                text-xs
                                font-bold
                                tracking-[0.22em]
                                text-[#39FF14]
                            "
                        >
                            BUILDING
                        </span>

                    </div>

                </div>}

            </div>


            {/* FOOTER */}

            <div
                className="
                    relative z-10
                    border-t
                    border-white/10
                    px-4
                    py-3
                    sm:px-6
                "
            >
                <BuilderFooter />
            </div>

        </div>
    );
};

export default BuilderCard;
