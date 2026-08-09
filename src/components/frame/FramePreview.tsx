import useGenerator from "../../hooks/useGenerator";
import FrameActions from "./FrameActions";

const FramePreview = () => {
    const { data } = useGenerator();

    return (
        <div className="rounded-3xl border border-[#39FF14]/20 bg-[#0A0F1A] p-5 sm:p-8">

            {/* HEADER */}

            <div className="mb-8">
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                    Live Preview
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Your profile frame updates automatically.
                </p>
            </div>


            {/* PREVIEW */}

            <div
                id="frame-export"
                className="
        flex
        min-h-[520px]
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        bg-[#070B12]
        p-8
    "
            >

                {/* THIS IS THE ACTUAL IMAGE TO EXPORT */}

                <div
                    id="frame-export"
                    className="relative"
                >

                    {/* MAIN PHOTO */}

                    <div
                        className="
                            relative
                            h-64
                            w-64
                            overflow-hidden
                            rounded-full
                            bg-[#111827]
                            sm:h-80
                            sm:w-80
                        "
                    >

                        {data.image ? (

                            <img
                                src={data.image}
                                alt="Profile"
                                className="
                                    h-full
                                    w-full
                                    object-cover
                                "
                            />

                        ) : (

                            <div className="flex h-full items-center justify-center">

                                <span
                                    className="
                                        text-xs
                                        font-medium
                                        tracking-[0.2em]
                                        text-slate-500
                                    "
                                >
                                    UPLOAD PHOTO
                                </span>

                            </div>

                        )}

                    </div>


                    {/* OUTER NEON FRAME */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-[-12px]
                            rounded-full
                            border-[7px]
                            border-[#39FF14]
                            shadow-[0_0_30px_rgba(57,255,20,0.35)]
                        "
                    />


                    {/* SECOND FRAME */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-[-22px]
                            rounded-full
                            border
                            border-[#39FF14]/30
                        "
                    />


                    {/* TOP LABEL */}

                    <div
                        className="
                            absolute
                            -top-16
                            left-1/2
                            -translate-x-1/2
                            whitespace-nowrap
                            rounded-full
                            border
                            border-[#39FF14]/30
                            bg-[#0A0F1A]
                            px-5
                            py-2
                        "
                    >

                        <span
                            className="
                                text-[10px]
                                font-bold
                                tracking-[0.2em]
                                text-[#39FF14]
                            "
                        >
                            HACKER HOUSE
                        </span>

                    </div>


                    {/* BOTTOM LABEL */}

                    <div
                        className="
                            absolute
                            -bottom-16
                            left-1/2
                            -translate-x-1/2
                            whitespace-nowrap
                            rounded-full
                            border
                            border-[#39FF14]/30
                            bg-[#0A0F1A]
                            px-5
                            py-2
                        "
                    >

                        <span
                            className="
                                text-[10px]
                                font-bold
                                tracking-[0.2em]
                                text-white
                            "
                        >
                            HH GOA 2026
                        </span>

                    </div>

                </div>

            </div>


            {/* FRAME INFORMATION */}

            <div className="mt-5 grid grid-cols-3 gap-3">

                <div className="rounded-xl bg-[#111827] p-3 text-center">

                    <p className="text-xs text-slate-500">
                        FORMAT
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                        PFP
                    </p>

                </div>


                <div className="rounded-xl bg-[#111827] p-3 text-center">

                    <p className="text-xs text-slate-500">
                        FRAME
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#39FF14]">
                        HH GOA
                    </p>

                </div>


                <div className="rounded-xl bg-[#111827] p-3 text-center">

                    <p className="text-xs text-slate-500">
                        OUTPUT
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                        PNG
                    </p>

                </div>

            </div>


            {/* ACTION BUTTONS */}

            <FrameActions />

        </div>
    );
};

export default FramePreview;