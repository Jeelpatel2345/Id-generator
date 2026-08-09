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
                w-full
                max-w-[390px]
                overflow-hidden
                rounded-3xl
                border
                border-[#39FF14]/20
                bg-[#0A0F1A]
                shadow-[0_0_40px_rgba(57,255,20,0.08)]
            "
        >

            {/* HEADER */}

            <div className="px-5 py-5 sm:px-6 sm:py-6">
                <BuilderHeader />
            </div>


            {/* PROFILE PHOTO */}

            <div className="px-5 pt-5 sm:px-6 sm:pt-7">
                <BuilderProfile />
            </div>


            {/* BUILDER INFORMATION */}

            <div className="px-5 pb-6 pt-3 text-center sm:px-6 sm:pb-8 sm:pt-4">

                <h2
                    className="
                        break-words
                        text-2xl
                        font-bold
                        leading-tight
                        text-white
                        sm:text-3xl
                    "
                >
                    {data.name || "Your Name"}
                </h2>

                <p
                    className="
                        mt-2
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


                {/* STATUS */}

                <div className="mt-5 flex justify-center">

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

                </div>

            </div>


            {/* FOOTER */}

            <div
                className="
                    border-t
                    border-white/10
                    px-5
                    py-4
                    sm:px-6
                "
            >
                <BuilderFooter />
            </div>

        </div>
    );
};

export default BuilderCard;