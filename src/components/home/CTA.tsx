import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section id="cta" className="py-24 relative overflow-hidden bg-[#04070D]">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-[#39FF14]/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-heading mb-6">
            Ready to Build Your Identity?
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Join thousands of builders at Hacker House Goa 2026. Generate your card in seconds.
          </p>
          <button
            onClick={() => navigate('/generator?mode=builder')}
            className="bg-[#39FF14] text-black px-10 py-5 text-lg rounded-xl font-bold hover:shadow-[0_0_40px_rgba(57,255,20,0.4)] hover:scale-105 transition-all"
          >
            Start Generating →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
