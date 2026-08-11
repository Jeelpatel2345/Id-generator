import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
    Upload,
    RotateCcw,
    Image as ImageIcon,
    X,
} from "lucide-react";
import { motion } from "framer-motion";
import useGenerator from "../../hooks/useGenerator";

export const UploadCard = () => {
    const {
        data,
        setData,
        resetData,
    } = useGenerator();

    const onDrop = useCallback(
        async (acceptedFiles: File[]) => {
            if (!acceptedFiles.length) return;

            const file = acceptedFiles[0];

            // Store an embedded image rather than a temporary blob URL. This
            // keeps the photo available to the PNG renderer on every browser.
            const imageUrl = await new Promise<string>((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(String(reader.result));
                reader.onerror = () => reject(reader.error);
                reader.readAsDataURL(file);
            });

            setData((previous) => ({
                ...previous,
                image: imageUrl,
            }));
        },
        [setData]
    );

    const {
        getRootProps,
        getInputProps,
        isDragActive,
    } = useDropzone({
        accept: {
            "image/png": [],
            "image/jpeg": [],
            "image/jpg": [],
            "image/webp": [],
        },
        maxFiles: 1,
        multiple: false,
        onDrop,
    });

    const removeImage = () => {
        setData((previous) => ({
            ...previous,
            image: "",
        }));
    };

    const handleReset = () => {
        resetData();
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="rounded-3xl border border-[#39FF14]/20 bg-[#0A0F1A] p-5 sm:p-6">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">
                        Upload Photo
                    </h2>
                    <button
                        type="button"
                        onClick={handleReset}
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-lg
                            border
                            border-red-500/30
                            px-3
                            py-2
                            text-sm
                            text-red-400
                            transition
                            hover:bg-red-500/10
                        "
                    >
                        <RotateCcw size={15} />
                        Reset
                    </button>
                </div>

                <div
                    {...getRootProps()}
                    className={`
                        cursor-pointer
                        rounded-2xl
                        border-2
                        border-dashed
                        p-5
                        transition-colors
                        sm:p-6
                        ${isDragActive
                            ? "border-[#39FF14] bg-[#39FF14]/10 scale-[1.02]"
                            : "bg-transparent"
                        }
                    `}
                >
                    <input {...getInputProps()} />

                    {data.image ? (
                        <div className="relative">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                src={data.image}
                                alt="Uploaded builder"
                                className="
                                    mx-auto
                                    max-h-64
                                    rounded-xl
                                    object-cover
                                "
                            />
                            <button
                                type="button"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    removeImage();
                                }}
                                className="
                                    absolute
                                    right-2
                                    top-2
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-black/70
                                    text-white
                                    transition
                                    hover:bg-red-500
                                "
                            >
                                <X size={17} />
                            </button>
                        </div>
                    ) : (
                        <div className="py-10 text-center">
                            <Upload
                                size={52}
                                className="mx-auto text-[#39FF14]"
                            />
                            <h3 className="mt-4 text-lg font-semibold text-white">
                                {isDragActive
                                    ? "Drop your image here"
                                    : "Drag & Drop Image"}
                            </h3>
                            <p className="mt-2 text-sm text-slate-400">
                                or click to browse
                            </p>
                            <p className="mt-3 text-xs text-slate-500">
                                PNG, JPG, JPEG or WEBP
                            </p>
                        </div>
                    )}
                </div>

                {data.image && (
                    <div className="mt-5 rounded-xl bg-[#111827] p-4">
                        <div className="flex items-center gap-3">
                            <ImageIcon
                                size={20}
                                className="text-[#39FF14]"
                            />
                            <div className="min-w-0">
                                <h4 className="truncate text-sm font-medium text-white">
                                    Profile image selected
                                </h4>
                                <p className="text-xs text-slate-400">
                                    Ready for Builder Card
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default UploadCard;
