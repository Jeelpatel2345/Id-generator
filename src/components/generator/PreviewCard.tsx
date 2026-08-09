import BuilderCard from "../card/BuilderCard";
import ActionButtons from "./ActionButtons";

const PreviewCard = () => {
    return (
        <div
            className="
                rounded-3xl
                border
                border-white/10
                bg-[#0A0F1A]
                p-5
                sm:p-8
            "
        >

            {/* PREVIEW HEADER */}

            <div className="mb-8">

                <div className="flex items-center justify-between">

                    <div>

                        <h2 className="text-xl font-bold text-white sm:text-2xl">
                            Live Preview
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Your Builder Identity updates in real time.
                        </p>

                    </div>

                    <div
                        className="
                            hidden
                            rounded-full
                            border
                            border-[#39FF14]/20
                            bg-[#39FF14]/10
                            px-3
                            py-1
                            sm:block
                        "
                    >
                        <span className="text-xs font-medium text-[#39FF14]">
                            LIVE
                        </span>
                    </div>

                </div>

            </div>


            {/* BUILDER CARD PREVIEW */}

            <div
                className="
                    flex
                    min-h-[500px]
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.06),transparent_55%)]
                    px-2
                    py-8
                    sm:py-12
                "
            >

                <BuilderCard />

            </div>


            {/* DOWNLOAD */}

            <div className="mt-6">

                <ActionButtons />

            </div>

        </div>
    );
};

export default PreviewCard;