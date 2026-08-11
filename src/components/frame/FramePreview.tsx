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
                id="frame-preview-surface"
                className="
        flex
        min-h-[500px]
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
                    className="relative h-[330px] w-[330px] sm:h-[405px] sm:w-[405px]"
                >

                    {/* MAIN PHOTO */}

                    <div
                        className="
                            relative
                            absolute
                            left-1/2
                            top-1/2
                            h-60
                            w-60
                            -translate-x-1/2
                            -translate-y-1/2
                            overflow-hidden
                            rounded-full
                            bg-[#111827]
                            sm:h-72
                            sm:w-72
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
                            left-1/2
                            top-1/2
                            h-[272px]
                            w-[272px]
                            -translate-x-1/2
                            -translate-y-1/2
                            sm:h-[316px]
                            sm:w-[316px]
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
                            left-1/2
                            top-1/2
                            h-[292px]
                            w-[292px]
                            -translate-x-1/2
                            -translate-y-1/2
                            sm:h-[340px]
                            sm:w-[340px]
                            rounded-full
                            border
                            border-[#39FF14]/30
                        "
                    />


                    <svg viewBox="0 0 330 330" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible sm:hidden" aria-hidden="true">
                        <defs><path id="goa-frame-arc-mobile" d="M 32,166 A 133,133 0 0,1 298,166" /></defs>
                        <text fill="#39FF14" className="text-[11px] font-bold tracking-[0.32em]"><textPath href="#goa-frame-arc-mobile" startOffset="50%" textAnchor="middle">HACKER HOUSE GOA 2026</textPath></text>
                    </svg>

                    <svg viewBox="0 0 405 405" className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible sm:block" aria-hidden="true">
                        <defs><path id="goa-frame-arc-desktop" d="M 32,204 A 170,170 0 0,1 373,204" /></defs>
                        <text fill="#39FF14" className="text-[12px] font-bold tracking-[0.35em]"><textPath href="#goa-frame-arc-desktop" startOffset="50%" textAnchor="middle">HACKER HOUSE GOA 2026</textPath></text>
                    </svg>


                    {/* BOTTOM LABEL */}

                    <div
                        className="
                            absolute
                            bottom-0
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
