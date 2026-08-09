import {
    createContext,
    useState,
    type ReactNode,
} from "react";

import type { BuilderData } from "../types/generator";

interface ContextType {
    data: BuilderData;
    setData: React.Dispatch<React.SetStateAction<BuilderData>>;
    resetData: () => void;

    isGenerated: boolean;
    setIsGenerated: React.Dispatch<React.SetStateAction<boolean>>;
}

const generateBuilderId = () => {
    const existingId =
        localStorage.getItem("hh_goa_builder_id");

    if (existingId) {
        return existingId;
    }

    const randomNumber = Math.floor(
        1000 + Math.random() * 9000
    );

    const newId = `#${randomNumber}`;

    localStorage.setItem(
        "hh_goa_builder_id",
        newId
    );

    return newId;
};

export const GeneratorContext =
    createContext({} as ContextType);

export const GeneratorProvider = ({
    children,
}: {
    children: ReactNode;
}) => {

    const [data, setData] =
        useState<BuilderData>({
            image: "",
            name: "",
            role: "Flutter Developer",
            username: "",
            builderId: generateBuilderId(),
        });

    const [isGenerated, setIsGenerated] =
        useState(false);

    const resetData = () => {

        setData({
            image: "",
            name: "",
            role: "Flutter Developer",
            username: "",
            builderId: generateBuilderId(),
        });

        setIsGenerated(false);
    };

    return (
        <GeneratorContext.Provider
            value={{
                data,
                setData,
                resetData,
                isGenerated,
                setIsGenerated,
            }}
        >
            {children}
        </GeneratorContext.Provider>
    );
};