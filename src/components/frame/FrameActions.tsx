import { useState } from "react";
import { Download, Sparkles } from "lucide-react";
import { toPng } from "html-to-image";
import useGenerator from "../../hooks/useGenerator";

const FrameActions = ({ onGenerated }: { onGenerated: () => void }) => {
    const { data } = useGenerator();

    const [generating, setGenerating] = useState(false);
    const [downloading, setDownloading] = useState(false);

    const waitForImages = async (element: HTMLElement) => {
        const images = Array.from(
            element.querySelectorAll("img")
        );

        await Promise.all(
            images.map(
                (img) =>
                    new Promise<void>((resolve, reject) => {
                        if (img.complete && img.naturalWidth > 0) {
                            resolve();
                            return;
                        }

                        img.onload = () => resolve();
                        img.onerror = (event) => {
                            console.error("Image loading error:", event);
                            reject(event);
                        };
                    })
            )
        );
    };

    const generatePreview = async () => {
        if (!data.image) {
            alert("Please upload an image first.");
            return;
        }

        setGenerating(true);

        await new Promise((resolve) =>
            setTimeout(resolve, 700)
        );

        onGenerated();
        setGenerating(false);
    };

    const downloadPng = async () => {
        const element = document.getElementById("frame-export");

        if (!element) {
            alert("Frame preview not found.");
            return;
        }

        if (!data.image) {
            alert("Please upload an image first.");
            return;
        }

        try {
            setDownloading(true);

            // Uploaded images are stored as data URLs, so they are safe to export directly.
            await waitForImages(element);

            await new Promise<void>((resolve) => {
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        resolve();
                    });
                });
            });

            const pngDataUrl = await toPng(element, {
                pixelRatio: 3,
                backgroundColor: "#070B12",
            });
            const link = document.createElement("a");

            link.download = "HH-GOA-2026-PFP.png";
            link.href = pngDataUrl;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (error) {

            console.error(
                "PNG generation failed:",
                error
            );

            alert(
                "PNG generation failed.\n\n" +
                "Open the browser console (F12) and send me the red error."
            );

        } finally {
            setDownloading(false);
        }
    };

    return (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">

            {/* GENERATE FRAME */}

            <button
                type="button"
                onClick={generatePreview}
                disabled={generating}
                className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#39FF14]
                    px-5
                    py-4
                    font-bold
                    text-black
                    transition
                    hover:shadow-[0_0_30px_rgba(57,255,20,0.35)]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                "
            >
                <Sparkles size={18} />

                {generating
                    ? "Generating..."
                    : "Generate Frame"}
            </button>


            {/* DOWNLOAD PNG */}

            <button
                type="button"
                onClick={downloadPng}
                disabled={downloading || !data.image}
                className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-[#39FF14]/30
                    bg-[#0A0F1A]
                    px-5
                    py-4
                    font-semibold
                    text-[#39FF14]
                    transition
                    hover:border-[#39FF14]
                    hover:bg-[#39FF14]/10
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                "
            >
                <Download size={18} />

                {downloading
                    ? "Preparing..."
                    : "Download PNG"}
            </button>

        </div>
    );
};

export default FrameActions;
