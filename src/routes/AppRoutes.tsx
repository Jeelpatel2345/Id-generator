import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Generator from "../pages/Generator/Generator.tsx";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/generator" element={<Generator />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;