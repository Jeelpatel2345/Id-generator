import { useSearchParams } from "react-router-dom";

import { GeneratorProvider } from "../../context/GeneratorContext";

import GeneratorLayout from "../../components/generator/GeneratorLayout";
import UploadCard from "../../components/generator/UploadCard";
import PreviewCard from "../../components/generator/PreviewCard";

import FrameCard from "../../components/frame/FrameCard";
import BuilderDetailsPanel from "../../components/card/BuilderDetails"; 
const Generator = () => {
    const [searchParams] = useSearchParams();

    const mode = searchParams.get("mode");

    const isFrameMode = mode === "frame";

    return (
        <GeneratorProvider>

            <main className="min-h-screen bg-[#04070D] text-white">

                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">

                    {/* PAGE HEADER */}

                    <h1 className="text-3xl font-bold sm:text-4xl">
                        {isFrameMode
                            ? "Profile Frame Generator"
                            : "Builder ID Generator"}
                    </h1>

                    <p className="mt-2 mb-8 text-sm text-slate-400 sm:text-base">
                        {isFrameMode
                            ? "Create your custom Hacker House profile frame."
                            : "Create your personalized Builder ID Card."}
                    </p>


                    {/* FRAME MODE */}

                    {isFrameMode ? (

                        <FrameCard />

                    ) : (

                        /* BUILDER MODE */

                        <GeneratorLayout
                            left={
                                <div className="space-y-5">
                                    <UploadCard />
                                    <BuilderDetailsPanel />
                                </div>
                            }
                            right={<PreviewCard />}
                        />

                    )}

                </div>

            </main>

        </GeneratorProvider>
    );
};

export default Generator;