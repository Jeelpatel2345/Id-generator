import { useState } from "react";
import html2canvas from "html2canvas";

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

            const canvas =
                await html2canvas(card, {
                    scale: 4,

                    useCORS: true,

                    allowTaint: false,

                    backgroundColor: "#0B1220",

                    logging: false,

                    imageTimeout: 15000,

                    removeContainer: true,
                });

            canvas.toBlob(
                (blob) => {

                    if (!blob) {

                        console.error(
                            "Could not create PNG."
                        );

                        setIsGenerating(false);

                        return;
                    }

                    const url =
                        URL.createObjectURL(blob);

                    const link =
                        document.createElement("a");

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

                    link.download =
                        `HH-Goa-2026-${safeName}-Builder-Card.png`;

                    document.body.appendChild(link);

                    link.click();

                    document.body.removeChild(link);

                    URL.revokeObjectURL(url);

                    setIsGenerating(false);
                },
                "image/png",
                1
            );

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
                        bg-[#39FF14]
                        py-4
                        font-bold
                        text-black
                        transition
                        hover:shadow-[0_0_30px_rgba(57,255,20,0.45)]
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                    "
                >
                    <Sparkles size={19} />

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
                            bg-[#39FF14]
                            py-4
                            font-bold
                            text-black
                            transition
                            hover:shadow-[0_0_30px_rgba(57,255,20,0.45)]
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                        "
                    >

                        {isGenerating ? (
                            <>
                                <Loader2
                                    size={19}
                                    className="animate-spin"
                                />

                                Generating PNG...
                            </>
                        ) : (
                            <>
                                <Download size={19} />

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