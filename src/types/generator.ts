export interface BuilderData {
    image: string;
    name: string;
    role: string;
    username: string;
    builderId: string;
}

export const DEFAULT_BUILDER_DATA: BuilderData = {
    image: "",
    name: "",
    role: "Flutter Developer",
    username: "",
    builderId: "#0001",
};