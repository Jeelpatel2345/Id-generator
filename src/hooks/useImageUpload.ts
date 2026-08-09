import { useState } from "react";
import type { UploadedImage } from "../types/image";

const useImageUpload = () => {
    const [image, setImage] = useState<UploadedImage>({
        file: null,
        preview: "",
    });

    const uploadImage = (file: File) => {
        const preview = URL.createObjectURL(file);

        setImage({
            file,
            preview,
        });
    };

    return {
        image,
        uploadImage,
    };
};

export default useImageUpload;