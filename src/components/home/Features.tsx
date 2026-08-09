import { motion } from 'framer-motion';
import { Upload, UserCheck, Eye, Download, Frame, Share2 } from 'lucide-react';

const features = [
  {
    icon: Upload,
    title: 'Upload Photo',
    description: 'Drag & drop or click to upload your profile photo in any common format.',
  },
  {
    icon: UserCheck,
    title: 'Choose Your Role',
    description: 'Select from multiple builder roles to match your expertise and identity.',
  },
  {
    icon: Eye,
    title: 'Live Preview',
    description: 'See your Builder Card update in real-time as you customize your details.',
  },
  {
    icon: Download,
    title: 'HD Export',
    description: 'Download your card as a high-resolution PNG ready for social media.',
  },
  {
    icon: Frame,
    title: 'PFP Frame',
    description: 'Create a stunning profile picture frame with the HH Goa branding.',
  },
  {
    icon: Share2,
    title: 'Share Ready',
    description: 'Cards and frames sized perfectly for Twitter, Discord, and more.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-[#04070D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white font-heading mb-4">Why Use Our Generator?</h2>
          <p className="text-slate-400 text-lg">
            Everything you need to create your perfect hacker house identity, beautifully designed and easy to use.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-[#0A0F1A] p-6 hover:border-[#39FF14]/30 transition-all group hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(57,255,20,0.08)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#39FF14]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-[#39FF14]" size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white mt-4">{feature.title}</h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
