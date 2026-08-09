import useGenerator from "../../hooks/useGenerator";

const BuilderFooter = () => {
    const { data } = useGenerator();

    return (
        <div className="flex items-center justify-between">

            <span className="text-[10px] tracking-wide text-slate-500">
                Builder {data.builderId}
            </span>

            <div
                className="
          rounded-full
          border
          border-[#39FF14]/20
          bg-[#39FF14]/10
          px-3
          py-1
        "
            >
                <span
                    className="
            text-[9px]
            font-bold
            tracking-[0.18em]
            text-[#39FF14]
          "
                >
                    BUILDING
                </span>
            </div>

        </div>
    );
};

export default BuilderFooter;