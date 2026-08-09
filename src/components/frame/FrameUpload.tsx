import { useCallback } from "react";
import {
    Upload,
    X,
    Image as ImageIcon,
} from "lucide-react";
import { useDropzone } from "react-dropzone";

import useGenerator from "../../hooks/useGenerator";

const FrameUpload = () => {

    const {
        data,
        setData,
        resetData,
    } = useGenerator();

    const onDrop = useCallback(
        (acceptedFiles: File[]) => {

            if (!acceptedFiles.length) {
                return;
            }

            const file = acceptedFiles[0];

            const imageUrl =
                URL.createObjectURL(file);

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

    return (

        <div
            className="
                rounded-3xl
                border
                border-[#39FF14]/20
                bg-[#0A0F1A]
                p-5
                sm:p-6
            "
        >

            {/* Header */}

            <div className="mb-6 flex items-center justify-between">

                <div>

                    <h2 className="text-xl font-bold text-white">
                        Upload Photo
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">
                        Use a clear profile photo.
                    </p>

                </div>

                <button
                    type="button"
                    onClick={resetData}
                    className="
                        rounded-lg
                        border
                        border-red-500/30
                        px-3
                        py-2
                        text-xs
                        text-red-400
                        transition
                        hover:bg-red-500/10
                    "
                >
                    Reset
                </button>

            </div>


            {/* Upload */}

            <div
                {...getRootProps()}
                className={`
                    cursor-pointer
                    rounded-2xl
                    border-2
                    border-dashed
                    p-5
                    transition
                    sm:p-6

                    ${isDragActive
                        ? "border-[#39FF14] bg-[#39FF14]/10"
                        : "border-[#39FF14]/20 hover:border-[#39FF14]/60"
                    }
                `}
            >

                <input {...getInputProps()} />


                {data.image ? (

                    <div className="relative">

                        <img
                            src={data.image}
                            alt="Selected profile"
                            className="
                                mx-auto
                                h-56
                                w-56
                                rounded-full
                                object-cover
                                ring-4
                                ring-[#39FF14]/20
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
                                bg-black/80
                                text-white
                                transition
                                hover:bg-red-500
                            "
                        >
                            <X size={17} />
                        </button>

                    </div>

                ) : (

                    <div className="py-12 text-center">

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


            {/* Image Information */}

            {data.image && (

                <div className="mt-5 rounded-xl bg-[#111827] p-4">

                    <div className="flex items-center gap-3">

                        <ImageIcon
                            size={19}
                            className="text-[#39FF14]"
                        />

                        <div>

                            <p className="text-sm font-medium text-white">
                                Profile image ready
                            </p>

                            <p className="text-xs text-slate-500">
                                Your frame is updating live.
                            </p>

                        </div>

                    </div>

                </div>

            )}

        </div>
    );
};

export default FrameUpload;