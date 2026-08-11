import { createContext, type Dispatch, type SetStateAction } from "react";
import type { BuilderData } from "../types/generator";

export interface GeneratorContextValue {
    data: BuilderData;
    setData: Dispatch<SetStateAction<BuilderData>>;
    resetData: () => void;
    isGenerated: boolean;
    setIsGenerated: Dispatch<SetStateAction<boolean>>;
}

export const GeneratorContext = createContext<GeneratorContextValue | undefined>(undefined);
