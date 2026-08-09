import { useNavigate } from "react-router-dom";
const HeroButtons = () => {
    const navigate = useNavigate();

    return (
        <div className="mt-10 flex flex-wrap gap-4">

            <button
              onClick={() => navigate("/generator?mode=builder")}
                className="rounded-xl bg-[#39FF14] px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_#39FF14]"
            >
                Generate Builder Card
            </button>

            <button
                onClick={() => navigate("/generator?mode=frame")}
                className="rounded-xl border border-[#39FF14]/30 bg-white/5 px-8 py-4 font-semibold text-[#39FF14] backdrop-blur hover:bg-[#39FF14]/10"
            >
                Create PFP Frame
            </button>

        </div>
    );
};



export default HeroButtons;