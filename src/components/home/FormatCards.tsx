import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import builderCardImg from '../../assets/builder-card.png';
import frameImg from '../../assets/frame.png';

const FormatCards = () => {
  const navigate = useNavigate();

  return (
    <section id="formats" className="py-24 bg-[#04070D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white font-heading mb-4">Choose Your Format</h2>
          <p className="text-slate-400 text-lg">
            Two premium formats to showcase your builder identity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Builder ID Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-[#0A0F1A] p-6 overflow-hidden hover:border-[#39FF14]/30 transition-all group flex flex-col"
          >
            <div className="rounded-2xl overflow-hidden bg-[#111827] aspect-[3/4] relative mb-6">
              <img 
                src={builderCardImg} 
                alt="Builder ID Card Preview" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Builder ID Card</h3>
            <p className="text-slate-400 mb-6 flex-grow">
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
            className="rounded-3xl border border-white/10 bg-[#0A0F1A] p-6 overflow-hidden hover:border-[#39FF14]/30 transition-all group flex flex-col"
          >
            <div className="rounded-2xl overflow-hidden bg-[#111827] aspect-[3/4] relative mb-6">
              <img 
                src={frameImg} 
                alt="Profile Frame Preview" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">PFP Frame</h3>
            <p className="text-slate-400 mb-6 flex-grow">
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
