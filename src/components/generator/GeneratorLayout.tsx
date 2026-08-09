interface GeneratorLayoutProps {
    left: React.ReactNode;
    right: React.ReactNode;
}

const GeneratorLayout = ({
    left,
    right,
}: GeneratorLayoutProps) => {
    return (
        <div
            className="
                grid
                grid-cols-1
                gap-6
                lg:grid-cols-[minmax(320px,0.85fr)_minmax(420px,1.15fr)]
                lg:items-start
                xl:gap-8
            "
        >
            {/* LEFT PANEL */}

            <div className="min-w-0">
                {left}
            </div>


            {/* RIGHT PREVIEW */}

            <div className="min-w-0">
                {right}
            </div>
        </div>
    );
};

export default GeneratorLayout;