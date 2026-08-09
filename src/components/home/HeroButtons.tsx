import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';

const HeroButtons = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ delay: 0.6 }}
      className="flex flex-col sm:flex-row gap-4"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/generator?mode=builder')}
        className="group flex items-center justify-center gap-2 bg-[#39FF14] text-black font-bold rounded-xl px-8 py-4 hover:shadow-[0_0_35px_rgba(57,255,20,0.4)] transition-shadow"
      >
        Generate Builder Card
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/generator?mode=frame')}
        className="group flex items-center justify-center gap-2 border border-[#39FF14]/30 bg-white/5 text-[#39FF14] backdrop-blur rounded-xl px-8 py-4 hover:bg-[#39FF14]/10 transition-colors"
      >
        <Layers size={20} />
        Create PFP Frame
      </motion.button>
    </motion.div>
  );
};

export default HeroButtons;