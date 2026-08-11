import { useSearchParams, useNavigate } from 'react-router-dom';
import { GeneratorProvider } from '../../context/GeneratorContext';
import GeneratorLayout from '../../components/generator/GeneratorLayout';
import UploadCard from '../../components/generator/UploadCard';
import PreviewCard from '../../components/generator/PreviewCard';
import FrameCard from '../../components/frame/FrameCard';
import BuilderDetailsPanel from '../../components/card/BuilderDetails';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Frame } from 'lucide-react';

const GeneratorContent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const isFrameMode = searchParams.get('mode') === 'frame';

  return (
    <main className="goa-page-bg min-h-screen text-[#123B45]">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition text-sm mb-4"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>

        <div className="mt-4 mb-8 flex flex-wrap gap-3">
          <button
            onClick={() => setSearchParams({ mode: 'builder' })}
            className={`flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition cursor-pointer sm:flex-none sm:px-5 ${
              !isFrameMode
                ? 'bg-[#39FF14]/10 border-[#39FF14]/30 text-[#39FF14]'
                : 'border-white/10 text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            <CreditCard size={18} />
            Builder Card
          </button>
          <button
            onClick={() => setSearchParams({ mode: 'frame' })}
            className={`flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition cursor-pointer sm:flex-none sm:px-5 ${
              isFrameMode
                ? 'bg-[#39FF14]/10 border-[#39FF14]/30 text-[#39FF14]'
                : 'border-white/10 text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            <Frame size={18} />
            PFP Frame
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold sm:text-4xl font-heading">
              {isFrameMode ? 'Create PFP Frame' : 'Generate Builder Card'}
            </h1>
            <p className="text-slate-400 mt-2 mb-8">
              {isFrameMode
                ? 'Add the Hacker House Goa frame to your profile picture.'
                : 'Enter your details and upload a photo to generate your custom identity.'}
            </p>
          </div>

          {isFrameMode ? (
            <FrameCard />
          ) : (
            <GeneratorLayout
              left={
                <div className="space-y-5">
                  <UploadCard />
                  <BuilderDetailsPanel />
                </div>
              }
              right={<PreviewCard />}
            />
          )}
        </motion.div>
      </div>
    </main>
  );
};

export const Generator = () => {
  return (
    <GeneratorProvider>
      <GeneratorContent />
    </GeneratorProvider>
  );
};

export default Generator;
