import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import frameImg from '../../assets/frame.png';
import logo from '../../assets/logo.png';

const BuilderCardThumbnail = () => (
  <div className="flex h-full w-full flex-col rounded-2xl border border-[#39FF14]/20 bg-[#0A0F1A] p-4 text-center shadow-[0_0_28px_rgba(57,255,20,0.08)] sm:p-5">
    <div className="flex items-center justify-center gap-2 text-left">
      <img src={logo} alt="" className="h-8 w-8 rounded-md object-cover" />
      <div>
        <p className="text-[10px] font-bold tracking-[0.12em] text-white">HH GOA 2026</p>
        <p className="text-[8px] text-slate-400">Builder Identity</p>
      </div>
      <span className="ml-auto rounded-full border border-[#39FF14]/30 bg-[#39FF14]/10 px-2 py-1 text-[8px] font-bold text-[#39FF14]">LEVEL 07</span>
    </div>
    <div className="mx-auto my-4 h-24 w-24 rounded-full border-4 border-[#39FF14] bg-[radial-gradient(circle_at_35%_30%,#334155,#111827_60%)] sm:h-28 sm:w-28" />
    <p className="text-base font-bold text-white sm:text-lg">Your Name</p>
    <p className="mt-1 text-xs font-medium text-[#39FF14]">Builder / Developer</p>
    <p className="mt-1 text-[10px] text-slate-400">@your_username</p>
    <span className="mx-auto mt-auto inline-flex items-center gap-1.5 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/10 px-3 py-1.5 text-[9px] font-bold tracking-[0.16em] text-[#39FF14]"><span className="h-1.5 w-1.5 rounded-full bg-[#39FF14]" /> BUILDING</span>
  </div>
);

const FormatCards = () => {
  const navigate = useNavigate();

  return (
    <section id="formats" className="bg-[#04070D] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-16">
          <h2 className="mb-3 font-heading text-3xl font-bold text-white sm:mb-4 sm:text-4xl">Choose Your Format</h2>
          <p className="text-base text-slate-400 sm:text-lg">
            Two premium formats to showcase your builder identity.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          
          {/* Card 1: Builder ID Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group mx-auto flex w-full max-w-md flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0A0F1A] p-4 transition-all hover:border-[#39FF14]/30 sm:p-6"
          >
            <div className="relative mb-5 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#111827] sm:mb-6">
              <BuilderCardThumbnail />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">Builder ID Card</h3>
            <p className="mb-5 flex-grow text-sm text-slate-400 sm:mb-6 sm:text-base">
              A premium identity card featuring your photo, role, and builder number. Perfect for sharing your Hacker House journey.
            </p>
            <button
              onClick={() => navigate('/generator?mode=builder')}
              className="mt-4 w-full rounded-xl bg-[#39FF14] py-3 font-bold text-black hover:shadow-[0_0_25px_rgba(57,255,20,0.3)] transition-all"
            >
              Generate Card →
            </button>
          </motion.div>

          {/* Card 2: Profile Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group mx-auto flex w-full max-w-md flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0A0F1A] p-4 transition-all hover:border-[#39FF14]/30 sm:p-6"
          >
            <div className="relative mb-5 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#111827] sm:mb-6">
              <img 
                src={frameImg} 
                alt="Profile Frame Preview" 
                className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">PFP Frame</h3>
            <p className="mb-5 flex-grow text-sm text-slate-400 sm:mb-6 sm:text-base">
              A stunning profile picture frame with neon accents and HH Goa branding. Make your social profiles stand out.
            </p>
            <button
              onClick={() => navigate('/generator?mode=frame')}
              className="mt-4 w-full rounded-xl bg-[#39FF14] py-3 font-bold text-black hover:shadow-[0_0_25px_rgba(57,255,20,0.3)] transition-all"
            >
              Create Frame →
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FormatCards;
