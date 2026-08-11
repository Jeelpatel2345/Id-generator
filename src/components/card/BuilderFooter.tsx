import useGenerator from "../../hooks/useGenerator";

const BuilderFooter = () => {
    const { data } = useGenerator();

    return (
        <div className="flex items-center justify-center gap-3">

            <span
                className="
                    text-center
                    text-xs
                    tracking-[0.08em]
                    text-slate-500
                    sm:text-sm
                "
            >
                BUILDER {data.builderId || "#0000"}
            </span>

        </div>
    );
};

export default BuilderFooter;
