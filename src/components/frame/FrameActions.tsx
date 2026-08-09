import { useState } from "react";
import { Download, Sparkles } from "lucide-react";
import { toPng } from "html-to-image";
import useGenerator from "../../hooks/useGenerator";

const FrameActions = () => {
    const { data } = useGenerator();

    const [generating, setGenerating] = useState(false);
    const [downloading, setDownloading] = useState(false);

    // Convert uploaded blob image into a data URL
    const blobToDataUrl = async (blobUrl: string): Promise<string> => {
        const response = await fetch(blobUrl);
        const blob = await response.blob();

        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onloadend = () => {
                if (typeof reader.result === "string") {
                    resolve(reader.result);
                } else {
                    reject(new Error("Could not convert image."));
                }
            };

            reader.onerror = () => {
                reject(new Error("Could not read image."));
            };

            reader.readAsDataURL(blob);
        });
    };

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

            /*
             * STEP 1
             * Convert blob URL to base64/data URL.
             */
            const imageDataUrl = await blobToDataUrl(data.image);

            /*
             * STEP 2
             * Temporarily replace the preview image source.
             */
            const imageElements =
                element.querySelectorAll("img");

            const originalSources: string[] = [];

            imageElements.forEach((img) => {
                originalSources.push(img.src);
                img.src = imageDataUrl;
            });

            /*
             * STEP 3
             * Wait for the converted image to load.
             */
            await waitForImages(element);

            /*
             * STEP 4
             * Allow browser to finish rendering.
             */
            await new Promise<void>((resolve) => {
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        resolve();
                    });
                });
            });

            /*
             * STEP 5
             * Generate PNG.
             */
            const pngDataUrl = await toPng(element, {
                cacheBust: true,
                pixelRatio: 2,
                backgroundColor: "#070B12",
                skipFonts: true,
            });

            /*
             * STEP 6
             * Restore original image source.
             */
            imageElements.forEach((img, index) => {
                img.src = originalSources[index];
            });

            /*
             * STEP 7
             * Download.
             */
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