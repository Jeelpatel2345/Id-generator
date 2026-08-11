import useGenerator from "../../hooks/useGenerator";

const BuilderDetailsPanel = () => {
    const { data, setData, setIsGenerated } = useGenerator();

    return (
        <div className="mt-6 rounded-3xl border border-[#39FF14]/20 bg-[#0A0F1A] p-5 sm:p-6">

            <h2 className="mb-5 text-xl font-bold text-white">
                Builder Details
            </h2>

            {/* FULL NAME */}

            <div className="mb-5">
                <label className="mb-2 block text-sm text-slate-300">
                    Full Name
                </label>

                <input
                    type="text"
                    value={data.name}
                    onChange={(e) =>
                        setData((previous) => ({
                            ...previous,
                            name: e.target.value,
                        }))
                    }
                    onInput={() => setIsGenerated(false)}
                    placeholder="Enter your full name"
                    className="
                        w-full
                        rounded-xl
                        border
                        border-slate-700
                        bg-[#111827]
                        px-4
                        py-3
                        text-white
                        outline-none
                        transition
                        focus:border-[#39FF14]
                    "
                />
            </div>

            {/* BUILDER ROLE */}

            <div className="mb-5">
                <label className="mb-2 block text-sm text-slate-300">
                    Builder Role
                </label>

                <select
                    value={data.role}
                    onChange={(e) =>
                        setData((previous) => ({
                            ...previous,
                            role: e.target.value,
                        }))
                    }
                    onInput={() => setIsGenerated(false)}
                    className="
                        w-full
                        rounded-xl
                        border
                        border-slate-700
                        bg-[#111827]
                        px-4
                        py-3
                        text-white
                        outline-none
                        focus:border-[#39FF14]
                    "
                >
                    <option>Flutter Developer</option>
                    <option>Frontend Developer</option>
                    <option>Backend Developer</option>
                    <option>Full Stack Developer</option>
                    <option>AI Engineer</option>
                    <option>UI / UX Designer</option>
                    <option>Student Builder</option>
                </select>
            </div>

            {/* X USERNAME */}

            <div>
                <label className="mb-2 block text-sm text-slate-300">
                    X Username
                </label>

                <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-[#39FF14]">@</span>
                    <input
                    type="text"
                    value={data.username.replace(/^@+/, "")}
                    onChange={(e) =>
                        setData((previous) => ({
                            ...previous,
                            username: e.target.value.replace(/^@+/, ""),
                        }))
                    }
                    onInput={() => setIsGenerated(false)}
                    placeholder="username"
                    className="
                        w-full
                        rounded-xl
                        border
                        border-slate-700
                        bg-[#111827]
                        pl-8
                        pr-4
                        py-3
                        text-white
                        outline-none
                        transition
                        focus:border-[#39FF14]
                    "
                />
                </div>
            </div>


        </div>
    );
};

export default BuilderDetailsPanel;
