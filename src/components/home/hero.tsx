import HeroContent from "./HeroContent";
import HeroPreview from "./HeroPreview";

const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#04070D] pt-24">

            {/* Left Neon Glow */}
            <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-[#39FF14]/20 blur-[170px]" />

            {/* Right Neon Glow */}
            <div className="absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-[#00E676]/20 blur-[170px]" />

            {/* Center Glow */}
            <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#39FF14]/10 blur-[120px]" />

            {/* Grid Background */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(57,255,20,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57,255,20,0.12) 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

            {/* Content */}
            <div className="relative z-10 mx-auto grid min-h-[85vh] max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

                <HeroContent />

                <HeroPreview />

            </div>
        </section>
    );
};

export default Hero;