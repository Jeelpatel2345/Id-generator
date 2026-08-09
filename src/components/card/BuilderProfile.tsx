import useGenerator from "../../hooks/useGenerator";

const BuilderProfile = () => {
    const { data } = useGenerator();

    return (
        <div className="flex justify-center px-8 py-8">

            <div
                className="
          flex
          h-40
          w-40
          items-center
          justify-center
          overflow-hidden
          rounded-full
          border-4
          border-[#39FF14]
          bg-[#111827]
          shadow-[0_0_30px_rgba(57,255,20,0.15)]
        "
            >

                {data.image ? (
                    <img
                        src={data.image}
                        alt="Builder profile"
                        className="h-full w-full object-cover"
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