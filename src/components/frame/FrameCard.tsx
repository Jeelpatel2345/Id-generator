import FrameUpload from "./FrameUpload";
import FramePreview from "./FramePreview";

const FrameCard = () => {
    return (
        <div className="grid gap-6 lg:grid-cols-[minmax(320px,0.8fr)_minmax(0,1.2fr)]">

            {/* LEFT */}
            <FrameUpload />

            {/* RIGHT */}
            <FramePreview />

        </div>
    );
};

export default FrameCard;