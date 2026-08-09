import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import logo from '../../assets/logo.png';

const HeroPreview = () => {
  return (
    <div className="flex justify-center lg:justify-end w-full perspective-[1000px]">
      <motion.div
        initial={{ opacity: 0, x: 80, rotateY: -15 }}
        animate={{ opacity: 1, x: 0, rotateY: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Mock Card */}
          <div className="rounded-3xl border border-[#39FF14]/20 bg-[#0A0F1A] overflow-hidden max-w-[360px] w-full shadow-[0_0_60px_rgba(57,255,20,0.15)] backdrop-blur-md">
            
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-start justify-between bg-gradient-to-b from-white/5 to-transparent">
              <div className="flex flex-col gap-1">
                <img src={logo} alt="HH Goa" className="w-12 h-12 object-contain" />
                <h3 className="font-heading font-bold text-white tracking-widest text-sm mt-2">HH GOA 2026</h3>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">Builder Identity</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white">
                LEVEL 07
              </div>
            </div>

            {/* Body */}
            <div className="p-8 flex flex-col items-center text-center relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#39FF14]/20 blur-[50px] rounded-full pointer-events-none"></div>

              {/* Profile Image */}
              <div className="w-36 h-36 rounded-full border-4 border-[#39FF14] bg-gradient-to-br from-[#39FF14]/20 to-[#00F5D4]/20 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(57,255,20,0.3)] mb-6">
                <User size={64} className="text-[#39FF14]/80" />
              </div>

              <h2 className="text-2xl font-bold text-white mb-1 relative z-10">Alex Builder</h2>
              <p className="text-[#39FF14] font-medium text-sm mb-2 relative z-10">Full Stack Developer</p>
              <p className="text-slate-400 text-sm mb-6 relative z-10">@alexbuilder</p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 relative z-10">
                <span className="w-2 h-2 rounded-full bg-[#39FF14] shadow-[0_0_10px_rgba(57,255,20,1)]"></span>
                <span className="text-xs font-bold text-white tracking-widest">BUILDING</span>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/5 bg-[#04070D]/50 flex justify-between items-center text-xs">
              <span className="font-mono text-slate-500">Builder #4207</span>
              <span className="text-slate-600 font-bold tracking-widest border border-slate-800 px-2 py-1 rounded">2026</span>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroPreview;