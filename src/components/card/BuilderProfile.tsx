import useGenerator from "../../hooks/useGenerator";

const BuilderProfile = () => {
    const { data } = useGenerator();

    return (
        <div className="flex justify-center">

            <div
                className="
                    flex
                    h-36
                    w-36
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    border-4
                    border-[#39FF14]
                    bg-[#111827]
                    shadow-[0_0_30px_rgba(57,255,20,0.15)]
                    sm:h-36
                    sm:w-36
                "
            >

                {data.image ? (
                    <img
                        src={data.image}
                        alt="Builder profile"
                        className="
                            h-full
                            w-full
                            block
                            object-cover
                            object-center
                        "
                    />
                ) : (
                    <span className="text-sm text-slate-500">
                        PHOTO
                    </span>
                )}

            </div>

        </div>
    );
};

export default BuilderProfile;
