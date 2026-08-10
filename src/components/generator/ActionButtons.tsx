import { useState } from "react";
import { toPng } from "html-to-image";

import {
    Download,
    Loader2,
    Sparkles,
} from "lucide-react";

import useGenerator from "../../hooks/useGenerator";

const ActionButtons = () => {

    const {
        data,
        isGenerated,
        setIsGenerated,
    } = useGenerator();

    const [isGenerating, setIsGenerating] =
        useState(false);

    const generatePreview = () => {

        if (!data.image) {
            return;
        }

        setIsGenerated(true);
    };

    const generatePNG = async () => {

        const card = document.getElementById(
            "builder-card"
        );

        if (!card) {
            console.error(
                "Builder card not found."
            );
            return;
        }

        setIsGenerating(true);

        try {
            // html2canvas can otherwise capture before the web fonts are ready,
            // which makes downloaded text look soft or inconsistent.
            await document.fonts?.ready;

            const png = await toPng(card, {
                pixelRatio: 3,
                cacheBust: true,
                backgroundColor: "#0A0F1A",
            });

            const response = await fetch(png);
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");

            const safeName =
                data.name
                    ?.trim()
                    .replace(
                        /[^a-zA-Z0-9]+/g,
                        "-"
                    )
                    .replace(
                        /^-+|-+$/g,
                        ""
                    ) || "builder";

            link.href = url;

            link.download = `HH-Goa-2026-${safeName}-Builder-Card.png`;

            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);

            URL.revokeObjectURL(url);

            setIsGenerating(false);

        } catch (error) {

            console.error(
                "PNG generation failed:",
                error
            );

            setIsGenerating(false);
        }
    };

    return (
        <div className="space-y-3">

            {/* GENERATE PREVIEW */}

            {!isGenerated && (
                <button
                    type="button"
                    onClick={generatePreview}
                    disabled={!data.image}
                    className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-[#39FF14]/30
                    bg-[#39FF14]
                    px-5
                    py-3.5
                    text-sm
                    font-bold
                    text-black
                    shadow-[0_0_20px_rgba(57,255,20,0.12)]
                    transition-all
                    duration-200
                    hover:brightness-105
                    hover:shadow-[0_0_30px_rgba(57,255,20,0.35)]
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                    disabled:hover:shadow-none
                "
                >
                    <Sparkles size={18} />

                    Generate Preview
                </button>
            )}


            {/* DOWNLOAD */}

            {isGenerated && (
                <>
                    <button
                        type="button"
                        onClick={generatePNG}
                        disabled={isGenerating}
                        className="
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-[#39FF14]/30
                        bg-[#39FF14]
                        px-5
                        py-3.5
                        text-sm
                        font-bold
                        text-black
                        shadow-[0_0_20px_rgba(57,255,20,0.12)]
                        transition-all
                        duration-200
                        hover:brightness-105
                        hover:shadow-[0_0_30px_rgba(57,255,20,0.35)]
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                    "
                    >

                        {isGenerating ? (
                            <>
                                <Loader2
                                    size={18}
                                    className="animate-spin"
                                />

                                Generating PNG...
                            </>
                        ) : (
                            <>
                                <Download size={18} />

                                Download Builder Card
                            </>
                        )}

                    </button>

                    <p className="text-center text-xs text-slate-500">
                        High-resolution PNG • Ready to share
                    </p>
                </>
            )}

        </div>
    );
};

export default ActionButtons;
