import { useContext } from "react";

import { GeneratorContext } from "../context/GeneratorStore";

const useGenerator = () => {
    const context = useContext(
        GeneratorContext
    );

    if (!context) {
        throw new Error(
            "useGenerator must be used inside GeneratorProvider"
        );
    }

    return context;
};

export default useGenerator;
