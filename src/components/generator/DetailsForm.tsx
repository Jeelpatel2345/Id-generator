import useGenerator from "../../hooks/useGenerator";

const DetailsForm = () => {
    const { data, setData } = useGenerator();

    return (
        <div className="mt-8 rounded-3xl border border-[#39FF14]/20 bg-[#0A0F1A] p-6">

            <h2 className="mb-6 text-2xl font-bold text-white">
                Builder Details
            </h2>

            <div className="space-y-5">

                {/* Full Name */}
                <div>
                    <label className="mb-2 block text-sm text-slate-300">
                        Full Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter your full name"
                        value={data.name}
                        onChange={(e) =>
                            setData({
                                ...data,
                                name: e.target.value,
                            })
                        }
                        className="w-full rounded-xl border border-slate-700 bg-[#111827] px-4 py-3 text-white outline-none focus:border-[#39FF14]"
                    />
                </div>

                {/* Builder Role */}
                <div>
                    <label className="mb-2 block text-sm text-slate-300">
                        Builder Role
                    </label>

                    <select
                        value={data.role}
                        onChange={(e) =>
                            setData({
                                ...data,
                                role: e.target.value,
                            })
                        }
                        className="w-full rounded-xl border border-slate-700 bg-[#111827] px-4 py-3 text-white outline-none focus:border-[#39FF14]"
                    >
                        <option>Flutter Developer</option>
                        <option>Frontend Developer</option>
                        <option>Backend Developer</option>
                        <option>Full Stack Developer</option>
                        <option>AI Engineer</option>
                        <option>UI/UX Designer</option>
                        <option>Student Builder</option>
                    </select>
                </div>

                {/* X Username */}
                <div>
                    <label className="mb-2 block text-sm text-slate-300">
                        X Username
                    </label>

                    <input
                        type="text"
                        placeholder="@username"
                        value={data.username}
                        onChange={(e) =>
                            setData({
                                ...data,
                                username: e.target.value,
                            })
                        }
                        className="w-full rounded-xl border border-slate-700 bg-[#111827] px-4 py-3 text-white outline-none focus:border-[#39FF14]"
                    />
                </div>

            </div>
        </div>
    );
};

export default DetailsForm;