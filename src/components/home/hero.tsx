import HeroContent from './HeroContent';
import HeroPreview from './HeroPreview';

const Hero = () => {
  return (
    <section id="hero" className="goa-page-bg relative flex min-h-screen items-center overflow-hidden pb-20 pt-32">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#39FF14]/10 blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#00F5D4]/10 blur-[120px]"></div>
        
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <HeroContent />
          <HeroPreview />
        </div>
      </div>
    </section>
  );
};

export default Hero;
