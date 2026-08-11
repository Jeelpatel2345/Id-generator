import BuilderCard from "../card/BuilderCard";
import BuilderCardBack from "../card/BuilderCardBack";
import ActionButtons from "./ActionButtons";
import { motion } from "framer-motion";
import useGenerator from "../../hooks/useGenerator";

export const PreviewCard = () => {
    const { isGenerated } = useGenerator();
    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="
                rounded-3xl
                border
                border-[#39FF14]/20
                bg-[#0A0F1A]
                mx-auto
                w-full
                max-w-2xl
                p-4
                sm:p-6
                lg:p-8
            "
        >
            {/* PREVIEW HEADER */}
            <div className="mb-6">
                <div className="flex items-center justify-between gap-4">
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
                            shrink-0
                            rounded-full
                            border
                            border-[#39FF14]/20
                            bg-[#39FF14]/10
                            px-3
                            py-1
                            flex
                            items-center
                            gap-2
                        "
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14] shadow-[0_0_8px_#39FF14]"></span>
                        </span>
                        <span className="text-xs font-medium text-[#39FF14]">
                            LIVE
                        </span>
                    </div>
                </div>
            </div>

            {/* BUILDER CARD PREVIEW */}
            <div className="relative flex w-full items-center justify-center overflow-hidden rounded-2xl px-0 py-5 sm:px-4 sm:py-8">
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.1),transparent_60%)] pointer-events-none"
                />
                
                <div id="builder-card-export" className="relative z-10 flex w-full flex-col items-center justify-center gap-5 sm:gap-6">
                    <BuilderCard />
                    {isGenerated && <BuilderCardBack />}
                </div>
            </div>

            {/* DOWNLOAD */}
            <div className="mt-6">
                <ActionButtons />
            </div>
        </motion.div>
    );
};

export default PreviewCard;
