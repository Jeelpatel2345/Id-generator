import { CreditCard, Frame, Sparkles } from "lucide-react";

type BuilderCageProps = {
    onBuilder: () => void;
    onFrame: () => void;
};

const BuilderCage = ({ onBuilder, onFrame }: BuilderCageProps) => (
    <section className="relative mb-8 overflow-hidden rounded-3xl border border-[#39FF14]/20 bg-[#071B14] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.25)] sm:p-6">
        <div className="pointer-events-none absolute inset-0 opacity-40 bg-[linear-gradient(rgba(57,255,20,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.10)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-[#F6C945]/30" />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <p className="mb-2 flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#39FF14]"><Sparkles size={14} /> BUILDER CAGE</p>
                <h2 className="font-heading text-2xl font-bold text-white">Choose your Goa identity format</h2>
                <p className="mt-1 max-w-xl text-sm text-slate-300">Create a shareable Builder Card or a social-ready PFP frame.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:flex">
                <button onClick={onBuilder} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#39FF14] px-4 py-3 text-sm font-bold text-black transition hover:brightness-110"><CreditCard size={16} /> Builder Card</button>
                <button onClick={onFrame} className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#39FF14]/35 bg-[#06130F] px-4 py-3 text-sm font-bold text-[#B8FFC0] transition hover:bg-[#39FF14]/10"><Frame size={16} /> PFP Frame</button>
            </div>
        </div>
    </section>
);

export default BuilderCage;
