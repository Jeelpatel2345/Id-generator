const HeroPreview = () => {
    return (
        <div className="flex justify-center">
            <div className="w-[360px] rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
                <h3 className="mb-6 text-center text-lg font-semibold text-white">
                    Live Preview
                </h3>

                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-500 p-1">
                    <div className="flex h-full items-center justify-center rounded-2xl bg-slate-900 text-center text-slate-300">
                        Builder Card Preview
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroPreview;