import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStates.tsx";

const HeroContent = () => {
    return (
        <div>
            <span className="rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-4 py-2 text-sm text-fuchsia-300">
                🚀 HH Goa 2026
            </span>

            <h1 className="mt-8 text-6xl font-extrabold leading-tight text-white">
                Build Your
                <br />
                <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Builder Identity
                </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Upload your photo and instantly generate a premium Builder ID Card
                or Profile Frame ready to download and share.
            </p>

            <HeroButtons />

            <HeroStats />
        </div>
    );
};

export default HeroContent;