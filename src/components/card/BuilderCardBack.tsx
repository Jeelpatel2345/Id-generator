import logo from "../../assets/logo.png";
import useGenerator from "../../hooks/useGenerator";
import { useEffect, useState } from "react";
import QRCode from "qrcode";

const BuilderCardBack = () => {
    const { data } = useGenerator();
    const [qrCode, setQrCode] = useState("");

    useEffect(() => {
        const verificationData = JSON.stringify({
            event: "Hacker House Goa 2026",
            builderId: data.builderId,
            name: data.name,
            role: data.role,
            username: data.username,
        });

        QRCode.toDataURL(verificationData, {
            width: 240,
            margin: 1,
            color: { dark: "#07131A", light: "#FFFFFF" },
            errorCorrectionLevel: "M",
        }).then(setQrCode).catch(() => setQrCode(""));
    }, [data.builderId, data.name, data.role, data.username]);

    return (
        <div className="w-full max-w-[390px] min-h-[560px] overflow-hidden rounded-3xl border border-[#39FF14]/25 bg-[#07131A] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3"><img src={logo} alt="Hacker House" className="h-10 w-10 rounded-lg object-cover" /><div><p className="text-xs font-bold tracking-[0.14em] text-white">HACKER HOUSE GOA</p><p className="text-[10px] text-slate-400">BUILDER ACCESS PASS</p></div></div>
                <span className="rounded-full border border-[#39FF14]/30 bg-[#39FF14]/10 px-3 py-1 text-[10px] font-bold tracking-wider text-[#39FF14]">2026</span>
            </div>

            <div className="flex flex-col justify-between gap-6 py-5">
                <div className="flex items-start justify-between gap-5">
                    <div>
                        <p className="text-xs font-bold tracking-[0.20em] text-[#39FF14]">BUILDER VERIFICATION</p>
                        <h3 className="mt-2 text-2xl font-bold text-white">{data.name || "Builder Name"}</h3>
                        <p className="mt-1 text-sm text-slate-400">{data.role}</p>
                    </div>
                    <div className="w-24 shrink-0 rounded-xl border border-white/10 bg-white p-2">
                        {qrCode ? <img src={qrCode} alt="Builder verification QR code" className="block h-full w-full" /> : <div className="aspect-square animate-pulse rounded bg-slate-200" />}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 border-y border-white/10 py-5 text-left">
                    <div><p className="text-[10px] tracking-[0.16em] text-slate-500">BUILDER ID</p><p className="mt-1 font-mono text-sm font-bold text-[#39FF14]">{data.builderId}</p></div>
                    <div><p className="text-[10px] tracking-[0.16em] text-slate-500">EVENT</p><p className="mt-1 text-sm font-semibold text-white">HH GOA 2026</p></div>
                    <div><p className="text-[10px] tracking-[0.16em] text-slate-500">ISSUED</p><p className="mt-1 text-sm font-semibold text-white">HH Goa 2026</p></div>
                    <div><p className="text-[10px] tracking-[0.16em] text-slate-500">STATUS</p><p className="mt-1 text-sm font-semibold text-[#39FF14]">ACTIVE BUILDER</p></div>
                </div>

                <div className="text-center"><p className="text-xs font-bold tracking-[0.18em] text-white">BUILD • CONNECT • SHIP</p><p className="mt-2 text-[10px] text-slate-500">Official Hacker House Goa Builder Pass</p></div>
            </div>
        </div>
    );
};

export default BuilderCardBack;
