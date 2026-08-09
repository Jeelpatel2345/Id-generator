import { motion } from 'framer-motion';
import HeroButtons from './HeroButtons';
import HeroStats from './HeroStates';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
};

const HeroContent = () => {
  return (
    <motion.div 
      className="flex flex-col"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <span className="inline-block px-4 py-1.5 rounded-full border border-[#39FF14]/20 bg-[#39FF14]/10 text-[#39FF14] text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
          🚀 HH Goa 2026
        </span>
      </motion.div>
      
      <motion.h1 variants={itemVariants} className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6">
        Build Your <br />
        <span className="bg-gradient-to-r from-[#39FF14] via-[#00F5D4] to-[#00E5FF] bg-clip-text text-transparent">
          Builder Identity
        </span>
      </motion.h1>
      
      <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
        Create your official Hacker House Goa 2026 builder card and PFP frame. 
        Showcase your skills, connect with fellow builders, and establish your identity in the ecosystem.
      </motion.p>
      
      <motion.div variants={itemVariants}>
        <HeroButtons />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <HeroStats />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;